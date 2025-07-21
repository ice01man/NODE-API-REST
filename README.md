# API Rest en Nodejs 
## Descripcion:

API REST para gestion de Productos de un almacen.

## INSTALACION
1. Clonar Repositorio
2. Instalar dependencias

``` bash
npm install 
```

3. Configurar las Variables de entorno:

``` bash
cp .env-example .env
```

## Documentacion de la API.

### Obtener todos los productos

- **GET** `/products`
- *** Descripcion *** Devuelve la lista de todos los productos
- **Respuesta de Ejemplos**

```Json
[ {
        "id": "hjno1OuMrMWwBE3E2fa2",
        "quantity": 30,
        "price": 40,
        "category": [
            "Libros",
            "Entretenimiento"
        ],
        "name": "Juego de mesa: Cataratas"
    }
]
```
### Buscar Producto por Nombre, Categoria.

- **GET** `/products/search?name=palabra`
- **Descripcion** Devuelve los productos cuyo nombre contiene la pablaba enviada.
- **Parametros** 
    - `name` (query, requerido): Texto a buscar en el nombre del producto o categoria.
- **Ejemplo** `/products/search?name=Juego de mesa`
**Respuesta de ejemplo**
```json
[{
        "id": "xxxxxx",
        "quantity": 30,
        "price": 40,
        "category": [ "Libros","Entretenimiento"],
        "name": "Juego de mesa: Cataratas"
    }]
```

### Buscar Producto por ID.

- **GET** `/products/:ID`
- **Descripcion** Devuelve el producto cuyo id es informado.
- **Parametros** 
    - `name` (path, requerido): ID del producto.

- **Ejemplo** `/products/xxxxxx`

**Respuesta de ejemplo**
```json
[{
        "id": "xxxxxx",
        "quantity": 30,
        "price": 40,
        "category": [ "Libros","Entretenimiento"],
        "name": "Juego de mesa: Cataratas"
    }]
```

