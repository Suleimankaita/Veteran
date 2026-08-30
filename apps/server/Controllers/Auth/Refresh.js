
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

const Refresh = asyncHandler(async (req, res) => {
    const RefreshToken = req.cookies?.jwt;

    // No refresh token
    if (!RefreshToken) {
        return res.status(401).json({
            message: "Refresh token not found",
            success: false,
            status: 401
        });
    }

    // Make sure secret exists
    if (!process.env.REFRESH_TOKEN_SECRET) {
        throw new Error("REFRESH_TOKEN_SECRET is not configured");
    }

    if (!process.env.ACCESS_TOKEN_SECRET) {
        throw new Error("ACCESS_TOKEN_SECRET is not configured");
    }

    try {
        // Verify refresh token
        const decoded = jwt.verify(
            RefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        ) 

        // Create new access token
        const AccessToken = jwt.sign(
            {
                MemberId: decoded.MemberId,
                Username: decoded.Username
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: "15m"
            }
        );

        return res.status(200).json({
            message: "Access token refreshed",
            success: true,
            status: 200,
            accessToken: AccessToken
        });

    } catch (error) {
        return res.status(403).json({
            message: "Invalid or expired refresh token",
            success: false,
            status: 403
        });
    }
});

export default Refresh;

