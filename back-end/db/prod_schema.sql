\c ddu7ogcj39ll3l; 

DROP TABLE IF EXISTS snacks;

CREATE TABLE snacks (id SERIAL PRIMARY KEY, name TEXT NOT NULL, fiber INT, 
protein INT, added_sugar INT, is_healthy BOOLEAN, image TEXT );