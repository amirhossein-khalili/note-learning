const Joi = require('joi');

const newTodoSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.base': 'عنوان باید یک رشته باشد',
    'string.empty': 'عنوان نمی‌تواند خالی باشد',
    'any.required': 'عنوان یک فیلد الزامی است',
  }),
  description: Joi.string()
    //   .required()
    .messages({
      'string.base': 'توضیحات باید یک رشته باشد',
      'string.empty': 'توضیحات نمی‌تواند خالی باشد',
      // 'any.required': 'توضیحات یک فیلد الزامی است',
    }),
  completed: Joi.boolean()
    // .required()
    .messages({
      'boolean.base': 'کامل شدن باید یک true or false باشد',
      'boolean.empty': 'کامل شدن نمی‌تواند خالی باشد',
      // 'any.required': 'کامل شدن یک فیلد الزامی است',
    }),
});

module.exports = newTodoSchema;
