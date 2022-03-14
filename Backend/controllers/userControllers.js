const User = require('../models/user')
const bcryptjs = require('bcryptjs')

const userControllers = {

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
                usuarioExiste.password.push(passwordHashed)
                if(from === "signup"){
                    await usuarioExiste.save()

                res.json({
                    success: true, 
                    from: "signup",
                    message: "Please verify your email address on your inbox."
                })
                }else{
                    usuarioExiste.save()

                    res.json({success:true,
                            from:"signup",
                            message: "We add "+form+" to your Sign In methods" })
                }
            }
        } else { 
            const passwordHashed = bcryptjs.hashSync(password, 10)
            const nuevoUsuario = await new User({
                firstName,
                lastName,
                email,
                password: [passwordHashed],
                profileurl,
                emailVerified: true,
                from: [from],
            })

            if (from !== "signup") {
                await nuevoUsuario.save()
                res.json({
                    success: true,
                    from: "signup",
                    message: "Congratulations, your new account has been created" +from
                })
            } else {
                await nuevoUsuario.save()

                res.json({
                    success: true,
                    from: "signup",
                    message: "We send you an email confirmation, please check your inbox and confirm your account."
                })
            }
        }

    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Something went wrong, please try again in a few minutes. "})
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
                    firstName: usuarioExiste.firstName,
                    lastName: usuarioExiste.lastName,
                    email: usuarioExiste.email,
                    profileurl: usuarioExiste.profileurl,
                    from: usuarioExiste.from
                    }
                await usuarioExiste.save();

                res.json({success: true,
                        from: from,
                        response: {userData},
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
                        firstName: usuarioExiste.firstName,
                        lastName: usuarioExiste.lastName,
                        email: usuarioExiste.email,
                        profileurl: usuarioExiste.profileurl,
                        from: usuarioExiste.from
                    }

                res.json({
                    success: true,
                    from: from,
                    response: { userData },
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


