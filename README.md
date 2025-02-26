# API DOCUMENTATION

### Descripción

API biblioteca creada para la evaluación del módulo 4 del Bootcamp de Programación Web de Adalab. Permite a los usuarios ver un listado de libros disponibles, así como actualizar la información en caso de ser errónea, eliminar libros si ya no están disponibles e incluir nuevos libros a la colección.

### Requisitos

- Lenguaje: NodeJs
- Base de datos creada en MySQL Workbench

### Instalación

Clonar el respositorio:

``` git clone https://github.com/Adalab/modulo-4-evaluacion-final-bpw-AinaraHF.git ```

Instalar dependencias necesarias:

``` npm install ```

### Uso

Inicia el servidor: ``` npm run dev ```

Los **Endpoints** principales son los siguientes:

``` GET/libros_disponibles ``` para visualizar la colección de libros

``` POST/nuevo_libro ``` para añadir un nuevo libro a la colección

``` PUT/libros_disponibles/:idLibro ``` para actualizar los datos de un libro

``` DELETE/libros_disponibles/:idLibro ``` para eliminar un libro que ya no está disponible
