FROM node:24


WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .

RUN npx prisma generate
RUN npm run build
ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
