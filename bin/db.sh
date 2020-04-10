#!/usr/bin/env bash
mysql -u root -p4321 -e "CREATE DATABASE forum;"

mysql -u root -p4321 forum < /tmp/table.sql
sleep 1
mysql -u root -p4321 forum < /tmp/backup.sql
sleep 2
rm /tmp/*.sql