#!/usr/bin/env bash
# This part of the script will create the volume and load all the data into mysql
docker volume create mysql-back
docker run --name mysql -p 3306:3306 --rm -e MYSQL_ROOT_PASSWORD=4321 -v mysql-back:/var/lib/mysql -d mysql
docker cp ../backend/resources/table.sql mysql:/tmp/
docker cp ../backend/resources/backup.sql mysql:/tmp/
docker cp db.sh mysql:/db.sh
sleep 1
docker exec mysql /bin/bash /db.sh

printf "\n ## The database has been created and restored ## \n"
docker stop mysql
sleep 1
# Installing node_modules
cd ../backend && npm install
sleep 1
cd ../frontend && npm install

printf "\n ## All the dependencias has been installed ## \n"