# Personal Website Backend

## 🚀 Description
This is the backend server for my personal website, built with Node.js. It provides the necessary APIs and services to power the frontend of my personal website.

## 🛠️ Technologies Used
- Node.js
- Express.js
- MongoDB (Database)
- JWT for authentication

## 🔧 Setup & Installation
1. Clone the repository:
```bash
git clone [your-repo-link]
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the development server:
```bash
npm run dev
```

## 🌟 Features
- RESTful API endpoints
- User authentication and authorization
- Database integration
- Secure password handling
- CORS enabled
- Error handling middleware

## 📁 Project Structure
```
├── src/
│   ├── config/      # Configuration files
│   ├── controllers/ # Request handlers
│   ├── middleware/  # Custom middleware
│   ├── models/      # Database models
│   ├── routes/      # API routes
│   └── utils/       # Utility functions
├── .env
├── .gitignore
└── package.json
```

## 🔐 API Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/profile` - Get user profile
- More endpoints to be added...

## 📝 License
MIT

## 👤 Author
[Your Name]

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! 