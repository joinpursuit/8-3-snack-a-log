DROP DATABASE IF EXISTS snack_a_log;
CREATE DATABASE snack_a_log; 

\c snack_a_log; 


CREATE TABLE snacks (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
image TEXT,
fiber INTEGER default 0,
protein INTEGER default 0, 
added_sugar INTEGER default 0, 
is_healthy BOOLEAN
);