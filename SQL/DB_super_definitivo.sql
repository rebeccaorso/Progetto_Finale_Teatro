CREATE DATABASE  IF NOT EXISTS `biglietteria` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `biglietteria`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: biglietteria
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `biglietti`
--

DROP TABLE IF EXISTS `biglietti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `biglietti` (
  `cod_operazione` int NOT NULL AUTO_INCREMENT,
  `cod_cliente` int DEFAULT NULL,
  `cod_replica` int DEFAULT NULL,
  `data_ora` date DEFAULT NULL,
  `tipo_pagamento` varchar(30) DEFAULT NULL,
  `quantita` int NOT NULL,
  `data` varchar(255) DEFAULT NULL,
  `titolo` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cod_operazione`),
  KEY `fk_biglietti_repliche` (`cod_replica`),
  KEY `fk_biglietti_clienti` (`cod_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `biglietti`
--

LOCK TABLES `biglietti` WRITE;
/*!40000 ALTER TABLE `biglietti` DISABLE KEYS */;
INSERT INTO `biglietti` VALUES (1,5,17,'2023-07-26','bonifico',2,'30-09-2023',NULL),(2,5,17,'2023-07-26','cartaCredito',2,'30-09-2023',NULL),(3,5,12,'2023-07-26','bonifico',1,'23-09-2023','La Traviata');
/*!40000 ALTER TABLE `biglietti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clienti`
--

DROP TABLE IF EXISTS `clienti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clienti` (
  `cod_cliente` int NOT NULL AUTO_INCREMENT,
  `cognome` varchar(20) DEFAULT NULL,
  `nome` varchar(20) DEFAULT NULL,
  `telefono` varchar(14) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`cod_cliente`),
  UNIQUE KEY `telefono` (`telefono`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clienti`
--

LOCK TABLES `clienti` WRITE;
/*!40000 ALTER TABLE `clienti` DISABLE KEYS */;
INSERT INTO `clienti` VALUES (1,'Alfieri','Valeria','011/4328346','alf@libero.it'),(2,'Bellotti','Cinzia','011/79876658','bel@tin.it'),(3,'Morgeri','Giuseppe','011/76547648','dig@email.it'),(4,'Bastioni','Gianluca','011/76586548','fai@virgilio.it'),(5,'Francini','Massimiliano','011/543326565','fra@libero.it'),(6,'Mattone','Fabrizio','011/98765762','gat@tin.it'),(7,'Maistoni','Ivan','011/5483678','mai@email.it'),(8,'Parenti','Michele','011/5367548','mik@tin.it'),(9,'Morrini','Marco','011/53645872','mor@libero.it'),(10,'Pagini','Giuliana','011/78363459','pag@yahoo.it'),(11,'Picati','Annamaria','011/67598721','pic@email.it'),(12,'Rugliese','Antonio','011/3678465','pug@tin.it'),(13,'Romanotti','Davide','011/34254367','rom@libero.it'),(14,'Straniti','Annamaria','011/845673865','str@libero.it');
/*!40000 ALTER TABLE `clienti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repliche`
--

DROP TABLE IF EXISTS `repliche`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `repliche` (
  `cod_replica` int NOT NULL,
  `cod_spettacolo` int DEFAULT NULL,
  `data_replica` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`cod_replica`),
  KEY `fk_repliche_spettacoli` (`cod_spettacolo`),
  CONSTRAINT `fk_repliche_spettacoli` FOREIGN KEY (`cod_spettacolo`) REFERENCES `spettacoli` (`cod_spettacolo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repliche`
--

LOCK TABLES `repliche` WRITE;
/*!40000 ALTER TABLE `repliche` DISABLE KEYS */;
INSERT INTO `repliche` VALUES (1,1,'28-01-2024'),(2,1,'27-01-2024'),(3,1,'26-01-2024'),(4,1,'25-01-2024'),(5,1,'24-01-2024'),(6,2,'07-01-2024'),(7,2,'06-01-2024'),(8,2,'05-01-2024'),(9,2,'04-01-2024'),(10,2,'06-11-2023'),(11,3,'24-09-2023'),(12,3,'23-09-2023'),(13,3,'22-09-2023'),(14,3,'21-09-2023'),(15,3,'20-09-2023'),(16,4,'01-10-2023'),(17,4,'30-09-2023'),(18,4,'29-09-2023'),(19,4,'28-09-2023'),(20,4,'27-09-2023'),(21,5,'10-11-2023'),(22,5,'09-11-2023'),(23,5,'06-11-2023'),(24,5,'05-11-2023'),(25,5,'04-11-2023'),(26,6,'06-09-2023'),(27,6,'04-09-2023'),(28,6,'03-09-2023'),(29,6,'02-09-2023'),(30,6,'01-09-2023');
/*!40000 ALTER TABLE `repliche` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spettacoli`
--

DROP TABLE IF EXISTS `spettacoli`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `spettacoli` (
  `cod_spettacolo` int NOT NULL,
  `titolo` varchar(50) DEFAULT NULL,
  `autore` varchar(40) DEFAULT NULL,
  `regista` varchar(25) DEFAULT NULL,
  `prezzo` double NOT NULL,
  `cod_teatro` int DEFAULT NULL,
  PRIMARY KEY (`cod_spettacolo`),
  KEY `fk_spettacoli_teatri` (`cod_teatro`),
  CONSTRAINT `fk_spettacoli_teatri` FOREIGN KEY (`cod_teatro`) REFERENCES `teatri` (`cod_teatro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spettacoli`
--

LOCK TABLES `spettacoli` WRITE;
/*!40000 ALTER TABLE `spettacoli` DISABLE KEYS */;
INSERT INTO `spettacoli` VALUES (1,'Appunti per un film sulla lotta di classe','Ascanio Celestini','Ascanio Celestini',20,1),(2,'Il birraio di Preston','Andrea Camilleri','Giuseppe Dipasquale',40,1),(3,'La Traviata','Giuseppe Verdi','Laurent Pelly',50,2),(4,'La Bohème','Giacomo Puccini','Giuseppe Patroni Griffi',65,2),(5,'Poveri, ma belli','Gianni Togni','Massimo Ranieri',25,3),(6,'Il sogno del piccolo imperatore','Gian Mesturino ','Alberto Barbi',30,3);
/*!40000 ALTER TABLE `spettacoli` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teatri`
--

DROP TABLE IF EXISTS `teatri`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teatri` (
  `cod_teatro` int NOT NULL,
  `cod_spettacolo` int DEFAULT NULL,
  `nome` varchar(30) DEFAULT NULL,
  `indirizzo` varchar(30) DEFAULT NULL,
  `citta` varchar(25) DEFAULT 'Torino',
  `provincia` varchar(2) DEFAULT 'To',
  `telefono` varchar(14) DEFAULT NULL,
  `posti` int NOT NULL,
  PRIMARY KEY (`cod_teatro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teatri`
--

LOCK TABLES `teatri` WRITE;
/*!40000 ALTER TABLE `teatri` DISABLE KEYS */;
INSERT INTO `teatri` VALUES (1,NULL,'Teatro Carignano','Piazza Carignano 6','Torino','TO','011/3456759',875),(2,NULL,'Teatro Regio','Piazza Castello 2','Torino','TO','011/9870654',1592),(3,NULL,'Teatro Alfieri','Piazza Solferino 4','Torino','TO','011/6574895',1500);
/*!40000 ALTER TABLE `teatri` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-26 10:38:09
