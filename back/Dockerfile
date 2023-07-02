FROM node:18.16.1-alpine

WORKDIR /back

COPY package*.json /back/

RUN npm install

COPY . /back/

EXPOSE 3000
EXPOSE 8080

CMD ["npm", "run", "dev"]
