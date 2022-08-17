-- step 1 incase there is a database already, drop it
DROP DATABASE IF EXISTS snack_a_log;

--step 2 create the db
CREATE DATABASE snack_a_log; 

--step 3 connect to the db
\c snack_a_log; 

--step 4 create the snacks table
CREATE TABLE snacks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    fiber INT,
    protein INT,
    added_sugar INT,
    is_healthy BOOLEAN,
    image TEXT
)


