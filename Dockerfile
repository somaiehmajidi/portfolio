# -------------------------------------
# 1) Build Angular SSR (browser + server)
# -------------------------------------
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build browser + server output (SSR)
RUN npm run build:ssr


# -------------------------------------
# 2) Run Angular SSR using Node.js
# -------------------------------------
FROM node:20 AS server

WORKDIR /app

# Copy only built files
COPY --from=builder /app/dist/somim/browser ./browser
COPY --from=builder /app/dist/somim/server ./server

COPY package*.json ./

# Install only production deps
RUN npm install --omit=dev

# Expose SSR port
EXPOSE 4000

# Run Angular SSR server
CMD ["node", "server/server.mjs"]
