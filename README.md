El proyecto es una Tienda de venta de ropa femenina.

Los productos que ofrece la tienda son Bodies, conjuntos, corpiños y mallas

El proyecto arranca en la APP.js donde se hace el enrutamiento del proyecto , utilizando react-router-dom.

Este llama al ItemListContainer que es el archivo donde, simulando un comportamiento de obtencion de datos mediante una promesa, tenemos la pagina inicial .
La mostramos en pantalla , llamando al Itemlist que es donde mapeamos los productos y luego los mostramos con el item.jsx

Desde alli, hago unas llamada al itemDetail, que es donde me muestra el producto seleccionado con los datos del producto propiamente dicho, precio , detalles tecnicos, etc.

Por ultimo desde el menu, puedo filtrar las categorias y mostrar los productos.

 