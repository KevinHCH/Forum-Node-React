-- MySQL dump 10.13  Distrib 8.0.19, for Linux (x86_64)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `COMMENTS`
--

DROP TABLE IF EXISTS `COMMENTS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `COMMENTS` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_post` int NOT NULL,
  `id_user` int NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `comment` mediumtext,
  `published` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `fks_user` (`id_user`),
  KEY `fks_posts` (`id_post`),
  CONSTRAINT `fks_posts` FOREIGN KEY (`id_post`) REFERENCES `POSTS` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fks_user` FOREIGN KEY (`id_user`) REFERENCES `USERS` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `COMMENTS`
--

LOCK TABLES `COMMENTS` WRITE;
/*!40000 ALTER TABLE `COMMENTS` DISABLE KEYS */;
INSERT INTO `COMMENTS` VALUES (41,4,12,'2020-03-09 04:18:33','looks like heave to me',0),(42,4,12,'2020-03-09 04:18:59','promises promises',1),(45,12,9,'2020-03-10 03:53:25','Hello post',0),(46,12,9,'2020-03-11 05:33:21','this is a new comment',1),(47,4,12,'2020-03-17 05:12:55','something great',1),(48,4,12,'2020-03-17 05:14:09','bury my love',1),(49,4,12,'2020-03-17 05:14:36','donee',1),(50,4,12,'2020-03-17 05:15:06','asdasd',1),(51,4,12,'2020-03-17 05:16:40','asdasdddddddddd',1),(52,4,12,'2020-03-17 05:16:47','sssssss',1),(53,12,9,'2020-03-17 05:17:16','finally it works',1),(54,12,9,'2020-03-17 05:18:46','TODO:\n-Reset comments field\n-Send response to my parent component\n-Maybe another shit, who knows\n-Delete icon just if u wrote the comment, AND just if u are admin',1),(55,12,9,'2020-03-17 05:20:41','AND add CKeditor in comments',1),(56,11,9,'2020-03-17 17:03:14','s',0),(57,11,9,'2020-03-17 17:03:22','ss',0),(58,10,9,'2020-03-18 18:05:16','asdasd',1),(59,11,9,'2020-03-20 04:37:40','as',0),(60,11,9,'2020-03-20 04:37:50','add new comment',0),(61,11,9,'2020-03-20 04:40:50','asssssssssssss',0),(62,11,9,'2020-03-20 04:41:33','asdddddddd',0),(63,11,9,'2020-03-20 04:42:17','dsad',0),(64,11,9,'2020-03-20 04:43:12','aa',0),(65,11,9,'2020-03-20 04:44:36','asdasd',0),(66,11,9,'2020-03-20 04:45:10','asd',0),(67,11,9,'2020-03-20 05:13:54','asd',0),(68,11,9,'2020-03-20 05:13:56','asdasdasd',0),(69,11,9,'2020-03-20 05:14:01','brake',0),(70,11,9,'2020-03-20 05:15:30','df',0),(71,11,9,'2020-03-20 05:15:31','dfdsfsdfsdf',0),(72,11,9,'2020-03-20 05:15:37','aaaaaaa',0),(73,11,9,'2020-03-20 05:17:47','das',0),(74,11,9,'2020-03-20 05:17:48','dasdasd',0),(75,11,9,'2020-03-20 05:17:50','456546',0),(76,11,9,'2020-03-20 05:17:54','09876543',0),(77,11,9,'2020-03-20 05:17:57','\'09',0),(78,11,9,'2020-03-20 05:18:00','hhhhhhhhh',0),(79,11,9,'2020-03-20 05:27:26','asdd',0),(80,11,9,'2020-03-20 05:27:29','gggggggg',0),(81,11,9,'2020-03-20 05:27:32','jjjjjjjjjj',0),(82,11,9,'2020-03-20 05:27:34','1111111111111',0),(83,11,9,'2020-03-20 05:27:37','676765434',0),(84,11,9,'2020-03-20 05:32:27','asssssssss',0),(85,11,9,'2020-03-20 05:32:31','sssssssssssssssssss',0),(86,11,9,'2020-03-20 05:32:47','lmaoooooooooooooo',0),(87,11,9,'2020-03-20 05:33:10','ssss',0),(88,11,9,'2020-03-20 05:33:15','sass',0),(89,11,9,'2020-03-20 05:33:17','asfasf',0),(90,11,9,'2020-03-24 03:44:40','this not works',0),(91,11,9,'2020-03-24 04:45:12','ssssssss',0),(92,11,9,'2020-03-24 04:45:20','saturday night',0),(93,11,9,'2020-03-24 04:45:35','dont believe me, just watch',0),(94,11,9,'2020-03-25 16:19:43','asd',0),(95,11,9,'2020-03-25 16:19:45','asdasdasdasd',0),(96,11,9,'2020-03-25 16:19:52','in the morning',0),(97,11,9,'2020-03-25 16:24:38','1',0),(98,11,9,'2020-03-25 16:24:39','2',0),(99,11,9,'2020-03-25 16:24:41','3',0),(100,11,9,'2020-03-25 16:24:42','4',0),(101,11,9,'2020-03-25 16:24:43','5',0),(102,11,9,'2020-03-25 17:34:04','l',0),(103,11,9,'2020-03-25 17:35:03','ssadasd',0),(104,11,9,'2020-03-25 17:35:06','asdassssssss',0),(105,11,9,'2020-03-25 17:35:08','ssssssss',0),(106,11,9,'2020-03-25 17:38:08','sad',0),(107,11,9,'2020-03-25 17:39:39','s',0),(108,11,9,'2020-03-25 17:40:36','s',0),(109,11,9,'2020-03-25 17:40:38','sa',0);
/*!40000 ALTER TABLE `COMMENTS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `POSTS`
--

