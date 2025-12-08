FROM node:22-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm set strict-ssl false

RUN npm install

COPY . .

RUN npm run build

RUN npm ci --omit=dev

#running

FROM node:22-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/package*.json ./ 
COPY --from=build /usr/src/app/node_modules ./node_modules


EXPOSE 3333

CMD ["npm", "run", "start"]