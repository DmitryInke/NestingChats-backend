# NestingChats

## Description
NestingChats is a real-time group chat application that allows users to create accounts, exchange messages, and upload profile pictures. The application supports responsive design, ensuring comfortable use on both computers and mobile devices.

## Demonstration

Here is a live demonstration of the application in action:

![NestingChats Demo](https://github.com/DmitryInke/NestingChats-backend/blob/master/demo.gif?raw=true)

### Key Features
- Account creation and profile picture upload.
- Create group chats or join existing ones with real-time messaging capabilities.
- Responsive design for various devices.

## Technologies

### Server-side
- **Nest.js**: The backbone of the server-side application.
- **GraphQL API**: Used for CRUD operations and managing data through MongoDB.
- **WebSocket**: Supports subscriptions and real-time through WebSocket connections.
- **JWT**: User authentication and authorization.
- **MongoDB**: Database to store user and chat information.
- **AWS S3**: Used for storing user profile images.

### Client-side
- **React**: Frontend application.
- **Material UI**: Component library for creating a responsive interface.
- **Apollo Client**: Manages application state and interacts with the GraphQL API.
- **Frontend Repository**: [View the frontend repository on GitHub](https://github.com/DmitryInke/NestingChats-ui)

### Additional Tools and Services
- **AWS Elastic Beanstalk & Amplify**: Deployment and hosting.
- **AWS ElastiCache Redis**: Used for PubSub subscriptions.
- **MongoDB Atlas**: Cloud database service used to manage MongoDB databases.
- **CI/CD Pipeline**: Continuous integration and delivery.

## Installation and Running

### Backend Installation
Clone the backend repository:
```bash
git clone https://github.com/DmitryInke/NestingChats-backend
```
Install dependencies using pnpm (install pnpm if not installed):
```bash
npm install -g pnpm
pnpm install
```
Before running the application, you need to create a `.env` file in the root directory and set your environment variables:
```plaintext
MONGODB_URI=
DB_NAME=
PORT=
JWT_SECRET=
JWT_EXPIRATION=
AWS_ACCESS_KEY=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
```

#### Running the Backend
- **Development mode**:
  ```bash
  pnpm run start
  ```
- **Watch mode**:
  ```bash
  pnpm run start:dev
  ```

### Frontend Installation
Clone the frontend repository:
```bash
git clone https://github.com/DmitryInke/NestingChats-ui
```
Install dependencies using Yarn (install Yarn if not installed):
```bash
npm install -g yarn
yarn install
```

#### Running the Frontend
- **Development mode**:
  ```bash
  yarn start
  ```

## Usage
To get started with the application, register or log in using your account, and join group chats for real-time communication.

## Security
All user data is protected with standard JWT authentication, ensuring the security and confidentiality of your data.


