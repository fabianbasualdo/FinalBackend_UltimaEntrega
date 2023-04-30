# CONFIGURACIONES:
# archivo llamAdo config.js:

ruta de conexion a mongo:


DB_URL: colocar tu conexion a Mongo
connectTo: (database) => colocar tu conexion a mongo


# archivo de la ruta utils/nodemailer.js:

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth:{
        user: 'tuCorreoDeGmail',
        pass: 'tuPassword'
    }
});

# archivo llamado .env:

ADMIN_PHONE: colocar tu telefono personal el cual utilizara el archivo utils/whatsapp.js


NODE_ENV=development
HOST=localhost
PORT=8080
DATA_SOURCE=MEM
MODE=FORK
COOKIE_SECRET=ProyectoFinalDEV
DATABASE='ProyectoFinal'
ADMIN_EMAIL='fabianbasualdo0909@gmail.com'

DB_URI= coder_c20:PASSWORD@cluster0

DB_USER = fabianbasualdo
DB_PASS = pass
DB_CLUSTER = ecommerce


# 1) PRIMER ACCESO AL PROGRAMA:
http://localhost:8080

El programa le permitira loguearse o registrarse si es la primera vez que ingresa.

Al loguearse dispondra de la lista de productos de la tienda, dispuestos para que realice la compra.



# 2) INGRESO DE PRODUCTOS POR MEDIO DE POSTMAN:
Endpoint: http//localhost:8080/products
POST:
  ejemplo:
       {
      "name": "Bass3",
      "desc": "gogo3",
      "price": 20003,
      "image": "https://www.1999.co.jp/itbig70/10705590.jpg",
      "stock": 3   
       }
todos los productos ingresados seran mostrados en pantalla para que el usuario pueda agregar al carrito el producto, presionando el boton agregar.

# 3) Los usuario conectados podran hacer uso del chat para dialogar entre ellos.

# 4) CARRITO:
Al presionar el boton terminar compra:
le llegara al e-mails un mensaje con el detalle de la compra realizada.

ejemplo del e-mails que llegara al comprar:

Producto vendido:

comprador:
nombre: 
email:
direccion:

Titulo del producto  Cantidad Precio Total

# 5) 
Para editar un producto debes ingresar a POSTMAN, colocar la opcion PUT, y el 
siguiente endpoint junto con el id del producto.
en el cuerpo se deben colocar los valores a modificar.
Ejemplo:
http://localhost:8080/products/cb6f03e9-9332-4f93-a06f-e9dd7249f51b


      {
   
      "name": "Bass3",
      "desc": "gogo4",
      "price": 20003,
      "image": "https://www.1999.co.jp/itbig70/10705590.jpg",
      "stock": 4
      
      }


# 6)
Para borrar se debe colocar el endpoint y el id del producto a eliminar:
DELETE:
http://localhost:8080/products/cb6f03e9-9332-4f93-a06f-e9dd7249f51b


# 7)
Para buscar por un id particular, se debe colocar el endpoint mas el id del producto buscado.
GET:
http://localhost:8080/products/02a2e04f-58cd-4b79-b34d-5fae0480f326  

# 8) 
CARRITO:
GET:
para buscar un carrito debes colocar el endpoint y el id del carrito buscado:
ejemplo:
http://localhost:8080/carts/6a54e829-2604-407b-aabe-b7b56e238cd7

# 9)
Para agregarle un nuevo producto a un carrito especifico, debes colocar:
POST:
http://localhost:8080/carts/iddelcarrito/products/iddelProducto

ejemplo:
http://localhost:8080/carts/df9e99f4-1eaa-425c-a9ea-a3b2265b3d53/products/02a2e04f-58cd-4b79-b34d-5fae0480f326


# 10)
Para borrar un producto del carrito especifico, debes colocar:
DELETE:
http://localhost:8080/carts/iddelcarrito/products/iddelProducto

ejemplo:
http://localhost:8080/carts/df9e99f4-1eaa-425c-a9ea-a3b2265b3d53/products/02a2e04f-58cd-4b79-b34d-5fae0480f326


# 11) 
Para borrar un carrito debes colocar, el id del carrito a borrar:
DELETE:
ejemplo:
http://localhost:8080/carts/df9e99f4-1eaa-425c-a9ea-a3b2265b3d53