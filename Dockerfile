# Stage 1: Build Angular app using Node
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build --configuration=production

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Replace 'ecommerce-frontend' with your actual Angular app folder inside /dist
COPY --from=build /app/dist/e-commerce /usr/share/nginx/html

# Optional: custom nginx config if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