DROP TABLE IF EXISTS `POSTS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `POSTS` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `content` longtext,
  `resources` text,
  `published` tinyint(1) NOT NULL DEFAULT '1',
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user` (`user_id`),
  CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `USERS` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=202 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `POSTS`
--

LOCK TABLES `POSTS` WRITE;
/*!40000 ALTER TABLE `POSTS` DISABLE KEYS */;
INSERT INTO `POSTS` VALUES (1,'first post','This is my first post, created from an API','Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.','',0,'2020-01-20 08:58:44',12),(2,'first post','This is my first post, created from an API','Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.','',0,'2020-01-20 08:59:55',12),(3,'first post','This is my first post, created from an API','Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.','',1,'2020-01-20 09:00:06',12),(4,'Edite\'d post??','Editing this post','<p>HELLO</p> cuales contenian pasajes de Lore\'m Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.','',1,'2020-01-20 09:01:21',12),(5,'first post','This is my first post, created from an API','Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.','',1,'2020-01-20 09:01:37',12),(6,'first post','This is my first post, created from an API','Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.','',1,'2020-01-20 09:02:26',12),(7,'works good','This is my first post, created from an APIsdasd','<p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>','',1,'2020-01-20 09:13:49',12),(8,'first post','This is my first post, created from an API','Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.','',1,'2020-01-20 10:08:16',12),(9,'this is a fkn shit, but works','This is my first post, created from an APIsss','<p>Lorem Ipsum es simplemente el texto de relleno …er, el cual incluye versiones de Lorem Ipsum.</p>','',1,'2020-01-20 10:08:26',9),(10,'second post','This is my first post, created from an API','Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.','',1,'2020-01-20 10:08:40',9),(11,'second post updatedd??','This is my first post, created from an API','<p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>','',1,'2020-01-20 10:09:09',9),(12,'second post','This is my first post, created from an API yikes','<p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>','',1,'2020-01-20 10:09:38',9),(13,'second post','This is my first post, created from an API','Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.','',1,'2020-04-09 13:05:53',9),(14,'ssssssssssssssssssss','ssssssssssssssssssss','<p>ssssssssssssssssssssssssss</p>','',1,'2020-04-09 13:19:26',9),(191,'shake shake','shake shake','<p>shake shakeshake shake</p>','',1,'2020-04-09 16:01:56',9),(192,'shake shake','shake shake','<p>shake shakeshake shake</p>','',1,'2020-04-09 16:01:56',9),(193,'morning sun','morning sun','<p>morning sunmorning sun</p>','',1,'2020-04-09 16:02:23',9),(194,'morning sun','morning sun','<p>morning sunmorning sun</p>','',1,'2020-04-09 16:02:24',9),(195,'morning sun','morning sun','<p>morning sunmorning sun</p>','',1,'2020-04-09 16:02:25',9),(196,'morning sun','morning sun','<p>morning sunmorning sun</p>','',1,'2020-04-09 16:02:25',9),(197,'keep rising ohh','keep rising ohhkeep rising ohhkeep rising ohh','<p>keep rising ohhkeep rising ohh</p>','',1,'2020-04-09 16:02:54',9),(198,'ok, now i will use','the famous tool history','<p>to redirect to my client to the post page...maybe</p>','',1,'2020-04-09 16:03:52',9),(199,'championn','championnchampionn','<p>championnchampionn</p>','',1,'2020-04-09 16:04:36',9),(200,'can stop me now','can stop me now','<p><strong>can stop me nowcan stop me nowcan stop me nowcan stop me nowcan stop me now</strong></p><p><i>can stop me nowcan stop me now</i></p><p>&nbsp;</p><h2>can stop me nowcan stop me nowcan stop me nowcan stop me now</h2>','',1,'2020-04-09 16:05:50',9),(201,'ok','this is the description and im pretty sure this will be rendered','<p><strong>for SURE</strong></p>','',1,'2020-04-09 16:09:29',9);
/*!40000 ALTER TABLE `POSTS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ROLES`
--

DROP TABLE IF EXISTS `ROLES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ROLES` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(25) NOT NULL,
  `enable` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ROLES`
--

LOCK TABLES `ROLES` WRITE;
/*!40000 ALTER TABLE `ROLES` DISABLE KEYS */;
INSERT INTO `ROLES` VALUES (1,'admin',1),(2,'user',1),(3,'staff',1);
/*!40000 ALTER TABLE `ROLES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TOKENS`
--

DROP TABLE IF EXISTS `TOKENS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TOKENS` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `token` varchar(255) NOT NULL,
  `role_user` int NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `expires_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_tk` (`id_user`),
  KEY `fk_users_rtk` (`role_user`),
  CONSTRAINT `fk_user_tk` FOREIGN KEY (`id_user`) REFERENCES `USERS` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_users_rtk` FOREIGN KEY (`role_user`) REFERENCES `ROLES` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TOKENS`
--

LOCK TABLES `TOKENS` WRITE;
/*!40000 ALTER TABLE `TOKENS` DISABLE KEYS */;
INSERT INTO `TOKENS` VALUES (1,9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjksInJvbGUiOjEsImVtYWlsIjoiamFtaWUzQGdtYWlsLmNvbSIsImN1cnJlbnRUaW1lIjoiMjAyMC0wMy0xMVQwNDoxNzoxNC44MzhaIiwiaWF0IjoxNTgzOTAwMjM0fQ.XXZIzYkXKUdnQjMlwP2wJKSCSzt8UYsIcSCiZ9Dut0A',1,'2020-03-11 04:17:14',NULL),(2,9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjksInJvbGUiOjEsImVtYWlsIjoiamFtaWUzQGdtYWlsLmNvbSIsImN1cnJlbnRUaW1lIjoiMjAyMC0wMy0xMVQwNDoyMzo1OS40NjFaIiwiaWF0IjoxNTgzOTAwNjM5fQ.wMlT2EdMjIvCCd2imIG31cqstG8SMTzh96yVN2oD75A',1,'2020-03-11 04:23:59',NULL),(3,9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjksInJvbGUiOjEsImVtYWlsIjoiamFtaWUzQGdtYWlsLmNvbSIsImN1cnJlbnRUaW1lIjoiMjAyMC0wMy0xMVQwNDoyNTowOS40MzRaIiwiaWF0IjoxNTgzOTAwNzA5fQ.JRYfDIduxPi2JHZ7F6_IArFpE-UppHJ9tQ5eZw_kEnM',1,'2020-03-11 04:25:09',NULL),(4,9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjksInJvbGUiOjEsImVtYWlsIjoiamFtaWUzQGdtYWlsLmNvbSIsImN1cnJlbnRUaW1lIjoiMjAyMC0wMy0xMVQwNDoyNTo1Ny42NjRaIiwiaWF0IjoxNTgzOTAwNzU3fQ.vN9LqpHpX8gpfgyqcX87oVNk8-FeSB2Kjrq4CkbXSvQ',1,'2020-03-11 04:25:57',NULL),(5,9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjksInJvbGUiOjEsImVtYWlsIjoiamFtaWUzQGdtYWlsLmNvbSIsImN1cnJlbnRUaW1lIjoiMjAyMC0wMy0xMVQwNDoyNzoyNy43OTlaIiwiaWF0IjoxNTgzOTAwODQ3fQ.n4CyleR0IBWZPXgNwAKGf9LoRHx8KGvXut9WBRjbbLw',1,'2020-03-11 04:27:27',NULL),(6,9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjksInJvbGUiOjEsImVtYWlsIjoiamFtaWUzQGdtYWlsLmNvbSIsImN1cnJlbnRUaW1lIjoiMjAyMC0wMy0xMVQwNDoyODoxNy40NDFaIiwiaWF0IjoxNTgzOTAwODk3fQ.QnFy-oKNpTKbueCdi8RJmZ3liq2MgiqAvxuB0_9efVA',1,'2020-03-11 04:28:17',NULL),(7,9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjksInJvbGUiOjEsImVtYWlsIjoiamFtaWUzQGdtYWlsLmNvbSIsImN1cnJlbnRUaW1lIjoiMjAyMC0wMy0xMVQwNDoyODo1Mi41NjhaIiwiaWF0IjoxNTgzOTAwOTMyfQ.g7ZD1vHyrj-1gqsRDHUwdzzgl0H75GIyvaPjt9_GgE8',1,'2020-03-11 04:28:52',NULL),(8,9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjksInJvbGUiOjEsImVtYWlsIjoiamFtaWUzQGdtYWlsLmNvbSIsImN1cnJlbnRUaW1lIjoiMjAyMC0wMy0xMVQwNDoyOTowNi40OTRaIiwiaWF0IjoxNTgzOTAwOTQ2fQ.WtolV-rMAQvIcLLRxtxg-enJbYQd0jKDmbpWU1vmW1w',1,'2020-03-11 04:29:06',NULL),(9,9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjksInJvbGUiOjEsImVtYWlsIjoiamFtaWUzQGdtYWlsLmNvbSIsImN1cnJlbnRUaW1lIjoiMjAyMC0wMy0xMVQwNDozNDo0OC4xMzhaIiwiaWF0IjoxNTgzOTAxMjg4fQ.vsXJmUT1R8vyajaWRCL6AF5gk_TFKc-FKGXUIbSS4Eo',1,'2020-03-11 04:34:48',NULL),(10,9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjksInJvbGUiOjEsImVtYWlsIjoiamFtaWUzQGdtYWlsLmNvbSIsImN1cnJlbnRUaW1lIjoiMjAyMC0wMy0xN1QxNzowOToyNy45NTZaIiwiaWF0IjoxNTg0NDY0OTY3fQ.DTFmQN4C__ixio3ScbQyKqwafiJrrCieinAV44seks4',1,'2020-03-17 17:09:27',NULL),(11,9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjksInJvbGUiOjEsImVtYWlsIjoiamFtaWUzQGdtYWlsLmNvbSIsImN1cnJlbnRUaW1lIjoiMjAyMC0wNC0wMVQxNzozNDozMS41NDZaIiwiaWF0IjoxNTg1NzYyNDcxfQ.yrGzd1SaUAYHgWljhZM12eIHeABfvw6I8mtubMBpjCM',1,'2020-04-01 17:34:31',NULL),(12,9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjksInJvbGUiOjEsImVtYWlsIjoiamFtaWUzQGdtYWlsLmNvbSIsImN1cnJlbnRUaW1lIjoiMjAyMC0wNC0wOVQxMjoxMzo0NS42NzZaIiwiaWF0IjoxNTg2NDM0NDI1fQ.xdjlX1wuAyiIksX0Jh0wtq1IUE6Rvc2GIjgJpJT8AAU',1,'2020-04-09 12:13:45',NULL),(13,9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjksInJvbGUiOjIsImVtYWlsIjoiamFtaWUzQGdtYWlsLmNvbSIsImN1cnJlbnRUaW1lIjoiMjAyMC0wNC0wOVQxNzoyNToxMy43NzJaIiwiaWF0IjoxNTg2NDUzMTEzfQ.JXrWIamO78FK8WNkzvIlKfFLHm4MHTUl5j1NNhaE2Xk',2,'2020-04-09 17:25:13',NULL),(14,9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjksInJvbGUiOjIsImVtYWlsIjoiamFtaWUzQGdtYWlsLmNvbSIsImN1cnJlbnRUaW1lIjoiMjAyMC0wNC0wOVQxODowMjoxMS4wOTlaIiwiaWF0IjoxNTg2NDU1MzMxfQ.CC9TT5xx1iyhDCcNdJCBP_hTVoJUQfltYhdGWcLOqD8',2,'2020-04-09 18:02:11',NULL),(15,9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjksInJvbGUiOjIsImVtYWlsIjoiamFtaWUzQGdtYWlsLmNvbSIsImN1cnJlbnRUaW1lIjoiMjAyMC0wNC0wOVQxODowNjoyMi40MDJaIiwiaWF0IjoxNTg2NDU1NTgyfQ.zLiZ4Jx1tirWWvozIxQaMleDcV2UCduF2wMwLhCR6OA',2,'2020-04-09 18:06:22',NULL),(16,9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjksInJvbGUiOjIsImVtYWlsIjoiamFtaWUzQGdtYWlsLmNvbSIsImN1cnJlbnRUaW1lIjoiMjAyMC0wNC0wOVQxODowODo0My42MjNaIiwiaWF0IjoxNTg2NDU1NzIzfQ.AZbabR7ZhY3RXzuJW3oLpTmaEYR7l3b8zRghxvNYkwE',2,'2020-04-09 18:08:43',NULL),(17,9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjksInJvbGUiOjIsImVtYWlsIjoiamFtaWUzQGdtYWlsLmNvbSIsImN1cnJlbnRUaW1lIjoiMjAyMC0wNC0wOVQxODowOToxNS40OTBaIiwiaWF0IjoxNTg2NDU1NzU1fQ.HmToLWG0kB5GoPofFtzGVuc2i1Jiy0CG2bhpgoqG2ys',2,'2020-04-09 18:09:15',NULL),(18,9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjksInJvbGUiOjIsImVtYWlsIjoiamFtaWUzQGdtYWlsLmNvbSIsImN1cnJlbnRUaW1lIjoiMjAyMC0wNC0wOVQxODowOTozNS41NjFaIiwiaWF0IjoxNTg2NDU1Nzc1fQ.vPA-tT0X2joI4FOhh4-oO52ZgkbrFhoedFwosBhQvE8',2,'2020-04-09 18:09:35',NULL),(19,9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjksInJvbGUiOjIsImVtYWlsIjoiamFtaWUzQGdtYWlsLmNvbSIsImN1cnJlbnRUaW1lIjoiMjAyMC0wNC0xMFQwMzoyNzozOC4yNjZaIiwiaWF0IjoxNTg2NDg5MjU4fQ.ROi6FQUjmmtI81QmpwXhOIHvcvLm6qZKjaNWV8zeCuM',2,'2020-04-10 03:27:38',NULL),(20,45,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjQ1LCJyb2xlIjoyLCJlbWFpbCI6ImFzZEBhc2QuY29tIiwiY3VycmVudFRpbWUiOiIyMDIwLTA0LTEwVDA0OjMwOjU3LjMyMloiLCJpYXQiOjE1ODY0OTMwNTd9.Id-p0MsmE58fMkNZ0qZkaIOrT5E-5r4D5CVAoW3yANQ',2,'2020-04-10 04:30:57',NULL),(21,45,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjQ1LCJyb2xlIjoyLCJlbWFpbCI6ImFzZEBhc2QuY29tIiwiY3VycmVudFRpbWUiOiIyMDIwLTA0LTEwVDA0OjM5OjM1LjU0OVoiLCJpYXQiOjE1ODY0OTM1NzV9.CL_o-7tbyfFb2wtW8s8Hx18YlbOhmN6t1R1dSusRUbE',2,'2020-04-10 04:39:35',NULL),(22,45,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjQ1LCJyb2xlIjoyLCJlbWFpbCI6ImFzZEBhc2QuY29tIiwiY3VycmVudFRpbWUiOiIyMDIwLTA0LTEwVDA0OjQyOjA1LjIyMFoiLCJpYXQiOjE1ODY0OTM3MjV9.IVwtA1z-fRnDMv2ZNwmoNxpgMJeY5Sel4nc6iomK1hc',2,'2020-04-10 04:42:05',NULL);
/*!40000 ALTER TABLE `TOKENS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USERS`
--

DROP TABLE IF EXISTS `USERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `USERS` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `surname` varchar(30) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(200) NOT NULL,
  `username` varchar(30) NOT NULL,
  `activated` tinyint(1) NOT NULL DEFAULT '0',
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `role_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `fk_role` (`role_id`),
  CONSTRAINT `fk_role` FOREIGN KEY (`role_id`) REFERENCES `ROLES` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USERS`
--

LOCK TABLES `USERS` WRITE;
/*!40000 ALTER TABLE `USERS` DISABLE KEYS */;
INSERT INTO `USERS` VALUES (4,'admin','admin','admin@gmail.com','$2y$10$PDYK3YFC7/UJCOgaiOQjWOGoAfKgRhKxleflK0g56qnblZ7HbONLS','admin',1,'2020-01-18 05:25:57',1),(5,'john','jackson','john@gmail.com','$2y$10$PDYK3YFC7/UJCOgaiOQjWOGoAfKgRhKxleflK0g56qnblZ7HbONLS','john_j',1,'2020-01-18 05:26:27',3),(6,'jack','johnson','jack@gmail.com','$2y$10$PDYK3YFC7/UJCOgaiOQjWOGoAfKgRhKxleflK0g56qnblZ7HbONLS','jack_j',1,'2020-01-18 05:26:27',3),(7,'jimmy','stevens','jimmy@gmail.com','$2y$10$PDYK3YFC7/UJCOgaiOQjWOGoAfKgRhKxleflK0g56qnblZ7HbONLS','jimmy_j',1,'2020-01-18 05:26:27',3),(9,'jamie','daniels','jamie3@gmail.com','$2b$10$jaZ81o7kAblfNko7nbT/eeR.NxR85QxEg1ipJvcKECC/b/lB24SpO','jamie_d',1,'2020-01-18 06:25:49',2),(10,'lana','stevens','lana@gmail.com','$2b$10$D3cmkzwXJVKz3iouPEVtlOKcxS5zWG0G.I3Wqq9ZJGmW7Q3ugBSq.','lana_s',1,'2020-01-19 04:23:26',3),(11,'Tom','smith','tom@gmail.com','$2b$10$XxvRWgsjSINTZETieiWYcOyzzDdOJ00RHrHC7p3lVUsiPKFxSbJiy','Tom_s',1,'2020-01-20 06:10:49',3),(12,'sam','Smith','sam@gmail.com','$2b$10$5TX3FYj6d4yxiA0YCp/zXe/a3zgK.3MtZoj16r5ZM2sZte4ziml1a','Sam_s',1,'2020-01-20 06:16:33',3),(17,'angel','Spens','angel@gmail.com','$2b$10$Y7Bh8paoUt2mCPpQKRV38.E6QULfHI7zYsfJ8G2Um4hDMBzgEY1ki','Angel_s',1,'2020-01-20 08:05:54',3),(45,'asd','asd','asd@asd.com','$2b$10$.NirChb0RYwm/DboTwruPOkyF8Y.t2lX1QRrOG/6d51x7Y8im/tMa','asd',1,'2020-04-10 04:27:19',2),(46,'aaa','aaa','aaa@aaa.com','$2b$10$XS/.jbvkKS6bNEW7EmSbWeW06wLe4iHOp1fUp3hvAogd4J8yyrMTy','aaaa',1,'2020-04-10 04:30:28',2);
/*!40000 ALTER TABLE `USERS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES (1,'jimmy'),(2,'John'),(3,'Jamie');
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-10  4:46:57
