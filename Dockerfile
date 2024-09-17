# Use the latest Node.js image
FROM node:current

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install all dependencies, including dev dependencies
RUN npm install

# Verify GSAP installation
RUN npm list gsap && npm list @gsap/react

# Copy the rest of the application code to the container
COPY . .

# Build the React project using Vite
RUN npm run build

# Expose port 3000 for the application
EXPOSE 3000

# Start the development server on port 3000
CMD ["npm", "run", "dev", "--", "--port", "3000", "--host"]


