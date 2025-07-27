# Use official Node.js base image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose port 3000
EXPOSE 3000

# Default command to run the app
CMD ["npm", "start"]

