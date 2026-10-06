# Use an official lightweight Node image
FROM node:22-slim

# Set working directory inside the container
WORKDIR /app

# Copy dependency list first (to leverage Docker cache)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of your project
COPY . .

# Run tests by default
# (You can override this in the GitHub Actions command)
CMD ["npm", "test"]
