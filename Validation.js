import Joi from "joi";

export const userValidationSchema = Joi.object({
  Name: Joi.string().min(3).max(30).required(),
  Email: Joi.string().email().required(),
  Password: Joi.string().min(6).required(),
  Phone: Joi.number().min(1000000000).max(9999999999).required(), // Assuming 10-digit phone
});



export const activityValidationSchema = Joi.object({
  Title: Joi.string().min(3).max(100).required(),
  Description: Joi.string().min(5).max(500).required(),
  Location: Joi.string().min(2).max(100).required()
});

