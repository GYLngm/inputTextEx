# Build create-react-app 
FROM node:12-alpine as build

WORKDIR /app/frontend
COPY package.json /app/frontend

RUN npm install --silent && npm audit fix

COPY ./public /app/frontend/public
COPY ./src /app/frontend/src
COPY . /app/frontend

EXPOSE 3000

#RUN npm run build

# Run react app on Apache 2
#FROM httpd:2.4

#COPY --from=build /app/frontend/build/ /usr/local/apache2/htdocs/
#COPY --from=build /app/frontend/httpd.conf /usr/local/apache2/conf/httpd.conf


