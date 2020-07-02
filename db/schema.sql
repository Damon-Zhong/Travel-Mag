DROP DATABASE IF EXISTS destinations;
CREATE DATABASE destinations;
USE destinations;

CREATE TABLE cities (
    id INT AUTO_INCREMENT NOT NULL,
    city_name varchar(255),
    city_country varchar(255),
    sights_link varchar(255),
    sights_headline varchar(255),
    eats_link varchar(255),
    eats_headline varchar(255),
    bars_link varchar(255),
    bars_headline varchar(255),
    hotels_link varchar(255),
    hotels_headline varchar(255),
    free_link varchar(255),
    free_headline varchar(255),
    nightlife_link varchar(255),
    nightlife_headline varchar(255),
    family_link varchar(255),
    family_headline varchar(255),
    curator_name varchar(255),
    curator_bio varchar(255),
    PRIMARY KEY (id)
);