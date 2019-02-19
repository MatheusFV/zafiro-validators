import * as Joi from "joi";
import { mustBe } from "./decorators";
import { validate, createSchemaFromClass } from "./validate";

const a = Joi;

export {
    a,
    mustBe,
    validate,
    createSchemaFromClass
};
