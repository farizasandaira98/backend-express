# API Backend with Express

This repository contains the source code for an API backend built with Express.js. Follow the instructions below to set up and run the project on your local machine.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (version 6 or later)
- [Prisma CLI](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-prisma-migrate#prerequisites)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/farizasandaira98/backend-express.git
   cd backend-express
2. Install dependencies
   ```bash
    npm install
3. Initialize prisma
   ```bash
   npx prisma init
4. Generate JWT secret
   Generate a secret key for JWT.
5. Update .env file
   Open the .env file generated by Prisma and update it with your database connection string and JWT secret:
   ```bash
   DATABASE_URL="your-database-connection-string"
   JWT_SECRET="your-generated-jwt-secret"
6. Run Prisma migrations
   ```bash
   npx prisma migrate dev --name users
7. Start server :
   ```bash
   npx nodemon index.js
   
Running the Project
After completing the steps above, your server should be running at http://localhost:3000.

API Documentation: Make sure to document your API endpoints. You can use tools like Swagger or Postman for this purpose.

Contributing
If you would like to contribute to this project, please open an issue or submit a pull request.

Additional Information
Prisma Studio: You can use Prisma Studio to explore your database:
   ```bash
   npx prisma studio



