# Use Node.js base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install dependencies
RUN npm install

# Build the project
RUN npm run build

# Install a lightweight web server to serve your built site
RUN npm install -g serve

# Run the web server
CMD ["serve", "-s", "dist", "-l", "3000"]
