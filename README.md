
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
   git clone https://github.com/mosoahmed/brio.git
   cd notification-microservice
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
├── architect
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
```
## OOP Concepts and Design Patterns

This project utilizes several Object-Oriented Programming (OOP) concepts and design patterns:

1. **Classes and Objects**: The project uses classes and objects extensively. For example, `NotificationController`, `NotificationService`, `UINotificationService`, and `EmailChannel` are all classes. Instances of these classes are objects.

2. **Encapsulation**: The project uses encapsulation to bundle data and methods that operate on that data within one unit, i.e., a class. For example, the `NotificationService` class encapsulates the logic for sending notifications.

3. **Inheritance**: Although not explicitly shown in the provided code excerpts, the project likely uses inheritance, given it's a common OOP concept. Inheritance allows classes to inherit fields and methods from other classes.

4. **Polymorphism**: Polymorphism is used in the project through the use of TypeScript interfaces. For example, different types of channels (`EmailChannel` and `UIChannel`) could implement a common `Channel` interface and provide their own implementation of the methods.

5. **Dependency Injection**: This is a design pattern used extensively in the project. NestJS, the framework used in the project, has built-in support for dependency injection. This pattern allows the system to be more flexible, testable, and modular. For example, `NotificationService` and `UINotificationService` are injected into `NotificationController`.

6. **Module Pattern**: The project is organized into modules, such as `NotificationModule`. This is a design pattern that provides a way to wrap a group of related functionalities into a single unit, promoting separation of concerns.

7. **Repository Pattern**: The `UINotificationRepository` class is an example of the Repository pattern. This pattern abstracts the data access logic, making the application more maintainable and flexible.

8. **Mock Objects**: The `CompanyMock` and `UserMock` are examples of the Mock Object pattern, which is used for unit testing. Mock objects mimic the behavior of real objects in controlled ways.

9. **Singleton Pattern**: The NestJS services, like `NotificationService` and `UINotificationService`, are singleton by default. This means that NestJS instantiates a single instance of these classes and reuses them, ensuring that data is shared and consistent throughout the application.

10. **Factory Pattern**: Although not explicitly shown in the provided code excerpts, the Factory pattern is commonly used in NestJS applications for creating objects. For example, a factory could be used to create different types of notifications based on the notification type.


## How We Extend It

This project can be extended in several ways to add more functionality and make it more robust. Here are some potential extensions:

1. **User and User Preferences Module**: A new module can be created to manage users and their preferences. This module can include classes like `User`, `UserPreferences`, `UserController`, `UserService`, and `UserPreferencesService`. The `UserPreferences` can include settings for notification preferences, such as preferred notification channels, times to receive notifications, etc.

2. **Company and Company Preferences Module**: Similar to the User module, a Company module can be created to manage companies and their preferences. This module can include classes like `Company`, `CompanyPreferences`, `CompanyController`, `CompanyService`, and `CompanyPreferencesService`. The `CompanyPreferences` can include settings for company-wide notification preferences.

3. **Additional Notification Channels**: The project can be extended to support more notification channels like WhatsApp, Facebook, etc. For each new channel, a new class (e.g., `WhatsAppChannel`, `FacebookChannel`) can be created that implements the `Channel` interface. The `NotificationService` can be updated to send notifications through these new channels based on user or company preferences.




### Built With

- [NestJS](https://nestjs.com/) - The framework used
- [MongoDB](https://www.mongodb.com/) - Database platform
- [Docker](https://www.docker.com/) - Container platform
- [Mermaid](https://www.mermaid.js.org) - Diagramming and charting tool

### Authors

- **Mosaad Ahmed** - *Initial work* - [GitHub Profile](https://github.com/mosoahmed)

