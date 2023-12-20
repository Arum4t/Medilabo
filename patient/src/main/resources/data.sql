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
phone_number VARCHAR(12),
PRIMARY KEY (patient_list_id)
);

INSERT INTO patient_list(patient_list_id, first_name, last_name, birthdate, gender, address, phone_number)
VALUES
("1", "TestNone", "Test", "1966-12-31", "F", "1 Brookside St ", "100-222-3333"),
("2", "TestBorderline", "Test", "1945-06-24", "M", "2 High St ", "200-333-4444"),
("3", "TestInDanger", "Test", "2004-06-18", "M", "3 Club Road ", "300-444-5555"),
("4", "TestEarlyOnset", "Test", "2002-06-28", "F", "4 Valley Dr", "400-555-6666"),
("5", "MoreTest1", "Test1", "1990-05-05", "M", "1 Club Road test ", "300-444-1111"),
("6", "MoreTest2", "Test2", "1980-06-08", "F", "2 Club Road test ", "300-444-2222"),
("7", "MoreTest3", "Test3", "2000-07-28", "F", "3 Club Road test", "300-444-3333");
