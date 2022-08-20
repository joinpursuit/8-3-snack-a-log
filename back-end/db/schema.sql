-- SETUP A BLUE PRINT FOR DATABASE

DROP DATABASE IF EXISTS snack_a_log;

-- CREATING THE DATABASE
CREATE DATABASE snack_a_log; 

-- CONNECTING TO THE DATABASE
\c snack_a_log; 


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
