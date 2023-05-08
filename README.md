# Repositorio de Login Básico con Node.js, Express y MongoDB
Este repositorio contiene una aplicación de ejemplo que utiliza Node.js, Express y MongoDB para implementar un sistema de registro y autenticación de usuarios básico. La aplicación utiliza tokens JWT para autenticar a los usuarios y cuenta con validaciones básicas de los campos de registro y login.

## Requisitos
Antes de poder ejecutar la aplicación, es necesario tener instalado Node.js y MongoDB. Puede descargar e instalar Node.js desde la página oficial y MongoDB desde.

## Instalación
Para instalar la aplicación, clone este repositorio y, en la raíz del proyecto, ejecute el siguiente comando para instalar las dependencias:
[npm install o yarn]

## Configuración
Antes de poder ejecutar la aplicación, es necesario configurar las variables de entorno correspondientes. Cree un archivo .env en la raíz del proyecto y agregue las siguientes variables:

### PORT:
El puerto en el que se ejecutará la aplicación.

### DB_URI:
La URL de conexión a la base de datos de MongoDB.

### JWT_SECRET:
La clave secreta que se utilizará para firmar los tokens JWT.