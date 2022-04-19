import jwt from 'jsonwebtoken'

const secret = 'test'

export const authMiddlware = async(req,res,next) => {
    try {
        const token = req.headers.authorization.split("")[1]
        const isCustomAuth = token.lenght < 500 // if it is a googleauth token

        let decodedData

        if(token && isCustomAuth){
            decodedData = jwt.verify(token,secret)
            req.userId = decodedData?.id
        }else{
            decodedData = jwt.decode(token)
            req.userId = decodedData?.sub

        }
        next()
    } catch (error) {
        console.log(error);
    }
}