const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')

const sendEmail = async (email, uniqueString) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "sergiomindhub@gmail.com",
            pass: "sergio2882"
        }
    })


let sender = "sergiomindhub@gmail.com"
let mailOptions = {
    from: sender,
    to: email,
    subject: "Veryfy blabla",
    html: `Click on <a href=http://localhost:4000/api/verify/${uniqueString}>aqui</a> para confirmar tu cuenta`
}
    await transporter.sendMail(mailOptions, function (error, response){
        if (error){console.log(error)}
        else{
            console.log("Message Sent")
        }
    })
};

const userControllers = {

    verifyEmail: async (req, res) => {
        const { uniqueString } = req.params;

        const user = await User.findOne({ uniqueString })
        console.log(user)
        if (user) {
            user.emailVerified = true
            await user.save()
            res.redirect("http://localhost:3000")
        }else{res.json({success: false, response: "Your email is not verified"})}
    },

    signUpUsers: async (req, res) => {

    let { firstName, lastName, email, password, profileurl, country, from } = req.body.userData;
    console.log("🚀 ~ file: userControllers.js ~ line 9 ~ signUpUsers: ~ req.body", req.body)
    
 
    try{

        const usuarioExiste = await User.findOne({ email });

        if(usuarioExiste){
            if(usuarioExiste.from.indexOf(from) !== -1){
                res.json({success: false, from: "signup", message: "Already registered, please Sign In"})
            } else {
                const passwordHashed = bcrypt.hashSync(password, 10)
                usuarioExiste.from.push(from)
                usuarioExiste.password.push(passwordHashed)
                if(from === "signup"){
                    usuarioExiste.uniqueString = crypto.randomBytes(15).toString('hex')
                    await usuarioExiste.save()
                    await sendEmail(email, usuarioExiste.uniqueString)
                res.json({
                    success: true, 
                    from: "signup",
                    message: "✅ Please verify your email address on your inbox."
                })
                }else{
                    usuarioExiste.save()

                    res.json({success:true,
                            from:"signup",
                            message: "✅ We add "+form+" to your Sign In methods" })
                }
            }
        } else { 
            const passwordHashed = bcryptjs.hashSync(password, 10)
            const nuevoUsuario = await new User({
                firstName,
                lastName,
                email,
                password: [passwordHashed],
                uniqueString: crypto.randomBytes(15).toString('hex'),
                profileurl,
                emailVerified: false,
                from: [from],
            })

            if (from !== "signup") {
                await nuevoUsuario.save()
                res.json({
                    success: true,
                    from: "signup",
                    message: "✅ Congratulations, your new account has been created" +from
                })
            } else {
                await nuevoUsuario.save()
                await sendEmail(email, nuevoUsuario.uniqueString)
                res.json({
                    success: true,
                    from: "signup",
                    message: "✅ We send you an email confirmation, please check your inbox and confirm your account."
                })
            }
        }

    } catch (error) {
        console.log(error)
        res.json({success: false, message: "❌ Something went wrong, please try again in a few minutes. "})
    }


},
signInUser: async (req, res) => {
    
    const { email, password, from } = req.body.loggedUser
    console.log("🚀 ~ file: userControllers.js ~ line 77 ~ signInUser: ~ req.body", req.body)
    
    try{
        const usuarioExiste = await User.findOne({ email })

        if(!usuarioExiste) {
            res.json({success: false, message: "You are not registered, please sign up."})
            
        } else {
            if (from !== "from-SignIn") {
                let passwordMatch = usuarioExiste.password.filter(pass => bcryptjs.compareSync(password, pass))

                if (passwordMatch.length > 0) {
                
                    const userData = {
                    // id: usuarioExiste._id,
                    firstName: usuarioExiste.firstName,
                    lastName: usuarioExiste.lastName,
                    email: usuarioExiste.email,
                    profileurl: usuarioExiste.profileurl,
                    from: usuarioExiste.from
                    }
                await usuarioExiste.save();

                // const token = jwt.sign({...userData}, process.env.SECRET_KEY,{expiresIn: 60*60*24})

                res.json({success: true,
                        from: from,
                        response: {
                            // token, 
                            userData},
                        message:"Welcome again" +userData.firstName
                        })
            } else {
                res.json({success: false,
                        from: from,
                        message: "You did not register this "+from+", Please Sign Up with "+from })
            }
        } else {
            if(usuarioExiste.emailVerified){
                let passwordMatch = usuarioExiste.password.filter(pass => bcryptjs.compareSync(password, pass))
                if (passwordMatch.length > 0){
                    const userData = {
                        // id: usuarioExiste._id,
                        firstName: usuarioExiste.firstName,
                        lastName: usuarioExiste.lastName,
                        email: usuarioExiste.email,
                        profileurl: usuarioExiste.profileurl,
                        from: usuarioExiste.from
                    }

                    // const token = jwt.sign({...userData}, process.env.SECRET_KEY,{expiresIn: 60*60*24})

                res.json({
                    success: true,
                    from: from,
                    response: {
                        // token, 
                        userData },
                    message: "Welcome again "+userData.firstName,
                })
            }else{
                res.json({
                    success: false,
                    from: from,
                    message: "Wrong password or Username."
                })
            }
        }else{
            res.json({
                success: false,
                from: from,
                Message: "You did not verify your account, please check your inbox in order to complete the Sign Up"
            })
        }
        }
        }
    
    }catch (error) {
        console.log(error);
        res.json({success: false, message: "Something went wrong. Please try again later."})
    }
},
signOutUser: async (req, res) => {
    const email = req.body.closeUser
    const user = await User.findOne({ email })
    await user.save()
    res.json(console.log('Signed Out' + email))
},

} //end

module.exports = userControllers


