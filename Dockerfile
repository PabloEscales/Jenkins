FROM node:latest

LABEL maintainer "poel@gft.com"

WORKDIR /app

COPY ./jenkins-deploy/vite-project/ .

RUN npm i

HEALTHCHECK --interval=5s --timeout=5s CMD curl -f http://127.0.0.1:8000 || exit 1

EXPOSE 8091
EXPOSE 5173

CMD ["npm", "run", "dev"]
