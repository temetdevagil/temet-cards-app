const User = require("./model");
const validator = require('./validator');
const isEmpty = require('../../is-empty');


exports.register = (req, res) => {

	//verify errors in data
	const { errors ,isValid } = validator.validateRegister(req.body);
	
	//if have some error return for user
	if(!isValid){
		return res.status(401).json({success: false, errors});
	}
	const { name, email, password } = req.body;

	//search for current email in database
	User.findOne({email}, async (error, data) => {
		//if have some error in request
		if(error) { return res.status(500).json({ success: false, error} )};
		//verify if response find some user, and if not, voilá 
		if(!isEmpty(data)){
			return res.status(401).json({success: false, errors: 'Email is already been taken'});
		}else{ 
			//creating a new User object with data
			const newUser = new User({
				name,
				email,
				password
			});

			//trying to save data in database
			newUser
				.save()
				.then(user => res.status(201).json({ success: true, user }))
				.catch(err => res.status(500).json({ success: false, err }));
		}
	})


};
