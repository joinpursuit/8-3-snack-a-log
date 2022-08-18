
-- Connect 
\c d969hlpap4msg3; 

DROP TABLE IF EXISTS snacks;
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
