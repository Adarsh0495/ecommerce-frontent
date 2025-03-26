# Stage 1: Build
FROM node:20.11.0-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build --prod
# Debug: List the contents of dist/
RUN ls -la /app/dist
RUN ls -la /app/dist/ecommerce-frontend

# Stage 2: Serve
FROM nginx:alpine
COPY --from=build /app/dist/ecommerce-frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]