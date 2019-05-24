const User = require("./model");

exports.register = (req, res) => {
	const { name, email, password } = req.body;

	const newUser = new User({
		name,
		email,
		password
	});

	newUser
		.save()
		.then(user => res.status(201).json({ success: true, user }))
		.catch(err => res.status(500).json({ success: false, err }));
};
