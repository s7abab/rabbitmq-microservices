import { Request, Response,NextFunction } from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
    id:string
}

declare global {
    namespace Express {
        interface Request{
            currentUser?: UserPayload
        }
    }
}
export const currentUser = (req:Request, res:Response, next:NextFunction) => {
    if(!req.cookies?.token){
        return next();
    }

    try {
        const payload = jwt.verify(req.cookies.token, '123') as UserPayload;
        req.currentUser = payload;
    } catch (error) {
    }
    next()
}