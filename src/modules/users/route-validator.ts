import * as Joi from "joi";

export const createUserModelValidator = Joi.object().keys({
    name: Joi.string().required()
});