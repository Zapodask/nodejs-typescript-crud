FROM node:alpine

WORKDIR /usr/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

# COPY src ./src # Remover comentário em produção

EXPOSE 8000

CMD ["yarn", "dev"]
