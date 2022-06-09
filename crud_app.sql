-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 09, 2022 at 06:18 PM
-- Server version: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `crud_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `newses`
--

CREATE TABLE IF NOT EXISTS `newses` (
`News_ID` int(11) NOT NULL,
  `News_title` varchar(100) NOT NULL,
  `News_Author` varchar(100) NOT NULL,
  `News_Content` varchar(500) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `newses`
--

INSERT INTO `newses` (`News_ID`, `News_title`, `News_Author`, `News_Content`) VALUES
(4, 'sadsadaszxcxcxzc', 'cvcvcxvxcvxcv', 'asdsadrwqdfdsfdfds'),
(5, 'asdsidnoin', 'asdoisajdoisdaoidbnsoiad', 'asddoinsadoiasdhnasoidsnadoinweoinfriuvnriufgn'),
(6, 'cooking blog', 'himel', 'asidjosaidnsaiodhasiubiusab'),
(7, 'sadsd', 'asdsaddsadas', 'asdasdsad');

-- --------------------------------------------------------

--
-- Table structure for table `user_db`
--

CREATE TABLE IF NOT EXISTS `user_db` (
`id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(45) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Dumping data for table `user_db`
--

INSERT INTO `user_db` (`id`, `username`, `email`, `password`) VALUES
(4, 'nihal', 'nihal@gmail.com', '123'),
(6, 'newname', 'newname@gmail.com', '45678'),
(12, 'Debasish Mohan Singha', 'debasishsingha.1516@gmail.com', '123'),
(16, 'himel', 'himel@gmail.com', '123'),
(18, 'asdsa', 'asdsa@gmail.com', 'asdsa');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `newses`
--
ALTER TABLE `newses`
 ADD PRIMARY KEY (`News_ID`);

--
-- Indexes for table `user_db`
--
ALTER TABLE `user_db`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `username_UNIQUE` (`username`), ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `newses`
--
ALTER TABLE `newses`
MODIFY `News_ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `user_db`
--
ALTER TABLE `user_db`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
