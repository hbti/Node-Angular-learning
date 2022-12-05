FROM nginx:1.17.1.alpine
ADD UserNode-Angular/frontend/angular-userapp/dist /usr/share/nginx/html
