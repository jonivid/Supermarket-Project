-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: supermarket
-- ------------------------------------------------------
-- Server version	8.0.24

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
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `cart_id` bigint NOT NULL,
  `final_price` decimal(9,2) NOT NULL,
  `shipping_city` varchar(45) NOT NULL,
  `shipping_street` varchar(45) NOT NULL,
  `shipping_date` date NOT NULL,
  `date_created` date NOT NULL,
  `credit_card` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cart_id_UNIQUE` (`cart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,3,17,56.00,'holon','eilat ','2021-09-14','2021-09-08',1234),(2,3,19,26.00,'bat yam','dov oz','2021-09-07','2021-09-08',1234),(3,3,24,34.00,'h','g','2021-09-06','2021-09-08',1234),(6,3,25,34.00,'r','r','2021-09-08','2021-09-08',1234),(8,3,26,30.00,'2','2','2021-09-23','2021-09-08',3344),(9,3,27,7.98,'ss','dd','2021-09-08','2021-09-08',1234),(10,3,28,7.98,'y','r','2021-09-24','2021-09-08',1234),(68,3,120,39.00,'Tel Aviv','ramot','2021-09-22','2021-09-16',1234),(69,4,122,31.93,'Ashdod','אילת 27ב\'','2021-09-17','2021-09-18',1234),(78,4,133,200.00,'Ashdod','אילת 27ב\'','2021-09-20','2021-09-18',1234),(79,4,134,78.00,'Ashdod','אילת 27ב\'','2021-09-20','2021-09-18',1234),(80,3,121,74.00,'Tel Aviv','ramot','2021-09-20','2021-09-18',1234),(81,4,135,1010.00,'Ashdod','gushen','2021-09-20','2021-09-18',1234),(82,4,137,427.00,'Ashdod','אילת 27ב\'','2021-09-21','2021-09-18',1234),(83,4,138,8.00,'Ashdod','אילת 27ב\'','2021-09-20','2021-09-18',1234),(84,4,139,246.00,'Ashdod','אילת 27ב\'','2021-09-22','2021-09-18',3334),(85,4,140,372.00,'Ashdod','אילת 27ב\'','2021-09-21','2021-09-18',1234),(87,4,141,528.00,'Ashdod','אילת 27ב\'','2021-09-21','2021-09-18',1231),(89,4,142,139.00,'Ashdod','אילת 27ב\'','2021-09-21','2021-09-18',1234);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-19 18:23:36
