const Joi = require("joi");

exports.authLoginValidator = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string()
      .alphanum()
      .min(3)
      .max(20)
      .required(),

    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  });

  try {
    const validation = schema.validate(req.body);
    
    if (validation.error) {
        console.log(validation.error);
      return res.status(409).send({
        message:validation.error.details[0].message
      })
    }
    console.log("Successfully validated");
    next();
  } catch (err) {
    console.log("Validation error:", err.message);
    next(err);
  }
};
