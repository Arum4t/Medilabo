DROP DATABASE IF EXISTS patient;
CREATE database patient;
USE patient;

DROP TABLE IF EXISTS patient_list;
CREATE TABLE patient_list (
patient_list_id INTEGER NOT NULL AUTO_INCREMENT,
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL,
birthdate DATE NOT NULL,
gender VARCHAR(100) NOT NULL,
address VARCHAR(100),
phone_number int(10),
PRIMARY KEY (patient_list_id)
);

INSERT INTO patient_list(patient_list_id, first_name, last_name, birthdate, gender, address, phone_number)
VALUES
("1", "peverell", "trépanier", "1991-10-11", "homme", "5 rue des Nations Unies, 93200 SAINT-DENIS", "0170965707"),
("2", "artus", "dufresne", "1956-10-25", "homme", "33, rue de Penthièvre, 95000 PONTOISE", "0379480745"),
("3", "cinderella", "labossière", "1942-10-31", "femme", "37, rue Pierre De Coubertin, 31300 TOULOUSE", "0580495499");
