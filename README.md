# 🔗 Secure URL Shortener

**A powerful, self-hosted URL shortening service built with Node.js, featuring user authentication and click analytics.**

-----

## 🌟 Overview

This project is a full-stack web application designed to convert long, complex URLs into short, easy-to-share links. It includes a complete user management system, allowing registered users to track their link history and view detailed click analytics for each shortened URL.

The application uses **EJS** for dynamic server-side rendering, providing a seamless and secure experience.

-----

## ✨ Key Features

### Core Shortening Functionality

  * **URL Shortening:** Convert any valid long URL into a compact, unique short link.
  * **Custom Slugs (Optional):** Users can define their own custom short code (slug) instead of a randomly generated one.
  * **Fast Redirection:** Links resolve and redirect to the original destination with minimal latency (HTTP 302).
  * **Click Analytics:** Track and display the total number of clicks for every shortened link created by a user.

### Security & Authentication

  * **User Registration (`/signup`):** Secure creation of new user accounts.
  * **User Login (`/signin`):** Authentication using username/password to issue a secure session token (JWT).
  * **Protected Routes:** Only logged-in users can create, manage, or view the analytics of their links.
  * **Password Security:** User passwords are securely hashed using **Bcrypt.js** with salt before being stored in the database.

### User Experience

  * **Dashboard:** A dedicated user dashboard to manage all created short links.
  * **History View:** Easily view all shortened links, their original URLs, and their click counts.
  * **Responsive Design:** Optimized for display on desktop, tablet, and mobile devices.

-----

## 🛠️ Technologies Used

This project is built using the **MongoDB, Express, EJS, Node.js (MEEN)** stack.

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Runtime** | `Node.js` | The JavaScript runtime environment. |
| **Web Framework** | `Express.js` | Backend framework for routing, middleware, and API handling. |
| **Database** | `MongoDB` | NoSQL database used for storing user credentials and URL mappings. |
| **ODM** | `Mongoose` | Provides schema-based modeling for MongoDB data. |
| **Templating** | `EJS` | Embedded JavaScript Templating used for server-side view rendering. |
| **Authentication** | `JSON Web Token (JWT)` | For stateless and secure user session management. |
| **Hashing** | `Bcrypt.js` | Used to hash and salt user passwords for secure storage. |
| **Utility** | `Shortid` (or similar) | For generating unique, non-sequential short codes for URLs. |

-----

## ⚙️ Installation and Setup

Follow these steps to set up and run the application locally.

### Prerequisites

  * [Node.js](https://nodejs.org/): Version 14 or higher.
  * [MongoDB](https://www.mongodb.com/try/download/community): Ensure a local MongoDB instance or a remote Atlas cluster is accessible.

### 1\. Clone the Repository

```bash
git clone https://github.com/Gyan-Aditya/URL-Shortener.git
cd URL-Shortener
```

### 2\. Install Dependencies

Install all necessary packages for the project.

```bash
npm install
```

### 3\. Configuration

Create a file named **.env** in the root directory of the project and add the following environment variables. Replace the placeholder values with your actual database connection string and secret key.

```Code snippet

# Server Port
PORT=5000

# MongoDB Connection String (e.g., from MongoDB Atlas or local setup)
MONGODB_URI=mongodb://127.0.0.1:27017/urlshortenerDB

# Secret Key for JWT Signing (MAKE THIS LONG AND COMPLEX)
JWT_SECRET=your_very_secure_jwt_secret_key_change_me
```
## 4\. Run the Application

Start the server using the Node package manager:

```bash
npm start
# OR, for development with live reload (if applicable):
npm run dev
```
# 🚀 Application Overview

The application runs on **http://localhost:5000**.

---

## 📡 API Endpoints Overview

Below are the primary routes the application uses for both API communication and view rendering:

| Method | Path                      | Description                                                             | Authentication |
|--------|---------------------------|-------------------------------------------------------------------------|----------------|
| GET    | `/`                       | Renders the main index page (for unauthenticated users).               | No             |
| POST   | `/api/auth/signup`        | Registers a new user and creates an account.                           | No             |
| POST   | `/api/auth/signin`        | Authenticates user and returns a JWT for subsequent requests.          | No             |
| GET    | `/dashboard`              | Renders the user's dashboard and link history.                         | Yes            |
| POST   | `/api/shorten`            | Creates a new short URL and returns the short link.                    | Yes            |
| GET    | `/:shortId`               | Redirects to the original long URL and increments the click count.     | No             |
| GET    | `/api/analytics/:shortId` | Fetches click analytics for a specific short link.                     | Yes (Author)   |
| DELETE | `/api/delete/:shortId`    | Deletes a short link from the database.                                | Yes (Author)   |

---

## 🤝 Contributing

We welcome contributions! If you have suggestions or want to improve the project, please follow these steps:

1. **Fork the repository**
2. **Create a new feature branch**

```bash
git checkout -b feature/your-feature-name
```
3. **Commit Your Changes**

After making your updates, commit them using:

```bash
git commit -m "feat: Added [A concise description of your change]"
```

4. **Push to your branch**

```bash
git push origin feature/your-feature-name
```

5. **Open a Pull Request to the main repository.**
