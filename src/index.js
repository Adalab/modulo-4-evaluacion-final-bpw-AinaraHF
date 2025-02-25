//imports
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

//crear el servidor
const server = express();
require('dotenv').config();

// configurar el servidor
server.use(cors());
server.use(express.json());

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
