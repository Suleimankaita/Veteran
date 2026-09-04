import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asynchandler from "express-async-handler";
import Member from "../../model/Member.js";
import CheckField from "../../utils/CheckField.js";
import { ConvertName } from "../../utils/NameConverTer.js";

const Login = asynchandler(async (req, res) => {
    const { Username, Password } = req.body;

    // 1. Validate required fields
    const MissingField = CheckField({
        Username,
        Password
    });

    if (!MissingField.success) {
        return res.status(400).json({
            message: `${MissingField} is required`,
            success: false,
            status: 400
        });
    }

    // 2. Convert username to your standard format
    const UserName = ConvertName(Username);

    // 3. Find user
    const UserFound = await Member
        .findOne({ Username: UserName })
        .populate("UseProfileRHV")
        .exec();

    if (!UserFound) {
        return res.status(401).json({
            message: "Incorrect Username or Password",
            success: false,
            status: 401
        });
    }

    // 4. Make sure profile exists
    if (!UserFound.UseProfileRHV) {
        return res.status(500).json({
            message: "User profile is missing",
            success: false,
            status: 500
        });
    }

    // 5. Get password from populated profile
    const UserProfile = UserFound.UseProfileRHV ;
    console.log(UserProfile)
    if (!UserProfile.Password) {
        return res.status(500).json({
            message: "User password is not configured",
            success: false,
            status: 500
        });
    }

    // 6. Compare password
    const Hashpass = await bcrypt.compare(
        Password,
        UserProfile.Password
    );

    if (!Hashpass) {
        return res.status(401).json({
            message: "Incorrect Username or Password",
            success: false,
            status: 401
        });
    }

    // 7. Check JWT secret
    if (!process.env.ACCESS_TOKEN_SECRET) {
        throw new Error("ACCESS_TOKEN_SECRET is not configured");
    }

    // 8. Create JWT payload
    const Payload = {
        MemberId: UserFound._id.toString(),
        Username: UserFound.Username,
        Role: UserFound.Role
    };

    // 9. Create access token
    const AccessToken = jwt.sign(
        Payload,
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "15m"
        }
    );

    // 10. Create refresh token
    if (!process.env.REFRESH_TOKEN_SECRET) {
        throw new Error("REFRESH_TOKEN_SECRET is not configured");
    }

    const RefreshToken = jwt.sign(
        Payload,
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: "7d"
        }
    );

    // 11. Put refresh token in HTTP-only cookie
    res.cookie("jwt", RefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production"
            ? "none"
            : "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    // 12. Return response
    return res.status(200).json({
        message: "Login successful",
        success: true,
        status: 200,
        accessToken: AccessToken,
        user: {
            _id: UserFound._id,
            Username: UserFound.Username
        }
    });
});

export default Login;