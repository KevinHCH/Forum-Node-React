#!/usr/bin/env bash
# Run this script to start the BACKEND server
docker run --name mysql -p 3306:3306 --rm -e MYSQL_ROOT_PASSWORD=4321 -v mysql-back:/var/lib/mysql -d mysql && sleep 2 && cd ../backend/ && npm run dev