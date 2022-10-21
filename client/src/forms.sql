-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 15 Paź 2022, 19:37
-- Wersja serwera: 10.4.25-MariaDB
-- Wersja PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `forms`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `answers`
--

CREATE TABLE `answers` (
  `answerId` int(11) NOT NULL,
  `answerText` text NOT NULL,
  `question` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `forms`
--

CREATE TABLE `forms` (
  `formId` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `author` int(11) NOT NULL,
  `public` tinyint(1) NOT NULL DEFAULT 0,
  `answers` int(11) NOT NULL,
  `changeDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `images`
--

CREATE TABLE `images` (
  `imageId` int(11) NOT NULL,
  `imageSrc` text NOT NULL,
  `imageDescription` text DEFAULT NULL,
  `question` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `questions`
--

CREATE TABLE `questions` (
  `questionId` int(11) NOT NULL,
  `form` int(11) NOT NULL,
  `content` text DEFAULT NULL,
  `multiCheck` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `surname` varchar(60) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `usersquestions`
--

CREATE TABLE `usersquestions` (
  `user` int(11) NOT NULL,
  `answer` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`answerId`),
  ADD KEY `question` (`question`);

--
-- Indeksy dla tabeli `forms`
--
ALTER TABLE `forms`
  ADD PRIMARY KEY (`formId`),
  ADD KEY `author` (`author`);

--
-- Indeksy dla tabeli `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`imageId`),
  ADD KEY `question` (`question`);

--
-- Indeksy dla tabeli `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`questionId`),
  ADD KEY `form` (`form`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- Indeksy dla tabeli `usersquestions`
--
ALTER TABLE `usersquestions`
  ADD KEY `user` (`user`),
  ADD KEY `answer` (`answer`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `answers`
--
ALTER TABLE `answers`
  MODIFY `answerId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `forms`
--
ALTER TABLE `forms`
  MODIFY `formId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `images`
--
ALTER TABLE `images`
  MODIFY `imageId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `questions`
--
ALTER TABLE `questions`
  MODIFY `questionId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`question`) REFERENCES `questions` (`questionId`);

--
-- Ograniczenia dla tabeli `forms`
--
ALTER TABLE `forms`
  ADD CONSTRAINT `forms_ibfk_1` FOREIGN KEY (`author`) REFERENCES `users` (`userId`);

--
-- Ograniczenia dla tabeli `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`question`) REFERENCES `questions` (`questionId`);

--
-- Ograniczenia dla tabeli `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`form`) REFERENCES `forms` (`formId`);

--
-- Ograniczenia dla tabeli `usersquestions`
--
ALTER TABLE `usersquestions`
  ADD CONSTRAINT `usersquestions_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`userId`),
  ADD CONSTRAINT `usersquestions_ibfk_2` FOREIGN KEY (`answer`) REFERENCES `answers` (`answerId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
