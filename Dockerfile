# Use Node base image from Amazon ECR Public
FROM public.ecr.aws/docker/library/node:14.16.1-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Use Nginx from Amazon ECR Public
FROM public.ecr.aws/nginx/nginx:1.21.1-alpine

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

