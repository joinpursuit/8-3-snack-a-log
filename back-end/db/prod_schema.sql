\c  d4i3qdruuhh30p; 

DROP TABLE IF EXISTS snacks;

CREATE TABLE snacks (id SERIAL PRIMARY KEY, name TEXT NOT NULL, fiber INT, 
protein INT, added_sugar INT, is_healthy BOOLEAN, image TEXT );