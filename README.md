# Ayudantia Deploy Básico 2022-2

### Repaso Docker y Orquestación

En primer lugar, repasamos los conceptos de Docker y Compose, junto a Orquestación. Las presentaciones se encuentran subidas en la página de Canvas del curso.


### Internet y DNS

Luego, utilizamos _freenom.com_ para encontrar y adquirir un dominio disponible. Cabe mencionar que existen las opciones _namecheap_ y utilizar el _github student pack_.


### Llevar el proyecto a la máquina

Los puntos 3 y 4 de [esta guía](https://medium.com/coder-life/practice-2-host-your-website-on-github-pages-39229dc9bb1b) explican como generar y agregar llaves SSH a la cuenta de Github para luego poder hacer `git pull` del proyecto hacia la instancia EC2.

### Nginx

En [esta guía](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/) oficial de la documentación de Nginx se explica la forma de construir el archivo de configuraciones para el proxy inverso. Un repaso bastante completo de lo que vimos sobre como instalar y configurar Nginx puede ser encontrado en [esta guía](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-22-04).

### Forever

Vimos que se puede correr un script utilizando `forever start script.js`, ver una lista de los procesos corriendo con `forever list`, detener un proceso con `forever stop script.js` [y más](https://www.npmjs.com/package/forever). También existe la herramienta [nohup](https://www.digitalocean.com/community/tutorials/nohup-command-in-linux) y el _flag_ `-d` de Compose para correr scripts sin mantener ocupada la consola.

### IP Elástica

En [esta guía](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) de la documentación oficial de AWS pueden investigar sobre como crear y agregar una IP elástica a su instancia EC2.