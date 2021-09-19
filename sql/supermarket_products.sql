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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `category_id` bigint NOT NULL,
  `price` decimal(9,2) NOT NULL,
  `image` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categories` (`category_id`),
  CONSTRAINT `categories` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'coca cola glass bottle',15,4.99,'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/15-09-26-RalfR-WLC-0098.jpg/1200px-15-09-26-RalfR-WLC-0098.jpg'),(2,'Coca Cola zero 0.33',15,3.99,'https://static.tildacdn.com/tild3234-3662-4130-b366-633761663964/Coca-Cola-Zero-Sugar.jpg'),(3,'Coca Cola Vanilla 0.33',15,3.99,'https://www.bsweet.co.il/images/itempics/5449000098917_20022021015158_large.jpg'),(4,'Coca Cola 1.5 liter ',15,5.99,'https://images.heb.com/is/image/HEBGrocery/001397056?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0'),(7,'Philips avnet bottle ',12,139.00,'https://pic.baby-express.net/Philips-Avent-Anti-colic-with-AirFree-valve-with-baby-bottle-125-ml.16173a.jpg'),(8,'Diapers size 3 Pampers',12,37.00,'https://m.media-amazon.com/images/I/81wsLWs-wBL._AC_SL1500_.jpg'),(9,'Diapers size 1 Pampers',12,34.00,'https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFvVVp5SWVaUFMuX0FDX1NMMTUwMF8uanBn.jpg'),(10,'Diapers size 2 Pampers',12,35.00,'https://m.media-amazon.com/images/I/61DaL3OCSUS._AC_SX425_.jpg'),(11,'Ultra-light silicone pacifier',12,15.00,'https://m.media-amazon.com/images/I/71esq12qLxL._SL1500_.jpg'),(12,'Goldstar beer 6 pack',16,15.00,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/OTY34_Z_P_8464741_1.png'),(13,'Carlsberg beer 6 pack',16,15.00,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/AHA56_Z_P_7290013585349_1.png'),(14,'STELLA ARTOIS beer 6 pack',16,15.00,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/RCE48_Z_P_5410228144755_1.png'),(15,'Sweet Challa bread',9,5.99,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/FAK16_Z_P_1902301_1.png'),(16,'Gidron Challa',9,3.99,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/FBI22_Z_P_1902325_1.png'),(17,'Onion bread',9,5.99,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/GUN32_Z_P_4504748_1.png'),(20,'barilla fusilli pasta',13,10.00,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/NVP60_Z_P_8076800105988_1.png'),(23,'Sirloin meat',11,140.00,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/JQU38_Z_P_9392807_1.png'),(27,'Filet steak',11,100.00,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/JXG44_Z_P_9392975_1.png'),(28,'Baked rye bread',9,7.00,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/WEG34_Z_P_3495733_1.png'),(29,' Turkish Mushroom BoraxCinnamon Crunch Cake',14,15.00,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/FSR20_Z_P_4170080_1.png'),(30,' Halva Chocolate Crunch Cake',14,16.00,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/FTV14_Z_P_4170110_1.png'),(31,'Doritos snack with a natural taste',14,4.00,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/BJN44_Z_P_7290100850930_1.png'),(32,'Mix sweet snacks',14,10.00,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/APO38_Z_P_7290100850411_1.png'),(33,'Cheetos cheese',14,3.00,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/AJB48_Z_P_7290106720626_1.png'),(34,'Freedom eggs',13,20.00,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/KUC58_Z_P_7296073410577_1.png'),(35,'Frozen blueberries',10,12.00,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/TTG20_Z_P_101927_1.png'),(36,'Frozen sweet cherry',10,13.00,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/RCI10_Z_P_100135_1.png'),(37,'Frozen broccoli ',10,15.00,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/BRS24_Z_P_107295_1.png'),(38,'Frozen green peas',10,12.00,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/XUZ24_Z_P_104676_1.png'),(39,'Milk in a carton',13,4.00,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/JTJ16_Z_P_42442_1.png'),(40,'Milk fat in the jug',13,7.00,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/JLT16_Z_P_42244_1.png');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-19 18:23:35
