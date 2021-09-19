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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `street` varchar(45) NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT '0',
  `id_number` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_number_UNIQUE` (`id_number`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin@admin.com','b2367c84172ae8938a7aa7837be50a48','Yehonatan','Vidal','Holon','Eilat',1,300965530),(3,'tester2@tester.com','b2367c84172ae8938a7aa7837be50a48','ben','tester','Tel Aviv','ramot',0,123456789),(4,'mosh@gmail.com','b2367c84172ae8938a7aa7837be50a48','Moshe','JK','Ashdod','אילת 27ב\'',0,941941941),(5,'yonivid@gmail.com','b2367c84172ae8938a7aa7837be50a48','yaron','mazor','Ashkelon','banea',0,300965876),(6,'jjj@gmail.com','b2367c84172ae8938a7aa7837be50a48','kobi','maoz','Tel Aviv','barakn',0,123456549),(7,'yonivid1@gmail.com','b2367c84172ae8938a7aa7837be50a48','hilel','naim','Rishon Lezion','aderet',0,987678521),(8,'yonivid@gm222ail.com','b2367c84172ae8938a7aa7837be50a48','timi','kond','Ashkelon','ghh',0,123488886),(9,'yonivid@gmwwail.com','b2367c84172ae8938a7aa7837be50a48','יהונתן','וידל','Ashkelon','אילת 27ב\'',0,123456733),(10,'oto@gmail.com','b2367c84172ae8938a7aa7837be50a48','adada','adasdsa','Haifa','dasdad',0,888888888),(11,'yonivi222d@gmail.com','b2367c84172ae8938a7aa7837be50a48','1234','1234','Tel Aviv','1234',0,123456678),(12,'loginaftereg@gmail.com','b2367c84172ae8938a7aa7837be50a48','login after register','login after register','Tel Aviv','login',0,123400000);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
