import passport from "passport";

export const protect = (req, res, next) => {
    passport.authenticate(
        'jwt', 
        {
        session: false,
        }, 
        (error, user, info) => {
            if(error || !user){
                return res.status(401).json({
                    message : info ? info.message :"Unauthorized",
                    error: error || "Tidak Valid",
                });
            }

            req.user = user

            return next(); // untuk mengizinkan user lewat
        }
    )(req. res, next);
};