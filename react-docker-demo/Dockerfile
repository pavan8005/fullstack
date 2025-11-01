# ---- Stage 1: Build React app ----
FROM node:18 AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all files and build the app
COPY . .
RUN npm run build

# ---- Stage 2: Serve app with Nginx ----
FROM nginx:alpine

# Copy built files to Nginx directory
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
