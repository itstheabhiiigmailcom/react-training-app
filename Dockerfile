# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application code
COPY . .

# Expose the correct port used by Vite
EXPOSE 5173

# Command to start the Vite development server
CMD ["npm", "run", "dev"]
