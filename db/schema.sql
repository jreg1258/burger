DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id integer not null auto_increment,
    burger_name varchar(50),
    devoured boolean,
    PRIMARY KEY(id)
);
