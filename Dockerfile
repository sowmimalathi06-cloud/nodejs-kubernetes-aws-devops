# Use official Node.js 22 image
FROM node:22-alpine

# Create working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Application listens on port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
