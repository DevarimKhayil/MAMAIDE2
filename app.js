const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const passport = require('./passport-config'); 
const port = 3000;

const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const formController = require('./controllers/formController');

const uri = 'mongodb+srv://nicholusalbertmirindo:64eiC2L5Q3jcpvTi@cluster0.y8g2y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Middleware setup
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Session setup
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
}));

// Passport setup
app.use(passport.initialize());
app.use(passport.session());

// MongoDB connection
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch(err => {
    console.error('Error connecting to MongoDB Atlas:', err);
});

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/', indexRoutes);
app.use('/auth', authRoutes); // Include the auth routes
app.post('/submit', formController.submitForm);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});