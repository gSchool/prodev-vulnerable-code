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

The following two commands run "development" versions of the applications such
that you can change code and it should be immediately updated for your
environment.

```sh
# Run this if you change the Dockerfile or for the first time
docker-compose -f docker-compose.dev.yaml build

# Run this when you want to start the apps
docker-compose -f docker-compose.dev.yaml up
```

**Note**: Because this is a local Docker development environment, passwords are
included in the **docker-compose.dev.yaml** and **mongo-init.js**.

When deploying your apps in the real world, **_DO NOT PUT CREDENTIALS IN
CONFIGURATION FILES STORED IN A SOURCE CODE VERSION CONTROL SYSTEM_**.
