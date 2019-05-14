//import modules for validate data
const isEqual = require('validator/lib/equals');
const isLength = require('validator/lib/isLength');
const isEmail = require('validator/lib/isEmail');
const isEmpty = require('../../is-empty');

exports.validateRegister = (data) => { 
    //objects for save errors
    const errors = {};

    //verify if some input is undefined, and change to null for not crash the app
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

  
    if(!isLength(data.name, {min: 2, max: 30})){
        errors.name = 'The name input must contain a name between 2 and 30 characters';
    }

    if(!isEmail(data.email)){
        errors.email = 'The email input must be a email';
    }
 
    if(!isLength(data.password, {min: 2, max: 30})){
        errors.name = 'The password input must contain a password between 2 and 30 characters';
    }

    return {
        errors, 
        isValid: isEmpty(errors),
    };
};
