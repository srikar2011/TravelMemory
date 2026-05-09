# -------- BUILD STAGE --------
FROM node:18-alpine AS build

WORKDIR /app

# Copy dependency files first for Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source
COPY . .

# Build-time React variable
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

# Create optimized production build
RUN npm run build


# -------- PRODUCTION STAGE --------
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy React production build from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config for React SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose nginx port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]