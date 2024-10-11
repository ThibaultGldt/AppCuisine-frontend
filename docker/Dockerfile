# Utiliser une image Node.js de base pour la construction de l'application
FROM node:lts-alpine as build

# Créer un répertoire pour l'application
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste des fichiers de l'application
COPY . .

# Construire l'application pour la production
RUN npm run build --prod

# Utiliser une image Nginx de base pour servir l'application
FROM nginx:alpine

# Copier les fichiers de build de l'application Angular
COPY --from=build /app/dist/app-cuisine-frontend /usr/share/nginx/html

# Exposer le port sur lequel l'application va tourner
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
