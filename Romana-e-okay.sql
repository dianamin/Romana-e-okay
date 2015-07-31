-- phpMyAdmin SQL Dump
-- version 4.2.6deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 31, 2015 at 07:41 PM
-- Server version: 5.5.44-0ubuntu0.14.10.1
-- PHP Version: 5.5.12-2ubuntu4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `Romana-e-okay`
--

-- --------------------------------------------------------

--
-- Table structure for table `changes`
--

CREATE TABLE IF NOT EXISTS `changes` (
`id` int(11) NOT NULL,
  `lesson_name` text CHARACTER SET utf8 NOT NULL,
  `operation` text NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Dumping data for table `changes`
--

INSERT INTO `changes` (`id`, `lesson_name`, `operation`, `date`) VALUES
(1, 'Operă random', 'create', '2015-07-30 03:00:00'),
(2, 'Operă ', 'create', '2015-07-30 12:00:00'),
(3, 'Operă', 'create', '2015-07-08 00:00:00'),
(5, 'Operă', 'edit', '2015-07-15 00:00:00'),
(7, 'Operă', 'delete', '2015-07-20 00:00:00'),
(8, 'Operă', 'delete', '2015-07-03 00:00:00'),
(9, 'Alexandru Lăpușneanul', 'edit', '2015-07-30 16:16:18'),
(10, 'Operă', 'create', '2015-07-31 02:44:12'),
(11, 'Operă', 'delete', '2015-07-31 02:44:44'),
(12, 'Operă', 'create', '2015-07-31 02:57:22'),
(13, 'Operă', 'create', '2015-07-31 03:01:22'),
(14, 'Operă', 'create', '2015-07-31 03:11:53'),
(15, 'Operă', 'delete', '2015-07-31 03:18:02'),
(16, 'Operă', 'delete', '2015-07-31 03:18:07'),
(17, 'Operă', 'delete', '2015-07-31 03:18:11'),
(18, 'Chirița în provinție', 'edit', '2015-07-31 15:22:06');

-- --------------------------------------------------------

--
-- Table structure for table `chapters`
--

CREATE TABLE IF NOT EXISTS `chapters` (
`id` int(11) NOT NULL,
  `name` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `chapters`
--

INSERT INTO `chapters` (`id`, `name`) VALUES
(1, 'Pașoptismul'),
(2, 'Junimea'),
(3, 'Posteminescianism'),
(4, 'Perioada interbelică'),
(5, 'Perioada postbelică');

-- --------------------------------------------------------

--
-- Table structure for table `essays`
--

CREATE TABLE IF NOT EXISTS `essays` (
  `id_user` varchar(30) NOT NULL,
`id` int(10) unsigned NOT NULL,
  `homework` mediumtext CHARACTER SET utf8 COLLATE utf8_romanian_ci,
  `tags` varchar(200) NOT NULL,
  `public` int(11) NOT NULL,
  `reported` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=23 ;

--
-- Dumping data for table `essays`
--

INSERT INTO `essays` (`id_user`, `id`, `homework`, `tags`, `public`, `reported`) VALUES
('975238532507547', 2, 'Pornind de la premisa cÄƒ lorem ipsum dolor sit amet, consectetur adipiscing elit, voi demonstra lorem ipsum dolor sit amet.  <br /> Primul argument Ã®n favoarea ipotezei provine din domeniul lorem ipsum È™i se referÄƒ la faptul cÄƒ vamus vestibulum quam id ante sagittis vestibulum. Maecenas ex urna, pharetra in turpis non, tempus aliquam nibh. Curabitur non vulputate augue. <br /> Al doilea argument Ã®n favoarea ipotezei se referÄƒ la faptul cÄƒ morbi a arcu elementum, vehicula arcu feugiat, facilisis mi. Etiam tristique orci risus, sed volutpat purus semper euismod. <br /> ÃŽn concluzie, integer suscipit in sem mollis mattis. Vivamus tempus, libero ut vehicula bibendum, nisl ipsum fermentum elit, a venenatis lorem nisi quis purus. Duis et imperdiet dui. ', '', 0, 0),
('101178090235258', 18, 'Pornind de la premisa cÄƒ cÄƒ familia contribuie, Ã®n mod direct sau indirect, la alegerea unei profesii, atÃ¢t prin modelul oferit de profesia pÄƒrinÈ›ilor, cÃ¢t È™i prin educaÈ›ia pe care o dÄƒ copiilor, voi demonstra importanÈ›a influenÈ›ei familiei Ã®n alegerea unei meserii.  <br /> <br /> Primul argument Ã®n favoarea ipotezei se referÄƒ la faptul cÄƒ Ã®n familie sunt puse bazele dezvoltÄƒrii psihice a copilului , a viitorului adolescent. Cu cÃ¢t membrii familiei se dovedesc a fi mai responsabili, mai capabili de a oferii modele pozitive È™i un cod autentic de valori morale, cu atÃ¢t adolescentul se va integra mai uÈ™or Ã®n societate È™i va reuÈ™i sÄƒ Ã®ntreÈ›inÄƒ legÄƒturi puternice cu cei din jurul sÄƒu. Acestea Ã®i permit adolescentului sÄƒ aleagÄƒ o profesie care sÄƒ i se potriveascÄƒ, sÄƒ ii ofere satisfaÈ›ii. Profesia aleasÄƒ nu va fi doar Ã®n funcÈ›ie de posibilul cÃ¢È™tig material, ci È™i de felul Ã®n care va permite dezvoltarea, Ã®mplinirea propriei personalitÄƒÈ›i. <br /> <br /> Al doilea argument Ã®n favoarea ipotezei se referÄƒ la faptul cÄƒ tocmai pentru cÄƒ familia cunoaÈ™te cel mai bine punctele tari È™i cele slabe ale adolescentului, va fi capabilÄƒ sÄƒ Ã®l ajute pe acesta sÄƒ descopere ceea ce i se potriveÈ™te cu adevÄƒrat Ã®n domeniul profesional. TotodatÄƒ, profesia pÄƒrinÈ›ilor, reuÈ™ita acestora, constituie un model pentru tineri Ã®n alegerea unei profesii.\r\nDe exemplu, bine sfÄƒtuiÈ›i de pÄƒrinÈ›i, mulÈ›i tineri se orienteazÄƒ spre profesia unuia dintre aceÈ™tia. Chiar dacÄƒ nu o recunosc tot timpul, tinerii urmeazÄƒ adesea modelul pÄƒrinÈ›ilor Ã®n alegerea profesiei. <br /> <br /> ÃŽn concluzie, familia, alÄƒturi de È™coalÄƒ, joacÄƒ un rol major Ã®n adevÄƒrata descoperire de sine È™i Ã®n alegerea unei profesii. ', 'tema1', 1, 1),
('101178090235258', 19, 'SecvenÈ›a â€žFulgii zbor, plutesc Ã®n aer ca un roi de fluturi albiâ€ conÈ›ine o comparaÈ›ie. ComparaÈ›ia creeazÄƒ imaginea vizualÄƒ a unui peisaj de iarnÄƒ. Un prim simbol ce apare Ã®n secvenÈ›Äƒ este reprezentat de fulg. ÃŽn pastelul â€žSaniaâ€ de Vasile Alecsandri, motivul sugereazÄƒ feeria ÅŸi frumuseÅ£ea naturii. ', 'iarna', 1, 1),
('101178090235258', 20, 'Pornind de la premisa cÄƒ certitudinea efectului este garantatÄƒ numai prin alegerea unui model potrivit, voi demonstra efectul pozitiv pe care Ã®l poate avea un model Ã®n dezvoltarea personalitÄƒÈ›ii. <br /> <br /> Primul argument Ã®n favoarea ipotezei se referÄƒ la faptul cÄƒ un tÃ¢nÄƒr trebuie sÄƒ Ã®È™i cunoascÄƒ limitele È™i abilitÄƒÈ›ile pentru a avea mÄƒcar o vagÄƒ idee despre viitorul sÄƒu È™i pentru a-È™i putea alege un model. Deci, apare tendinÈ›a de a ne alege ca model personalitÄƒÈ›i ce au o carietÄƒ Ã®n domeniile care ne plac foarte mult. Astfel, personalitÄƒÈ›i precum Dennis Ritchie, Bill Gates È™i Steve Jobs sunt doar cÃ¢teva dintre modelele tinerilor. <br /> <br /> Al doilea argument Ã®n favoarea ipotezei se referÄƒ la faptul cÄƒ putem gÄƒsi modele È™i Ã®n jurul nostru: pÄƒrinÈ›i, profesori, prieteni, urmÄƒrind calitÄƒÈ›ile lor. Ideea de â€žmodel negativâ€ joacÄƒ totodatÄƒ un rol important deoarece tinerii pot Ã®nvÄƒÈ›a din greÈ™elile altora. Un exemplu de personalitate construitÄƒ din lumini È™i umbre este Kurt Cobain - model datoritÄƒ impactului pozitiv Ã®n industria muzicalÄƒ. Cusurul sÄƒu, dependenÈ›a de droguri, a fost fatal. <br /> <br />  Pe de alta parte, un argument Ã®n defavoarea ipotezei se referÄƒ la faptul cÄƒ se remarcÄƒ efectul de turmÄƒ. A avea un model Ã®nseamnÄƒ a regÄƒsi Ã®n altcineva idealuri pe care le poÈ›i atinge, nu a imita Ã®n totalitate. Pentru dezvoltarea societÄƒÈ›ii, orice individ trebuie sÄƒ Ã®È™i pÄƒstreze identitatea. <br /> <br /> ÃŽn concluzie, alegerea unui model Ã®n funcÈ›ie de anumiÈ›i parametri are o importanÈ›Äƒ majorÄƒ, contribuind atÃ¢t la dezvoltarea societÄƒÈ›ii Ã®ntr-o direcÈ›ie pozitivÄƒ, cÃ¢t È™i la dezvoltarea unei colectivitÄƒÈ›i. ', 'tema2, model', 1, 0),
('101178090235258', 21, 'Pornind de la premisa cÄƒ rolul jucat de publicitate Ã®n gÃ¢ndirea È™i comportamentul uman este unul cu o influenÈ›Äƒ extrem de mare, voi demonstra importanÈ›a campaniilor de protejare a mediului.  <br /> <br /> Primul argument Ã®n favoarea ipotezei provine din domeniul filosofiei È™i se referÄƒ la faptul cÄƒ Democrit spunea cÄƒ â€žNatura È™i educaÈ›ia sunt asemÄƒnÄƒtoare, cÄƒci educaÈ›ia transformÄƒ pe om È™i, prin aceastÄƒ transformare creeazÄƒ naturaâ€. Campaniile de protejare a mediului au ca efect educarea maselor Ã®n privinÈ›a respectÄƒrii anumitor reguli ce asigurÄƒ menÈ›inerea unor bune condiÈ›ii. <br /> <br /> Al doilea argument Ã®n favoarea ipotezei se referÄƒ la faptul cÄƒ putem obÈ›ine resurse aproape nelimitate prin protejarea mediului. Una dintre cele mai promovate acÈ›iuni de cÄƒtre astfel de campanii este reciclarea. Beneficiul reciclÄƒrii nu este legat de depozitarea reziduurilor, ci de conservarea energiei È™i a resurselor naturale È™i de prevenirea poluÄƒrii. Prin reciclarea unei tone de plastic, se economisesc 700 de tone de petrol, iar prin reciclarea unei tone de hÃ¢rtie se salveazÄƒ cinci arbori cu vechime de un secol. <br /> <br /> Al treilea argument Ã®n favoarea ipotezei provine din domeniul statisticii È™i se referÄƒ la faptul cÄƒ o campanie mondialÄƒ de protejare a mediului, â€žEarth Hourâ€, Ã®ncurajeazÄƒ oamenii din toatÄƒ lumea sÄƒ nu foloseacÄƒ energia electricÄƒ timp de o orÄƒ, Ã®n acelaÈ™i timp. La aceastÄƒ campanie au participat 162 de È›Äƒri È™i, Ã®mpreunÄƒ, au salvat 1737 kW, echivalentul reducerii cu 1025 kh a nivelului de dioxid de carbon. <br /> <br /> ÃŽn concluzie, campaniile de protejare a mediului joacÄƒ un rol important Ã®n menÈ›inerea resurselor naturale pentru un nivel bun de trai.', 'mediu, reciclare, campanii', 1, 0),
('101178090235258', 22, 'Pornind de la premisa cÄƒ dreptatea este principiul moral care cere sÄƒ se dea fiecÄƒruia ceea ce i se cuvine, voi demonstra cÄƒ dreptatea este cea mai importantÄƒ dintre virtuÈ›i.  <br /> <br /> Primul argument Ã®n favoarea ipotezei provine din domeniul filosofiei È™i se referÄƒ la faptul cÄƒ pentru aristotel, dreptatea se manifestÄƒ ca acÈ›iune moralÄƒ deliberatÄƒ. Natura ei trebuie Ã®nÈ›eleasÄƒ Ã®n dublÄƒ ipostazÄƒ: obiÈ™nuinÈ›Äƒ È™i mÄƒsurÄƒ. Dreptatea este obiÈ™nuinÈ›a datoritÄƒ cÄƒreia, Ã®n mod voluntar, omul devine mai bun È™i Ã®È™i Ã®ndeplineÈ™te bine funcÈ›ia proprie. ÃŽn cea de-a doua ipostazÄƒ, ca mÄƒsurÄƒ justÄƒ, dreptatea exclude atÃ¢t excesul, cÃ¢t È™i ineficienÈ›a. Filosoful considerÄƒ cÄƒ omul tinde sÄƒ oscileze Ã®ntre exces È™i insuficienÈ›Äƒ È™i cÄƒ practicarea dreptÄƒÈ›ii exprimÄƒ efortul realizÄƒrii ei ca â€ždispoziÈ›ie habitualÄƒâ€ ce pÄƒstreazÄƒ linia de mijlocâ€. Astfel, dreptatea este expresia â€žvirtuÈ›ii Ã®n Ã®ntregimeâ€. <br />  <br />Al doilea argument Ã®n favoarea ipotezei provine din domeniul religios È™i se referÄƒ la faptul cÄƒ o istorisirea din Biblie Ã®n care regele Solomon trebuia sÄƒ rezolve problema copilului revendicat de douÄƒ femei. Una dintre ele a acuzat-o pe cealaltÄƒ cÄƒ È™i-a ucis copilul din neglijenÈ›Äƒ È™i cÄƒ l-a schimbat cu al ei. Solomon cere o sabie pentru a tÄƒia copilul Ã®n douÄƒ jumÄƒtÄƒÈ›i pe care sÄƒ le dea celor douÄƒ felei. Mamei adevÄƒrate i se rupe inima cÃ¢nd aude soluÈ›ia regelui È™i Ã®i cere sÄƒ Ã®i dea celeilalte femei copilul decÃ¢t sÄƒ Ã®l omoare. Atunci Solomon Ã®È™i dÄƒ seama de adevÄƒr È™i acÈ›ioneazÄƒ drept: Ã®i dÄƒ mamei copilul. <br /> <br /> ÃŽn concluzie, dreptatea este acea virtute care face posibilÄƒ existenÈ›a celorlalte virtuÈ›i - cumpÄƒtare, Ã®nÈ›elepciune, curaj.', 'dreptate, filosofie, religie', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `lessons`
--

CREATE TABLE IF NOT EXISTS `lessons` (
`global_id` int(11) NOT NULL,
  `chapter_id` int(11) NOT NULL,
  `name` text,
  `author` text NOT NULL,
  `type` text NOT NULL,
  `img` text NOT NULL,
  `page` text NOT NULL,
  `version` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=19 ;

--
-- Dumping data for table `lessons`
--

INSERT INTO `lessons` (`global_id`, `chapter_id`, `name`, `author`, `type`, `img`, `page`, `version`) VALUES
(1, 1, 'Alexandru Lăpușneanul', 'Costache Negruzzi', 'Nuvela romantică și istorică', 'img/pasoptism/al.jpg', 'partials/creations/alexandrulapusneanul', 1),
(2, 1, 'Chirița în provinție', 'Vasile Alecsandri', 'Comedia', 'img/pasoptism/cp.jpg', 'partials/creations/chiritainprovintie', 0),
(3, 2, 'Luceafărul', 'Mihai Eminescu', 'Poezia romantică', 'img/junimea/l.jpg', 'partials/creations/luceafarul', 0),
(4, 2, 'Povestea lui Harap-Alb', 'Ion Creangă', 'Basmul cult', 'img/junimea/ha.jpg', 'partials/creations/harapalb', 0),
(5, 2, 'O scrisoare pierdută', 'Ion Luca Caragiale', 'Comedia', 'img/junimea/osp.jpg', 'partials/creations/oscrisoarepierduta', 0),
(6, 2, 'Moara cu noroc', 'Ioan Slavici', 'Nuvela realistă și psihologică', 'img/junimea/mn.jpg', 'partials/creations/moaracunoroc', 0),
(7, 3, 'Rugăciune', 'Octavian Goga', 'Poezia posteminescianistă', 'img/posteminescianism/r.jpg', 'partials/creations/rugaciune', 0),
(8, 4, 'Plumb', 'George Bacovia', 'Poezia simbolistă', 'img/interbelic/p.jpg', 'partials/creations/plumb', 0),
(9, 4, 'Flori de mucigai', 'Tudor Arghezi', 'Poezia modernistă', 'img/interbelic/fm.jpg', 'partials/creations/floridemucigai', 1),
(10, 4, 'Eu nu strivesc corola de minuni a lumii', 'Lucian Blaga', 'Poezia modernistă', 'img/interbelic/ens.jpg', 'partials/creations/eunustrivesc', 0),
(11, 4, 'Riga Crypto și lapona Enigel', 'Ion Barbu', 'Poezia modernistă', 'img/interbelic/rcle.jpg', 'partials/creations/rigacrypto', 0),
(12, 4, 'Ultima noapte de dragoste, întâia noapte de război', 'Camil Petrescu', 'Romanul psihologic', 'img/interbelic/und.jpg', 'partials/creations/ultimaprima', 0),
(13, 4, 'Ion', 'Liviu Rebreanu', 'Romanul realist obiectiv', 'img/interbelic/i.jpg', 'partials/creations/ion', 0),
(14, 4, 'Enigma Otiliei', 'George Călinescu', 'Romanul balzacian', 'img/interbelic/eo.jpg', 'partials/creations/enigmaotiliei', 0),
(15, 4, 'Baltagul', 'Mihail Sadoveanu', 'Romanul mitic', 'img/interbelic/b.jpg', 'partials/creations/baltagul', 0),
(16, 5, 'Moromeții', 'Marin Preda', 'Roman postbelic', 'img/postbelic/m.jpg', 'partials/creations/morometii', 0),
(17, 5, 'Către Galateea', 'Nichita Stănescu', 'Romanul mitic', 'img/postbelic/cg.jpg', 'partials/creations/catregalateea', 1),
(18, 5, 'Iona', 'Marin Sorescu', 'Teatru postbelic', 'img/postbelic/i.jpg', 'partials/creations/iona', 0);

-- --------------------------------------------------------

--
-- Table structure for table `progress`
--

CREATE TABLE IF NOT EXISTS `progress` (
`id` int(11) NOT NULL,
  `id_user` varchar(30) NOT NULL,
  `id_lesson` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=30 ;

--
-- Dumping data for table `progress`
--

INSERT INTO `progress` (`id`, `id_user`, `id_lesson`) VALUES
(11, '975238532507547', 18),
(12, '975238532507547', 1),
(13, '975238532507547', 6),
(14, '975238532507547', 25),
(15, '975238532507547', 26),
(16, '101178090235258', 2),
(17, '975238532507547', 2),
(18, '975238532507547', 5),
(19, '975238532507547', 7),
(20, '975238532507547', 8),
(21, '975238532507547', 9),
(22, '975238532507547', 10),
(23, '975238532507547', 11),
(24, '975238532507547', 12),
(25, '975238532507547', 13),
(26, '975238532507547', 14),
(27, '975238532507547', 15),
(28, '975238532507547', 16),
(29, '975238532507547', 17);

-- --------------------------------------------------------

--
-- Table structure for table `ratings`
--

CREATE TABLE IF NOT EXISTS `ratings` (
  `id_user` varchar(30) NOT NULL,
  `id_essay` int(11) NOT NULL,
  `rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ratings`
--

INSERT INTO `ratings` (`id_user`, `id_essay`, `rating`) VALUES
('975238532507547', 16, 5),
('12', 16, 10),
('975238532507547', 14, 9),
('101178090235258', 16, 9),
('101178090235258', 14, 10),
('101178090235258', 22, 10),
('101178090235258', 21, 10),
('101178090235258', 20, 10),
('101178090235258', 19, 10),
('101178090235258', 18, 10),
('975238532507547', 22, 10),
('975238532507547', 21, 9),
('975238532507547', 20, 9),
('975238532507547', 19, 8),
('975238532507547', 18, 9);

-- --------------------------------------------------------

--
-- Table structure for table `symbols`
--

CREATE TABLE IF NOT EXISTS `symbols` (
`id` int(11) NOT NULL,
  `symbol` varchar(30) CHARACTER SET utf8 NOT NULL,
  `description` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=93 ;

--
-- Dumping data for table `symbols`
--

INSERT INTO `symbols` (`id`, `symbol`, `description`) VALUES
(1, 'aer', 'Aerul este simbol al spiritualizării. El este un element asociat în mod simbolic cu vântul, cu răsuflarea, este un simbol sensibil al vieții nevăzute.'),
(2, 'alb', 'Aerul semnifică origine a vieții, mijloc de purificare; simbol al fertilității, înțelepciunii, virtuții. Ea este o poartă spre veșnicie pentru că purifică, vindecă și întinerește. Apa este simbolul energiilor inconștiente, a puterilor nedeslușite ale sufletului, ale motivațiilor secrete.'),
(3, 'arbore', 'Reprezintă simbol al vieții în continuă evoluție, al evoluției cosmice: moarte și regenerare; al raporturilor ce se stabilesc între pământ și cer, al nemuririi, al dezvoltării.'),
(4, 'copac', 'Copacul, arborele, reprezintă simbol al vieții în continuă evoluție, al evoluției cosmice: moarte și regenerare; al raporturilor ce se stabilesc între pământ și cer, al nemuririi, al dezvoltării.'),
(5, 'cerul', 'Cerul este o manifestare directă a transcendenței, a puterii, a perenității, a sacralității, ceea ce nici o ființă de pe pământ nu poate atinge. Numai faptul de a fi deasupra, de a se afla sus, înseamnă a fi puternic; simbol al inaccesibilității, al infinității, al eternității, al puterilor superioare omului; al conștiinței.\r\n'),
(6, 'dimineață', 'Simbolizează intervalul de timp în care lumina este încă neprihănită, momentul obârșiei, când nimic nu este corupt sau compromis. Dimineața este un simbol al purității, al făgăduinței, al încrederii în sine, în ceilalți, în existență.\r\n'),
(7, 'floare', 'Simbolizează principiul pasiv, al dragostei, al armoniei, al copilăriei.\r\n'),
(8, 'frunză', 'Este simbol al fericirii, al prosperității.'),
(9, 'lume', 'Este simbol al mișcării, al schimbării, al veșniciei.'),
(10, 'moarte', 'Desenează sfârșitul absolut al unui pozitiv.'),
(11, 'nisip', 'Este simbol al multitudinii, formă de simbolism a abundenței; simbol al siguranței, al regenerării.'),
(12, 'pasăre', 'Zborul păsărilor este simbolul relațiilor dintre cer și pământ. Cuvântul pasăre poate fi considerat sinonim cu prevestire și cu mesaj al cerului. Pasărea este imaginea sufletului liber, este considerată un simbol al prieteniei. În Coran cuvântul pasăre este luat adesea asemenea cu destinul.'),
(13, 'pădure', 'Pădurea este un simbol al vieții; este considerată și un simbol al inconștientului datorită întunecimii și a înrădăcinării sale adânci. Pădurea este și un simbol matern. Ea este sursa unei regenerări. Ea intervine adesea în acest sens în visele oamenilor, vădind o dorință de securitate și de înnoire.'),
(14, 'pământ', 'Simbolizează izvorul vieții și al ființei. Pământul este un simbol de fecunditate și regenerare.'),
(15, 'piatră', 'Piatra brută este simbolul libertății, iar piatra șlefuită este simbolul robiei și al întunericului. Pietrele prețioase simbolizează trecerea de la întuneric la lumină, de la imperfecțiune la desăvârșire. Piatra în virtutea ei simbolizează înțelepciunea.\r\n'),
(16, 'ploaie', 'Este simbolul obișnuit al fertilității și al înviorării. Ploaia, fiică a norilor și a furtunii, adună laolaltă simbolurile fulgerului și a apei. De aceea, ea prezintă o dublă semnificație, de fertilizare spirituală și materială'),
(17, 'ramură', 'Ramura verde simboliza victoria vieții și a dragostei. În arta medievală ramura verde este atributul logicii, al castității sau al renașterii primăvara.\r\n'),
(18, 'roșu', 'Considerat pretutindeni ca fiind simbolul fundamental al principiului vital, cu forța, cu puterea și strălucirea lui, roșu este culoarea focului, a sângelui, a sufletului, a inimii. Roșul deschis simbolizează expresia iar cel închis misterul vieții. Roșu viu, solar, este imaginea înflăcărării și a frumuseții, a forței impulsive și generoase, a tinereții, sănătății, bogăției.'),
(19, 'rouă', 'Este simbolul caracterului trecător, al lucrurilor și al vieții.'),
(20, 'suflet', 'Simbolizează plenitudinea vituțiilor omului în calitate de ființă spirituală.'),
(21, 'trandafir', 'Este simbolul frumuseții, al atingerii perfecțiunii, al desăvârșirii fără cusur. El simbolizează cupa vieții, sufletul, inima, iubirea.'),
(22, 'smarald', 'Verde și translucid, smaraldul este piatra luminii verzi, ceea ce îi conferă o semnificație ezaterică, cât și o putere regeratoare. El este un simbol al primăverii, al vieții manifestate, al evoluției.'),
(23, 'soare', 'Soarele este izvorul luminii, al căldurii, al vieții, al autorității. Soarele apare și ca un simbol al învierii și al nemuririi.'),
(24, 'umbră', 'Este imaginea lucrurilor trecătoare, ireale și schimbătoare. Ea este simbolul oricărei acțiuni care nu-și găsește izvorul decât în spontaneitate.'),
(25, 'verde', 'Este o culoare liniștitoare, răcoritoare, umană. Este și trezirea la viață. El constituie echilibrul dintre om și natură. Verdele a rămas și un simbol al speranței. El simbolizează o cunoaștere adâncă a lucrurilor și a destinului. Verdele este intim legat cu infinitul vieții, sentimentelor și a gândurilor. Este o imagine a adâncimilor și a destinului.'),
(26, 'vânt', 'Este un simbol de vanitate, de instabilitate, de inconstanță.\r\nSimbolismul vântului îmbracă mai multe aspecte. Este, din cauza agitaţiei care-1 caracterizează, un simbol de va­nitate, de instabilitate, de inconstanţă. Este o forţă elementară care aparţine Titanilor şi deci e violent şi orb. Pe de altă parte, vântul este sinonim cu sufletul şi, în consecinţă, cu Duhul, cu influxul spiritual de origine cerească. De la vânt vine şi numele Sfântului Duh. „Duhul lui Dumnezeu” ce poartă deasupra Apelor este numit „vânt”. După tradiţiile hin­duse, vântul s-ar fi născut din spirit şi ar fi zămislit lumina. Vântul joacă rolul de suport al lumii şi de regulator al echi­librelor cosmice şi morale. în tradiţiile biblice, vânturile sunt suflul Domnului. Suflul Domnului a organizat haosul, a însufleţit primul om. Briza printre ra­muri anunţă apropierea lui Dumnezeu. Vânturile însufleţesc, pedepsesc, povă­ţuiesc, sunt o manifestare a divinului, care vrea să-şi comunice emoţiile, de la blândeţea cea mai drăgăstoasă la mânia cea mai impetuoasă.'),
(27, 'zbor', 'Zborul exprimă o dorință de sublimare, de căutare a unei armonii interioare, de depășire a conflictelor.'),
(28, 'hora', 'Dansul în cerc este inspirat de un simbolism cosmic: el imită hora planetelor în jurul soarelui, vîrtejul a tot ce se mişcă, dar şi căutarea lui Dumnezeu simbolizat de soare. '),
(29, 'harpă', 'Harpa este instrumentul tradiţional, coardele ei fiind făcute cel mai adesea din maţe de linx. Ea leagă între ele cerul şi pîmîntul. Eroii vor să fie arşi pe rugul funerar cu harpa alături: ea îl va conduce către cealaltă lume. în timpul vieţii.'),
(30, 'haos', 'Haosul este personificarea vidului primordial, anterior creaţiei, de pe vremea cînd elementelor lumii nu le fusese impusă încă ordinea. El stă la baza oricărei organizări a cosmosului. Din haos au ieşit viaţa şi cunoaşterea. Haosul simbolizează deruta minţii omeneşti, este inconştiinţă şi pasivitate totală.'),
(31, 'han', 'Simbol al trecerii, hanul este o punte, un loc de refugiu, un adăpost vremelnic. La Sadoveanu, hanul este investit cu funcţii simbolice, el devine un spaţiu al evocării şi al povestirii. în culegerea “Hanul-Ancuţei", scriitorul descrie hanul ca pe o cetate în care timpul pare oprit. '),
(32, 'gol', 'A face gol în sine, în sensul simbolic, însemnă a te elibera din roata existenţelor efemere, a dorinţelor, emoţiilor, a nu mai resimţi decît setea de absolut. Golul este, după Novalis, calea care duce în interior, calea vieţii adevărate.'),
(33, 'grădină', 'Grădina e simbolul raiului pămîntesc, al cosmosului. Centrul grădinii e cel al Paradisului celest pe careîlîntruchipează, al stărilor spirituale ce corespund şederilor în Paradis. '),
(34, 'graal', 'În literatura medievală, graalul este adesea o tipsie purtată de o fecioară, tipsie ce are puterea de a oferi fiecăruia mîncarea preferată. Simbolismul gra- alului se întîlneşte aici cu simbolismul cornului abundenţei. în Biblie, graalul e păharul în care losif a strîns sîngele ce curgea din rănile lui lisus. '),
(35, 'ghindă', 'Este legată de simbolistica oului: abundenţă, prosperitate. Ivindu-se din învelişul ei granulos, ghinda simbolizează naşterea, ieşirea din pîntecul matern, în sens spiritual însă, precum şi în întrebuinţările ei religioase, ea desemnează o putere spirituală şi virtutea hrănitoare a adevărului, a acelui adevăr provenit din două izvoare: natura şi revelaţia.'),
(36, 'geniu', 'Un geniu însoţeşte orice om, în calitate de dublu al acestuia, de demon, de înger păzitor, de sfătuitor, de voce a unei conştiinţe supraraţionale. Geniul simbolizează raza de lumină care scapă oricărui control şi care generează convingerea cea mai intimă şi cea mai puternică. '),
(37, 'geneză', 'Geneză în numeroase mituri apare ideea că lumea s-a născut di hierogamia Cer-Pământ, de aceea întoarcerea la origini presupune retrăirea unor experienţe paradoxale.'),
(38, 'furtună', 'În Bilie, furtuna reprezintă, tradiţional, o intervenţie dumnezeiască şi, în primul rînd, mînia lui Dumnezeu. Dar mai poate simboliza şi calamităţile răzbunătoare. Tot pe vreme de furtună, se desfăşoară şi acţiunea creatoare. Fiinţele se nasc din haos, din noianul unei tulburări cosmice de nedescris.'),
(39, 'furnică', 'Sunt harnice, organizate social. Solomon, în „Pilde”, scrie: „Du-te, leneşule, la furnică şi vezi-i munca şi cată a avea mai multă minte! Ea îşi pregăteşte de cu vară hrana şi îşi strînge la seceriş mîncare”.'),
(40, 'fulger', 'În mitologie, zeii cereşti se manifestau prin fulgere şi tunete. în credinţele religioase, fulgerul face parte din arsenalul Domnului.'),
(41, 'fulg', 'În pastelul „Sania” de Vasile Alecsandri, motivul sugerează feeria şi frumuseţea naturii.'),
(42, 'fluier', 'Personificare a vieţii pastorale, la origine jumătate animal, jumătate om, Pan este cel care ar fi inventat fluierul cu care i-a desfătat pe zei, nimfe, oameni şi animale. Sunetul fluierului dă naştere unei brize uşoare, unor nori coloraţi şi mai ales unor păsări phoenix ce însoţesc cuplul spre Paradisul Nemuritorilor. '),
(43, 'flaut', 'Personificare a vieţii pastorale, la origine jumătate animal, jumătate om, Pan este cel care ar fi inventat fluierul cu care i-a desfătat pe zei, nimfe, oameni şi animale. Sunetul fluierului dă naştere unei brize uşoare, unor nori coloraţi şi mai ales unor păsări phoenix ce însoţesc cuplul spre Paradisul Nemuritorilor. '),
(44, 'floare albastră', 'Floarea albastră are la Novalis semnificaţia mistică a iubirii pierdute, a dorului de dragoste, a visului trecut în curgerea vremii. Floarea albastră din poezia cu acelaşi titlu de M. Eminescu simbolizează seninul, infinitul limpede, orizontul absolut. '),
(45, 'fier', 'Fierul e considerat simbol al robus- teţii, al îndîrjirii, al rigorii excesive şi inflexibilităţii. '),
(46, 'fereastră', 'Ca deschidere spre aer şi lumină, fereastra simbolizează receptivitatea; dacă ea este rotundă, este vorba despre o receptivitate asemănătoare celei a ochiului şi a conştiinţei; dacă este pătrată, se referă la receptivitatea terestră, în opoziţie cu cerul.'),
(47, 'dumbravă', 'Dumbrava, limitată spaţial, un loc ce poate fi cuprins cu privirea, formată doar din câţiva arbori, este un loc de popas şi de confruntare calmă cu forţele şi fiinţele supraomeneşti. '),
(48, 'corabie', 'Corabia evocă ideea de forţă şi securitate de-a lungul unei traversări dificile. Ea este ca un astru rotitor în jurul unui centru (pământul) şi dirijat de om. E o imagine a vieţii, căreia omul trebuie să-i aleagă centrul şi să-i asigure direcţia. '),
(49, 'dor', 'Sentiment profund şi răvăşitor, dorul constituie simbolul dominant al celor mai multe doine populare. El are ca principale atribute jalea, dorinţa umbrită de teama neîmplinirii. Dorul este înrobitor, duşman al libertăţii, înrudit cu moartea, stimulent al fanteziei. în literatura cultă, dorul capătă valori simbolice, în special, în poezia lirică, în care devine termen de comparaţie pentru stări profunde.'),
(50, 'doină', 'E cântecul cel mai expresiv al fiinţei româneşti. Pentru Lucian Blaga, sufletul românului exprimă "ritmul unei eterne şi cosmice doine, de care ascultă orice mers". Melodie duioasă şi unduitoare, doina transfigurează destinul românului de a se afla "călător sub zodii dulci-amare". Coşbuc personifică acest cîntec, creînd un prototip feminin care sintetizează ipostazele majore ale existenţei. '),
(51, 'demon', 'În mitologia greacă, demonii sunt fiinţe divine sau asemănătoare zeilor prin puterea pe care o deţin. Apoi cuvîntul a ajuns să desemneze zeii interiori şi, în sfîrşit, duhurile rele. Conform unei tradiţii, demonii erau sufletele morţilor, genii tutelare sau temute, intermediare între zeii nemuritori şi oamenii vii, dar muritori. '),
(52, 'delfin', 'În simbolismul creştin delfinul înseamnă mîntuire şi reînviere. în iconografie, sufletele morţilor erau portretizate călătorind pe spatele delfinilor. Grecii credeau că delfinilor le place muzica, de aceea aceştia însoţesc corăbiile pe care se cîntă muzică.'),
(53, 'cruce', 'Crucea are, pentru creştini, sensul de „axis mundi", pentru că ea este reazemul lumii şi scara spre Dumnezeu. Asociată cu „pomul vieţii" (considerat crucea cu şapte trepte), simbolul propune o imagine stilizată a lumii, căci cuprinde sugestia celor trei dimeniuni — lungime, lăţime şi înălţime.'),
(54, 'codru', 'Spațiu misterios, labirint, pădurea reprezintă un loc la încercărilor, trezeşte spaimă prin faptul că este un peisaj închis şi stăpânit de umbre. '),
(55, 'cocoș', 'Simbol solar, pe care tradiţia folclorică îl investeşte cu virtuţi protectoare, izgoneşte demonii nopţii, cheamă soarele. '),
(56, 'cocor', 'În simbolismul oriental, cocorul evocă longevitate, dar, mai ales, fidelitatea exemplară.'),
(57, 'clopot', 'Simbol al vestirilor solemne, clopotul bisericii reprezintă o măsură a timpului, instituie o legătură emoţională cu sacralitatea, consfinţeşte ieşirea din durată, precedă un eveniment de interes general.'),
(58, 'Clepsidră', 'Clepsidra simbolizează curgerea implacabilă a vieţii. Dar ea mai înseamnă şi o posibilitate de răsturnare a timpului, o întoarcere la origini. Forma clepsidrei, cu cele două compartimente ale sale, evocă raportul dintre entităţile sus — jos. '),
(59, 'câine', 'Prima funcţie mitică a câinelui este aceea de călăuză a omului în întunericul morţii, după ce îi va fi fost tovarăş în lumina vieţii. '),
(60, 'cireș', 'Înflorirea cireşilor este unul dintre cele mai atrăgătoare spectacole ale naturii. Floarea de cireş este un simbol al purităţii. '),
(61, 'cerc', 'Cercul este figura ciclurilor cereşti, a revoluţiilor planetare, a ciclului anual din zodiac. Mai degrabă decît cercul, forma primordială este sfera care figurează oul lumii, cercul fiind o proiecţie sau o secţiune a sferei. '),
(62, 'căprioară', 'Căprioara este în esenţă un simbol feminin. Pentru copiii nevinovaţi ea poate deveni o mamă-doică. Asemeni mielului, ea este simbolul împotrivelii: ea se opune agresivităţii dominatoare. Frumuseţea sa se datorează strălucirii extraordinare a ochilor: privirea îi este adeseori comparată cu cea a unei fete tinere. '),
(63, 'cămașă', 'În tradiţia celtică, de un trup îmbrăcat în cămaşă nu se atinge nici o boală, cămaşa fiind însemnul ocrotirii. Faptul de a nu avea nici cămaşă este semn nu numai de deplină sărăcie materială, ci şi de totală singurătate morală şi de renunţare la lume.'),
(64, 'călătorie', 'Simbolismul călătoriei, extrem de bogat, se rezumă totuşi la căutarea adevărului, a păcii, a nemuririi, la descoperirea unui centru spiritual. Căutarea lor a dat naştere aventurilor nenumărate. Călătoria mai înseamnă seria de încercări pregătitoare ale iniţierii, ca progres spiritual.'),
(65, 'cavou', 'avoul, în contextul poeziei bacoviene, este un spaţiu al somnului vecin cu moartea, o anticameră a Neantului, căci întregul sens al poeziei bacoviene este prăbuşirea lentă în moarte, sub apăsarea plumbului. Motivul este dominat în poezia simbolistă cultivînd echivocul şi vagul, şi comportă diverse accepţii.'),
(66, 'castel', 'Castelul este, de obicei, situat pe înălţimi sau în luminişuri de păduri: este o construcţie solidă şi la care se ajunge greu. Castelul dă o senzaţie de siguranţă, ca şi casa, în general, dar în cazul său este vorba despre un grad sporit de securitate. '),
(67, 'castan', 'În străvechea Chină, castanul corespundea vestului şi toamnei. Era sădit pe altarul Pămîntului îndreptat spre acest punct cardinal. Tradiţia a făcut din castan un simbol al prevederii, fructul său servind drept hrană pentru iarnă. '),
(68, 'casă', 'Ca şi cetatea, templul, casa se află în centrul lumii, este imaginea universului. Ea este un simbol feminin, cu sensul de refugiu, de mamă, de protecţie.'),
(69, 'carte', 'Cartea este simbolul universului. Cartea vieţii din “Apocalipsă” se află în centrul Paradisului şi se identifică cu Pomul vieţii: frunzele pomului, întocmai caracterelor cărţii, reprezintă totalitatea fiinţelor, dar şi totalitatea legilor divine.'),
(70, 'bufniță', 'Potrivit tradiţiei, bufniţa e pasărea înţelepciunii, pasărea Atenei - zeiţa înţelepciunii la greci. Acest fapt se datorează, probabil, marelui număr de bufniţe din Atena. Astfel Zeus purta pe cap un vultur, iar Atena - o bufniţă. Deoarece e nocturnă şi greu de văzut, cea mai izbitoare caracteristică a buniţei este ţipătul acesteia, care sună a jale. '),
(71, 'brad', 'Considerat pomul vieţii, bradul are funcţii în ritualele legate de toate cele trei evenimente ale vieţii: naştere, 24 nuntă şi moarte. însuşi cuvîntul care defineşte acest copac pare să fie foarte vechi, moştenit din fondul prelatin. Bradul apare în literatura populară, în special, pentru desemnarea fălniciei şi a vitalităţii. '),
(72, 'bordei', 'Bordeiul din nuvela fantastică „La Ţigănci"de M. Eliade simbolizează mitul labirintului, ca simbol al trecerii dinspre viaţă spre moarte, un spaţiu iniţiatic către o altă lume spirituală.'),
(73, 'biserică', 'Lăcaş al reculegerii şi rugăciunii, al comunicării cu Dumnezeu, biserica se află aşezată în centrul lumii, ascunzînd în sine taina capitală, ceea ce face ca fiinţa să dobîndească intuiţia sacrului, în atmosfera sa de stranie linişte. Ca orice centru, conţine semnificaţia Genezei şi valoarea începutului.'),
(74, 'ban', 'Monedă rotundă, metalică, zimţată adeseori, dincolo de valoarea ei economică, este învestită şi cu funcţii magice; utilizat în vrăji, ca sugestie a cercului, sau în ritualuri pentru dobîndirea puterii, banul închide în el o forţă diabolică; cu un ban de argint se retează capul şarpelui găsit în ziua de Sf. Gheorghe. '),
(75, 'baltag', 'Baltagul este un topor cu tăişurile plasate simetric, de-o parte şi de alta a cozii. E deopotrivă distrugător şi obtădu- itor. Interpretările cu privire la cele două tăişuri fac din baltag un simbol lunar cu trimitere la “cele două tăişuri” ale oricărei puteri. '),
(76, 'balaur', 'Balaurul este străjerul comorilor ascunse şi reprezintă, în această calitate, adversarul care trebuie înfrînt pentru a le poseda. In Occident, el păzeşte Lîna de Aur, iar în China-Perla.'),
(77, 'aur', 'Considerat prin tradiţie cel mai preţios dintre metale, aurul este metalul perfect. El are strălucirea luminii. Este definit ca un produs al focului solar, regal, ba chiar divin. Simbol al perfecţiunii, luminii, cunoaşterii, imortalităţii. E considerat de alchimişti secret al pămîntu- lui. în tradiţia greacă, e simbol solar ce evocă fecunditatea, căldura, bogăţia, iubirea.'),
(78, 'așteptare', 'Aşteptarea se impune, în special, prin poezia lui G. Bacovia. Aşteptarea anihilează libertatea, degradează fiinţa, distruge sensul realităţii, generează un sentiment de nesiguranţă şi de teamă, în poezia “Plumb", aşteptarea se asociază cu un priveghi.'),
(79, 'ascet', 'Fiinţă iluminată, ascetul este cel care a părăsit lumea şi deşărtăciunile ei pentru rugăciune şi comunicarea cu Dumnezeu. Prin izolarea sa ascetică de cele lumeşti, poate dobîndi harul vizionar şi pe cel al binecuvîntării celor ce caută un sfat. Desprins de lume şi de patimile ei, el este filozoful ermetic prin excelenţă.'),
(80, 'aripă', 'Aripile sunt, în primul rînd, simbolul avîntului, adică al despovărării, al dematerializării, al eliberării sufletului sau spiritului, al descătuşării de sub povara terestră. în orice tradiţie, aripile se cuceresc, cu preţul unei educaţii iniţî- atice şi purificatoare, adeseori lungă şi primejdioasă. Avîntul în zbor se referă întotdeauna la aspiraţia sufletului către o stare supraindividuală. '),
(81, 'argint', 'În sistemul de corespondenţă al metalelor şi al planetelor, argintul este raportat la Lună. Prin contrast cu aurul, care este principiul activ, masculin, solar, diurn, produs de foc, argintul este principiul pasiv, feminin, lunar, apos, rece. Alb şi luminos, argintul simbolizează, de asemenea, puritatea. '),
(82, 'apă', 'Semnificaţiile simbolice ale apei pot fi reduse la trei teme dominante: origine a vieţii, mijloc de purificare.'),
(83, 'amurg', 'Moment intermediar între zi şi noapte, urmînd imediat după coborîrea soarelui, amurgul reprezintă un timp situat înainte de înfăptuirea unui miracol şi anunţă marea călătorie, adeseori moartea.'),
(84, 'albină', 'Moris Meterling, în celebrul său eseu asupra vieţii albinelor, vedea concentrată în istoria unui stup de albini marea istorie a omenirii. însufleţitoare a întregului univers, sămînţă a înţelepciunii şi materializare a spiritului, albina poartă mesajul divin.'),
(85, 'albastru', 'Dintre culori, albastrul este cea mai adâncă: privirea pătrunde într-însa fără să întâlnească nici un obstacol şi se rătăceşte în nemărginire. Natura nu o înfăţişează decât alcătuită din transparenţă, adică un vid al aerului, al apei, vid al cristalului şi al diamantului. Albastrul este cea mai rece dintre culori şi, în valoarea ei absolută, cea mai pură. '),
(87, 'coroană', 'Coroana este făgăduinţă de viaţă nemuritoare, precum cea a zeilor. Ea simbolizează o demnitate, o domnie, accesul la un rang şi la nişte forţe supe­rioare. Atunci când se termină în chip de cupolă, ea afirmă o suveranitate absolu­tă. Coroana a fost odinioară acoperită cu vârfuri care întruchipau, ca şi coarnele, raze de lumină. Acesta poate fi şi sensul simbolic al coroanei cristice. în Yoga, coroana de pe cap este punctul prin care sufletul scapă din graniţele corporale, spre a se înălţa la stările supraomeneşti. Din cea mai veche antichitate, coroanei i s-a atribuit o funcţie protectoare. Ea deţinea această valoare de la materia din care era făcută (flori, frunze, metale pre­ţioase) şi de la forma sa circulară, care o apropia de simbolismul cerului. În Grecia şi Roma, morţii erau împodobiţi cu o coroană, ca şi fiinţele vii în împre­jurările importante ale vieţii, pentru a atrage protecţia divină (cununia creşti­nă).'),
(88, 'corb', 'Corbul este pasărea neagră a roman­ticilor, planând peste câmpiile de luptă pentru a se îmbuiba cu hoituri. Apariţia corbului în vise este interpretată ca o ne­norocire. În „Mahabharata”, corbii sunt comparaţi cu mesagerii morţii. Se consi­deră că apa ce a fost spurcată de corbi nu mai poate fi folosită în ritual. în China, faptul că pasărea corbul îşi hrăneşte tatăl şi mama este interpretat ca o restabilire a ordinii sociale. în Japonia, corbul este de bun augur: un corb cu trei gheare figu­rează în sânul soarelui. El ar fi principiul care animă astrul ceresc, cele trei gheare corespund unui simbolism al soarelui: răsărit, zenit, crepuscul.'),
(89, 'câmpie', 'Câmpia este simbolul spaţiului, al nesfârşitului terestru. Ea poate să reprezin­te spaţiul ideal în care pot locui oameni, în opoziţie cu muntele destinat perso­najelor divine. Una din muncile impuse unor personaje, în schimbul unui servi­ciu sau a unei prestaţii oarecare, constă uneori în a defrişa una sau mai multe câmpii. Câmpia Bucuriei era, de aseme­nea, un pământ al tinereţii: reprezenta şederea într-un loc elizean, unde secolele trec ca minutele, unde locuitorii nu mai îmbătrânesc, unde pajiştile sunt acoperite de flori veşnice. In mitologia greco-ro­mană, morţii a căror psihostazie a fost prielnică merg în Câmpiile Elizee, pen­tru a gusta bucuriile divine ale veşniciei. Antiteză a Infernului, câmpiile sunt sim­bolul Paradisului în care intră cei drepţi după moarte.\r\n	'),
(90, 'cetate', 'Cetatea este, aproape în mod univer­sal, simbolul refugiului interior al omu­lui, al adâncului inimii, simbolul locului unde se produce comunicarea privilegi­ată între sufletul omului şi Divinitate sau Absolut. În „Psalmi”, Dumnezeu însuşi este comparat cu un „turn de tărie”, iar în alt text religios citim rândurile: „încer­caţi a intra în cetatea cea mai din adâncul inimii, în casa lui Christos”,”O cetate puternică este Domnul nostru”, „Domnul este Sprijinitorul şi Cetatea mea”. Uneo­ri, şi „dumnezeiescul Ierusalim” era des­cris ca prototipul cetăţii, care încă de pe atunci îi proteja pe credincioşi. Imaginea Cetăţii Neamţului des­chide şi încheie nuvela „Sobieski şi românii” de C. Negruzzi. Apariţia acesteia provoacă orgoliul lui Sobies­ki: „zări pe sprinceana dealului, înălţându-se trufaşă dinaintea lui, cetăţuia Neamţu”. Apărată de ziduri groase şi stând neclintită în faţa timpului, ce­tatea constituie o imagine micşora­tă a pământului strămoşesc etern, un simbol al demnităţii neamului: „Să nu zică leahul c-au intrat într-o cetate românească ca într-o ţară pustie”. La sfârşitul textului, cetatea devine per­sonaj de mit: Jar cetatea, cu porţile deschise, purtând pe zidurile ei urmele boambelor duşmăneşti, râmase singură pe culmea înverzită, ca un mare schelet de uriaş”.'),
(91, 'bour', 'Animal din timpuri străvechi, bourul apare ca simbol al întemeierii Moldovei şi ca element preluat şi în stema Princi­patelor Unite; reprezentarea bourului cu stea în frunte şi aşezat între soare şi lună sugerează sensuri legate de armonia uni­versală şi de imaginea globală a lumii. în mitul despre originea statului medieval Moldova, bourul, asemuit cu zimbrul, are rolul animalului vânat, dar şi al animalului îndrumător. în momentele de criză sau în marile încercări ale istoriei, omul primitiv avea nevoie de un „animal-îndrumător”, pe care îl angaja într-o vânătoare ritualică, adică într-o acţiune de găsire a drumului cel bun. Cu acest sens este posibil să fi fost folosit şi animalul menţionat în legenda despre vânătoarea lui Dragoş. In legenda despre întemeierea Moldovei, aşa cum o expune Grigore Ureche în cronica sa, Dragoş pleacă în Maramureş în urmări­rea unui bour sau a unui zimbru şi ajunge într-un loc din care nu mai pleacă; îşi înte­meiază un stat şi îi spune Moldova. Legen­da sugerează şi funcţia de jertfă sacramen­tală a bourului: orice sacrificiu de sânge consfinţeşte ceva. Faptul că efigia bourului apare apoi în stema Moldovei dovedeşte că el simbolizează un atribut al întemeie­rii, al câştigării identităţii de neam; el este animalul cu stea în frunte, însemnat, ales şi destinat să reprezinte o colectivitate, întocmai ca în timpurile dacice, în care se ştie că animalul era venerat.'),
(92, 'zimbru', 'Animal din timpuri străvechi, bourul apare ca simbol al întemeierii Moldovei şi ca element preluat şi în stema Princi­patelor Unite; reprezentarea bourului cu stea în frunte şi aşezat între soare şi lună sugerează sensuri legate de armonia uni­versală şi de imaginea globală a lumii. în mitul despre originea statului medieval Moldova, bourul, asemuit cu zimbrul, are rolul animalului vânat, dar şi al animalului îndrumător. în momentele de criză sau în marile încercări ale istoriei, omul primitiv avea nevoie de un „animal-îndrumător”, pe care îl angaja într-o vânătoare ritualică, adică într-o acţiune de găsire a drumului cel bun. Cu acest sens este posibil să fi fost folosit şi animalul menţionat în legenda despre vânătoarea lui Dragoş. In legenda despre întemeierea Moldovei, aşa cum o expune Grigore Ureche în cronica sa, Dragoş pleacă în Maramureş în urmări­rea unui bour sau a unui zimbru şi ajunge într-un loc din care nu mai pleacă; îşi înte­meiază un stat şi îi spune Moldova. Legen­da sugerează şi funcţia de jertfă sacramen­tală a bourului: orice sacrificiu de sânge consfinţeşte ceva. Faptul că efigia bourului apare apoi în stema Moldovei dovedeşte că el simbolizează un atribut al întemeie­rii, al câştigării identităţii de neam; el este animalul cu stea în frunte, însemnat, ales şi destinat să reprezinte o colectivitate, întocmai ca în timpurile dacice, în care se ştie că animalul era venerat.');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` varchar(30) NOT NULL,
  `name` text CHARACTER SET utf8 COLLATE utf8_romanian_ci NOT NULL,
  `score` int(11) NOT NULL,
  `type` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `score`, `type`) VALUES
('1', 'Jimmie Malone', 2, ''),
('10', 'Mae Day', 80, ''),
('101178090235258', 'John Stewart', 15, 'admin'),
('11', 'Mildred Ferguson', 333, ''),
('1575508142713039', 'Ana Mincă', 543, ''),
('2', 'Shelia Cain', 234, ''),
('4', 'Jody Norris', 32, ''),
('5', 'Myra Paul', 24, ''),
('6', 'Hubert Fox', 54, ''),
('7', 'Joel Wagner', 55, ''),
('8', 'Ada Burgess', 65, ''),
('9', 'Jo Oliver', 222, ''),
('975238532507547', 'Diana Min', 552, 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `changes`
--
ALTER TABLE `changes`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chapters`
--
ALTER TABLE `chapters`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `essays`
--
ALTER TABLE `essays`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lessons`
--
ALTER TABLE `lessons`
 ADD PRIMARY KEY (`global_id`);

--
-- Indexes for table `progress`
--
ALTER TABLE `progress`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `symbols`
--
ALTER TABLE `symbols`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `changes`
--
ALTER TABLE `changes`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `chapters`
--
ALTER TABLE `chapters`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `essays`
--
ALTER TABLE `essays`
MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `lessons`
--
ALTER TABLE `lessons`
MODIFY `global_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `progress`
--
ALTER TABLE `progress`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=30;
--
-- AUTO_INCREMENT for table `symbols`
--
ALTER TABLE `symbols`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=93;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
