
# Notification Microservice

This project implements a Notification Microservice using Node.js, TypeScript, and NestJS. It is designed to send notifications to users via various channels such as email and UI notifications. The project uses Docker for easy setup and MongoDB for data storage.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software:

- Docker
- Docker Compose
- Node.js (for running without Docker)

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. **Clone the repository:**
   ```bash
   git clone https://your-repository-url.git
   cd your-project-name
   ```

2. **Start the application using Docker:**
   ```bash
   docker-compose up --build
   ```
   This command builds the Docker image and starts the services defined in your `docker-compose.yml`, including the app and MongoDB.

### Usage

#### Sending Notifications

- **Endpoint:** `POST /notifications/send`
- **Payload:**
  ```json
  {
    "userId": "user-1",
    "companyId": "company-1",
    "notificationType": "happy-birthday"
  }
  ```

#### Get all UI Notifications for specific User

- **Endpoint:** `GET notifications/ui/:userId`
- **Example:** `GET notifications/ui/user-1`

### Running the Tests

To run the automated tests for this system:

```bash
npm test
```

### Architecture

The main components of the project are:

- **Controllers**: Handle incoming HTTP requests and return responses. In this project, there is a `NotificationController` that handles requests related to notifications.
- **Services**: Contain the business logic of the application. In this project, there are two services: `NotificationService` and `UINotificationService`.
- **Repositories**: Handle data operations and abstract the interaction with the database. In this project, there is a `UINotificationRepository` that interacts with the `UINotification` model in the database.
- **Channels**: Represent the different ways notifications can be sent. In this project, there are two channels: `EmailChannel` and `UIChannel`.
- **Mocks**: Used for testing purposes. In this project, there are two mocks: `CompanyMock` and `UserMock`.
- **Schema**: The `UINotificationSchema` is a Mongoose schema that defines the structure of the `UINotification` documents in the MongoDB database.
- **Module**: The `NotificationModule` is a NestJS module that organizes the application structure. It imports the `MongooseModule` and provides the controllers, services, repositories, and channels.
- **Docker**: Used for containerization, which makes the application easy to set up and run on any machine.

### Project Structure

The project is organized into separate directories based on their responsibilities. Here is the folder structure:

```bash
.
├── src
│   ├── notifications
│   │   ├── channels
│   │   │   ├── email.channel.ts
│   │   │   └── ui.channel.ts
│   │   ├── controllers
│   │   │   └── notification.controller.ts
│   │   ├── interfaces
│   │   │   └── channel.interface.ts
│   │   ├── mocks
│   │   │   ├── company.mock.ts
│   │   │   └── user.mock.ts
│   │   ├── repositories
│   │   │   └── ui-notification.repository.ts
│   │   ├── schema
│   │   │   └── ui-notification.schema.ts
│   │   ├── services
│   │   │   ├── notification.service.ts
│   │   │   └── ui-notification.service.ts
│   │   ├── test
│   │   │   └── jest
│   │   ├── types
│   │   │   └── notification.types.ts
│   │   └── notifications.module.ts
│   └── app.module.ts


### Built With

- [NestJS](https://nestjs.com/) - The framework used
- [MongoDB](https://www.mongodb.com/) - Database platform
- [Docker](https://www.docker.com/) - Container platform

### Authors

- **Mosaad Ahmed** - *Initial work* - [GitHub Profile](https://github.com/mosoahmed)

