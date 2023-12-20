FROM alpine:3.19
LABEL authors="Quentin"
RUN apk add --update nodejs npm
WORKDIR /Medilabo/front
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]