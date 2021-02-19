# Vulnerable Code

_A Professional Development Repository_

---

This is a monolithic application that uses a traditional frontend/backend
architecture with inherent security vulnerabilities. To run it locally, please
read the instructions in each project's README files or use the
**docker-compose.yaml** file included in the root of this project.

## Running the application on your computer

In each of the README files, you will find instructions on how to run the
application locally without virtualization.

- [Frontend README](./frontend/README.md)
- [Backend README](./backend/README.md)

## Running the application with Docker

```sh
# Run this if you change code or for the first time
docker-compose build

# Run this when you want to start the apps
docker-compose up
```
