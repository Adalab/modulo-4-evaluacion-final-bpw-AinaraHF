CREATE DATABASE biblioteca;
USE biblioteca;
CREATE TABLE libros (
	idLibro INT auto_increment primary key,
    titulo VARCHAR(60) not null, 
    autor VARCHAR(60) not null,
    genero VARCHAR(45) not null,
    fecha_publi date, 
    num_paginas INT
);
INSERT INTO libros (titulo, autor, genero, fecha_publi, num_paginas)
VALUES ('Harry Potter y la piedra filosofal', 'J.K. Rowling', 'fantasia', '1997-06-26', 256), 
('Thanks for the memories', 'Cecelia Ahern', 'ficcion', '2010-02-02', 384),
('Esperando al diluvio', 'Dolores Redondo', 'suspense', '2022-11-16', 576),
('Alas de sangre', 'Rebecca Yarros', 'fantasia', '2023-04-05', 498),
('Brazen', 'Julia Haart', 'biografia', '2022-03-08', 416);

SELECT * FROM libros;