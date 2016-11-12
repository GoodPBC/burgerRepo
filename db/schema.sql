-- creates the DB
CREATE DATABASE burgers_db;

-- switch to burgers_db
USE burgers_db;

-- create DB table burgers
CREATE TABLE burgers (
	id int NOT NULL AUTO INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOL, 
	date TIMESTAMP,
	PRIMARY KEY (id),
	FOREIGN KEY (client_id) REFERENCES (id)  
);