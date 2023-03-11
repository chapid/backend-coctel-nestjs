-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-03-2023 a las 00:32:43
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cocteldb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coctel`
--

CREATE TABLE `coctel` (
  `id_coctel` varchar(255) NOT NULL,
  `nombre_coctel` varchar(255) NOT NULL,
  `keys_coctel` varchar(255) NOT NULL,
  `instr_coctel` varchar(255) NOT NULL,
  `data_coctel` varchar(255) NOT NULL,
  `categoria_coctel` varchar(255) NOT NULL,
  `img_coctel` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `coctel`
--

INSERT INTO `coctel` (`id_coctel`, `nombre_coctel`, `keys_coctel`, `instr_coctel`, `data_coctel`, `categoria_coctel`, `img_coctel`) VALUES
('1116438', 'Brandy Flip', 'Alcoholic, Brandy, Egg, Sugar', 'Sin instrucciones', 'Whiskey sour glass', 'Ordinary Drink', 'https://www.thecocktaildb.com/images/media/drink/6ty09d1504366461.jpg'),
('1213015', 'Scooter', 'Alcoholic, Brandy, Amaretto, Light cream', 'Sin instrucciones', 'Cocktail glass', 'Ordinary Drink', 'https://www.thecocktaildb.com/images/media/drink/twuptu1483388307.jpg'),
('1350151', 'ABC', 'Alcoholic, Amaretto, Baileys irish cream, Cognac', 'Coloque todos los ingredientes en un vaso de chupito.', 'Shot glass', 'Shot', 'https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg'),
('17835241', 'Frosé', 'Alcoholic, Rose, Sugar, Strawberries', 'Sin instrucciones', 'Cocktail glass', 'Cocktail', 'https://www.thecocktaildb.com/images/media/drink/b4cadp1619695347.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `coctel`
--
ALTER TABLE `coctel`
  ADD PRIMARY KEY (`id_coctel`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
