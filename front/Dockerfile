FROM node:18.16.1-alpine

WORKDIR /front

COPY package*.json /front/

RUN npm install

COPY . /front/

EXPOSE 5173

CMD ["npm", "run", "dev"]
