FROM node:18.16.1

WORKDIR /front

COPY package*.json /front/

RUN npm install

COPY . /front/

EXPOSE 5173

CMD ["npm", "run", "dev"]
