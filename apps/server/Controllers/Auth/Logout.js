import asyncHandler from "express-async-handler";

const Logout = asyncHandler(async (req, res) => {

    // Clear refresh token cookie
    res.clearCookie("jwt", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production"
            ? "none"
            : "lax"
    });

    return res.status(200).json({
        message: "Logout successful",
        success: true,
        status: 200
    });
});

export default Logout;

