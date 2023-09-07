#For some reason, Prisma is only being able to connect to the database when using node 18
FROM node:18 AS builder
WORKDIR /app

RUN apt-get update
RUN apt-get install -y openssl

ARG DATABASE_URL 
ARG NEXT_PUBLIC_SUPABASE_KEY 
ARG NEXTAUTH_SECRET 
ARG NEXTAUTH_URL 

COPY package.json .
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build

FROM node:18 AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js .
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"] 


