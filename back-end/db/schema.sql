-- step 1 incase there is a database already, drop it
DROP DATABASE IF EXISTS snack_a_log;

--step 2 create the db
CREATE DATABASE snack_a_log; 

--step 3 connect to the db
\c snack_a_log; 

--step 4 create the songs table
CREATE TABLE snacks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    fiber INT NOT NULL,
    protein INT NOT NULL,
    added_sugar INT NOT NULL,
    is_healthy BOOLEAN,
    image TEXT
)


