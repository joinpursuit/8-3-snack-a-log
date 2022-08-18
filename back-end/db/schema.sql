
DROP DATABASE IF EXISTS snack_a_log;

-- Creating the database 
CREATE DATABASE snack_a_log;

-- Connect 
\c snack_a_log; 
DROP TABLE IF EXISTS snacks;
-- Create table
CREATE TABLE 
snacks (
    id serial PRIMARY KEY,
    name TEXT NOT NULL,
    fiber INT ,
    protein INT ,
    added_sugar INT ,
    is_healthy BOOLEAN,
    image  TEXT 

);
