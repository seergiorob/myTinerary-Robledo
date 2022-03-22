const joi = require('joi');

const validator = (req, res, next) => {
    const schema = joi.object({
        firstName: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({'string.min': '❌ The name must contain more than 3 characters.','string.max': '❌ The name must not contain more than 20 characters.'}),

        lastName: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).messages({'string.min': '❌ The last name must contain more than 3 characters.','string.max': '❌ The name must not contain more than 20 characters.'}),

        email: joi.string().min(3).trim().email({ minDomainSegments: 2 }).required().messages({
            'string.email': '❌ Wrong format email.','string.min': '❌ The email must contain more than 3 characters.'
        }),

        password: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(8).max(30).messages({'string.min':'❌ Your password must contain at least 8 characters.', 'string.max':'❌ Your password can not contain more than 30 characters.', 'string.pattern':'❌ Your password must be alphanumeric and contains one number'}),

        profileurl: joi.string().min(3).trim().messages({'string.profileurl': '❌ You should add a photo link to your profile.'}),

        country: joi.string().messages({'string.country': '❌ You should select your origin country.'}),

        from: joi.string()
    })

    const validation = schema.validate(req.body.userData, {abortEarly:false})
    

        if (validation.error) {
            return res.json({success: false, message: validation.error.details})

        }
        
        next()

}
module.exports = validator