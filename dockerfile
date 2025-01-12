# Step 1: Build stage
FROM node:20-alpine AS builder

# Install git and other required utilities
RUN apk add --no-cache git

# Set the working directory
WORKDIR /app

# Copy dependency files first for caching
COPY package.json yarn.lock ./

# Install dependencies needed for the build
RUN yarn install --production=false

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN yarn build

# Start the Next.js application
CMD ["yarn", "start"]
