DROP DATABASE IF EXISTS patient;
CREATE database patient;
USE patient;

DROP TABLE IF EXISTS patientList;
CREATE TABLE patientList (
  patientListId int(4) NOT NULL AUTO_INCREMENT,
firstName VARCHAR(100),
lastName VARCHAR(100),
birthdate DATE,
gender VARCHAR(100),
address VARCHAR(100),
phoneNumber int(10),
PRIMARY KEY (patientListId)
);

INSERT INTO patientList (patientListID, firstName, lastName, birthdate, gender, address, phoneNumber)
VALUES
(1, 'peverell', 'trépanier', '1991-10-11', 'homme', '5 rue des Nations Unies, 93200 SAINT-DENIS', '0170965707'),
(2, 'artus', 'dufresne', '1956-10-25', 'homme', '33, rue de Penthièvre, 95000 PONTOISE ', '0379480745'),
(3, 'cinderella', 'labossière', '1942-10-31', 'femme', '37, rue Pierre De Coubertin, 31300 TOULOUSE ', '0580495499');
