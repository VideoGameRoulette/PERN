# PERN
Template for PERN Stack Web Applications

![postgres](https://raw.githubusercontent.com/VideoGameRoulette/PERN/main/Postgres.png)
![express](https://raw.githubusercontent.com/VideoGameRoulette/PERN/main/Express.png)
![react](https://raw.githubusercontent.com/VideoGameRoulette/PERN/main/React.png)
![node](https://raw.githubusercontent.com/VideoGameRoulette/PERN/main/Node.png)

![nodemon](https://raw.githubusercontent.com/VideoGameRoulette/PERN/main/Nodemon.png)
![bootstrap](https://raw.githubusercontent.com/VideoGameRoulette/PERN/main/Bootstrap.png)
![docker](https://raw.githubusercontent.com/VideoGameRoulette/PERN/main/Docker.png)

## What is PERN Stack?
P - Postgres (Database)

E - Express.js (Backend)

R - React.js (Frontend)

N - Node.js (Fullstack)

# Start With Docker
`docker-compose up --build --remove-orphans`

# Start Without Docker

## Frontend
`npm i`

`yarn start`

## Backend
`npm i`

`node index` or `nodemon index`

## Client Browser URL
[http://localhost:3000](http://localhost:3000)

## docker-compose.yml Example
    version: '3'
    services:
      frontend:
        build:
          context: frontend
          dockerfile: Dockerfile.local
        volumes:
          - ./frontend:/code
          - /code/node_modules
        ports:
          - 3000:3000
      backend:
        build:
          context: backend
          dockerfile: Dockerfile.local
        volumes:
          - ./backend:/code
          - /code/node_modules
        ports:
          - 5000:5000
      db:
        image: postgres:latest
        environment:
          - POSTGRES_USER=postgres
          - POSTGRES_PASSWORD=551666545b837d480aed4c554cf4f13b
          - POSTGRES_DB=userdb
        volumes:
          - ./backend/scripts/db:/docker-entrypoint-initdb.d/
        ports:
          - 5432:5432

