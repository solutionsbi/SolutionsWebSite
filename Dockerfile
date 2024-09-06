# Use the latest Node.js image
FROM node:current

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies using npm ci for a clean install
RUN npm ci

# Copy the rest of the application code to the container
COPY . .

# Build the React project using Vite
RUN npm run build

# Expose port 3000 for the application
EXPOSE 3000

# Start the development server on port 3000
CMD ["npm", "run", "dev", "--", "--port", "3000", "--host"]


