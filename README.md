
Mamaide Website

This is the repository for the Mamaide website, which provides comprehensive maternal health support.

Features
Home Section: Includes a hero image and introduction.
About Section: Details the mission and services of the organization.
Services Section: Cards describe the different services offered, including prenatal care, postnatal care, and maternal education.
Contact Section: A form for visitors to get in touch for support and inquiries.
Authentication: Secure user registration and login using JWT and Passport.js.
API Integration: Dynamic data handling using MongoDB, providing real-time updates for users.
Responsive Design: Tailored to work seamlessly across devices with Tailwind CSS.

File Structure
.
├── index.html           # Main HTML file for the website
├── styles.css           # Stylesheet for the website
├── scripts.js           # JavaScript file for interactive functionality
├── images/              # Directory for images used on the website
├── controllers/         # Backend controllers for handling logic
├── models/              # Database models (e.g., User, Form)
├── routes/              # Express routes for API endpoints
├── views/               # EJS templates for rendering HTML dynamically
├── public/              # Public assets like CSS, JS, and images
└── README.md            # Documentation file (this file)

Authors
- **Nicholus Albert**
- **Brian Wachira**

How to Use
1. Clone the repository:
   ...
   git clone https://github.com/yourusername/mamaide_website.git
   ```
2. Navigate to the project directory:
   ...
   cd mamaide_website
   ```
3. Install the dependencies:
   ...
   npm install
   ```
4. Run the development server:
   ...
   npm start

   The server will start running on [http://localhost:3000](http://localhost:3000).

 Technologies Used
- Frontend: Tailwind CSS for styling, vanilla JavaScript for interaction.
- Backend: Node.js, Express.js for server-side logic and API management.
- Database: MongoDB with Mongoose ORM for database management.
- Authentication: Passport.js for user login and registration.
- View Engine: EJS for rendering dynamic HTML.

Future Enhancements
- Integrate GraphQL for more efficient data querying.
- Add OAuth options (e.g., Google Login) for user authentication.
- Deploy the application using Docker and set up CI/CD with GitHub Actions.

 Contribution Guidelines
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your commit messages are clear and concise.

## License
This project is licensed under the MIT License.

...



