# Como se ha ingorado la subida de archivos necesarios, se requieren varios pasos previos a la utilización del código

# node-modules
ES una carpeta que ocupa mucho espacio.
Para que sea más cómodo se ha ignorado y mediante el comando:

npm install

se iunstalaran todas las dependencias indicadas en package.json y se creará la carpeta

# .env

Para preservar la seguridad se ha considerado que los datos de conexión a la base de datos no se incluyan por lo que cada persona deberá incluir las suyas

DIALECT
DB_HOST
DB_USERNAME 
DB_DATAABASE 
DB_PASSWORD 

