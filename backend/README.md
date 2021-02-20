# Vulnerable Code Backend

_A Professional Development Repository_

---

## Prerequisites

If you choose to run this locally, you will need to install the following
applications, or have access to them.

* [Node.js v15](https://nodejs.org/) - recommended installation is with a Node
  version manager.
* [PostgreSQL](https://www.postgresql.org/)
* [MongoDB](https://www.mongodb.com/)

## Setting up the environment

1. Create a PostgreSQL role with _LOGIN_ and a _PASSWORD_.
1. Create a PostgreSQL database with the owner as the user created in the
   previous step.
1. Copy the **template.env** file to **.env** and set the environment variables
   appropriately. The `PG*` variables should point to the PostgreSQL database
   that you created in steps 1 and 2. The MongoDB variable should be a proper
   connection string for [Mongoose](https://mongoosejs.com/) to use to connect
   to the database server.
1. Make sure you have Node.js v15+ running. If you're using Node Version
   Manager, there is a **.nvmrc** file that will respond to `nvm use`.
1. Migrate the database using `npm run migrate -- up`.

## Starting the application.

* For a development environment using **nodemon**, run `npm run dev`.
* For a non-development environment, run `npm run start`.
