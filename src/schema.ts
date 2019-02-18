import * as Joi from "joi";
import { ValidationMetadata, PropertyValidationSchema } from "./interfaces";

export function createSchemaFromMetadata<T>(
    metadata: ValidationMetadata<T>
): PropertyValidationSchema {
    let obj: any = {};
    const keys = metadata.keys();
    const keyArr = Array.from(keys);
    keyArr.forEach(key => {
        const val = metadata.get(key);
        if (typeof val === 'object') {
            obj[key] = createSchemaFromMetadata(val);
        } else {
            obj[key] = val;
        }
    });
    return Joi.object().keys(obj);
}
