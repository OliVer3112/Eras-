const app = require('./app');
const db = require('./config/database_config');

//prueba autenticación de bbdd
db.authenticate().then(() => {
    console.log('[+] Conexión exitosa');
}).catch((err) => {
    console.log('[!] Error de conexión: ' + err);
});

//prueba sincronización de bbdd
db.sync().then(() => {
    console.log('[+] Sincronización exitosa');
}).catch((err) => {
    console.log('[!] Error de sincronización: ' + err);
});


app.listen(4000, () => {
    //indico que se escucha al puerto 4000
    console.log('Servidor corriendo en el puerto 4000');
});