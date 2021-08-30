# This Is Only For Back End For Front End Click This Link ==> https://github.com/safaisalani/Front_end

Sql Dumb Also Here



CREATE TABLE `Details` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `FirstName` VARCHAR(255) NULL,
  `LastName` VARCHAR(255) NULL,
  `MiddleName` VARCHAR(255) NULL,
  `PhoneNumber` VARCHAR(255) NULL,
  `Address` MEDIUMTEXT NULL,
  `Email` VARCHAR(255) NULL,
  `Weight` INT NULL,
  `Height` INT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `loign` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `CreatedAt` timestamp NULL DEFAULT NULL,
  `CreatedBy` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



