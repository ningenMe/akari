FROM node:22.0.0-alpine

COPY . .

CMD ["npm","start"]
