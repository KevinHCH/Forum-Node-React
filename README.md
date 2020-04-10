# FORUM

> Forum maded with NodeJs and React

## Prerequisites

- Node and npm
  `node -v: v12.16.1 npm -v: 6.13.4`
- Mysql

## Deployment

> If you want to check how this projecrts works you can deploy the project in local
> and play around.

- Clone the repo
  `git clone http://github.com/KevinHCH/forum.git`
- Move to the repo
  `cd forum`
- If you have docker you can run the `deploy.sh` script
  `bash bin/deploy.sh`
- If you don't have docker, you can modify the scripts and connections to play with this project, you have all the tables and some data in the path: `forum/backend/resources/`
- When you have been configurate all the Database ENVS you should start the backend
  `Inside backend folder: npm run dev`
- Then you can start the frontend
  `Inside frontend folder: npm start`
