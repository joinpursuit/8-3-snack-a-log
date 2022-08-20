-- CONNECTING TO THE DATABASE
\c dc9hdv9rpqpppu; 

DROP TABLE IF EXISTS snacks;

-- CREATING THE SNACKS TABLE
CREATE TABLE snacks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    fiber INT,
    protein INT,
    added_sugar INT,
    is_healthy BOOLEAN,
    image TEXT NOT NULL
);
