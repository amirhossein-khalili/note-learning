const Joi = require('joi');

const newNoteSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.base': 'عنوان باید یک رشته باشد',
    'string.empty': 'عنوان نمی‌تواند خالی باشد',
    'any.required': 'عنوان یک فیلد الزامی است',
  }),
  content: Joi.string().required().messages({
    'string.base': 'محتوا باید یک رشته باشد',
    'string.empty': 'محتوا نمی‌تواند خالی باشد',
    'any.required': 'محتوا یک فیلد الزامی است',
  }),
  noteBackground: Joi.string()
    // .required()
    .messages({
      'string.base': 'رنک بکگراند نوت باید یک رشته باشد',
      'string.empty': 'رنک بکگراند نوت نمی‌تواند خالی باشد',
      // 'any.required': 'رنک بکگراند نوت یک فیلد الزامی است',
    }),
});

module.exports = newNoteSchema;
