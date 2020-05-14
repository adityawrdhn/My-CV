FROM node:13.12.0-alpine
WORKDIR /app/mycv
COPY . ./
RUN npm install -g pm2

#plugins
RUN yarn

# Build for production.
RUN yarn build

# Build for production.
CMD ["yarn", "pm2-runtime:start"]

# Tell Docker about the port we'll run on.
EXPOSE 2222