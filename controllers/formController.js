const Form = require('../models/form');

exports.submitForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newForm = new Form({ name, email, message });
        await newForm.save();
        console.log(`Message saved from ${name}`);
        res.redirect('/contact');
    } catch (error) {
        console.error('Error saving form:', error);
        res.status(500).send('An error occurred, please try again later.');
    }
};
