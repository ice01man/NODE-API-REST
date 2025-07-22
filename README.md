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
### Edita un Producto.

- **PUT** `/products/`
- **Descripcion** Devuelve el producto que se creo.
- **Parametros** 
    -   `{"name": "Monitor Noblex 27pl", `
        `"price": 350.00,`
        `"category": [ "ELECTRO","Electronica"]}`
        
- **Ejemplo** **PUT** `/products/`

**Respuesta de ejemplo**
```json
[{
    "id": "DZKsp5eNK7rGs1p661KS",
    "name": "Monitor Noblex 27pl", 
    "price": 350.00,
    "category": [
            "ELECTRO",
            "Electronica"
        ]
    }]
```
### BORRAR un  Producto.

- **DELETE** `/products/:ID`
- **Descripcion** BORRA el producto del ID informdado.
- **Parametros** 
    -   `/products/DZKsp5eNK7rGs1p661KS`
        
        
- **Ejemplo** **DELETE** `/products/:ID`

**Respuesta de ejemplo**
```json
{
    "message": "Producto con ID DZKsp5eNK7rGs1p661KS eliminado correctamente."
}
```

### Crea un Nuevo Producto.

- **POST** `/products/`
- **Descripcion** Crear un Nuevoproducto con la informacion enviada.
- **Parametros** 
    -   `/Body`
        
        
- **Ejemplo** **POST** 
    `"quantity": 30,`
    `"name": "Monitor NOBLEXX 24pl", `
    `"price": 300.00,`
    `"category": ["ELECTRO", "Electronica"]}`

**Respuesta de ejemplo**
```json
{
    "message": "201, Created"
}
```
### Login.

- **POST** `/api/login/`
- **Descripcion** Utilizar el Login para Crear, Editar y borrar.
- **Parametros** 
    -   `{"user": "",`
        ` "password": "" }`  

**Respuesta de ejemplo**
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxfSwiaWF0IjoxNzUzMTYxMDQ2LCJleHAiOjE3NTMxNjQ2NDZ9.PyCC7U_XJnu8txSgmR5JOVIvyU5HgTcoNV1ZIln2yHc"
}
```
