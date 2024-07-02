# Blog Website

## Overview
- **Concept**: This project is a modern blog website aimed at providing an engaging platform for users to read and manage blogs, featuring authentication, dynamic content management, and interactive user interfaces. It solves the problem of traditional blog platforms by integrating advanced features like wishlisting and dynamic blog management, enhancing user engagement and convenience.
  
## Key Features
- **Dynamic Content Management**:
  - Users can register, log in, and manage blogs (add, update, delete). The wishlist feature allows users to save favorite blogs for later viewing, enhancing user retention and engagement.
  
- **Responsive Design**:
  - Fully responsive across all devices - mobile, tablet, and desktop. It ensures a seamless user experience by adapting to various screen sizes and devices, optimizing accessibility and usability.

- **Secure Authentication**:
  - Implements JWT authentication for secure routes, ensuring user data protection and privacy. It supports multiple login options including email/password and social logins (e.g., Google, Facebook), catering to diverse user preferences.

- **Interactive UI Elements**:
  - Utilizes Framer Motion for animations, enhancing user interaction on the home page with visually appealing effects. React Intersection Observer is implemented for animated effects based on user viewport, creating a dynamic and engaging user experience.

- **Data Management**:
  - MongoDB is used for storing blog data and wishlist items, providing a scalable and efficient solution for data storage and retrieval. Tanstack Query is employed for efficient data fetching and management, optimizing application performance.

## Technologies Used
- **Frontend**: React, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT, Firebase Authentication

## Local Setup
1. **Clone the Repository**:
   - `git clone <repository-url>`
   
2. **Install Dependencies**:
   - Frontend: `cd client && npm install`
   - Backend: `cd server && npm install`

3. **Set Up Environment Variables**:
   - Create a `.env` file for Firebase and MongoDB credentials.

4. **Run the Application**:
   - Frontend: `npm start` in the `client` directory
   - Backend: `npm start` in the `server` directory





- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
