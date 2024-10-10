
# ![Bookstream Logo](https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1MTF8MHwxfGFsbHwxfHxsaWJyYXJ5fHx8fHx8MTY2NjM1ODk3Nw&ixlib=rb-1.2.1&q=80&w=1080)  
# Bookstream 📚

[![MIT License](https://img.shields.io/github/license/yashksaini-coder/BookStream)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-v12.1.5-blue)](https://nextjs.org/)
[![Express](https://img.shields.io/badge/Express-4.17.1-green)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v4.4.6-green)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-2.2.7-blue)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-v14.17.6-green)](https://nodejs.org/)

Bookstream is a dynamic, feature-rich bookstore application designed to provide a seamless user experience. With its clean, responsive interface, powerful search capabilities, and secure payment processing, Bookstream is ideal for developers building or contributing to an online bookstore.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Common Issues](#common-issues)
- [Usage Examples](#usage-examples)
- [License](#license)
- [Getting Started](#getting-started)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)
- [Contributing](#contributing)

---

## Features ✨
- **User Authentication**: Secure login and registration using JWT.
- **Book Management**: Comprehensive book management, including add, edit, and delete functionalities.
- **Advanced Search**: Powerful search functionality to filter books by various criteria.
- **Secure Payment**: Integrated secure payment processing for book purchases.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.

---

## Tech Stack 🛠️
- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

---

## Installation 🚀
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yashksaini-coder/BookStream.git
   ```
2. **Install dependencies**:
   ```bash
   cd BookStream
   npm install
   ```
3. **Create Environment Variables**:
   - Create a `.env.local` file and add the following:
     ```
     MONGODB_URI=your_mongo_db_uri
     JWT_SECRET=your_jwt_secret
     NEXT_PUBLIC_PAYMENT_API_KEY=your_payment_api_key
     ```

4. **Run the application in development**:
   ```bash
   npm run dev
   ```
   Access the app at `http://localhost:3000`.

### Important Note
If you encounter issues, refer to the [Common Issues](#common-issues-️) section for troubleshooting steps.

---

## Common Issues ⚠️

### Production Build Error
When starting the server with `npm start`, you may see:
```
Error: Could not find a production build in the '.next' directory.
```
**Solution**: Run `npm run build` before starting the server.

### ESLint Errors
You might encounter errors related to unescaped characters in JSX:
```
Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
```
**Solution**: Escape unescaped characters in your JSX or disable the ESLint rule in your configuration.

---

## Usage Examples 💡

### User Login
Navigate to the login page, enter your credentials, and upon successful login, you’ll be redirected to the homepage.

### Adding a Book
In the book management section, fill out the form with book details (e.g., title, author, genre) to add a new book.

---

## License 📄
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Getting Started 🏁

1. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

2. **Edit and Update**:
   - Modify `app/page.tsx`. The page auto-updates as you edit.

---

## Learn More 📚

To learn more about Next.js, check out these resources:
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

---

## Deploy on Vercel ☁️

The easiest way to deploy your Next.js app is with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Visit the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Contributing 🤝

We welcome contributions! Here’s how to contribute:
1. **Fork the repository**.
2. **Create your feature branch**:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Commit your changes**:
   ```bash
   git commit -m 'Add some feature'
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/YourFeature
   ```
5. **Open a pull request**.

### Contributors List
Thanks to all contributors who have helped make this project better!

[![Contributors](https://contrib.rocks/image?repo=yashksaini-coder/BookStream)](https://github.com/yashksaini-coder/BookStream/graphs/contributors)

---

Happy coding! 😊
