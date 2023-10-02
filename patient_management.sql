-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 02, 2023 at 08:46 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `patient_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `id` int(32) NOT NULL,
  `name` varchar(255) NOT NULL,
  `contact` int(32) NOT NULL,
  `email` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `allergy` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`id`, `name`, `contact`, `email`, `dob`, `allergy`) VALUES
(1, 'New_pati', 1010101, 'newpatient@gmail.co', '2000-11-23', 'pean'),
(2, 'New_patient', 101010, 'newpatient@gmail.com', '2000-11-23', 'peanuts'),
(3, 'PatientAfterAuth', 2147483647, 'patientAfterAuth@gmail.com', '2000-12-25', 'milk');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `last_login` date NOT NULL,
  `permission` varchar(255) NOT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `last_login`, `permission`, `status`) VALUES
(1, 'admin1', 'admin1@ghospital.com', '$2b$10$bbeCCdJLG0Xto4UgfmtFf.bgtEp5t4gjxa4OsLiPiq6szatwneQZy', '2023-09-22', 'super_admin', 'active'),
(3, 'admin3', 'admin3@ghospital.com', '$2b$10$0Jfp72ybvCv./5FOiukCV.fpHxc8fGlk4.bYyla//ELAh5IitmQUa', '2023-09-29', 'super_admin', 'active'),
(4, 'admin4', 'admin4@ghospital.com', '$2b$10$hc/texzripwnQFwfD25emecnoXjWZqva/wsI.umee6lH9Mu1K30aO', '2023-09-22', 'view', 'active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
