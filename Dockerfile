FROM node:16.14
WORKDIR /app
#COPY . .

COPY package.json /app/
COPY package-lock.json /app/

RUN npm install
# RUN npm run dev
# RUN npm run start
# RUN npm run build
# RUN npm i -S serve

COPY . /app

#ENV NODE_ENV development
#ENV API_URL http://localhost:8080/api

EXPOSE 3000
CMD ["npm", "run", "start"]
