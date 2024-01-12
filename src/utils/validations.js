//Validation

const Joi = require('joi')

module.exports = {

    registerValidation:function(data){


        const schema = Joi.object({
            name:Joi.string().required(),
            email:Joi.string().required().email(),
            password:Joi.string().required()
        })

        return schema.validate(data);
    },

    loginValidation:function(data){

       
        const schema = Joi.object({

            email:Joi.string().required().email(),
            password:Joi.string().required()
        })

        return schema.validate(data);
    }



}


/* Joi.validate(data, schema, (err, value) => {
    const id = Math.ceil(Math.random() * 9999999);

    if (err) {
      error = {
        status: 'error',
        message: 'Invalid request data',
        data: data
      };
    } else {
      result={
        status: 'success',
        message: 'User created successfully',
        data: Object.assign({id}, value)
      };
    }
  }); */