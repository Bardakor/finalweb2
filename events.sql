-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 10 déc. 2023 à 01:31
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `events_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `time` time DEFAULT NULL,
  `petsAllowed` tinyint(1) DEFAULT NULL,
  `organizer` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `events`
--

INSERT INTO `events` (`id`, `category`, `title`, `description`, `location`, `date`, `time`, `petsAllowed`, `organizer`, `createdAt`, `updatedAt`) VALUES
(1, 'nature', 'camp', 'camp in the forest', 'Canada', '2023-12-20 00:00:00', '22:22:00', 1, 'admin', '2023-12-10 00:17:27', '2023-12-10 00:17:27'),
(2, 'animal welfare', 'race of dog', 'the fastest dog win !', 'paris', '2023-12-20 00:00:00', '12:00:00', 1, 'admin', '2023-12-10 00:18:24', '2023-12-10 00:18:24'),
(3, 'education', 'java lecture', 'java programming', 'Cracow', '2023-12-20 00:00:00', '14:00:00', 1, 'admin', '2023-12-10 00:19:10', '2023-12-10 00:19:10'),
(4, 'food', 'Macdo', 'i like cheese burger', 'new york', '2023-12-19 00:00:00', '21:01:00', 1, 'paul', '2023-12-10 00:20:29', '2023-12-10 00:20:29'),
(5, 'community', 'Catholicism', 'Group of catholic', 'Italy', '2023-12-05 00:00:00', '00:00:00', 1, 'paul', '2023-12-10 00:22:09', '2023-12-10 00:22:09'),
(6, 'education', 'AGH', 'engineering school ', 'cracow', '2023-12-12 00:00:00', '21:00:00', 1, 'paul', '2023-12-10 00:23:40', '2023-12-10 00:23:40');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
