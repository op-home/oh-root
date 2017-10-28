FROM node:latest

RUN apt-get update && apt-get -y install sudo

# 安装mongodb
RUN sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
RUN echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/testing multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.6.list
RUN sudo apt-get update
RUN sudo apt-get install -y mongodb

WORKDIR /var/www/oh-root

COPY package.json /var/www/oh-root
COPY package-lock.json /var/www/oh-root

RUN npm install

COPY . /var/www/oh-root

EXPOSE 3000

ENV NODE_ENV "production"

CMD ["service", "mongod", "start"]
CMD ["npm", "run", "start"]