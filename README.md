# Activite3
## VII. Automatisation avec Ansible
### 25- Installez Ansible sur une VM dédiée à l'administration.
 ![](captures/cap1.PNG)
 ![](captures/cap2.PNG)
 ### 26- Créez un fichier inventory contenant l'adresse IP de votre serveur Ubuntu et testez la communication avec : ansible all -m ping
 ![](captures/cap3.PNG)
 ![](captures/cap4.PNG)
### 27- Créez un premier playbook Ansible permettant d'installer automatiquement un package Linux, par exemple curl ou git.
 ![](captures/cap5.PNG)
 ![](captures/cap6.PNG)
### 28- Créez un playbook Ansible permettant d'installer automatiquement Docker sur une nouvelle VM.
 ![](captures/cap7.PNG)
 ![](captures/cap8.PNG)
 ![](captures/cap9.PNG)
## VIII. Création de l'API Node.js / Express
### 29- Créez un dossier api contenant une application Node.js / Express. L'API doit pouvoir être lancée indépendamment du frontend.
![](captures/cap10.PNG)
![](captures/cap11.PNG)
![](captures/cap12.PNG)
### 30- Créez une première route : GET /api/health
![](captures/cap13.PNG)
![](captures/cap14.PNG)
### 31- Créez une route : GET /api/profile
![](captures/cap15.PNG)
![](captures/cap16.PNG)
### 32- Créez une route : GET /api/projects
![](captures/cap17.PNG)
![](captures/cap18.PNG)
### 33- Créez une route : GET /api/skills
![](captures/cap19.PNG)
![](captures/cap20.PNG)
### 34- Modifiez le frontend Next.js pour récupérer la liste des projets depuis l'API Express au lieu d'utiliser uniquement des données locales.
![](captures/cap24.PNG)
### 35- Faites de même pour la liste des compétences.
![](captures/cap25.PNG)
## IX. Variables d'environnement et configuration
### 36- Configurez l'URL de l'API à l'aide d'une variable d'environnement : API_URL
![](captures/cap22.PNG)
### 37- Créez un fichier d'exemple de variables d'environnement sans y placer de secret réel : .env.example
![](captures/cap21.PNG)
## X. Dockerisation frontend + API
### 38- Créez un Dockerfile permettant de construire et exécuter le frontend Next.js.
![](captures/cap28.PNG)
### 39- Créez un deuxième Dockerfile permettant d'exécuter l'API Node.js / Express.
![](captures/cap29.PNG)
### 40- Construisez deux images Docker :
![](captures/cap30.PNG)
![](captures/cap31.PNG)
![](captures/cap32.PNG)
### 41- Créez un fichier Docker Compose permettant d'exécuter ensemble :
![](captures/cap33.PNG)
![](captures/cap34.PNG)
### 42- Vérifiez que le frontend communique avec l'API à travers le réseau Docker Compose.
![](captures/cap35.PNG)
![](captures/cap36.PNG)
