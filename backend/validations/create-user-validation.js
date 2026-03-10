import joi from 'joi'

export const createUser = async (req, res, next) => {
  const schema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi
      .string()
      .min(8)
      .required()
      .pattern(
        new RegExp(
          "^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\\-+=\\[\\]{}|/:;<> ,.?~_])"
        )
      ),
    confirmPassword: joi
      .string()
      .required()
      .valid(joi.ref('password'))
      .messages({
        'any.only': 'Passwords must match.'
      }),      
  })

  const validation = schema.validate(req.body)

  if (validation.error) {
    const error = validation.error.message
      ? validation.error.message
      : validation.error.details[0].message
    return res.status(400).json(error)
  }

  return next()
}