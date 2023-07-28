#!/bin/sh
site="MainSite"
docker buildx build -t porfolio-app .
docker save porfolio-app -o artifact/portfolio-app.tar
rsync -av artifact/portfolio-app.tar MainSite:/home/app/

ssh MainSite "docker load -i /home/app/portfolio-app.tar"
docker_id=$(ssh MainSite "docker ps | cut -d ' ' -f1| tail +2")
ssh ${site} "docker stop ${docker_id}"$
ssh MainSite "docker run -it -d -p3000:3000 porfolio-app"
