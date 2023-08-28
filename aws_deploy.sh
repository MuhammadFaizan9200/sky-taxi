# !/bin/bash
# This script will make the connection to AWS EC2 instance using ssh
# and then pull the most up to date code from git and then build the docker container

ssh -A -tt -o StrictHostKeyChecking=no $2 "
cd /var/www/taxi_website/
git fetch --all
git checkout -B $1 origin/$1
docker-compose down -v
docker system prune --all --force
docker stop $(docker ps -q)
docker rm $(docker ps -aq)
docker rmi $(docker images -q)
git pull
docker-compose up -d --build"