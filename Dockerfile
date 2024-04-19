FROM node:20 AS build-stage
  
WORKDIR /usr/src/app

COPY . .

ENV VITE_BACKEND_URL=/api

RUN npm ci
RUN npm run test
RUN npm run build

FROM nginx:1.25-alpine
# COPY the directory build from build-stage to /usr/share/nginx/html
# The target location here was found from the Docker hub page
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html