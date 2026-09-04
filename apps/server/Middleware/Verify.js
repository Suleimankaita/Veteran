import jwt from "jsonwebtoken";


const VerifyJWT = (
    req,
    res,
    next
) => {

    // Get Authorization header
    const AuthHeader = req.headers.authorization;

    // Check if Authorization header exists
    if (!AuthHeader) {
        return res.status(401).json({
            message: "Authorization header is required",
            success: false,
            status: 401
        });
    }

    // Check Bearer format
    if (!AuthHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "Invalid authorization format",
            success: false,
            status: 401
        });
    }

    // Extract token
    const AccessToken = AuthHeader.split(" ")[1];

    if (!AccessToken) {
        return res.status(401).json({
            message: "Access token is required",
            success: false,
            status: 401
        });
    }

    // Check JWT secret
    if (!process.env.ACCESS_TOKEN_SECRET) {
        throw new Error("ACCESS_TOKEN_SECRET is not configured");
    }

    try {

        // Verify token
        const Decoded = jwt.verify(
            AccessToken,
            process.env.ACCESS_TOKEN_SECRET
        ) ;

        // Attach user information to request
        req.user = {
            MemberId: Decoded.MemberId,
            Username: Decoded.Username,
            Role: Decoded.Role
        };

        // Continue to controller
        next();

    } catch (error) {

        return res.status(403).json({
            message: "Invalid or expired access token",
            success: false,
            status: 403
        });
    }
};

export default VerifyJWT;

