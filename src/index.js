//Importar
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

//Crear el servidor
const server = express();
require('dotenv').config();

//Configurar el servidor
server.use(cors());
server.use(express.json());

//Crear función para conectars a la BD
async function connectDB() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: process.env.USERDB,
    password: process.env.PASSWORDDB,
    database: 'biblioteca'
  });
  await connection.connect();
  return connection;
}

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});

//Leer/Listar todas las entradas existentes.
server.get('/libros_disponibles', async (req,res)=>{
  try {
    const conex = await connectDB();
    const selectList = 'SELECT * FROM libros';
    const [resultList] = await conex.query(selectList);
    conex.end();
    res.json({
      success: true, 
      result: resultList
    })
  } catch (error) {
    res.status(500).json(error);
  } 
});

//Insertar una entrada en su entidad principal.
server.post('/nuevo_libro', async (req,res)=>{
  try {
    const conex = await connectDB();
    const { titulo, autor, genero, fecha_publi, num_paginas } = req.body;
    const selectNewBook = 'INSERT INTO libros (titulo, autor, genero, fecha_publi, num_paginas) VALUES (?,?,?,?,?)';
    const [resultNewBook] = await conex.query(selectNewBook, [titulo, autor, genero, fecha_publi, num_paginas]);
    conex.end();
    if(resultNewBook){
      res.status(201).json({
      success: true, 
      idLibro: resultNewBook.insertId
    });
    }else{
      res.status(400).json({
        success: false,
        message: 'Libro no insertado en la base de datos.'
      })
    }
    
  } catch (error) {
    res.status(500).json(error);
  } 
});

//Actualizar una entrada existente.
server.put('/libros_disponibles/:idLibro', async (req,res)=>{
  try {
    const conex = await connectDB();
    const { titulo, fecha_publi, num_paginas } = req.body;
    const { idLibro } = req.params;
    const updateBook = 'UPDATE libros SET titulo=?, fecha_publi=?, num_paginas=? WHERE idLibro=?';
    const [resultUpdateBook] = await conex.query(updateBook, [titulo, fecha_publi, num_paginas, idLibro]);
    conex.end();
    if(resultUpdateBook.affectedRows > 0){
      res.status(201).json({
      success: true
    });
    }else{
      res.status(400).json({
        success: false,
        message: 'Libro no actualizado en la base de datos.'
      })
    }
    
  } catch (error) {
    res.status(500).json(error);
  } 
});

//Eliminar una entrada existente.
server.delete('/libros_disponibles/:idLibro', async (req,res)=>{
  try {
    const conex = await connectDB();
    const { idLibro } = req.params;
    const deleteBook = 'DELETE FROM libros WHERE idLibro=?';
    const [resultDeleteBook] = await conex.query(deleteBook, [idLibro]);
    conex.end();
    if(resultDeleteBook.affectedRows > 0){
      res.status(201).json({
      success: true
    });
    }else{
      res.status(400).json({
        success: false,
        message: 'Libro no eliminado de la base de datos.'
      })
    }
    
  } catch (error) {
    res.status(500).json(error);
  } 
});