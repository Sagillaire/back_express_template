import Joi from "joi";

export const createTweetValidator = Joi.object({
    tweet: Joi
        .object({
            tweet_text: Joi
                .string()
                .max(120)
                .required()
        })
        .required()
})