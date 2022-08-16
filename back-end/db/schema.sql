DROP DATABASE IF EXISTS snack_a_log;
CREATE DATABASE snack_a_log; 

\c snack_a_log; 

CREATE TABLE snacks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    fiber INTEGER NOT NULL,
    protein INTEGER NOT NULL,
    added_sugar INTEGER NOT NULL,
    is_healthy BOOLEAN NOT NULL,
    image TEXT NOT NULL
);