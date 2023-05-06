import Joi from "joi";

export const LoginSchema = Joi.object({
    email: Joi
        .string()
        .required(),
    password: Joi
        .string()
        .required()
})

export const RegisterSchema = Joi.object({
    username: Joi
        .string()
        .required(),
    email: Joi
        .string()
        .required()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'co'] } }),
    password: Joi
        .string()
        .required()
})