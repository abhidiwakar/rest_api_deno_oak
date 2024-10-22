# REST API with Deno and Oak

## Overview

This project is built with [Deno](https://deno.land/) and uses **PostgreSQL** as the database. Follow the steps below to set up and run the project locally.

---

## Prerequisites

1. **Deno** installed on your system. [Install Deno](https://deno.land/manual/getting_started/installation).
2. **PostgreSQL** installed and running. [Install PostgreSQL](https://www.postgresql.org/download/).

---

## Setup Instructions

### 1. Create the `.env` File

- Copy the contents from the `example.env` file:
  ```bash
  cp example.env .env
  ```
- Open the `.env` file and provide appropriate values for all the variables.

---

### 2. Create the PostgreSQL Database

- Use the name provided in the `.env` file under the `DATABASE_NAME` variable.
- Example command to create the database (replace `<db_name>`):
  ```bash
  psql -U <username> -c "CREATE DATABASE <db_name>;"
  ```

---

### 3. Run the Seed File

- Execute the seed file present in `db/seed.ts` to populate the database with demo tables and data:
  ```bash
  deno run -A --env db/seed.ts
  ```

---

### 4. Run the Project

- Start the project using the following command:
  ```bash
  deno run -A --env main.ts
  ```

---

## Additional Notes

- Ensure your PostgreSQL server is running before executing the seed file or starting the project.
- Check the logs for any errors during the execution and resolve them as needed.