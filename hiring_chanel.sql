-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2020 at 04:16 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.1.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hiring_chanel`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id` varchar(50) NOT NULL,
  `name` varchar(25) DEFAULT NULL,
  `logo` varchar(125) DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id`, `name`, `logo`, `location`, `description`, `email`) VALUES
('1fd0e67a-9097-4577-b5e4-190fd90e0666', 'Shopee', 'http://localhost:3000/company/logo-1577327180585.jpg', 'Singapura', 'Online Shop', 'shopee@mail.com'),
('2acf6293-a4e2-4408-990f-630976899e49', 'Tokopedia', 'http://localhost:3000/company/logo-1577282386047.jpg', 'Jakarta, DKI Jakarta', 'Online Shop', 'tokopedia@mail.com'),
('c72386cd-47f6-460c-9c79-8f9d02261d2b', 'Google', 'http://localhost:3000/company/logo-1577303536322.jpg', 'California', 'Perusahaan yang berkekhususan pada jasa dan produk Internet', 'google@mail.com'),
('d825762e-d18a-4c9c-98d4-ed42daf8da47', 'Telkom Indonesi', 'http://localhost:3000/company/logo-1577283214418.png', 'Jakarta, DKI Jakarta', 'Perusahaan informasi dan komunikasi serta penyedia jasa dan jaringan telekomunikasi ', 'telkom@mail.com');

-- --------------------------------------------------------

--
-- Table structure for table `engineer`
--

CREATE TABLE `engineer` (
  `id` varchar(50) NOT NULL,
  `name` varchar(25) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `skill` varchar(500) DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `showcase` varchar(225) DEFAULT NULL,
  `salary` varchar(50) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `date_created` date DEFAULT NULL,
  `date_updated` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `engineer`
--

INSERT INTO `engineer` (`id`, `name`, `description`, `skill`, `location`, `date_of_birth`, `showcase`, `salary`, `email`, `date_created`, `date_updated`) VALUES
('17486089-8b60-453e-b29a-fcf387f0a78d', 'Ansel Elgard', 'Fullstack Developer', 'JavaSript, Express Js, Node Js, React JS, React Native, MySQL', 'New York', '1994-03-14', 'http://localhost:3000/engineer/showcase-1577626255678.jpg', '12000000', 'ansel@mail.com', '2019-12-29', '2019-12-29'),
('271d7c85-0493-495f-8401-7ebad64f6c10', 'Tye Sheridan', 'Fullstack Developer', 'PHP, JavaScript, C#', 'Texas', '1996-11-11', 'http://localhost:3000/engineer/showcase-1577259766516.jpg', '9000000', 'tye@mail.com', '2019-12-25', '2019-12-25'),
('429efe3f-2e45-4913-a3ca-5cdc64941485', 'Miley Cyrus', 'Back end Developer', 'JavaSript, Express Js, Node JS', 'Franklin', '1992-11-23', 'http://localhost:3000/engineer/showcase-1577209024684.jpg', '6000000', 'miley@mail.com', '2019-12-25', '2019-12-25'),
('5e8801fd-abc1-4a98-96d2-224ae9b8066f', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'alfatah@mail.com', '2020-01-02', '2020-01-02'),
('62a1470d-b9ab-43d2-8341-c89e2f7f3bc0', 'Maisie Williams', 'Frontend Development', 'PHP, JavaScript, HTML', 'Bristol', '1997-04-15', 'http://localhost:3000/engineer/showcase-1577256664970.jpg', '7500000', 'maisie@mail.com', '2019-12-25', '2019-12-25'),
('84811bd3-25f2-4304-90b9-a666c5313a93', 'Keylie Jenner', 'Frontend Development', 'PHP, JavaScript, HTML, C++', 'California', '1997-08-10', 'http://localhost:3000/engineer/showcase-1577243462256.jpg', '7000000', 'keylie@mail.com', '2019-12-25', '2019-12-25'),
('91f6ecf5-ad09-45a1-888c-35c58724f1bf', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'ahmad@mail.com', '2020-01-01', '2020-01-01'),
('a6fb7c69-2137-42ef-97a4-c4f1ffeb606e', 'Justin Bieber', 'Front end Developer', 'JavaSript, React JS', 'Boca Raton', '1994-03-01', 'http://localhost:3000/engineer/showcase-1577208594094.jpg', '6000000', 'justin@mail.com', '2019-12-25', '2019-12-25'),
('b22c35a6-747e-4c8a-84b5-77747b4617dc', 'Selena Gomes', 'Fullstack Developer', 'JavaSript, Express JS, React JS, Lareval', 'Texas', '1992-07-22', 'http://localhost:3000/engineer/showcase-1577207802487.jpg', '8000000', 'selena@mail.com', '2019-12-25', '2019-12-25'),
('c1743a33-8b17-46f3-8b51-378dd807d939', 'Nick Jones', 'Fullstack Developer', 'JavaSript, Express Js, Node Js, React JS, React Native, MySQL', 'Dallas', '1992-09-16', 'http://localhost:3000/engineer/showcase-1577209327141.jpg', '12000000', 'nick@mail.com', '2019-12-25', '2019-12-25'),
('cd52a19d-5550-491b-afd0-5fc3605b4dfc', 'Shawn Mendes', 'Fullstack Developer', 'JavaSript, React JS, Lareval', 'Canada', '1998-08-08', 'http://localhost:3000/engineer/showcase-1577208029049.jpg', '8000000', 'shawn@mail.com', '2019-12-25', '2019-12-25'),
('d0eb27b8-71ea-482c-b912-b59dbfbc47c2', 'Demi Lovato', 'Fullstack Developer', 'JavaSript, Express JS, Node Js, React JS', 'Dallas', '1992-08-20', 'http://localhost:3000/engineer/showcase-1577207476873.jpg', '8000000', 'demi@mail.com', '2019-12-25', '2019-12-25'),
('da75c6e0-7b2d-4b0f-8b66-7d1b66199fa7', 'Ariana Grande', 'Front end Developer', 'JavaSript, React JS, React Native', 'Boca Raton', '1993-06-26', 'http://localhost:3000/engineer/showcase-1577208319313.jpg', '7000000', 'ariana@mail.com', '2019-12-25', '2019-12-25');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(50) NOT NULL,
  `email` varchar(225) NOT NULL,
  `password` varchar(225) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `role`) VALUES
('17486089-8b60-453e-b29a-fcf387f0a78d', 'ansel@mail.com', '$2a$08$KI/iqXQPKuKzDobLqnyM2e1AdfrVtgMLtWENSX2.9AievS01z1kuK', 'Engineer'),
('5e8801fd-abc1-4a98-96d2-224ae9b8066f', 'alfatah@mail.com', '$2a$08$NYCgRaJPnW1wlqz5T.CIge44xtq9zJ/6HPZznmkkZJLhpYQIksGN.', 'Engineer'),
('91f6ecf5-ad09-45a1-888c-35c58724f1bf', 'ahmad@mail.com', '$2a$08$3E0kh8yIMY9C9LWjdHzGVuwo6DXS3lZ8cZSgqXaOQwLWr2lFSyApy', 'Engineer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `engineer`
--
ALTER TABLE `engineer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
