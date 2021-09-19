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
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `date_created` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL DEFAULT 'open',
  PRIMARY KEY (`id`),
  KEY `users` (`user_id`),
  CONSTRAINT `users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=144 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (17,3,'2021-08-26','close'),(19,3,'2021-09-08','close'),(24,3,'2021-09-08','close'),(25,3,'2021-09-08','close'),(26,3,'2021-09-08','close'),(27,3,'2021-09-08','close'),(28,3,'2021-09-08','close'),(29,3,'2021-09-08','close'),(30,3,'2021-09-08','close'),(31,3,'2021-09-09','close'),(32,3,'2021-09-09','close'),(33,3,'2021-09-09','close'),(55,3,'2021-09-11','close'),(56,3,'2021-09-11','close'),(57,3,'2021-09-11','close'),(59,3,'9/12/2021, 1:16:21 AM','close'),(60,3,'9/12/2021, 1:21:39 AM','close'),(61,3,'9/12/2021, 1:21:49 AM','close'),(62,3,'9/12/2021, 1:23:44 AM','close'),(63,3,'9/12/2021, 1:24:05 AM','close'),(64,3,'9/12/2021, 1:25:24 AM','close'),(65,3,'9/12/2021, 1:25:51 AM','close'),(66,3,'9/12/2021, 1:26:01 AM','close'),(67,3,'9/12/2021, 1:30:20 AM','close'),(68,3,'9/12/2021, 1:30:35 AM','close'),(69,3,'9/12/2021, 1:30:47 AM','close'),(70,3,'9/12/2021, 1:30:59 AM','close'),(71,3,'9/12/2021, 1:31:20 AM','close'),(72,3,'9/12/2021, 1:31:37 AM','close'),(73,3,'9/12/2021, 1:32:54 AM','close'),(74,3,'9/12/2021, 1:37:54 AM','close'),(75,4,'9/12/2021, 1:45:02 AM','close'),(76,4,'9/12/2021, 10:42:49 PM','close'),(77,4,'9/12/2021, 10:44:37 PM','close'),(78,4,'9/12/2021, 10:46:01 PM','close'),(79,4,'9/12/2021, 10:47:40 PM','close'),(80,4,'9/12/2021, 10:52:00 PM','close'),(81,4,'9/13/2021, 1:07:14 AM','close'),(82,3,'9/13/2021, 8:37:20 PM','close'),(83,3,'9/13/2021, 8:37:49 PM','close'),(84,3,'9/16/2021, 10:33:29 PM','close'),(85,3,'9/17/2021, 12:03:37 AM','close'),(86,3,'9/17/2021, 12:10:12 AM','close'),(87,3,'9/17/2021, 12:23:46 AM','close'),(88,3,'9/17/2021, 12:32:25 AM','close'),(89,3,'9/17/2021, 12:33:44 AM','close'),(90,3,'9/17/2021, 12:34:50 AM','close'),(91,3,'9/17/2021, 12:36:40 AM','close'),(92,3,'9/17/2021, 12:37:53 AM','close'),(93,3,'9/17/2021, 12:38:20 AM','close'),(94,3,'9/17/2021, 12:39:05 AM','close'),(95,3,'9/17/2021, 12:39:36 AM','close'),(96,3,'9/17/2021, 12:43:11 AM','close'),(97,3,'9/17/2021, 12:47:01 AM','close'),(98,3,'9/17/2021, 12:51:36 AM','close'),(99,3,'9/17/2021, 12:55:00 AM','close'),(100,3,'9/17/2021, 12:58:07 AM','close'),(101,3,'9/17/2021, 12:59:59 AM','close'),(102,3,'9/17/2021, 1:04:00 AM','close'),(103,3,'9/17/2021, 1:07:01 AM','close'),(104,3,'9/17/2021, 1:08:16 AM','close'),(105,3,'9/17/2021, 1:09:02 AM','close'),(106,3,'9/17/2021, 1:24:23 AM','close'),(107,3,'9/17/2021, 1:25:19 AM','close'),(108,3,'9/17/2021, 1:27:11 AM','close'),(109,3,'9/17/2021, 1:30:45 AM','close'),(110,3,'9/17/2021, 1:37:51 AM','close'),(111,3,'9/17/2021, 1:47:21 AM','close'),(112,3,'9/17/2021, 1:51:22 AM','close'),(113,3,'9/17/2021, 1:55:18 AM','close'),(114,3,'9/17/2021, 1:58:08 AM','close'),(115,3,'9/17/2021, 2:00:52 AM','close'),(116,3,'9/17/2021, 2:14:45 AM','close'),(117,3,'9/17/2021, 2:19:05 AM','close'),(118,3,'9/17/2021, 2:21:05 AM','close'),(119,3,'9/17/2021, 2:22:26 AM','close'),(120,3,'9/17/2021, 2:24:27 AM','close'),(121,3,'9/17/2021, 2:30:25 AM','close'),(122,4,'9/18/2021, 10:47:25 PM','close'),(125,4,'9/18/2021, 10:52:40 PM','close'),(126,4,'9/19/2021, 12:37:50 AM','close'),(127,4,'9/19/2021, 12:39:44 AM','close'),(128,4,'9/19/2021, 12:43:00 AM','close'),(129,4,'9/19/2021, 12:43:58 AM','close'),(130,4,'9/19/2021, 12:44:55 AM','close'),(131,4,'9/19/2021, 12:50:06 AM','close'),(132,4,'9/19/2021, 1:01:24 AM','close'),(133,4,'9/19/2021, 1:03:05 AM','close'),(134,4,'9/19/2021, 2:01:54 AM','close'),(135,4,'9/19/2021, 2:07:25 AM','close'),(136,3,'9/19/2021, 2:54:38 AM','open'),(137,4,'9/19/2021, 3:48:59 PM','close'),(138,4,'9/19/2021, 3:50:11 PM','close'),(139,4,'9/19/2021, 3:51:18 PM','close'),(140,4,'9/19/2021, 3:55:28 PM','close'),(141,4,'9/19/2021, 3:57:18 PM','close'),(142,4,'9/19/2021, 3:58:37 PM','close'),(143,4,'9/19/2021, 4:01:55 PM','open');
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
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
