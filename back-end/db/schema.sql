
DROP DATABASE IF EXISTS snack_a_log;

-- Creating the database 
CREATE DATABASE snack_a_log;

-- Connect 
\c snack_a_log; 

-- Create table
CREATE TABLE 
snacks (
    id serial PRIMARY KEY,
    name TEXT NOT NULL,
    fiber INT NOT NULL,
    protein INT NOT NULL,
    added_sugar INT NOT NULL,
    is_healthy BOOLEAN,
    image  TEXT NOT NULL

);
