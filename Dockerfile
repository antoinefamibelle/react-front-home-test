# pull official base image
FROM node:16

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
# add app
COPY . ./

RUN npm run build

# expose port
EXPOSE 3000

# start app
CMD ["npm", "start"]
