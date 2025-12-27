FROM node:latest
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN DATABASE_URL="postgresql://user:password@db:5432/db" \ 
  npx prisma generate
RUN DATABASE_URL="postgresql://user:password@db:5432/db" \
  npm run build
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]
