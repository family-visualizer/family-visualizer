angular.module('app').controller('lifespanChartCtrl', function ($scope, familyService, authService) {

	//x, y, radius

	//year, order, age

	$scope.dataset = [
		[5, 20, 5],
		[480, 90, 30],
		[250, 50, 2],
		[100, 33, 159],
		[330, 95, 47],
		[410, 12, 27],
		[475, 44, 84],
		[25, 67, 37],
		[85, 21, 60],
		[220, 88, 250]
	];

	$scope.cleanData = [];


	$scope.testFamily = [
   {
      "personId":"KWZK-SJF",
      "name":"Eliza J. Markwell",
      "gender":"Female",
      "lifespan":"1833-1893",
      "birthDate":"1833",
      "birthPlace":"Kentucky, United States",
      "deathDate":"3 September 1893",
      "deathPlace":"Hillsboro, Fleming, Kentucky, United States",
      "marriagePlace":"Fleming, Kentucky, United States",
      "marriageDate":"14 December 1848",
      "ascendancyNumber":"321",
      "descendancyNumber":"320-S"
   },
   {
      "personId":"KWZK-SJ5",
      "name":"Catherine Fraley",
      "gender":"Female",
      "lifespan":"1818-1892",
      "birthDate":"13 January 1818",
      "birthPlace":"Flemingsburg, Fleming, Kentucky, United States",
      "deathDate":"22 February 1892",
      "deathPlace":"Rowan, Kentucky, United States",
      "marriagePlace":"Lawrence, Kentucky, United States",
      "marriageDate":"5 March 1834",
      "ascendancyNumber":"323",
      "descendancyNumber":"322-S"
   },
   {
      "personId":"KWZK-SNK",
      "name":"Paulina Jane Humphrey",
      "gender":"Female",
      "lifespan":"1854-1918",
      "birthDate":"15 July 1854",
      "birthPlace":"Morehead, Rowan, Kentucky, United States",
      "deathDate":"9 January 1918",
      "deathPlace":"Vinita, Craig, Oklahoma, United States",
      "marriagePlace":"Fleming, Kentucky",
      "marriageDate":"1873",
      "ascendancyNumber":"161",
      "descendancyNumber":"160-S"
   },
   {
      "personId":"KWZK-SNB",
      "name":"Lydia Mosher",
      "gender":"Female",
      "lifespan":"1820-Deceased",
      "birthDate":"20 May 1820",
      "birthPlace":"Dartmouth, Bristol, Massachusetts, United States",
      "marriagePlace":"Hocking, Athens, Ohio, United States",
      "marriageDate":"18 August 1846",
      "ascendancyNumber":"325"
   },
   {
      "personId":"KWZK-3SM",
      "name":"Margaret Trosper",
      "gender":"Female",
      "lifespan":"1834-1912",
      "birthDate":"12 March 1834",
      "birthPlace":"Knox, Kentucky, United States",
      "deathDate":"30 December 1912",
      "deathPlace":"Evansville, Vanderburgh, Indiana, United States",
      "marriagePlace":"Knox, Kentucky, United States",
      "marriageDate":"23 December 1849",
      "ascendancyNumber":"327",
      "descendancyNumber":"326-S"
   },
   {
      "personId":"KWZK-SNV",
      "name":"Rebecca Garland",
      "gender":"Female",
      "lifespan":"1852-1915",
      "birthDate":"18 November 1852",
      "birthPlace":"Barbourville, Knox, Kentucky, United States",
      "deathDate":"30 April 1915",
      "deathPlace":"North Platte, Lincoln, Nebraska, United States",
      "marriagePlace":"Otwell, Pike, Indiana, United States",
      "marriageDate":"4 May 1870 / 1871",
      "ascendancyNumber":"163",
      "descendancyNumber":"326.02"
   },
   {
      "personId":"KWZK-SNZ",
      "name":"Mertie (Merty) Smith",
      "gender":"Female",
      "lifespan":"1882-1949",
      "birthDate":"2 September 1882",
      "birthPlace":"Otwell, Pike, Indiana, United States",
      "deathDate":"28 February 1949",
      "deathPlace":"North Platte, Lincoln, Nebraska, United States",
      "marriagePlace":"Maxwell, Lincoln, Nebraska, United States",
      "marriageDate":"1906",
      "ascendancyNumber":"81",
      "descendancyNumber":"160.02-S"
   },
   {
      "personId":"KWZK-SNP",
      "name":"Charlotte E. Low",
      "gender":"Female",
      "lifespan":"1859-1910",
      "birthDate":"February 1859",
      "birthPlace":"Ringgold, Ringgold, Iowa, United States",
      "deathDate":"1910",
      "deathPlace":"Farmington Township, Republic, Kansas, United States",
      "ascendancyNumber":"165",
      "descendancyNumber":"164-S"
   },
   {
      "personId":"KWZK-SNR",
      "name":"Katherine Brace",
      "gender":"Female",
      "lifespan":"1856-Deceased",
      "birthDate":"September 1856",
      "birthPlace":"Iowa, United States",
      "marriagePlace":"Schuyler, Missouri, United States",
      "marriageDate":"25 February 1874",
      "ascendancyNumber":"167",
      "descendancyNumber":"166-S"
   },
   {
      "personId":"KWZK-SN6",
      "name":"Ada Lee Phelps",
      "gender":"Female",
      "lifespan":"1888-1983",
      "birthDate":"22 February 1888",
      "birthPlace":"Kansas, United States",
      "deathDate":"November 1983",
      "ascendancyNumber":"83",
      "descendancyNumber":"166.02"
   },
   {
      "personId":"KWZK-SNC",
      "name":"Lottie Leone Senior",
      "gender":"Female",
      "lifespan":"1911-2001",
      "birthDate":"3 May 1911",
      "deathDate":"30 May 2001",
      "deathPlace":"Oregon Township, Washington, Iowa, United States",
      "marriagePlace":"North Platte, Lincoln, Nebraska, United States",
      "marriageDate":"15 November 1930",
      "ascendancyNumber":"41",
      "descendancyNumber":"82.01"
   },
   {
      "personId":"KWZK-SN4",
      "name":"Alice Leona Burns",
      "gender":"Female",
      "lifespan":"1933-2010",
      "birthDate":"19 November 1933",
      "birthPlace":"Wessington, Beadle, South Dakota, United States",
      "deathDate":"6 June 2010",
      "deathPlace":"Portland, Multnomah, Oregon, United States",
      "ascendancyNumber":"21",
      "descendancyNumber":"20-S"
   },
   {
      "personId":"KWZK-96R",
      "name":"Nancy Merrell",
      "gender":"Female",
      "lifespan":"Deceased",
      "ascendancyNumber":"177",
      "descendancyNumber":"176-S"
   },
   {
      "personId":"KWZK-9HY",
      "name":"Mary Elizabeth Jarvis",
      "gender":"Female",
      "lifespan":"1810-1896",
      "birthDate":"31 August 1810",
      "birthPlace":"Buckworth, Huntingdonshire, England",
      "deathDate":"10 October 1896",
      "deathPlace":"Willard, Box Elder, Utah, United States",
      "marriagePlace":"Comberton, Cambridgeshire, England",
      "marriageDate":"12 October 1831",
      "ascendancyNumber":"357",
      "descendancyNumber":"356-S"
   },
   {
      "personId":"KWZK-9WN",
      "name":"Dove Brown",
      "gender":"Female",
      "lifespan":"1818-1853",
      "birthDate":"14 January 1818",
      "birthPlace":"Eynesbury, Huntingdonshire, England",
      "deathDate":"14 July 1853",
      "deathPlace":"Eaton Socon, Bedfordshire, England",
      "marriagePlace":"Eynesbury, Huntingdonshire, England",
      "marriageDate":"3 September 1838",
      "ascendancyNumber":"359",
      "descendancyNumber":"358-S"
   },
   {
      "personId":"KWZK-97B",
      "name":"Mary Prior",
      "gender":"Female",
      "lifespan":"1840-1930",
      "birthDate":"27 January 1840",
      "birthPlace":"Graveley, Cambridgeshire, England",
      "deathDate":"12 December 1930",
      "marriagePlace":"Eynesbury, Huntingdonshire, England",
      "marriageDate":"6 September 1857",
      "ascendancyNumber":"179",
      "descendancyNumber":"358.01"
   },
   {
      "personId":"KWZK-975",
      "name":"Dove Facer",
      "gender":"Female",
      "lifespan":"1867-1915",
      "birthDate":"10 January 1867",
      "birthPlace":"Willard, Box Elder, Utah, United States",
      "deathDate":"2 April 1915",
      "deathPlace":"Rigby, Jefferson, Idaho, United States",
      "ascendancyNumber":"89"
   },
   {
      "personId":"KWZK-SMC",
      "name":"Rebecca Rawlston",
      "gender":"Female",
      "lifespan":"1808-1884",
      "birthDate":"13 May 1808",
      "birthPlace":"Ohio, United States",
      "deathDate":"13 April 1884",
      "deathPlace":"Farmington, Van Buren, Iowa, United States",
      "marriagePlace":"Leesville, Guthrie Township, Lawrence, Indiana, United States",
      "marriageDate":"1 June 1828",
      "ascendancyNumber":"361",
      "descendancyNumber":"360-S"
   },
   {
      "personId":"KWZK-9JZ",
      "name":"Margaret Moss",
      "gender":"Female",
      "lifespan":"1798-1877",
      "birthDate":"17 May 1798",
      "birthPlace":"Barton, Lancashire, England",
      "deathDate":"16 May 1877",
      "deathPlace":"Centerville, Davis, Utah, United States",
      "marriagePlace":"Goosnargh, Lancashire, England",
      "marriageDate":"27 September 1820",
      "ascendancyNumber":"363",
      "descendancyNumber":"362-S"
   },
   {
      "personId":"KWZK-9XT",
      "name":"Jennette Bleasdale",
      "gender":"Female",
      "lifespan":"1826-1921",
      "birthDate":"10 February 1826",
      "birthPlace":"Thornley, Lancashire, England",
      "deathDate":"20 May 1921",
      "deathPlace":"Menan, Jefferson, Idaho, United States",
      "ascendancyNumber":"181",
      "descendancyNumber":"180-S"
   },
   {
      "personId":"KWZK-95W",
      "name":"Lillias Barbour Clark",
      "gender":"Female",
      "lifespan":"Deceased",
      "ascendancyNumber":"91",
      "descendancyNumber":"180.06-S"
   },
   {
      "personId":"KWZK-97R",
      "name":"Lillias Poole",
      "gender":"Female",
      "lifespan":"1903-1995",
      "birthDate":"2 April 1903",
      "birthPlace":"Annis, Jefferson, Idaho, United States",
      "deathDate":"6 December 1995",
      "deathPlace":"Idaho Falls, Bonneville, Idaho, United States",
      "ascendancyNumber":"45",
      "descendancyNumber":"90.01"
   },
   {
      "personId":"KWZV-T77",
      "name":"Ruth Carma Madsen",
      "gender":"Female",
      "lifespan":"Living",
      "ascendancyNumber":"23",
      "descendancyNumber":"46.01"
   },
   {
      "personId":"KWZV-R39",
      "name":"Susan Call",
      "gender":"Female",
      "lifespan":"1964-Living",
      "birthDate":"7 June 1964",
      "birthPlace":"Salt Lake City, Salt Lake, Utah, United States",
      "ascendancyNumber":"11",
      "descendancyNumber":"22.01"
   },
   {
      "personId":"KWZV-RMV",
      "name":"Erin Meyers",
      "gender":"Female",
      "lifespan":"1988-Living",
      "birthDate":"15 June 1988",
      "birthPlace":"Provo, Utah, Utah, United States",
      "ascendancyNumber":"5",
      "descendancyNumber":"10.01"
   },
   {
      "personId":"KWZV-TDY",
      "name":"Magdalena Zaugg",
      "gender":"Female",
      "lifespan":"1771-1819",
      "deathDate":"28 September 1819",
      "deathPlace":"Switzerland",
      "marriagePlace":"Trubschachen, Bern, Switzerland",
      "marriageDate":"1796",
      "ascendancyNumber":"449",
      "descendancyNumber":"448-S"
   },
   {
      "personId":"KWZV-TD7",
      "name":"Verena Jutzi",
      "gender":"Female",
      "lifespan":"1793-1862",
      "birthDate":"22 February 1793",
      "birthPlace":"Rüderswil, Bern, Switzerland",
      "deathDate":"15 February 1862",
      "deathPlace":"Switzerland",
      "marriagePlace":"Röthenbach im Emmental, Bern, Switzerland",
      "marriageDate":"6 May 1823",
      "ascendancyNumber":"225",
      "descendancyNumber":"224-S"
   },
   {
      "personId":"KWZV-TDL",
      "name":"Maria Magdalena Buerki",
      "gender":"Female",
      "lifespan":"1797-1827",
      "birthDate":"20 August 1797",
      "birthPlace":"Worb, Bern, Switzerland",
      "deathDate":"24 August 1827",
      "deathPlace":"Switzerland",
      "marriagePlace":"Rüegsau, Bern, Switzerland",
      "marriageDate":"20 August 1813",
      "ascendancyNumber":"453",
      "descendancyNumber":"452-S"
   },
   {
      "personId":"KWZV-TD2",
      "name":"Elisabeth Aebi",
      "gender":"Female",
      "lifespan":"1781-1825",
      "birthDate":"11 March 1781",
      "birthPlace":"Seeberg, Bern, Switzerland",
      "deathDate":"9 March 1825",
      "deathPlace":",,Switzerland",
      "marriagePlace":"Trubschachen, Bern, Switzerland",
      "marriageDate":"about 1808",
      "ascendancyNumber":"455",
      "descendancyNumber":"454-S"
   },
   {
      "personId":"KWZV-T8G",
      "name":"Magdalena Zuercher",
      "gender":"Female",
      "lifespan":"1809-1854",
      "birthDate":"3 November 1809",
      "birthPlace":"Trubschachen, Bern, Switzerland",
      "deathDate":"7 December 1854",
      "deathPlace":"Rüegsau, Bern, Switzerland",
      "marriagePlace":"Rüegsau, Bern, Switzerland",
      "marriageDate":"13 January 1837",
      "ascendancyNumber":"227",
      "descendancyNumber":"226-S"
   },
   {
      "personId":"KWZV-T8X",
      "name":"Maria Aeschlimann",
      "gender":"Female",
      "lifespan":"1837-1898",
      "birthDate":"12 May 1837",
      "birthPlace":"Rüegsau, Bern, Switzerland",
      "deathDate":"7 February 1898",
      "deathPlace":"Logan, Cache, Utah, United States",
      "marriagePlace":"Trub, Bern, Switzerland",
      "marriageDate":"18 March 1859",
      "ascendancyNumber":"113",
      "descendancyNumber":"226.01"
   },
   {
      "personId":"KWZV-T8D",
      "name":"Marianne Beutler",
      "gender":"Female",
      "lifespan":"1859-1953",
      "birthDate":"9 October 1859",
      "birthPlace":"Buchholterberg, Bern, Switzerland",
      "deathDate":"9 November 1953",
      "ascendancyNumber":"57",
      "descendancyNumber":"56-S"
   },
   {
      "personId":"KWZV-T6M",
      "name":"Anna Gfeller",
      "gender":"Female",
      "lifespan":"1738-Deceased",
      "marriagePlace":"Bern, Switzerland",
      "marriageDate":"about 1764",
      "ascendancyNumber":"465",
      "descendancyNumber":"464-S"
   },
   {
      "personId":"KWZV-TDZ",
      "name":"Susanna Barbara Fasnacht",
      "gender":"Female",
      "lifespan":"1792-1866",
      "birthDate":"2 December 1792",
      "birthPlace":"Muntelier, Fribourg, Switzerland",
      "deathDate":"22 November 1866",
      "ascendancyNumber":"233",
      "descendancyNumber":"232-S"
   },
   {
      "personId":"KWZV-T68",
      "name":"Anna Moser",
      "gender":"Female",
      "lifespan":"1755-Deceased",
      "birthDate":"1755",
      "birthPlace":"Biglen, Bern, Switzerland",
      "marriagePlace":"Münsingen, Bern, Switzerland",
      "marriageDate":"8 October 1779",
      "ascendancyNumber":"469",
      "descendancyNumber":"468-S"
   },
   {
      "personId":"KWZV-T6D",
      "name":"Magdalena Moser",
      "gender":"Female",
      "lifespan":"1773-1832",
      "birthDate":"3 January 1773",
      "birthPlace":"Biglen, Bern, Switzerland",
      "deathDate":"10 September 1832",
      "marriageDate":"17 January 1794",
      "ascendancyNumber":"471",
      "descendancyNumber":"470-S"
   },
   {
      "personId":"KWZV-TD6",
      "name":"Anna Tanner",
      "gender":"Female",
      "lifespan":"1798-1867",
      "birthDate":"14 December 1798",
      "birthPlace":"Walkringen, Bern, Switzerland",
      "deathDate":"1867",
      "marriagePlace":"Walkringen, Bern, Switzerland",
      "marriageDate":"25 May 1824",
      "ascendancyNumber":"235",
      "descendancyNumber":"470.01"
   },
   {
      "personId":"KWZV-TD9",
      "name":"Anna Katharina Schwartz",
      "gender":"Female",
      "lifespan":"1836-1905",
      "birthDate":"27 April 1836",
      "birthPlace":"Schangnau, Bern, Switzerland",
      "deathDate":"25 April 1905",
      "deathPlace":"Bern, Switzerland",
      "marriagePlace":"Grosshöchstetten, Bern, Switzerland",
      "marriageDate":"18 July 1862",
      "ascendancyNumber":"117",
      "descendancyNumber":"234.01"
   },
   {
      "personId":"KWZV-T62",
      "name":"Maria Klötzli",
      "gender":"Female",
      "lifespan":"1745-1818",
      "birthDate":"1745",
      "birthPlace":"Trub, Bern, Switzerland",
      "deathDate":"15 July 1818",
      "deathPlace":"Schangnau, Bern, Switzerland",
      "ascendancyNumber":"473",
      "descendancyNumber":"472-S"
   },
   {
      "personId":"KWZV-T6L",
      "name":"Christina Schweizer",
      "gender":"Female",
      "lifespan":"1764-1834",
      "birthDate":"1 September 1764",
      "birthPlace":"Hasle bei Burgdorf, Bern, Switzerland",
      "deathDate":"1 March 1834",
      "ascendancyNumber":"475",
      "descendancyNumber":"474-S"
   },
   {
      "personId":"KWZV-TDJ",
      "name":"Christina Egli",
      "gender":"Female",
      "lifespan":"1791-1850",
      "birthDate":"11 September 1791",
      "birthPlace":"Schangnau, Bern, Switzerland",
      "deathDate":"19 September 1850",
      "deathPlace":"Schangnau, Bern, Switzerland",
      "marriagePlace":"Schangnau, Bern, Switzerland",
      "marriageDate":"12 November 1813",
      "ascendancyNumber":"237",
      "descendancyNumber":"236-S"
   },
   {
      "personId":"KWZV-T6N",
      "name":"Anna Gerber",
      "gender":"Female",
      "lifespan":"1759-1813",
      "birthDate":"3 August 1759",
      "birthPlace":"Schwarzenegg, Unterlangenegg, Bern, Switzerland",
      "deathDate":"5 May 1813",
      "marriageDate":"7 January 1781",
      "ascendancyNumber":"477",
      "descendancyNumber":"476-S"
   },
   {
      "personId":"KWZV-T66",
      "name":"Maria Hubacher",
      "gender":"Female",
      "lifespan":"1766-1845",
      "birthDate":"1766",
      "birthPlace":"Urtenen, Bern, Switzerland",
      "deathDate":"21 March 1845",
      "marriagePlace":"Urtenen, Bern, Switzerland",
      "marriageDate":"14 March 1783",
      "ascendancyNumber":"479",
      "descendancyNumber":"478-S"
   },
   {
      "personId":"KWZV-TDX",
      "name":"Katharina",
      "gender":"Female",
      "lifespan":"1792-1871",
      "birthDate":"26 February 1792",
      "birthPlace":"Steffisburg, Bern, Switzerland",
      "deathDate":"19 February 1871",
      "marriagePlace":"Schwarzenegg, Unterlangenegg, Bern, Switzerland",
      "marriageDate":"21 November 1818",
      "ascendancyNumber":"239",
      "descendancyNumber":"478.01"
   },
   {
      "personId":"KWZV-TD3",
      "name":"Maria Zuercher",
      "gender":"Female",
      "lifespan":"1823-1883",
      "birthDate":"20 July 1823",
      "birthPlace":"Rüderswil, Bern, Switzerland",
      "deathDate":"2 February 1883",
      "deathPlace":"Schwarzenegg, Unterlangenegg, Bern, Switzerland",
      "marriagePlace":"Thun, Bern, Switzerland",
      "marriageDate":"13 May 1848",
      "ascendancyNumber":"119",
      "descendancyNumber":"238.01"
   },
   {
      "personId":"KWZV-T8R",
      "name":"Rosina Bieri",
      "gender":"Female",
      "lifespan":"1862-1896",
      "birthDate":"23 July 1862",
      "birthPlace":"Schwarzenegg, Unterlangenegg, Bern, Switzerland",
      "deathDate":"8 December 1896",
      "deathPlace":"Logan, Cache, Utah, United States",
      "marriagePlace":"Thun, Bern, Switzerland",
      "marriageDate":"21 October 1882",
      "ascendancyNumber":"59",
      "descendancyNumber":"118.01"
   },
   {
      "personId":"KWZV-T82",
      "name":"Rosa Schwartz",
      "gender":"Female",
      "lifespan":"1887-1986",
      "birthDate":"9 May 1887",
      "birthPlace":"Uetendorf, Bern, Switzerland",
      "deathDate":"10 August 1986",
      "deathPlace":"Oklahoma City, Oklahoma, Oklahoma, United States",
      "ascendancyNumber":"29",
      "descendancyNumber":"58.01"
   },
   {
      "personId":"KWZK-MMC",
      "name":"Mrs. Charles McAlister",
      "gender":"Female",
      "lifespan":"Deceased",
      "birthPlace":"Argyll, Scotland",
      "ascendancyNumber":"481",
      "descendancyNumber":"480-S"
   },
   {
      "personId":"KWZK-MMZ",
      "name":"Elisabeth Colquhoun",
      "gender":"Female",
      "lifespan":"1780-1819",
      "birthDate":"1780",
      "birthPlace":"Greenock, Renfrewshire, Scotland",
      "deathDate":"1819",
      "marriagePlace":"West Greenock, Renfrewshire, Scotland",
      "marriageDate":"17 November 1795",
      "ascendancyNumber":"483",
      "descendancyNumber":"482-S"
   },
   {
      "personId":"KWZV-111",
      "name":"Helen or Ellen Maxwell",
      "gender":"Female",
      "lifespan":"1798-1864",
      "birthDate":"1798",
      "birthPlace":"Largs, North Ayrshire, Scotland",
      "deathDate":"4 April 1864",
      "deathPlace":"Glasgow, Lanarkshire, Scotland",
      "marriagePlace":"Greenock, Renfrewshire, Scotland",
      "marriageDate":"29 March 1819",
      "ascendancyNumber":"241",
      "descendancyNumber":"482.01"
   },
   {
      "personId":"KWZK-MJ5",
      "name":"Mary Haig",
      "gender":"Female",
      "lifespan":"Deceased",
      "ascendancyNumber":"121",
      "descendancyNumber":"242.01"
   },
   {
      "personId":"KWZK-MMK",
      "name":"Rosetta Amanda Barber",
      "gender":"Female",
      "lifespan":"1758-1810",
      "birthDate":"15 May 1758",
      "birthPlace":"Simsbury, Hartford, CT",
      "deathDate":"18 April 1810",
      "deathPlace":"Hartford, Hartford, Connecticut, United States",
      "ascendancyNumber":"491",
      "descendancyNumber":"490-S"
   },
   {
      "personId":"KWZK-MMS",
      "name":"Rosetta Lenora Pettibone",
      "gender":"Female",
      "lifespan":"1778-1846",
      "birthDate":"22 October 1778",
      "birthPlace":"Simsbury, Hartford, Connecticut, United States",
      "deathDate":"12 October 1846",
      "deathPlace":"Walnut Grove, Knox, Illinois, United States",
      "ascendancyNumber":"245",
      "descendancyNumber":"490.01"
   },
   {
      "personId":"KWZK-MM5",
      "name":"Elizabeth Ranger",
      "gender":"Female",
      "lifespan":"1764-Deceased",
      "birthDate":"1764",
      "birthPlace":"Northiam, East Sussex, England",
      "marriagePlace":"Northiam, East Sussex, England",
      "marriageDate":"29 January 1788",
      "ascendancyNumber":"493",
      "descendancyNumber":"492-S"
   },
   {
      "personId":"KWZK-MM2",
      "name":"Mrs. Walter Foreman",
      "gender":"Female",
      "lifespan":"1773-Deceased",
      "birthDate":"1773",
      "birthPlace":"Great Britain, United Kingdom",
      "marriagePlace":"Beckley, Sussex, England",
      "marriageDate":"before 1793",
      "ascendancyNumber":"495",
      "descendancyNumber":"494-S"
   },
   {
      "personId":"KWZK-MMQ",
      "name":"Sarah Forman",
      "gender":"Female",
      "lifespan":"1793-1874",
      "birthDate":"1793",
      "birthPlace":"Beckley, Sussex, England",
      "deathDate":"6 November 1874",
      "deathPlace":"South Hall Greenwood, Middlesex, District of Uxbridge, England",
      "ascendancyNumber":"247",
      "descendancyNumber":"494.01"
   },
   {
      "personId":"KWZV-11Y",
      "name":"Caroline Horton",
      "gender":"Female",
      "lifespan":"1824-1857",
      "birthDate":"25 December 1824",
      "birthPlace":"Sandhurst, Kent, England",
      "deathDate":"21 February 1857",
      "deathPlace":"Brigham City, Box Elder, Utah, United States",
      "marriagePlace":"Salt Lake City, Salt Lake, Utah Territory, United States",
      "marriageDate":"9 October 1853",
      "ascendancyNumber":"123",
      "descendancyNumber":"122-S"
   },
   {
      "personId":"KWZV-11G",
      "name":"Clarissa Caroline Snow",
      "gender":"Female",
      "lifespan":"1854-1917",
      "birthDate":"10 July 1854",
      "birthPlace":"Salt Lake City, Salt Lake, Utah, United States",
      "deathDate":"15 October 1917",
      "deathPlace":"Salt Lake City, Salt Lake, Utah, United States",
      "marriagePlace":"Salt Lake City, Salt Lake, Utah, United States",
      "marriageDate":"12 June 1871",
      "ascendancyNumber":"61",
      "descendancyNumber":"122.01"
   },
   {
      "personId":"KWZV-1F5",
      "name":"Clarissa McAlister",
      "gender":"Female",
      "lifespan":"Living",
      "ascendancyNumber":"15",
      "descendancyNumber":"30.01"
   },
   {
      "personId":"KWZV-YJQ",
      "name":"Bonnie Beutler",
      "gender":"Female",
      "lifespan":"Living",
      "birthPlace":"Provo, Utah, Utah, United States",
      "ascendancyNumber":"7",
      "descendancyNumber":"14.01"
   },
   {
      "personId":"KWZV-TYP",
      "name":"Zachary Baker",
      "gender":"Male",
      "lifespan":"1992-Living",
      "birthDate":"16 September 1992",
      "birthPlace":"Van Nuys, Los Angeles, California, United States",
      "ascendancyNumber":"3",
      "descendancyNumber":"6.01"
   },
   {
      "personId":"KWZK-SJX",
      "name":"John Myers",
      "gender":"Male",
      "lifespan":"1822-1896",
      "birthDate":"30 January 1822",
      "birthPlace":"Fleming, Kentucky, United States",
      "deathDate":"14 July 1896",
      "deathPlace":"Fleming, Kentucky, United States",
      "marriagePlace":"Fleming, Kentucky, United States",
      "marriageDate":"14 December 1848",
      "ascendancyNumber":"320",
      "children":[
         {
            "personId":"KWZK-SJF",
            "name":"Eliza J. Markwell",
            "gender":"Female",
            "lifespan":"1833-1893",
            "birthDate":"1833",
            "birthPlace":"Kentucky, United States",
            "deathDate":"3 September 1893",
            "deathPlace":"Hillsboro, Fleming, Kentucky, United States",
            "marriagePlace":"Fleming, Kentucky, United States",
            "marriageDate":"14 December 1848",
            "descendancyNumber":"320-S"
         },
         {
            "personId":"KWZK-SNJ",
            "name":"James Wesley Meyers",
            "gender":"Male",
            "lifespan":"1855-1921",
            "birthDate":"1 April 1855",
            "birthPlace":"Heidelberg, Lee, Kentucky, United States",
            "deathDate":"8 October 1921",
            "deathPlace":"Maxwell, Lincoln, Nebraska, United States",
            "marriagePlace":"Fleming, Kentucky",
            "marriageDate":"1873",
            "descendancyNumber":"320.01",
            "ascendancyNumber":"160"
         },
         {
            "personId":"KWZK-SNK",
            "name":"Paulina Jane Humphrey",
            "gender":"Female",
            "lifespan":"1854-1918",
            "birthDate":"15 July 1854",
            "birthPlace":"Morehead, Rowan, Kentucky, United States",
            "deathDate":"9 January 1918",
            "deathPlace":"Vinita, Craig, Oklahoma, United States",
            "marriagePlace":"Fleming, Kentucky",
            "marriageDate":"1873",
            "descendancyNumber":"320.01-S"
         }
      ]
   },
   {
      "personId":"KWZK-SNJ",
      "name":"James Wesley Meyers",
      "gender":"Male",
      "lifespan":"1855-1921",
      "birthDate":"1 April 1855",
      "birthPlace":"Heidelberg, Lee, Kentucky, United States",
      "deathDate":"8 October 1921",
      "deathPlace":"Maxwell, Lincoln, Nebraska, United States",
      "marriagePlace":"Fleming, Kentucky",
      "marriageDate":"1873",
      "descendancyNumber":"320.01",
      "ascendancyNumber":"160"
   },
   {
      "personId":"KWZK-SN8",
      "name":"S. J. Tilden Meyers",
      "gender":"Male",
      "lifespan":"1876-1959",
      "birthDate":"17 September 1876",
      "birthPlace":"Kentucky, United States",
      "deathDate":"20 November 1959",
      "marriagePlace":"Maxwell, Lincoln, Nebraska, United States",
      "marriageDate":"1906",
      "ascendancyNumber":"80",
      "children":[
         {
            "personId":"KWZK-SNZ",
            "name":"Mertie (Merty) Smith",
            "gender":"Female",
            "lifespan":"1882-1949",
            "birthDate":"2 September 1882",
            "birthPlace":"Otwell, Pike, Indiana, United States",
            "deathDate":"28 February 1949",
            "deathPlace":"North Platte, Lincoln, Nebraska, United States",
            "marriagePlace":"Maxwell, Lincoln, Nebraska, United States",
            "marriageDate":"1906",
            "descendancyNumber":"80-S"
         },
         {
            "personId":"KWZK-SNX",
            "name":"Guy Meyers",
            "gender":"Male",
            "lifespan":"1907-1957",
            "birthDate":"1907",
            "birthPlace":"North Platte, Lincoln, Nebraska, United States",
            "deathDate":"1957",
            "deathPlace":"North Platte, Lincoln, Nebraska, United States",
            "descendancyNumber":"80.01"
         },
         {
            "personId":"KWZK-SNH",
            "name":"Richard George Meyers",
            "gender":"Male",
            "lifespan":"1908-1996",
            "birthDate":"11 September 1908",
            "birthPlace":"Maxwell, Lincoln, Nebraska, United States",
            "deathDate":"14 December 1996",
            "marriagePlace":"North Platte, Lincoln, Nebraska, United States",
            "marriageDate":"15 November 1930",
            "descendancyNumber":"82.01-S",
            "ascendancyNumber":"40"
         },
         {
            "personId":"KWZK-SNC",
            "name":"Lottie Leone Senior",
            "gender":"Female",
            "lifespan":"1911-2001",
            "birthDate":"3 May 1911",
            "deathDate":"30 May 2001",
            "deathPlace":"Oregon Township, Washington, Iowa, United States",
            "marriagePlace":"North Platte, Lincoln, Nebraska, United States",
            "marriageDate":"15 November 1930",
            "descendancyNumber":"80.02-S"
         }
      ],
      "descendancyNumber":"160.02"
   },
   {
      "personId":"KWZK-SNX",
      "name":"Guy Meyers",
      "gender":"Male",
      "lifespan":"1907-1957",
      "birthDate":"1907",
      "birthPlace":"North Platte, Lincoln, Nebraska, United States",
      "deathDate":"1957",
      "deathPlace":"North Platte, Lincoln, Nebraska, United States",
      "descendancyNumber":"80.01"
   },
   {
      "personId":"KWZK-SNH",
      "name":"Richard George Meyers",
      "gender":"Male",
      "lifespan":"1908-1996",
      "birthDate":"11 September 1908",
      "birthPlace":"Maxwell, Lincoln, Nebraska, United States",
      "deathDate":"14 December 1996",
      "marriagePlace":"North Platte, Lincoln, Nebraska, United States",
      "marriageDate":"15 November 1930",
      "descendancyNumber":"82.01-S",
      "ascendancyNumber":"40"
   },
   {
      "personId":"KWZK-SJV",
      "name":"Rufus B. Humphrey",
      "gender":"Male",
      "lifespan":"1814-1890",
      "birthDate":"5 September 1814",
      "birthPlace":"Flemingsburg, Fleming, Kentucky, United States",
      "deathDate":"5 July 1890",
      "deathPlace":"Rowan, Kentucky, United States",
      "marriagePlace":"Lawrence, Kentucky, United States",
      "marriageDate":"5 March 1834",
      "ascendancyNumber":"322",
      "children":[
         {
            "personId":"KWZK-SJ5",
            "name":"Catherine Fraley",
            "gender":"Female",
            "lifespan":"1818-1892",
            "birthDate":"13 January 1818",
            "birthPlace":"Flemingsburg, Fleming, Kentucky, United States",
            "deathDate":"22 February 1892",
            "deathPlace":"Rowan, Kentucky, United States",
            "marriagePlace":"Lawrence, Kentucky, United States",
            "marriageDate":"5 March 1834",
            "descendancyNumber":"322-S"
         },
         {
            "personId":"KWZK-SJ2",
            "name":"Miller",
            "gender":"Male",
            "lifespan":"1851-Deceased",
            "birthDate":"1851",
            "birthPlace":"Morehead, Rowan, Kentucky, United States",
            "descendancyNumber":"322.01-S"
         },
         {
            "personId":"KWZK-SNK",
            "name":"Paulina Jane Humphrey",
            "gender":"Female",
            "lifespan":"1854-1918",
            "birthDate":"15 July 1854",
            "birthPlace":"Morehead, Rowan, Kentucky, United States",
            "deathDate":"9 January 1918",
            "deathPlace":"Vinita, Craig, Oklahoma, United States",
            "descendancyNumber":"322.01"
         }
      ]
   },
   {
      "personId":"KWZK-SJ2",
      "name":"Miller",
      "gender":"Male",
      "lifespan":"1851-Deceased",
      "birthDate":"1851",
      "birthPlace":"Morehead, Rowan, Kentucky, United States",
      "descendancyNumber":"322.01-S"
   },
   {
      "personId":"KWZK-SNN",
      "name":"George Hampson Smith",
      "gender":"Male",
      "lifespan":"1847-1933",
      "birthDate":"28 May 1847",
      "birthPlace":"Ohio, United States",
      "deathDate":"26 February 1933",
      "deathPlace":"Ericson, Wheeler, Nebraska, United States",
      "marriagePlace":"Otwell, Pike, Indiana, United States",
      "marriageDate":"4 May 1870 / 1871",
      "ascendancyNumber":"162",
      "children":[
         {
            "personId":"KWZK-SNV",
            "name":"Rebecca Garland",
            "gender":"Female",
            "lifespan":"1852-1915",
            "birthDate":"18 November 1852",
            "birthPlace":"Barbourville, Knox, Kentucky, United States",
            "deathDate":"30 April 1915",
            "deathPlace":"North Platte, Lincoln, Nebraska, United States",
            "marriagePlace":"Otwell, Pike, Indiana, United States",
            "marriageDate":"4 May 1870 / 1871",
            "descendancyNumber":"162-S"
         },
         {
            "personId":"KWZK-SJ9",
            "name":"William Velzie Smith",
            "gender":"Male",
            "lifespan":"1872-1933",
            "birthDate":"31 May 1872",
            "birthPlace":"Otwell, Pike, Indiana, United States",
            "deathDate":"30 October 1933",
            "marriageDate":"13 June 1893",
            "descendancyNumber":"162.01"
         },
         {
            "personId":"KWZK-SVJ",
            "name":"Maggie Burch",
            "gender":"Female",
            "lifespan":"1876-Deceased",
            "birthDate":"1876",
            "birthPlace":"Otwell, Pike, Indiana, United States",
            "marriageDate":"13 June 1893",
            "descendancyNumber":"162.01-S"
         },
         {
            "personId":"KWZK-SJM",
            "name":"Eva Smith",
            "gender":"Female",
            "lifespan":"1873-1876",
            "birthDate":"21 November 1873",
            "birthPlace":"Otwell, Pike, Indiana, United States",
            "deathDate":"17 January 1876",
            "descendancyNumber":"162.02"
         },
         {
            "personId":"KWZK-SVN",
            "name":"William R. Wills",
            "gender":"Male",
            "lifespan":"1873-Deceased",
            "birthDate":"1873",
            "birthPlace":"Otwell, Pike, Indiana, United States",
            "marriageDate":"12 August 1895",
            "descendancyNumber":"162.03-S"
         },
         {
            "personId":"KWZK-SN1",
            "name":"Anna Marilla Smith",
            "gender":"Female",
            "lifespan":"1877-1934",
            "birthDate":"24 March 1877",
            "birthPlace":"Otwell, Pike, Indiana, United States",
            "deathDate":"30 May 1934",
            "marriageDate":"12 August 1895",
            "descendancyNumber":"162.03"
         },
         {
            "personId":"KWZK-SVR",
            "name":"Thomas C. Lake",
            "gender":"Male",
            "lifespan":"1875-Deceased",
            "birthDate":"1875",
            "birthPlace":"Otwell, Pike, Indiana, United States",
            "marriageDate":"31 January 1900",
            "descendancyNumber":"162.04-S"
         },
         {
            "personId":"KWZK-SJ7",
            "name":"Attie C. Smith",
            "gender":"Female",
            "lifespan":"1879-1918",
            "birthDate":"31 January 1879",
            "birthPlace":"Otwell, Pike, Indiana, United States",
            "deathDate":"8 December 1918",
            "marriageDate":"31 January 1900",
            "descendancyNumber":"162.04"
         },
         {
            "personId":"KWZK-SJS",
            "name":"Lester George Smith",
            "gender":"Male",
            "lifespan":"1880-1841",
            "birthDate":"20 December 1880",
            "birthPlace":"Otwell, Pike, Indiana, United States",
            "deathDate":"27 June 1841",
            "deathPlace":"North Platte, Lincoln, Nebraska, United States",
            "marriageDate":"4 May 1904",
            "descendancyNumber":"162.05"
         },
         {
            "personId":"KWZK-SVL",
            "name":"Zella Penner",
            "gender":"Female",
            "lifespan":"1885-1920",
            "birthDate":"28 June 1885",
            "birthPlace":"Otwell, Pike, Indiana, United States",
            "deathDate":"3 August 1920",
            "marriageDate":"4 May 1904",
            "descendancyNumber":"162.05-S"
         },
         {
            "personId":"KWZK-SN8",
            "name":"S. J. Tilden Meyers",
            "gender":"Male",
            "lifespan":"1876-1959",
            "birthDate":"17 September 1876",
            "birthPlace":"Kentucky, United States",
            "deathDate":"20 November 1959",
            "marriagePlace":"Maxwell, Lincoln, Nebraska, United States",
            "marriageDate":"1906",
            "descendancyNumber":"162.06-S"
         },
         {
            "personId":"KWZK-SNZ",
            "name":"Mertie (Merty) Smith",
            "gender":"Female",
            "lifespan":"1882-1949",
            "birthDate":"2 September 1882",
            "birthPlace":"Otwell, Pike, Indiana, United States",
            "deathDate":"28 February 1949",
            "deathPlace":"North Platte, Lincoln, Nebraska, United States",
            "marriagePlace":"Maxwell, Lincoln, Nebraska, United States",
            "marriageDate":"1906",
            "descendancyNumber":"162.06"
         },
         {
            "personId":"KWZK-SV2",
            "name":"Clyde Penner",
            "gender":"Male",
            "lifespan":"1878-Deceased",
            "birthDate":"1878",
            "birthPlace":"Otwell, Pike, Indiana, United States",
            "marriageDate":"4 May 1904",
            "descendancyNumber":"162.07-S"
         },
         {
            "personId":"KWZK-SJ3",
            "name":"Gertie (Gerty) Smith",
            "gender":"Female",
            "lifespan":"1882-1958",
            "birthDate":"2 September 1882",
            "birthPlace":"Otwell, Pike, Indiana, United States",
            "deathDate":"19 January 1958",
            "marriageDate":"4 May 1904",
            "descendancyNumber":"162.07"
         },
         {
            "personId":"KWZK-SJ4",
            "name":"Everett Clinton Smith",
            "gender":"Male",
            "lifespan":"1884-1974",
            "birthDate":"17 May 1884",
            "birthPlace":"Otwell, Pike, Indiana, United States",
            "deathDate":"4 May 1974",
            "deathPlace":"North Platte, Lincoln, Nebraska, United States",
            "descendancyNumber":"162.08"
         },
         {
            "personId":"KWZK-SVT",
            "name":"Jesse Ward Clark",
            "gender":"Male",
            "lifespan":"1893-1980",
            "birthDate":"26 November 1893",
            "birthPlace":"Garfield Township, Frontier, Nebraska, United States",
            "deathDate":"22 April 1980",
            "marriageDate":"24 May 1912",
            "descendancyNumber":"162.09-S"
         },
         {
            "personId":"KWZK-SJQ",
            "name":"Mary May Smith",
            "gender":"Female",
            "lifespan":"1892-1964",
            "birthDate":"3 December 1892",
            "birthPlace":"Garfield Township, Frontier, Nebraska, United States",
            "deathDate":"31 October 1964",
            "marriageDate":"24 May 1912",
            "descendancyNumber":"162.09"
         },
         {
            "personId":"KWZK-SNY",
            "name":"Herbert Leroy Smith",
            "gender":"Male",
            "lifespan":"1894-1958",
            "birthDate":"21 December 1894",
            "birthPlace":"Garfield Township, Frontier, Nebraska, United States",
            "deathDate":"6 April 1958",
            "marriageDate":"20 July 1915",
            "descendancyNumber":"162.10"
         },
         {
            "personId":"KWZK-SV7",
            "name":"Margaret Fablinger",
            "gender":"Female",
            "lifespan":"1898-Deceased",
            "birthDate":"1898",
            "birthPlace":"Garfield Township, Frontier, Nebraska, United States",
            "marriageDate":"20 July 1915",
            "descendancyNumber":"162.10-S"
         }
      ],
      "descendancyNumber":"326.02-S"
   },
   {
      "personId":"KWZK-SJ9",
      "name":"William Velzie Smith",
      "gender":"Male",
      "lifespan":"1872-1933",
      "birthDate":"31 May 1872",
      "birthPlace":"Otwell, Pike, Indiana, United States",
      "deathDate":"30 October 1933",
      "marriageDate":"13 June 1893",
      "descendancyNumber":"162.01"
   },
   {
      "personId":"KWZK-SVJ",
      "name":"Maggie Burch",
      "gender":"Female",
      "lifespan":"1876-Deceased",
      "birthDate":"1876",
      "birthPlace":"Otwell, Pike, Indiana, United States",
      "marriageDate":"13 June 1893",
      "descendancyNumber":"162.01-S"
   },
   {
      "personId":"KWZK-SJM",
      "name":"Eva Smith",
      "gender":"Female",
      "lifespan":"1873-1876",
      "birthDate":"21 November 1873",
      "birthPlace":"Otwell, Pike, Indiana, United States",
      "deathDate":"17 January 1876",
      "descendancyNumber":"162.02"
   },
   {
      "personId":"KWZK-SVN",
      "name":"William R. Wills",
      "gender":"Male",
      "lifespan":"1873-Deceased",
      "birthDate":"1873",
      "birthPlace":"Otwell, Pike, Indiana, United States",
      "marriageDate":"12 August 1895",
      "descendancyNumber":"162.03-S"
   },
   {
      "personId":"KWZK-SN1",
      "name":"Anna Marilla Smith",
      "gender":"Female",
      "lifespan":"1877-1934",
      "birthDate":"24 March 1877",
      "birthPlace":"Otwell, Pike, Indiana, United States",
      "deathDate":"30 May 1934",
      "marriageDate":"12 August 1895",
      "descendancyNumber":"162.03"
   },
   {
      "personId":"KWZK-SVR",
      "name":"Thomas C. Lake",
      "gender":"Male",
      "lifespan":"1875-Deceased",
      "birthDate":"1875",
      "birthPlace":"Otwell, Pike, Indiana, United States",
      "marriageDate":"31 January 1900",
      "descendancyNumber":"162.04-S"
   },
   {
      "personId":"KWZK-SJ7",
      "name":"Attie C. Smith",
      "gender":"Female",
      "lifespan":"1879-1918",
      "birthDate":"31 January 1879",
      "birthPlace":"Otwell, Pike, Indiana, United States",
      "deathDate":"8 December 1918",
      "marriageDate":"31 January 1900",
      "descendancyNumber":"162.04"
   },
   {
      "personId":"KWZK-SJS",
      "name":"Lester George Smith",
      "gender":"Male",
      "lifespan":"1880-1841",
      "birthDate":"20 December 1880",
      "birthPlace":"Otwell, Pike, Indiana, United States",
      "deathDate":"27 June 1841",
      "deathPlace":"North Platte, Lincoln, Nebraska, United States",
      "marriageDate":"4 May 1904",
      "descendancyNumber":"162.05"
   },
   {
      "personId":"KWZK-SVL",
      "name":"Zella Penner",
      "gender":"Female",
      "lifespan":"1885-1920",
      "birthDate":"28 June 1885",
      "birthPlace":"Otwell, Pike, Indiana, United States",
      "deathDate":"3 August 1920",
      "marriageDate":"4 May 1904",
      "descendancyNumber":"162.05-S"
   },
   {
      "personId":"KWZK-SV2",
      "name":"Clyde Penner",
      "gender":"Male",
      "lifespan":"1878-Deceased",
      "birthDate":"1878",
      "birthPlace":"Otwell, Pike, Indiana, United States",
      "marriageDate":"4 May 1904",
      "descendancyNumber":"162.07-S"
   },
   {
      "personId":"KWZK-SJ3",
      "name":"Gertie (Gerty) Smith",
      "gender":"Female",
      "lifespan":"1882-1958",
      "birthDate":"2 September 1882",
      "birthPlace":"Otwell, Pike, Indiana, United States",
      "deathDate":"19 January 1958",
      "marriageDate":"4 May 1904",
      "descendancyNumber":"162.07"
   },
   {
      "personId":"KWZK-SJ4",
      "name":"Everett Clinton Smith",
      "gender":"Male",
      "lifespan":"1884-1974",
      "birthDate":"17 May 1884",
      "birthPlace":"Otwell, Pike, Indiana, United States",
      "deathDate":"4 May 1974",
      "deathPlace":"North Platte, Lincoln, Nebraska, United States",
      "descendancyNumber":"162.08"
   },
   {
      "personId":"KWZK-SVT",
      "name":"Jesse Ward Clark",
      "gender":"Male",
      "lifespan":"1893-1980",
      "birthDate":"26 November 1893",
      "birthPlace":"Garfield Township, Frontier, Nebraska, United States",
      "deathDate":"22 April 1980",
      "marriageDate":"24 May 1912",
      "descendancyNumber":"162.09-S"
   },
   {
      "personId":"KWZK-SJQ",
      "name":"Mary May Smith",
      "gender":"Female",
      "lifespan":"1892-1964",
      "birthDate":"3 December 1892",
      "birthPlace":"Garfield Township, Frontier, Nebraska, United States",
      "deathDate":"31 October 1964",
      "marriageDate":"24 May 1912",
      "descendancyNumber":"162.09"
   },
   {
      "personId":"KWZK-SNY",
      "name":"Herbert Leroy Smith",
      "gender":"Male",
      "lifespan":"1894-1958",
      "birthDate":"21 December 1894",
      "birthPlace":"Garfield Township, Frontier, Nebraska, United States",
      "deathDate":"6 April 1958",
      "marriageDate":"20 July 1915",
      "descendancyNumber":"162.10"
   },
   {
      "personId":"KWZK-SV7",
      "name":"Margaret Fablinger",
      "gender":"Female",
      "lifespan":"1898-Deceased",
      "birthDate":"1898",
      "birthPlace":"Garfield Township, Frontier, Nebraska, United States",
      "marriageDate":"20 July 1915",
      "descendancyNumber":"162.10-S"
   },
   {
      "personId":"KWZK-SJ6",
      "name":"Hattie Meyers",
      "gender":"Female",
      "lifespan":"1874-1962",
      "birthDate":"13 April 1874",
      "birthPlace":"Rowan, Kentucky, United States",
      "deathDate":"10 August 1962",
      "descendancyNumber":"160.01"
   },
   {
      "personId":"KWZK-SJZ",
      "name":"Dolphin Percy Meyers",
      "gender":"Male",
      "lifespan":"1878-1974",
      "birthDate":"25 May 1878",
      "birthPlace":"Hillsboro, Fleming, Kentucky, United States",
      "deathDate":"12 April 1974",
      "deathPlace":"Twin Falls, Twin Falls, Idaho, United States",
      "descendancyNumber":"160.03"
   },
   {
      "personId":"KWZK-SJC",
      "name":"Pearl M. Meyers",
      "gender":"Female",
      "lifespan":"1881-1973",
      "birthDate":"26 May 1881",
      "birthPlace":"Stapleton, Logan, Nebraska, United States",
      "deathDate":"January 1973",
      "descendancyNumber":"160.04"
   },
   {
      "personId":"KWZK-SJH",
      "name":"Kate Meyers",
      "gender":"Female",
      "lifespan":"1884-1972",
      "birthDate":"22 January 1884",
      "birthPlace":"Kentucky, United States",
      "deathDate":"20 November 1972",
      "deathPlace":"San Jose, Santa Clara, California, United States",
      "descendancyNumber":"160.05"
   },
   {
      "personId":"KWZK-SJ8",
      "name":"Omar Meyers",
      "gender":"Male",
      "lifespan":"1886-1974",
      "birthDate":"5 September 1886",
      "birthPlace":"Danville, Vermilion, Illinois, United States",
      "deathDate":"14 February 1974",
      "descendancyNumber":"160.06"
   },
   {
      "personId":"KWZK-SJD",
      "name":"Edna Meyers",
      "gender":"Female",
      "lifespan":"1896-1902",
      "birthDate":"5 May 1896",
      "birthPlace":"Illinois, United States",
      "deathDate":"12 January 1902",
      "descendancyNumber":"160.07"
   },
   {
      "personId":"KWZK-SJW",
      "name":"William Smith",
      "gender":"Male",
      "lifespan":"1817-1885",
      "birthDate":"15 June 1817",
      "birthPlace":"Guernsey, Ohio, United States",
      "deathDate":"24 August 1885",
      "deathPlace":"Jefferson Township, Pike, Indiana, United States",
      "marriagePlace":"Hocking, Athens, Ohio, United States",
      "marriageDate":"18 August 1846",
      "ascendancyNumber":"324",
      "children":[
         {
            "personId":"KWZK-SKW",
            "name":"Emma Randall",
            "gender":"Female",
            "lifespan":"1817-1846",
            "birthDate":"1817",
            "birthPlace":"Ohio, United States",
            "deathDate":"8 March 1846",
            "deathPlace":"Vinton, Vinton, Ohio, United States",
            "marriagePlace":"Ohio, United States",
            "marriageDate":"18 November 1841",
            "descendancyNumber":"324-S"
         },
         {
            "personId":"KWZK-SVY",
            "name":"William Smith",
            "gender":"Male",
            "lifespan":"1840-1847",
            "birthDate":"1840",
            "deathDate":"1847",
            "deathPlace":"Ohio, United States",
            "descendancyNumber":"324.01"
         },
         {
            "personId":"KWZK-SVB",
            "name":"Elizabeth K Smith",
            "gender":"Female",
            "lifespan":"1842-Deceased",
            "birthDate":"1842",
            "birthPlace":"Ohio, United States",
            "descendancyNumber":"324.02"
         },
         {
            "personId":"KWZK-SKM",
            "name":"Emma C. Smith",
            "gender":"Female",
            "lifespan":"1842-Deceased",
            "birthDate":"1842",
            "birthPlace":"Ohio, United States",
            "descendancyNumber":"324.03"
         },
         {
            "personId":"KWZK-SK9",
            "name":"Isaac Monroe Smith",
            "gender":"Male",
            "lifespan":"1844-1902",
            "birthDate":"1844",
            "birthPlace":"Vinton, Ohio, United States",
            "deathDate":"1902",
            "deathPlace":"Union Township, Morgan, Ohio, United States",
            "descendancyNumber":"324.04"
         }
      ]
   },
   {
      "personId":"KWZK-SKW",
      "name":"Emma Randall",
      "gender":"Female",
      "lifespan":"1817-1846",
      "birthDate":"1817",
      "birthPlace":"Ohio, United States",
      "deathDate":"8 March 1846",
      "deathPlace":"Vinton, Vinton, Ohio, United States",
      "marriagePlace":"Ohio, United States",
      "marriageDate":"18 November 1841",
      "descendancyNumber":"324-S"
   },
   {
      "personId":"KWZK-SVY",
      "name":"William Smith",
      "gender":"Male",
      "lifespan":"1840-1847",
      "birthDate":"1840",
      "deathDate":"1847",
      "deathPlace":"Ohio, United States",
      "descendancyNumber":"324.01"
   },
   {
      "personId":"KWZK-SVB",
      "name":"Elizabeth K Smith",
      "gender":"Female",
      "lifespan":"1842-Deceased",
      "birthDate":"1842",
      "birthPlace":"Ohio, United States",
      "descendancyNumber":"324.02"
   },
   {
      "personId":"KWZK-SKM",
      "name":"Emma C. Smith",
      "gender":"Female",
      "lifespan":"1842-Deceased",
      "birthDate":"1842",
      "birthPlace":"Ohio, United States",
      "descendancyNumber":"324.03"
   },
   {
      "personId":"KWZK-SK9",
      "name":"Isaac Monroe Smith",
      "gender":"Male",
      "lifespan":"1844-1902",
      "birthDate":"1844",
      "birthPlace":"Vinton, Ohio, United States",
      "deathDate":"1902",
      "deathPlace":"Union Township, Morgan, Ohio, United States",
      "descendancyNumber":"324.04"
   },
   {
      "personId":"KWZK-3VX",
      "name":"George Benton Senior",
      "gender":"Male",
      "lifespan":"1852-1897",
      "birthDate":"1852",
      "birthPlace":"Ohio, United States",
      "deathDate":"25 September 1897",
      "deathPlace":"Rooks, Kansas, United States",
      "ascendancyNumber":"164",
      "children":[
         {
            "personId":"KWZK-SNP",
            "name":"Charlotte E. Low",
            "gender":"Female",
            "lifespan":"1859-1910",
            "birthDate":"February 1859",
            "birthPlace":"Ringgold, Ringgold, Iowa, United States",
            "deathDate":"1910",
            "deathPlace":"Farmington Township, Republic, Kansas, United States",
            "descendancyNumber":"164-S"
         },
         {
            "personId":"KWZK-SJP",
            "name":"Arthur Henry Senior",
            "gender":"Male",
            "lifespan":"1880-1950",
            "birthDate":"13 September 1880",
            "birthPlace":"Rooks, Kansas, United States",
            "deathDate":"16 May 1950",
            "descendancyNumber":"164.01"
         },
         {
            "personId":"KWZK-SJL",
            "name":"E. Maude Senior",
            "gender":"Female",
            "lifespan":"1884-Deceased",
            "birthDate":"1884",
            "birthPlace":"Kansas, United States",
            "descendancyNumber":"164.02"
         },
         {
            "personId":"KWZK-SND",
            "name":"Corwin Percy Senior",
            "gender":"Male",
            "lifespan":"1889-1960",
            "birthDate":"22 February 1889",
            "birthPlace":"Stockton, Rooks, Kansas, United States",
            "deathDate":"22 April 1960",
            "deathPlace":"Banks, Washington, Oregon, United States",
            "descendancyNumber":"166.02-S",
            "ascendancyNumber":"82"
         },
         {
            "personId":"KWZK-SN6",
            "name":"Ada Lee Phelps",
            "gender":"Female",
            "lifespan":"1888-1983",
            "birthDate":"22 February 1888",
            "birthPlace":"Kansas, United States",
            "deathDate":"November 1983",
            "descendancyNumber":"164.03-S"
         }
      ]
   },
   {
      "personId":"KWZK-SJP",
      "name":"Arthur Henry Senior",
      "gender":"Male",
      "lifespan":"1880-1950",
      "birthDate":"13 September 1880",
      "birthPlace":"Rooks, Kansas, United States",
      "deathDate":"16 May 1950",
      "descendancyNumber":"164.01"
   },
   {
      "personId":"KWZK-SJL",
      "name":"E. Maude Senior",
      "gender":"Female",
      "lifespan":"1884-Deceased",
      "birthDate":"1884",
      "birthPlace":"Kansas, United States",
      "descendancyNumber":"164.02"
   },
   {
      "personId":"KWZK-SND",
      "name":"Corwin Percy Senior",
      "gender":"Male",
      "lifespan":"1889-1960",
      "birthDate":"22 February 1889",
      "birthPlace":"Stockton, Rooks, Kansas, United States",
      "deathDate":"22 April 1960",
      "deathPlace":"Banks, Washington, Oregon, United States",
      "descendancyNumber":"166.02-S",
      "ascendancyNumber":"82"
   },
   {
      "personId":"KWZK-SNW",
      "name":"Dale Richard Meyers",
      "gender":"Male",
      "lifespan":"1931-2013",
      "birthDate":"9 September 1931",
      "birthPlace":"North Platte, Lincoln, Nebraska, United States",
      "deathDate":"27 January 2013",
      "deathPlace":"Portland, Multnomah, Oregon, United States",
      "descendancyNumber":"40.01",
      "ascendancyNumber":"20"
   },
   {
      "personId":"KWZK-398",
      "name":"William Garland",
      "gender":"Male",
      "lifespan":"1818-1872",
      "birthDate":"2 February 1818",
      "birthPlace":"Barbourville, Knox, Kentucky, United States",
      "deathDate":"26 June 1872",
      "deathPlace":"Pike, Indiana, United States",
      "marriagePlace":"Knox, Kentucky, United States",
      "marriageDate":"23 December 1849",
      "ascendancyNumber":"326",
      "children":[
         {
            "personId":"KWZK-3SM",
            "name":"Margaret Trosper",
            "gender":"Female",
            "lifespan":"1834-1912",
            "birthDate":"12 March 1834",
            "birthPlace":"Knox, Kentucky, United States",
            "deathDate":"30 December 1912",
            "deathPlace":"Evansville, Vanderburgh, Indiana, United States",
            "marriagePlace":"Knox, Kentucky, United States",
            "marriageDate":"23 December 1849",
            "descendancyNumber":"326-S"
         },
         {
            "personId":"KWZK-39G",
            "name":"Mary Jane Garland",
            "gender":"Female",
            "lifespan":"1851-1920",
            "birthDate":"5 April 1851",
            "birthPlace":"Knox, Kentucky, United States",
            "deathDate":"17 June 1920",
            "deathPlace":"Clackamas, Oregon, United States",
            "descendancyNumber":"326.01"
         },
         {
            "personId":"KWZK-SNN",
            "name":"George Hampson Smith",
            "gender":"Male",
            "lifespan":"1847-1933",
            "birthDate":"28 May 1847",
            "birthPlace":"Ohio, United States",
            "deathDate":"26 February 1933",
            "deathPlace":"Ericson, Wheeler, Nebraska, United States",
            "marriagePlace":"Otwell, Pike, Indiana, United States",
            "marriageDate":"4 May 1870 / 1871",
            "descendancyNumber":"326.02-S"
         },
         {
            "personId":"KWZK-SNV",
            "name":"Rebecca Garland",
            "gender":"Female",
            "lifespan":"1852-1915",
            "birthDate":"18 November 1852",
            "birthPlace":"Barbourville, Knox, Kentucky, United States",
            "deathDate":"30 April 1915",
            "deathPlace":"North Platte, Lincoln, Nebraska, United States",
            "marriagePlace":"Otwell, Pike, Indiana, United States",
            "marriageDate":"4 May 1870 / 1871",
            "descendancyNumber":"326.02"
         },
         {
            "personId":"KWZK-3S7",
            "name":"George Hampson Smith",
            "gender":"Male",
            "lifespan":"1847-1933",
            "birthDate":"28 May 1847",
            "birthPlace":"Ohio, United States",
            "deathDate":"26 February 1933",
            "deathPlace":"Ericson, Wheeler, Nebraska, United States",
            "marriagePlace":"Otwell, Pike, Indiana, United States",
            "marriageDate":"4 May 1870 / 1871",
            "descendancyNumber":"326.03-S"
         },
         {
            "personId":"KWZK-39D",
            "name":"Rebecca Garland",
            "gender":"Female",
            "lifespan":"1852-1915",
            "birthDate":"18 November 1852",
            "birthPlace":"Barbourville, Knox, Kentucky, United States",
            "deathDate":"30 April 1915",
            "deathPlace":"North Platte, Lincoln, Nebraska, United States",
            "marriagePlace":"Otwell, Pike, Indiana, United States",
            "marriageDate":"4 May 1870 / 1871",
            "descendancyNumber":"326.03"
         },
         {
            "personId":"KWZK-39L",
            "name":"Joseph Henry Garland",
            "gender":"Male",
            "lifespan":"1854-1934",
            "birthDate":"6 July 1854",
            "birthPlace":"Knox, Kentucky, United States",
            "deathDate":"25 December 1934",
            "deathPlace":"Caldwell, Canyon, Idaho, United States",
            "descendancyNumber":"326.04"
         },
         {
            "personId":"KWZK-39F",
            "name":"Franklin Garland",
            "gender":"Male",
            "lifespan":"1856-Deceased",
            "birthDate":"19 March 1856",
            "birthPlace":"Knox, Kentucky, United States",
            "descendancyNumber":"326.05"
         },
         {
            "personId":"KWZK-391",
            "name":"Sarah Elizabeth Garland",
            "gender":"Female",
            "lifespan":"1857-Deceased",
            "birthDate":"17 November 1857",
            "birthPlace":"Knox, Kentucky, United States",
            "descendancyNumber":"326.06"
         },
         {
            "personId":"KWZK-39J",
            "name":"Nancy Ellen Garland",
            "gender":"Female",
            "lifespan":"1861-Deceased",
            "birthDate":"20 July 1861",
            "birthPlace":"Knox, Kentucky, United States",
            "descendancyNumber":"326.07"
         },
         {
            "personId":"KWZK-395",
            "name":"Melinda Garland",
            "gender":"Female",
            "lifespan":"1863-Deceased",
            "birthDate":"25 September 1863",
            "birthPlace":"Pike, Indiana, United States",
            "descendancyNumber":"326.08"
         },
         {
            "personId":"KWZK-39X",
            "name":"William Garland",
            "gender":"Male",
            "lifespan":"1865-Deceased",
            "birthDate":"17 March 1865",
            "birthPlace":"Pike, Indiana, United States",
            "descendancyNumber":"326.09"
         },
         {
            "personId":"KWZK-3S3",
            "name":"Caroline Garland",
            "gender":"Female",
            "lifespan":"1867-1945",
            "birthDate":"1867",
            "birthPlace":"Indiana, United States",
            "deathDate":"19 September 1945",
            "descendancyNumber":"326.10"
         },
         {
            "personId":"KWZK-392",
            "name":"infant Garland",
            "gender":"unknown",
            "lifespan":"1871-Deceased",
            "birthDate":"4 September 1871",
            "descendancyNumber":"326.11"
         }
      ]
   },
   {
      "personId":"KWZK-39G",
      "name":"Mary Jane Garland",
      "gender":"Female",
      "lifespan":"1851-1920",
      "birthDate":"5 April 1851",
      "birthPlace":"Knox, Kentucky, United States",
      "deathDate":"17 June 1920",
      "deathPlace":"Clackamas, Oregon, United States",
      "descendancyNumber":"326.01"
   },
   {
      "personId":"KWZK-3S7",
      "name":"George Hampson Smith",
      "gender":"Male",
      "lifespan":"1847-1933",
      "birthDate":"28 May 1847",
      "birthPlace":"Ohio, United States",
      "deathDate":"26 February 1933",
      "deathPlace":"Ericson, Wheeler, Nebraska, United States",
      "marriagePlace":"Otwell, Pike, Indiana, United States",
      "marriageDate":"4 May 1870 / 1871",
      "descendancyNumber":"326.03-S"
   },
   {
      "personId":"KWZK-39D",
      "name":"Rebecca Garland",
      "gender":"Female",
      "lifespan":"1852-1915",
      "birthDate":"18 November 1852",
      "birthPlace":"Barbourville, Knox, Kentucky, United States",
      "deathDate":"30 April 1915",
      "deathPlace":"North Platte, Lincoln, Nebraska, United States",
      "marriagePlace":"Otwell, Pike, Indiana, United States",
      "marriageDate":"4 May 1870 / 1871",
      "descendancyNumber":"326.03"
   },
   {
      "personId":"KWZK-39L",
      "name":"Joseph Henry Garland",
      "gender":"Male",
      "lifespan":"1854-1934",
      "birthDate":"6 July 1854",
      "birthPlace":"Knox, Kentucky, United States",
      "deathDate":"25 December 1934",
      "deathPlace":"Caldwell, Canyon, Idaho, United States",
      "descendancyNumber":"326.04"
   },
   {
      "personId":"KWZK-39F",
      "name":"Franklin Garland",
      "gender":"Male",
      "lifespan":"1856-Deceased",
      "birthDate":"19 March 1856",
      "birthPlace":"Knox, Kentucky, United States",
      "descendancyNumber":"326.05"
   },
   {
      "personId":"KWZK-391",
      "name":"Sarah Elizabeth Garland",
      "gender":"Female",
      "lifespan":"1857-Deceased",
      "birthDate":"17 November 1857",
      "birthPlace":"Knox, Kentucky, United States",
      "descendancyNumber":"326.06"
   },
   {
      "personId":"KWZK-39J",
      "name":"Nancy Ellen Garland",
      "gender":"Female",
      "lifespan":"1861-Deceased",
      "birthDate":"20 July 1861",
      "birthPlace":"Knox, Kentucky, United States",
      "descendancyNumber":"326.07"
   },
   {
      "personId":"KWZK-395",
      "name":"Melinda Garland",
      "gender":"Female",
      "lifespan":"1863-Deceased",
      "birthDate":"25 September 1863",
      "birthPlace":"Pike, Indiana, United States",
      "descendancyNumber":"326.08"
   },
   {
      "personId":"KWZK-39X",
      "name":"William Garland",
      "gender":"Male",
      "lifespan":"1865-Deceased",
      "birthDate":"17 March 1865",
      "birthPlace":"Pike, Indiana, United States",
      "descendancyNumber":"326.09"
   },
   {
      "personId":"KWZK-3S3",
      "name":"Caroline Garland",
      "gender":"Female",
      "lifespan":"1867-1945",
      "birthDate":"1867",
      "birthPlace":"Indiana, United States",
      "deathDate":"19 September 1945",
      "descendancyNumber":"326.10"
   },
   {
      "personId":"KWZK-392",
      "name":"infant Garland",
      "gender":"unknown",
      "lifespan":"1871-Deceased",
      "birthDate":"4 September 1871",
      "descendancyNumber":"326.11"
   },
   {
      "personId":"KWZV-R95",
      "name":"Steven Meyers",
      "gender":"Male",
      "lifespan":"1961-Living",
      "birthDate":"11 August 1961",
      "birthPlace":"Eugene, Lane, Oregon, United States",
      "descendancyNumber":"22.01-S",
      "ascendancyNumber":"10"
   },
   {
      "personId":"KWZK-SN2",
      "name":"George B Senior",
      "gender":"Male",
      "lifespan":"1914-1984",
      "birthDate":"24 January 1914",
      "birthPlace":"Kansas, United States",
      "deathDate":"2 March 1984",
      "deathPlace":"Grandview, Yakima, Washington, United States",
      "marriagePlace":"Skamania, Skamania, Washington, United States",
      "marriageDate":"14 October 1959",
      "descendancyNumber":"82.02"
   },
   {
      "personId":"KWZK-SJG",
      "name":"Mary M Callahan",
      "gender":"Female",
      "lifespan":"1898-1980",
      "birthDate":"27 June 1898",
      "deathDate":"4 January 1980",
      "deathPlace":"Prosser, Benton, Washington, United States",
      "marriagePlace":"Skamania, Skamania, Washington, United States",
      "marriageDate":"14 October 1959",
      "descendancyNumber":"82.02-S"
   },
   {
      "personId":"KWZK-SNT",
      "name":"Charles William Phelps",
      "gender":"Male",
      "lifespan":"1853-1934",
      "birthDate":"22 August 1853",
      "birthPlace":"Barton, Washington, Wisconsin, United States",
      "deathDate":"5 September 1934",
      "marriagePlace":"Schuyler, Missouri, United States",
      "marriageDate":"25 February 1874",
      "ascendancyNumber":"166",
      "children":[
         {
            "personId":"KWZK-SNR",
            "name":"Katherine Brace",
            "gender":"Female",
            "lifespan":"1856-Deceased",
            "birthDate":"September 1856",
            "birthPlace":"Iowa, United States",
            "marriagePlace":"Schuyler, Missouri, United States",
            "marriageDate":"25 February 1874",
            "descendancyNumber":"166-S"
         },
         {
            "personId":"KWZK-SV9",
            "name":"Frank Phelps",
            "gender":"Male",
            "lifespan":"1876-1949",
            "birthDate":"22 September 1876",
            "birthPlace":"Davis, Iowa, United States",
            "deathDate":"26 December 1949",
            "descendancyNumber":"166.01"
         },
         {
            "personId":"KWZK-SND",
            "name":"Corwin Percy Senior",
            "gender":"Male",
            "lifespan":"1889-1960",
            "birthDate":"22 February 1889",
            "birthPlace":"Stockton, Rooks, Kansas, United States",
            "deathDate":"22 April 1960",
            "deathPlace":"Banks, Washington, Oregon, United States",
            "descendancyNumber":"166.02-S"
         },
         {
            "personId":"KWZK-SN6",
            "name":"Ada Lee Phelps",
            "gender":"Female",
            "lifespan":"1888-1983",
            "birthDate":"22 February 1888",
            "birthPlace":"Kansas, United States",
            "deathDate":"November 1983",
            "descendancyNumber":"166.02"
         },
         {
            "personId":"KWZK-SJB",
            "name":"Mary S Phelps",
            "gender":"Female",
            "lifespan":"1891-Deceased",
            "birthDate":"26 March 1891",
            "birthPlace":"Davis, Iowa, United States",
            "descendancyNumber":"166.03"
         }
      ]
   },
   {
      "personId":"KWZK-SV9",
      "name":"Frank Phelps",
      "gender":"Male",
      "lifespan":"1876-1949",
      "birthDate":"22 September 1876",
      "birthPlace":"Davis, Iowa, United States",
      "deathDate":"26 December 1949",
      "descendancyNumber":"166.01"
   },
   {
      "personId":"KWZK-SJB",
      "name":"Mary S Phelps",
      "gender":"Female",
      "lifespan":"1891-Deceased",
      "birthDate":"26 March 1891",
      "birthPlace":"Davis, Iowa, United States",
      "descendancyNumber":"166.03"
   },
   {
      "personId":"KWZK-9W8",
      "name":"Homer Call",
      "gender":"Male",
      "lifespan":"1834-1908",
      "birthDate":"9 January 1834",
      "birthPlace":"Madison Township, Williams, Ohio, United States",
      "deathDate":"12 July 1908",
      "deathPlace":"Willard, Box Elder, Utah, United States",
      "ascendancyNumber":"176",
      "children":[
         {
            "personId":"KWZK-96R",
            "name":"Nancy Merrell",
            "gender":"Female",
            "lifespan":"Deceased",
            "descendancyNumber":"176-S"
         },
         {
            "personId":"KWZK-97Y",
            "name":"Josiah Call",
            "gender":"Male",
            "lifespan":"1862-1943",
            "birthDate":"18 April 1862",
            "birthPlace":"Willard, Box Elder, Utah Territory, United States",
            "deathDate":"1 October 1943",
            "deathPlace":"Rigby, Jefferson, Idaho, United States",
            "marriagePlace":"Salt Lake City, Salt Lake, Utah, United States",
            "marriageDate":"24 April 1918",
            "descendancyNumber":"176.01",
            "ascendancyNumber":"88"
         },
         {
            "personId":"KWZK-9WX",
            "name":"Lettie Estella Rawson",
            "gender":"Female",
            "lifespan":"1879-1976",
            "birthDate":"20 September 1879",
            "birthPlace":"Plain City, Weber, Utah, United States",
            "deathDate":"28 December 1976",
            "deathPlace":"Rigby, Jefferson, Idaho, United States",
            "marriagePlace":"Salt Lake City, Salt Lake, Utah, United States",
            "marriageDate":"24 April 1918",
            "descendancyNumber":"88-S"
         }
      ]
   },
   {
      "personId":"KWZK-97Y",
      "name":"Josiah Call",
      "gender":"Male",
      "lifespan":"1862-1943",
      "birthDate":"18 April 1862",
      "birthPlace":"Willard, Box Elder, Utah Territory, United States",
      "deathDate":"1 October 1943",
      "deathPlace":"Rigby, Jefferson, Idaho, United States",
      "marriagePlace":"Salt Lake City, Salt Lake, Utah, United States",
      "marriageDate":"24 April 1918",
      "descendancyNumber":"176.01",
      "ascendancyNumber":"88"
   },
   {
      "personId":"KWZK-9WX",
      "name":"Lettie Estella Rawson",
      "gender":"Female",
      "lifespan":"1879-1976",
      "birthDate":"20 September 1879",
      "birthPlace":"Plain City, Weber, Utah, United States",
      "deathDate":"28 December 1976",
      "deathPlace":"Rigby, Jefferson, Idaho, United States",
      "marriagePlace":"Salt Lake City, Salt Lake, Utah, United States",
      "marriageDate":"24 April 1918",
      "descendancyNumber":"88-S"
   },
   {
      "personId":"KWZK-9WH",
      "name":"George Henry Facer",
      "gender":"Male",
      "lifespan":"1834-1903",
      "birthDate":"4 July 1834",
      "birthPlace":"Eynesbury, Huntingdonshire, England",
      "deathDate":"22 February 1903",
      "deathPlace":"Willard, Box Elder, Utah, United States",
      "marriagePlace":"Eynesbury, Huntingdonshire, England",
      "marriageDate":"6 September 1857",
      "ascendancyNumber":"178",
      "children":[
         {
            "personId":"KWZK-9CS",
            "name":"Eliza Smith",
            "gender":"Female",
            "lifespan":"1843-1865",
            "birthDate":"2 August 1843",
            "birthPlace":"Buckden, Huntingdonshire, England",
            "deathDate":"23 July 1865",
            "descendancyNumber":"356.01-S"
         }
      ],
      "descendancyNumber":"356.01"
   },
   {
      "personId":"KWZK-9CS",
      "name":"Eliza Smith",
      "gender":"Female",
      "lifespan":"1843-1865",
      "birthDate":"2 August 1843",
      "birthPlace":"Buckden, Huntingdonshire, England",
      "deathDate":"23 July 1865",
      "descendancyNumber":"356.01-S"
   },
   {
      "personId":"KWZK-9W5",
      "name":"James Prior",
      "gender":"Male",
      "lifespan":"1816-1904",
      "birthDate":"11 December 1816",
      "birthPlace":"St.Neots, Hunts., Eng.",
      "deathDate":"26 June 1904",
      "marriagePlace":"Eynesbury, Huntingdonshire, England",
      "marriageDate":"3 September 1838",
      "ascendancyNumber":"358",
      "children":[
         {
            "personId":"KWZK-9WN",
            "name":"Dove Brown",
            "gender":"Female",
            "lifespan":"1818-1853",
            "birthDate":"14 January 1818",
            "birthPlace":"Eynesbury, Huntingdonshire, England",
            "deathDate":"14 July 1853",
            "deathPlace":"Eaton Socon, Bedfordshire, England",
            "marriagePlace":"Eynesbury, Huntingdonshire, England",
            "marriageDate":"3 September 1838",
            "descendancyNumber":"358-S"
         },
         {
            "personId":"KWZK-9WH",
            "name":"George Henry Facer",
            "gender":"Male",
            "lifespan":"1834-1903",
            "birthDate":"4 July 1834",
            "birthPlace":"Eynesbury, Huntingdonshire, England",
            "deathDate":"22 February 1903",
            "deathPlace":"Willard, Box Elder, Utah, United States",
            "marriagePlace":"Eynesbury, Huntingdonshire, England",
            "marriageDate":"6 September 1857",
            "descendancyNumber":"358.01-S"
         },
         {
            "personId":"KWZK-97B",
            "name":"Mary Prior",
            "gender":"Female",
            "lifespan":"1840-1930",
            "birthDate":"27 January 1840",
            "birthPlace":"Graveley, Cambridgeshire, England",
            "deathDate":"12 December 1930",
            "marriagePlace":"Eynesbury, Huntingdonshire, England",
            "marriageDate":"6 September 1857",
            "descendancyNumber":"358.01"
         }
      ]
   },
   {
      "personId":"KWZK-9HT",
      "name":"Henry Facer",
      "gender":"Male",
      "lifespan":"1811-1836",
      "birthDate":"15 June 1811",
      "birthPlace":"Colmworth, Bedford, England",
      "deathDate":"19 September 1836",
      "deathPlace":"Comberton, Cambridgeshire, England",
      "marriagePlace":"Comberton, Cambridgeshire, England",
      "marriageDate":"12 October 1831",
      "ascendancyNumber":"356",
      "children":[
         {
            "personId":"KWZK-9HY",
            "name":"Mary Elizabeth Jarvis",
            "gender":"Female",
            "lifespan":"1810-1896",
            "birthDate":"31 August 1810",
            "birthPlace":"Buckworth, Huntingdonshire, England",
            "deathDate":"10 October 1896",
            "deathPlace":"Willard, Box Elder, Utah, United States",
            "marriagePlace":"Comberton, Cambridgeshire, England",
            "marriageDate":"12 October 1831",
            "descendancyNumber":"356-S"
         },
         {
            "personId":"KWZK-9WH",
            "name":"George Henry Facer",
            "gender":"Male",
            "lifespan":"1834-1903",
            "birthDate":"4 July 1834",
            "birthPlace":"Eynesbury, Huntingdonshire, England",
            "deathDate":"22 February 1903",
            "deathPlace":"Willard, Box Elder, Utah, United States",
            "descendancyNumber":"356.01"
         },
         {
            "personId":"KWZK-9CS",
            "name":"Eliza Smith",
            "gender":"Female",
            "lifespan":"1843-1865",
            "birthDate":"2 August 1843",
            "birthPlace":"Buckden, Huntingdonshire, England",
            "deathDate":"23 July 1865",
            "descendancyNumber":"356.01-S"
         }
      ]
   },
   {
      "personId":"KWZK-97P",
      "name":"Allan Willard Call",
      "gender":"Male",
      "lifespan":"1904-1996",
      "birthDate":"29 April 1904",
      "birthPlace":"Rigby, Jefferson, Idaho, United States",
      "deathDate":"18 November 1996",
      "deathPlace":"Rigby, Jefferson, Idaho, United States",
      "ascendancyNumber":"44",
      "children":[
         {
            "personId":"KWZK-97R",
            "name":"Lillias Poole",
            "gender":"Female",
            "lifespan":"1903-1995",
            "birthDate":"2 April 1903",
            "birthPlace":"Annis, Jefferson, Idaho, United States",
            "deathDate":"6 December 1995",
            "deathPlace":"Idaho Falls, Bonneville, Idaho, United States",
            "descendancyNumber":"44-S"
         },
         {
            "personId":"KWZK-9WD",
            "name":"Billie Blair Harris",
            "gender":"Male",
            "lifespan":"1926-2008",
            "birthDate":"14 November 1926",
            "birthPlace":"Sugar City, Madison, Idaho, United States",
            "deathDate":"27 December 2008",
            "deathPlace":"Nampa, Canyon, Idaho, United States",
            "marriagePlace":"Rigby, Jefferson, Idaho, United States",
            "marriageDate":"1 May 1947",
            "descendancyNumber":"44.01-S"
         },
         {
            "personId":"KWZK-97T",
            "name":"Betty Lou Call",
            "gender":"Female",
            "lifespan":"1928-1996",
            "birthDate":"1 October 1928",
            "birthPlace":"Rigby, Jefferson, Idaho, United States",
            "deathDate":"19 November 1996",
            "deathPlace":"Salt Lake City, Salt Lake, Utah, United States",
            "marriagePlace":"Rigby, Jefferson, Idaho, United States",
            "marriageDate":"1 May 1947",
            "descendancyNumber":"44.01"
         },
         {
            "personId":"KWZV-T3N",
            "name":"Willard Rex Call",
            "gender":"Male",
            "lifespan":"Living",
            "descendancyNumber":"46.01-S",
            "ascendancyNumber":"22"
         },
         {
            "personId":"KWZV-T77",
            "name":"Ruth Carma Madsen",
            "gender":"Female",
            "lifespan":"Living",
            "descendancyNumber":"44.02-S"
         }
      ],
      "descendancyNumber":"90.01-S"
   },
   {
      "personId":"KWZK-9WD",
      "name":"Billie Blair Harris",
      "gender":"Male",
      "lifespan":"1926-2008",
      "birthDate":"14 November 1926",
      "birthPlace":"Sugar City, Madison, Idaho, United States",
      "deathDate":"27 December 2008",
      "deathPlace":"Nampa, Canyon, Idaho, United States",
      "marriagePlace":"Rigby, Jefferson, Idaho, United States",
      "marriageDate":"1 May 1947",
      "descendancyNumber":"44.01-S"
   },
   {
      "personId":"KWZK-97T",
      "name":"Betty Lou Call",
      "gender":"Female",
      "lifespan":"1928-1996",
      "birthDate":"1 October 1928",
      "birthPlace":"Rigby, Jefferson, Idaho, United States",
      "deathDate":"19 November 1996",
      "deathPlace":"Salt Lake City, Salt Lake, Utah, United States",
      "marriagePlace":"Rigby, Jefferson, Idaho, United States",
      "marriageDate":"1 May 1947",
      "descendancyNumber":"44.01"
   },
   {
      "personId":"KWZV-T3N",
      "name":"Willard Rex Call",
      "gender":"Male",
      "lifespan":"Living",
      "descendancyNumber":"46.01-S",
      "ascendancyNumber":"22"
   },
   {
      "personId":"KWZK-9JC",
      "name":"William Bleasdale",
      "gender":"Male",
      "lifespan":"1796-1885",
      "birthDate":"4 December 1796",
      "birthPlace":"Thornley, Lancashire, England",
      "deathDate":"August 1885",
      "deathPlace":"Centerville, Davis, Utah, United States",
      "marriagePlace":"Goosnargh, Lancashire, England",
      "marriageDate":"27 September 1820",
      "ascendancyNumber":"362",
      "children":[
         {
            "personId":"KWZK-9JZ",
            "name":"Margaret Moss",
            "gender":"Female",
            "lifespan":"1798-1877",
            "birthDate":"17 May 1798",
            "birthPlace":"Barton, Lancashire, England",
            "deathDate":"16 May 1877",
            "deathPlace":"Centerville, Davis, Utah, United States",
            "marriagePlace":"Goosnargh, Lancashire, England",
            "marriageDate":"27 September 1820",
            "descendancyNumber":"362-S"
         },
         {
            "personId":"KWZK-SMV",
            "name":"John Rawlston Poole",
            "gender":"Male",
            "lifespan":"1829-1894",
            "birthDate":"13 May 1829",
            "birthPlace":"Leesville, Lawrence, Indiana, United States",
            "deathDate":"16 September 1894",
            "deathPlace":"Idaho Falls, Bonneville, Idaho, United States",
            "descendancyNumber":"360.01",
            "ascendancyNumber":"180"
         },
         {
            "personId":"KWZK-9XT",
            "name":"Jennette Bleasdale",
            "gender":"Female",
            "lifespan":"1826-1921",
            "birthDate":"10 February 1826",
            "birthPlace":"Thornley, Lancashire, England",
            "deathDate":"20 May 1921",
            "deathPlace":"Menan, Jefferson, Idaho, United States",
            "descendancyNumber":"362.01"
         }
      ]
   },
   {
      "personId":"KWZK-SMV",
      "name":"John Rawlston Poole",
      "gender":"Male",
      "lifespan":"1829-1894",
      "birthDate":"13 May 1829",
      "birthPlace":"Leesville, Lawrence, Indiana, United States",
      "deathDate":"16 September 1894",
      "deathPlace":"Idaho Falls, Bonneville, Idaho, United States",
      "descendancyNumber":"360.01",
      "ascendancyNumber":"180"
   },
   {
      "personId":"KWZK-SMZ",
      "name":"Micajah Poole",
      "gender":"Male",
      "lifespan":"1800-1873",
      "birthDate":"25 March 1800",
      "birthPlace":"Virginia, United States",
      "deathDate":"21 January 1873",
      "deathPlace":"Farmington, Van Buren, Iowa, United States",
      "marriagePlace":"Leesville, Guthrie Township, Lawrence, Indiana, United States",
      "marriageDate":"1 June 1828",
      "ascendancyNumber":"360",
      "children":[
         {
            "personId":"KWZK-SMC",
            "name":"Rebecca Rawlston",
            "gender":"Female",
            "lifespan":"1808-1884",
            "birthDate":"13 May 1808",
            "birthPlace":"Ohio, United States",
            "deathDate":"13 April 1884",
            "deathPlace":"Farmington, Van Buren, Iowa, United States",
            "marriagePlace":"Leesville, Guthrie Township, Lawrence, Indiana, United States",
            "marriageDate":"1 June 1828",
            "descendancyNumber":"360-S"
         },
         {
            "personId":"KWZK-SMV",
            "name":"John Rawlston Poole",
            "gender":"Male",
            "lifespan":"1829-1894",
            "birthDate":"13 May 1829",
            "birthPlace":"Leesville, Lawrence, Indiana, United States",
            "deathDate":"16 September 1894",
            "deathPlace":"Idaho Falls, Bonneville, Idaho, United States",
            "descendancyNumber":"360.01"
         },
         {
            "personId":"KWZK-9XT",
            "name":"Jennette Bleasdale",
            "gender":"Female",
            "lifespan":"1826-1921",
            "birthDate":"10 February 1826",
            "birthPlace":"Thornley, Lancashire, England",
            "deathDate":"20 May 1921",
            "deathPlace":"Menan, Jefferson, Idaho, United States",
            "descendancyNumber":"360.01-S"
         },
         {
            "personId":"KWZK-SMF",
            "name":"Wyatt A. Poole",
            "gender":"Male",
            "lifespan":"1830-1908",
            "birthDate":"14 December 1830",
            "birthPlace":"Leesville, Lawrence, Indiana, United States",
            "deathDate":"7 June 1908",
            "deathPlace":"Clatsop, Oregon, United States",
            "marriagePlace":"Leesville, Lawrence, Indiana, United States",
            "marriageDate":"8 May 1867",
            "descendancyNumber":"360.02"
         },
         {
            "personId":"KWZK-SS7",
            "name":"Naomi Elizabeth Hay",
            "gender":"Female",
            "lifespan":"1844-1933",
            "birthDate":"23 June 1844",
            "birthPlace":"Indiana, United States",
            "deathDate":"6 January 1933",
            "deathPlace":"Clatsop, Oregon, United States",
            "marriagePlace":"Leesville, Lawrence, Indiana, United States",
            "marriageDate":"8 May 1867",
            "descendancyNumber":"360.02-S"
         },
         {
            "personId":"KWZK-SM8",
            "name":"Milburn Zolman Poole",
            "gender":"Male",
            "lifespan":"1833-1891",
            "birthDate":"29 April 1833",
            "birthPlace":"Leesville, Lawrence, Indiana, United States",
            "deathDate":"11 February 1891",
            "deathPlace":"West Liberty, Muscatine, Iowa, United States",
            "marriagePlace":"Ohio, United States",
            "marriageDate":"February 1868",
            "descendancyNumber":"360.03"
         },
         {
            "personId":"KWZK-S9M",
            "name":"Julia Elizabeth Stafford",
            "gender":"Female",
            "lifespan":"1843-1922",
            "birthDate":"11 December 1843",
            "birthPlace":"Bellefontaine, Logan, Ohio, United States",
            "deathDate":"15 October 1922",
            "deathPlace":"West Liberty, Muscatine, Iowa, United States",
            "marriagePlace":"Ohio, United States",
            "marriageDate":"February 1868",
            "descendancyNumber":"360.03-S"
         },
         {
            "personId":"KWZK-SM6",
            "name":"William Sylvester Poole",
            "gender":"Male",
            "lifespan":"1835-1911",
            "birthDate":"30 March 1835",
            "birthPlace":"Leesville, Lawrence, Indiana, United States",
            "deathDate":"23 September 1911",
            "deathPlace":"Muscatine, Iowa, United States",
            "marriagePlace":"Muscatine, Iowa, United States",
            "marriageDate":"29 November 1855",
            "descendancyNumber":"360.04"
         },
         {
            "personId":"KWZK-S9V",
            "name":"Julia Ann Phillips",
            "gender":"Female",
            "lifespan":"1836-1908",
            "birthDate":"15 August 1836",
            "birthPlace":"Virginia, United States",
            "deathDate":"25 March 1908",
            "deathPlace":"Muscatine, Muscatine, Iowa, United States",
            "marriagePlace":"Muscatine, Iowa, United States",
            "marriageDate":"29 November 1855",
            "descendancyNumber":"360.04-S"
         },
         {
            "personId":"KWZK-SM2",
            "name":"Martin McDaniel Poole",
            "gender":"Male",
            "lifespan":"1838-1918",
            "birthDate":"4 February 1838",
            "birthPlace":"Farmington, Van Buren, Iowa, United States",
            "deathDate":"30 May 1918",
            "deathPlace":"Clarkston, Asotin, Washington, United States",
            "descendancyNumber":"360.05"
         },
         {
            "personId":"KWZK-SMX",
            "name":"Joseph Parshall Poole",
            "gender":"Male",
            "lifespan":"1840-1929",
            "birthDate":"16 October 1840",
            "birthPlace":"Farmington, Van Buren, Iowa, United States",
            "deathDate":"10 February 1929",
            "deathPlace":"Lee Township, Franklin, Iowa, United States",
            "marriagePlace":"Primrose, Lee, Iowa, United States",
            "marriageDate":"21 February 1867",
            "descendancyNumber":"360.06"
         },
         {
            "personId":"KWZK-SSM",
            "name":"Rachel Ann Holland",
            "gender":"Female",
            "lifespan":"1845-1910",
            "birthDate":"21 May 1845",
            "birthPlace":"Ohio, United States",
            "deathDate":"28 September 1910",
            "deathPlace":"Lee, Iowa, United States",
            "marriagePlace":"Primrose, Lee, Iowa, United States",
            "marriageDate":"21 February 1867",
            "descendancyNumber":"360.06-S"
         },
         {
            "personId":"KWZK-SMN",
            "name":"Susanna Mary Poole",
            "gender":"Female",
            "lifespan":"1842-1842",
            "birthDate":"29 January 1842",
            "birthPlace":"Farmington, Van Buren, Iowa, United States",
            "deathDate":"13 October 1842",
            "deathPlace":"Farmington, Van Buren, Iowa, United States",
            "descendancyNumber":"360.07"
         },
         {
            "personId":"KWZK-SMJ",
            "name":"Ewalt Poole",
            "gender":"Male",
            "lifespan":"1844-1863",
            "birthDate":"13 June 1844",
            "birthPlace":"Farmington, Van Buren, Iowa, United States",
            "deathDate":"5 September 1863",
            "deathPlace":"West Liberty, Muscatine, Iowa, United States",
            "descendancyNumber":"360.08"
         },
         {
            "personId":"KWZK-S9Z",
            "name":"Thomas Henry Walker",
            "gender":"Male",
            "lifespan":"1840-1916",
            "birthDate":"21 April 1840",
            "birthPlace":"Jefferson, Iowa, United States",
            "deathDate":"13 May 1916",
            "deathPlace":"Medford, Grant, Oklahoma, United States",
            "marriageDate":"13 October 1864",
            "descendancyNumber":"360.09-S"
         },
         {
            "personId":"KWZK-SMD",
            "name":"Adaline Poole",
            "gender":"Female",
            "lifespan":"1847-1936",
            "birthDate":"4 January 1847",
            "birthPlace":"Farmington, Van Buren, Iowa, United States",
            "deathDate":"21 July 1936",
            "deathPlace":"Cleo Springs, Major, Oklahoma, United States",
            "marriageDate":"13 October 1864",
            "descendancyNumber":"360.09"
         },
         {
            "personId":"KWZK-SMK",
            "name":"Benton Poole",
            "gender":"Male",
            "lifespan":"1849-1930",
            "birthDate":"28 September 1849",
            "birthPlace":"Harrison Township, Lee, Iowa, United States",
            "deathDate":"7 April 1930",
            "deathPlace":"Farmington, Van Buren, Iowa, United States",
            "marriagePlace":"Iowa, United States",
            "marriageDate":"28 April 1881",
            "descendancyNumber":"360.10"
         },
         {
            "personId":"KWZK-S36",
            "name":"Mary A Stinson",
            "gender":"Female",
            "lifespan":"1852-1884",
            "birthDate":"4 February 1852",
            "birthPlace":"Iowa, United States",
            "deathDate":"20 October 1884",
            "deathPlace":"Farmington, Van Buren, Iowa, United States",
            "marriagePlace":"Iowa, United States",
            "marriageDate":"28 April 1881",
            "descendancyNumber":"360.10-S"
         }
      ]
   },
   {
      "personId":"KWZK-SMF",
      "name":"Wyatt A. Poole",
      "gender":"Male",
      "lifespan":"1830-1908",
      "birthDate":"14 December 1830",
      "birthPlace":"Leesville, Lawrence, Indiana, United States",
      "deathDate":"7 June 1908",
      "deathPlace":"Clatsop, Oregon, United States",
      "marriagePlace":"Leesville, Lawrence, Indiana, United States",
      "marriageDate":"8 May 1867",
      "descendancyNumber":"360.02"
   },
   {
      "personId":"KWZK-SS7",
      "name":"Naomi Elizabeth Hay",
      "gender":"Female",
      "lifespan":"1844-1933",
      "birthDate":"23 June 1844",
      "birthPlace":"Indiana, United States",
      "deathDate":"6 January 1933",
      "deathPlace":"Clatsop, Oregon, United States",
      "marriagePlace":"Leesville, Lawrence, Indiana, United States",
      "marriageDate":"8 May 1867",
      "descendancyNumber":"360.02-S"
   },
   {
      "personId":"KWZK-SM8",
      "name":"Milburn Zolman Poole",
      "gender":"Male",
      "lifespan":"1833-1891",
      "birthDate":"29 April 1833",
      "birthPlace":"Leesville, Lawrence, Indiana, United States",
      "deathDate":"11 February 1891",
      "deathPlace":"West Liberty, Muscatine, Iowa, United States",
      "marriagePlace":"Ohio, United States",
      "marriageDate":"February 1868",
      "descendancyNumber":"360.03"
   },
   {
      "personId":"KWZK-S9M",
      "name":"Julia Elizabeth Stafford",
      "gender":"Female",
      "lifespan":"1843-1922",
      "birthDate":"11 December 1843",
      "birthPlace":"Bellefontaine, Logan, Ohio, United States",
      "deathDate":"15 October 1922",
      "deathPlace":"West Liberty, Muscatine, Iowa, United States",
      "marriagePlace":"Ohio, United States",
      "marriageDate":"February 1868",
      "descendancyNumber":"360.03-S"
   },
   {
      "personId":"KWZK-SM6",
      "name":"William Sylvester Poole",
      "gender":"Male",
      "lifespan":"1835-1911",
      "birthDate":"30 March 1835",
      "birthPlace":"Leesville, Lawrence, Indiana, United States",
      "deathDate":"23 September 1911",
      "deathPlace":"Muscatine, Iowa, United States",
      "marriagePlace":"Muscatine, Iowa, United States",
      "marriageDate":"29 November 1855",
      "descendancyNumber":"360.04"
   },
   {
      "personId":"KWZK-S9V",
      "name":"Julia Ann Phillips",
      "gender":"Female",
      "lifespan":"1836-1908",
      "birthDate":"15 August 1836",
      "birthPlace":"Virginia, United States",
      "deathDate":"25 March 1908",
      "deathPlace":"Muscatine, Muscatine, Iowa, United States",
      "marriagePlace":"Muscatine, Iowa, United States",
      "marriageDate":"29 November 1855",
      "descendancyNumber":"360.04-S"
   },
   {
      "personId":"KWZK-SM2",
      "name":"Martin McDaniel Poole",
      "gender":"Male",
      "lifespan":"1838-1918",
      "birthDate":"4 February 1838",
      "birthPlace":"Farmington, Van Buren, Iowa, United States",
      "deathDate":"30 May 1918",
      "deathPlace":"Clarkston, Asotin, Washington, United States",
      "descendancyNumber":"360.05"
   },
   {
      "personId":"KWZK-SMX",
      "name":"Joseph Parshall Poole",
      "gender":"Male",
      "lifespan":"1840-1929",
      "birthDate":"16 October 1840",
      "birthPlace":"Farmington, Van Buren, Iowa, United States",
      "deathDate":"10 February 1929",
      "deathPlace":"Lee Township, Franklin, Iowa, United States",
      "marriagePlace":"Primrose, Lee, Iowa, United States",
      "marriageDate":"21 February 1867",
      "descendancyNumber":"360.06"
   },
   {
      "personId":"KWZK-SSM",
      "name":"Rachel Ann Holland",
      "gender":"Female",
      "lifespan":"1845-1910",
      "birthDate":"21 May 1845",
      "birthPlace":"Ohio, United States",
      "deathDate":"28 September 1910",
      "deathPlace":"Lee, Iowa, United States",
      "marriagePlace":"Primrose, Lee, Iowa, United States",
      "marriageDate":"21 February 1867",
      "descendancyNumber":"360.06-S"
   },
   {
      "personId":"KWZK-SMN",
      "name":"Susanna Mary Poole",
      "gender":"Female",
      "lifespan":"1842-1842",
      "birthDate":"29 January 1842",
      "birthPlace":"Farmington, Van Buren, Iowa, United States",
      "deathDate":"13 October 1842",
      "deathPlace":"Farmington, Van Buren, Iowa, United States",
      "descendancyNumber":"360.07"
   },
   {
      "personId":"KWZK-SMJ",
      "name":"Ewalt Poole",
      "gender":"Male",
      "lifespan":"1844-1863",
      "birthDate":"13 June 1844",
      "birthPlace":"Farmington, Van Buren, Iowa, United States",
      "deathDate":"5 September 1863",
      "deathPlace":"West Liberty, Muscatine, Iowa, United States",
      "descendancyNumber":"360.08"
   },
   {
      "personId":"KWZK-S9Z",
      "name":"Thomas Henry Walker",
      "gender":"Male",
      "lifespan":"1840-1916",
      "birthDate":"21 April 1840",
      "birthPlace":"Jefferson, Iowa, United States",
      "deathDate":"13 May 1916",
      "deathPlace":"Medford, Grant, Oklahoma, United States",
      "marriageDate":"13 October 1864",
      "descendancyNumber":"360.09-S"
   },
   {
      "personId":"KWZK-SMD",
      "name":"Adaline Poole",
      "gender":"Female",
      "lifespan":"1847-1936",
      "birthDate":"4 January 1847",
      "birthPlace":"Farmington, Van Buren, Iowa, United States",
      "deathDate":"21 July 1936",
      "deathPlace":"Cleo Springs, Major, Oklahoma, United States",
      "marriageDate":"13 October 1864",
      "descendancyNumber":"360.09"
   },
   {
      "personId":"KWZK-SMK",
      "name":"Benton Poole",
      "gender":"Male",
      "lifespan":"1849-1930",
      "birthDate":"28 September 1849",
      "birthPlace":"Harrison Township, Lee, Iowa, United States",
      "deathDate":"7 April 1930",
      "deathPlace":"Farmington, Van Buren, Iowa, United States",
      "marriagePlace":"Iowa, United States",
      "marriageDate":"28 April 1881",
      "descendancyNumber":"360.10"
   },
   {
      "personId":"KWZK-S36",
      "name":"Mary A Stinson",
      "gender":"Female",
      "lifespan":"1852-1884",
      "birthDate":"4 February 1852",
      "birthPlace":"Iowa, United States",
      "deathDate":"20 October 1884",
      "deathPlace":"Farmington, Van Buren, Iowa, United States",
      "marriagePlace":"Iowa, United States",
      "marriageDate":"28 April 1881",
      "descendancyNumber":"360.10-S"
   },
   {
      "personId":"KWZK-9XX",
      "name":"William Micajah Poole",
      "gender":"Male",
      "lifespan":"1858-1955",
      "birthDate":"17 January 1858",
      "birthPlace":"Ogden, Weber, Utah, United States",
      "deathDate":"10 January 1955",
      "deathPlace":"Blackfoot, Bingham, Idaho, United States",
      "ascendancyNumber":"90",
      "children":[
         {
            "personId":"KWZK-95W",
            "name":"Lillias Barbour Clark",
            "gender":"Female",
            "lifespan":"Deceased",
            "descendancyNumber":"90-S"
         },
         {
            "personId":"KWZK-97P",
            "name":"Allan Willard Call",
            "gender":"Male",
            "lifespan":"1904-1996",
            "birthDate":"29 April 1904",
            "birthPlace":"Rigby, Jefferson, Idaho, United States",
            "deathDate":"18 November 1996",
            "deathPlace":"Rigby, Jefferson, Idaho, United States",
            "descendancyNumber":"90.01-S"
         },
         {
            "personId":"KWZK-97R",
            "name":"Lillias Poole",
            "gender":"Female",
            "lifespan":"1903-1995",
            "birthDate":"2 April 1903",
            "birthPlace":"Annis, Jefferson, Idaho, United States",
            "deathDate":"6 December 1995",
            "deathPlace":"Idaho Falls, Bonneville, Idaho, United States",
            "descendancyNumber":"90.01"
         }
      ],
      "descendancyNumber":"180.06"
   },
   {
      "personId":"KWZV-TTK",
      "name":"Howard Elmo Madsen",
      "gender":"Male",
      "lifespan":"1893-1983",
      "birthDate":"16 November 1893",
      "birthPlace":"Rigby, Jefferson, Idaho, United States",
      "deathDate":"16 February 1983",
      "deathPlace":"Scottsdale, Maricopa, Arizona, United States",
      "ascendancyNumber":"46",
      "children":[
         {
            "personId":"KWZV-T3N",
            "name":"Willard Rex Call",
            "gender":"Male",
            "lifespan":"Living",
            "descendancyNumber":"46.01-S"
         },
         {
            "personId":"KWZV-T77",
            "name":"Ruth Carma Madsen",
            "gender":"Female",
            "lifespan":"Living",
            "descendancyNumber":"46.01"
         }
      ]
   },
   {
      "personId":"KWZK-9J9",
      "name":"Mary Elizabeth Poole",
      "gender":"Female",
      "lifespan":"1849-1850",
      "birthDate":"September 1849",
      "birthPlace":"Farmington, Van Buren, Iowa, United States",
      "deathDate":"9 June 1850",
      "deathPlace":"United States",
      "descendancyNumber":"180.01"
   },
   {
      "personId":"KWZK-9NN",
      "name":"Joseph Ewalt Poole",
      "gender":"Male",
      "lifespan":"1851-1851",
      "birthDate":"24 February 1851",
      "birthPlace":"Centerville, Davis, Utah, United States",
      "deathDate":"24 February 1851",
      "deathPlace":"Centerville, Davis, Utah, United States",
      "descendancyNumber":"180.02"
   },
   {
      "personId":"KWZK-9NW",
      "name":"John Bleasdale Poole",
      "gender":"Male",
      "lifespan":"1854-1854",
      "birthDate":"1854",
      "birthPlace":"Centerville, Davis, Utah, United States",
      "deathDate":"24 October 1854",
      "deathPlace":"Centerville, Davis, Utah, United States",
      "descendancyNumber":"180.03"
   },
   {
      "personId":"KWZK-9N5",
      "name":"Rebecca Margaret Poole",
      "gender":"Female",
      "lifespan":"1855-1935",
      "birthDate":"29 August 1855",
      "birthPlace":"Ogden, Weber, Utah Territory, United States",
      "deathDate":"11 January 1935",
      "deathPlace":"Rexburg, Madison, Idaho, United States",
      "descendancyNumber":"180.04"
   },
   {
      "personId":"KWZK-9FY",
      "name":"Hiram Poole",
      "gender":"Male",
      "lifespan":"1856-Deceased",
      "birthDate":"1856",
      "birthPlace":"Utah Territory, United States",
      "descendancyNumber":"180.05"
   },
   {
      "personId":"KWZK-9NJ",
      "name":"Jeanette Alice Poole",
      "gender":"Female",
      "lifespan":"1860-1953",
      "birthDate":"23 May 1860",
      "birthPlace":"Ogden, Weber, Utah, United States",
      "deathDate":"7 August 1953",
      "deathPlace":"Denver, Denver, Colorado, United States",
      "descendancyNumber":"180.07"
   },
   {
      "personId":"KWZK-9N3",
      "name":"Susanna Rosetta Poole",
      "gender":"Female",
      "lifespan":"1862-1949",
      "birthDate":"4 July 1862",
      "birthPlace":"Ogden, Weber, Utah, United States",
      "deathDate":"19 February 1949",
      "deathPlace":"Menan, Jefferson, Idaho, United States",
      "descendancyNumber":"180.08"
   },
   {
      "personId":"KWZK-9N8",
      "name":"Reuben Mack Poole",
      "gender":"Male",
      "lifespan":"1864-1940",
      "birthDate":"25 November 1864",
      "birthPlace":"Ogden, Weber, Utah Territory, United States",
      "deathDate":"5 May 1940",
      "deathPlace":"Menan, Jefferson, Idaho, United States",
      "descendancyNumber":"180.09"
   },
   {
      "personId":"KWZK-9N7",
      "name":"Walter J. Poole",
      "gender":"Male",
      "lifespan":"1866-Deceased",
      "birthDate":"1866",
      "birthPlace":"Utah Territory, United States",
      "descendancyNumber":"180.10"
   },
   {
      "personId":"KWZK-9NF",
      "name":"Emily Poole",
      "gender":"Female",
      "lifespan":"1867-Deceased",
      "birthDate":"1867",
      "birthPlace":"Utah Territory, United States",
      "descendancyNumber":"180.11"
   },
   {
      "personId":"KWZK-9NK",
      "name":"Christena Jane Poole",
      "gender":"Female",
      "lifespan":"1868-1956",
      "birthDate":"16 January 1868",
      "birthPlace":"Ogden, Weber, Utah, United States",
      "deathDate":"13 August 1956",
      "deathPlace":"Rigby, Jefferson, Idaho, United States",
      "descendancyNumber":"180.12"
   },
   {
      "personId":"KWZK-9NG",
      "name":"Milburn Benton Poole",
      "gender":"Male",
      "lifespan":"1871-1960",
      "birthDate":"24 February 1871",
      "birthPlace":"Ogden, Weber, Utah, United States",
      "deathDate":"12 January 1960",
      "deathPlace":"Rigby, Jefferson, Idaho, United States",
      "descendancyNumber":"180.13"
   },
   {
      "personId":"KWZK-9NR",
      "name":"Ewatt Poole",
      "gender":"Male",
      "lifespan":"1874-Deceased",
      "birthDate":"1874",
      "birthPlace":"Utah Territory, United States",
      "descendancyNumber":"180.14"
   },
   {
      "personId":"KWZ6-15X",
      "name":"Lorraine Ivanov",
      "gender":"Female",
      "lifespan":"1985-Living",
      "birthDate":"2 February 1985",
      "ascendancyNumber":"2",
      "children":[
         {
            "personId":"KWZV-TYP",
            "name":"Zachary Baker",
            "gender":"Male",
            "lifespan":"1992-Living",
            "birthDate":"16 September 1992",
            "birthPlace":"Van Nuys, Los Angeles, California, United States",
            "descendancyNumber":"2-S"
         }
      ],
      "descendancyNumber":"6.01-S"
   },
   {
      "personId":"KWZV-T8L",
      "name":"Peter Beutler",
      "gender":"Male",
      "lifespan":"1830-1893",
      "birthDate":"24 May 1830",
      "birthPlace":"Lauperswil, Bern, Switzerland",
      "deathDate":"30 November 1893",
      "deathPlace":"Paris, Bear Lake, Idaho, United States",
      "marriagePlace":"Trub, Bern, Switzerland",
      "marriageDate":"18 March 1859",
      "ascendancyNumber":"112",
      "children":[
         {
            "personId":"KWZV-T8X",
            "name":"Maria Aeschlimann",
            "gender":"Female",
            "lifespan":"1837-1898",
            "birthDate":"12 May 1837",
            "birthPlace":"Rüegsau, Bern, Switzerland",
            "deathDate":"7 February 1898",
            "deathPlace":"Logan, Cache, Utah, United States",
            "marriagePlace":"Trub, Bern, Switzerland",
            "marriageDate":"18 March 1859",
            "descendancyNumber":"112-S"
         },
         {
            "personId":"KWZV-T8J",
            "name":"Gottfried Beutler",
            "gender":"Male",
            "lifespan":"1860-1923",
            "birthDate":"23 January 1860",
            "birthPlace":"Rüderswil, Bern, Switzerland",
            "deathDate":"9 December 1923",
            "deathPlace":"Logan, Cache, Utah, United States",
            "descendancyNumber":"112.01",
            "ascendancyNumber":"56"
         },
         {
            "personId":"KWZV-T8D",
            "name":"Marianne Beutler",
            "gender":"Female",
            "lifespan":"1859-1953",
            "birthDate":"9 October 1859",
            "birthPlace":"Buchholterberg, Bern, Switzerland",
            "deathDate":"9 November 1953",
            "descendancyNumber":"112.01-S"
         }
      ],
      "descendancyNumber":"226.01-S"
   },
   {
      "personId":"KWZV-T8J",
      "name":"Gottfried Beutler",
      "gender":"Male",
      "lifespan":"1860-1923",
      "birthDate":"23 January 1860",
      "birthPlace":"Rüderswil, Bern, Switzerland",
      "deathDate":"9 December 1923",
      "deathPlace":"Logan, Cache, Utah, United States",
      "descendancyNumber":"112.01",
      "ascendancyNumber":"56"
   },
   {
      "personId":"KWZV-YXJ",
      "name":"Robert Baker",
      "gender":"Male",
      "lifespan":"1960-Living",
      "birthDate":"1 April 1960",
      "birthPlace":"Maryland, United States",
      "ascendancyNumber":"6",
      "children":[
         {
            "personId":"KWZV-YJQ",
            "name":"Bonnie Beutler",
            "gender":"Female",
            "lifespan":"Living",
            "birthPlace":"Provo, Utah, Utah, United States",
            "descendancyNumber":"6-S"
         },
         {
            "personId":"KWZV-TYP",
            "name":"Zachary Baker",
            "gender":"Male",
            "lifespan":"1992-Living",
            "birthDate":"16 September 1992",
            "birthPlace":"Van Nuys, Los Angeles, California, United States",
            "descendancyNumber":"6.01"
         },
         {
            "personId":"KWZ6-15X",
            "name":"Lorraine Ivanov",
            "gender":"Female",
            "lifespan":"1985-Living",
            "birthDate":"2 February 1985",
            "descendancyNumber":"6.01-S"
         }
      ],
      "descendancyNumber":"14.01-S"
   },
   {
      "personId":"KWZV-TD5",
      "name":"Niklaus Beutler",
      "gender":"Male",
      "lifespan":"1771-Deceased",
      "birthDate":"4 August 1771",
      "birthPlace":"Trubschachen, Bern, Switzerland",
      "deathPlace":"Switzerland",
      "marriagePlace":"Trubschachen, Bern, Switzerland",
      "marriageDate":"1796",
      "ascendancyNumber":"448",
      "children":[
         {
            "personId":"KWZV-TDY",
            "name":"Magdalena Zaugg",
            "gender":"Female",
            "lifespan":"1771-1819",
            "deathDate":"28 September 1819",
            "deathPlace":"Switzerland",
            "marriagePlace":"Trubschachen, Bern, Switzerland",
            "marriageDate":"1796",
            "descendancyNumber":"448-S"
         },
         {
            "personId":"KWZV-TDS",
            "name":"Johannes Beutler",
            "gender":"Male",
            "lifespan":"1802-1875",
            "birthDate":"10 October 1802",
            "birthPlace":"Trubschachen, Bern, Switzerland",
            "deathDate":"18 March 1875",
            "deathPlace":"Trubchachen, Bern, Switzerland",
            "marriagePlace":"Röthenbach im Emmental, Bern, Switzerland",
            "marriageDate":"6 May 1823",
            "descendancyNumber":"448.01",
            "ascendancyNumber":"224"
         },
         {
            "personId":"KWZV-TD7",
            "name":"Verena Jutzi",
            "gender":"Female",
            "lifespan":"1793-1862",
            "birthDate":"22 February 1793",
            "birthPlace":"Rüderswil, Bern, Switzerland",
            "deathDate":"15 February 1862",
            "deathPlace":"Switzerland",
            "marriagePlace":"Röthenbach im Emmental, Bern, Switzerland",
            "marriageDate":"6 May 1823",
            "descendancyNumber":"448.01-S"
         }
      ]
   },
   {
      "personId":"KWZV-TDS",
      "name":"Johannes Beutler",
      "gender":"Male",
      "lifespan":"1802-1875",
      "birthDate":"10 October 1802",
      "birthPlace":"Trubschachen, Bern, Switzerland",
      "deathDate":"18 March 1875",
      "deathPlace":"Trubchachen, Bern, Switzerland",
      "marriagePlace":"Röthenbach im Emmental, Bern, Switzerland",
      "marriageDate":"6 May 1823",
      "descendancyNumber":"448.01",
      "ascendancyNumber":"224"
   },
   {
      "personId":"KWZV-TDV",
      "name":"Johannes Aeschlimann",
      "gender":"Male",
      "lifespan":"1789-1848",
      "birthDate":"8 February 1789",
      "birthPlace":"of Ruegsau, Bern, Switzerland",
      "deathDate":"29 January 1848",
      "marriagePlace":"Rüegsau, Bern, Switzerland",
      "marriageDate":"20 August 1813",
      "ascendancyNumber":"452",
      "children":[
         {
            "personId":"KWZV-TDL",
            "name":"Maria Magdalena Buerki",
            "gender":"Female",
            "lifespan":"1797-1827",
            "birthDate":"20 August 1797",
            "birthPlace":"Worb, Bern, Switzerland",
            "deathDate":"24 August 1827",
            "deathPlace":"Switzerland",
            "marriagePlace":"Rüegsau, Bern, Switzerland",
            "marriageDate":"20 August 1813",
            "descendancyNumber":"452-S"
         },
         {
            "personId":"KWZV-T8P",
            "name":"Johannes Aeschlimann",
            "gender":"Male",
            "lifespan":"1814-1886",
            "birthDate":"31 July 1814",
            "birthPlace":"Biglen, Bern, Switzerland",
            "deathDate":"3 March 1886",
            "deathPlace":"Switzerland",
            "marriagePlace":"Rüegsau, Bern, Switzerland",
            "marriageDate":"13 January 1837",
            "descendancyNumber":"454.01-S",
            "ascendancyNumber":"226"
         },
         {
            "personId":"KWZV-T8G",
            "name":"Magdalena Zuercher",
            "gender":"Female",
            "lifespan":"1809-1854",
            "birthDate":"3 November 1809",
            "birthPlace":"Trubschachen, Bern, Switzerland",
            "deathDate":"7 December 1854",
            "deathPlace":"Rüegsau, Bern, Switzerland",
            "marriagePlace":"Rüegsau, Bern, Switzerland",
            "marriageDate":"13 January 1837",
            "descendancyNumber":"452.01-S"
         }
      ]
   },
   {
      "personId":"KWZV-T8P",
      "name":"Johannes Aeschlimann",
      "gender":"Male",
      "lifespan":"1814-1886",
      "birthDate":"31 July 1814",
      "birthPlace":"Biglen, Bern, Switzerland",
      "deathDate":"3 March 1886",
      "deathPlace":"Switzerland",
      "marriagePlace":"Rüegsau, Bern, Switzerland",
      "marriageDate":"13 January 1837",
      "descendancyNumber":"454.01-S",
      "ascendancyNumber":"226"
   },
   {
      "personId":"KWZV-T8F",
      "name":"Alfred Beutler",
      "gender":"Male",
      "lifespan":"1887-1971",
      "birthDate":"24 April 1887",
      "birthPlace":"Allmendingen, Thun, Bern, Switzerland",
      "deathDate":"18 February 1971",
      "deathPlace":"North Logan, Cache, Utah, USA",
      "descendancyNumber":"58.01-S",
      "ascendancyNumber":"28"
   },
   {
      "personId":"KWZV-T88",
      "name":"Alvin Schwartz Beutler",
      "gender":"Male",
      "lifespan":"1916-2011",
      "birthDate":"18 July 1916",
      "birthPlace":"North Logan, Cache, Utah, United States",
      "deathDate":"20 July 2011",
      "descendancyNumber":"30.01-S",
      "ascendancyNumber":"14"
   },
   {
      "personId":"KWZV-TDK",
      "name":"Hans Zuercher",
      "gender":"Male",
      "lifespan":"1776-1830",
      "birthDate":"18 March 1776",
      "birthPlace":"Trubschachen, Bern, Switzerland",
      "deathDate":"25 January 1830",
      "deathPlace":",, Switzerland",
      "marriagePlace":"Trubschachen, Bern, Switzerland",
      "marriageDate":"about 1808",
      "ascendancyNumber":"454",
      "children":[
         {
            "personId":"KWZV-TD2",
            "name":"Elisabeth Aebi",
            "gender":"Female",
            "lifespan":"1781-1825",
            "birthDate":"11 March 1781",
            "birthPlace":"Seeberg, Bern, Switzerland",
            "deathDate":"9 March 1825",
            "deathPlace":",,Switzerland",
            "marriagePlace":"Trubschachen, Bern, Switzerland",
            "marriageDate":"about 1808",
            "descendancyNumber":"454-S"
         },
         {
            "personId":"KWZV-T8P",
            "name":"Johannes Aeschlimann",
            "gender":"Male",
            "lifespan":"1814-1886",
            "birthDate":"31 July 1814",
            "birthPlace":"Biglen, Bern, Switzerland",
            "deathDate":"3 March 1886",
            "deathPlace":"Switzerland",
            "marriagePlace":"Rüegsau, Bern, Switzerland",
            "marriageDate":"13 January 1837",
            "descendancyNumber":"454.01-S"
         },
         {
            "personId":"KWZV-T8G",
            "name":"Magdalena Zuercher",
            "gender":"Female",
            "lifespan":"1809-1854",
            "birthDate":"3 November 1809",
            "birthPlace":"Trubschachen, Bern, Switzerland",
            "deathDate":"7 December 1854",
            "deathPlace":"Rüegsau, Bern, Switzerland",
            "marriagePlace":"Rüegsau, Bern, Switzerland",
            "marriageDate":"13 January 1837",
            "descendancyNumber":"454.01"
         }
      ]
   },
   {
      "personId":"KWZV-T8Y",
      "name":"Samuel Mausli",
      "gender":"Male",
      "lifespan":"1826-1886",
      "birthDate":"3 October 1826",
      "birthPlace":"Grosshöchstetten, Bern, Switzerland",
      "deathDate":"7 July 1886",
      "deathPlace":"Bern, Bern, Switzerland",
      "marriagePlace":"Grosshöchstetten, Bern, Switzerland",
      "marriageDate":"18 July 1862",
      "ascendancyNumber":"116",
      "children":[
         {
            "personId":"KWZV-TD9",
            "name":"Anna Katharina Schwartz",
            "gender":"Female",
            "lifespan":"1836-1905",
            "birthDate":"27 April 1836",
            "birthPlace":"Schangnau, Bern, Switzerland",
            "deathDate":"25 April 1905",
            "deathPlace":"Bern, Switzerland",
            "marriagePlace":"Grosshöchstetten, Bern, Switzerland",
            "marriageDate":"18 July 1862",
            "descendancyNumber":"116-S"
         },
         {
            "personId":"KWZV-T85",
            "name":"Gottlieb Schwartz",
            "gender":"Male",
            "lifespan":"1859-1925",
            "birthDate":"20 January 1859",
            "birthPlace":"Schangnau, Bern, Switzerland",
            "deathDate":"18 August 1925",
            "deathPlace":"Logan, Cache, Utah, United States",
            "marriagePlace":"Thun, Bern, Switzerland",
            "marriageDate":"21 October 1882",
            "descendancyNumber":"118.01-S",
            "ascendancyNumber":"58"
         },
         {
            "personId":"KWZV-T8R",
            "name":"Rosina Bieri",
            "gender":"Female",
            "lifespan":"1862-1896",
            "birthDate":"23 July 1862",
            "birthPlace":"Schwarzenegg, Unterlangenegg, Bern, Switzerland",
            "deathDate":"8 December 1896",
            "deathPlace":"Logan, Cache, Utah, United States",
            "marriagePlace":"Thun, Bern, Switzerland",
            "marriageDate":"21 October 1882",
            "descendancyNumber":"116.01-S"
         }
      ],
      "descendancyNumber":"234.01-S"
   },
   {
      "personId":"KWZV-T85",
      "name":"Gottlieb Schwartz",
      "gender":"Male",
      "lifespan":"1859-1925",
      "birthDate":"20 January 1859",
      "birthPlace":"Schangnau, Bern, Switzerland",
      "deathDate":"18 August 1925",
      "deathPlace":"Logan, Cache, Utah, United States",
      "marriagePlace":"Thun, Bern, Switzerland",
      "marriageDate":"21 October 1882",
      "descendancyNumber":"118.01-S",
      "ascendancyNumber":"58"
   },
   {
      "personId":"KWZV-T6C",
      "name":"Peter Schwartz",
      "gender":"Male",
      "lifespan":"1750-Deceased",
      "birthDate":"6 December 1750",
      "birthPlace":"Biglen, Bern, Switzerland",
      "marriagePlace":"Münsingen, Bern, Switzerland",
      "marriageDate":"8 October 1779",
      "ascendancyNumber":"468",
      "children":[
         {
            "personId":"KWZV-T68",
            "name":"Anna Moser",
            "gender":"Female",
            "lifespan":"1755-Deceased",
            "birthDate":"1755",
            "birthPlace":"Biglen, Bern, Switzerland",
            "marriagePlace":"Münsingen, Bern, Switzerland",
            "marriageDate":"8 October 1779",
            "descendancyNumber":"468-S"
         },
         {
            "personId":"KWZV-TDD",
            "name":"Jacob Schwartz",
            "gender":"Male",
            "lifespan":"1798-1854",
            "birthDate":"25 February 1798",
            "birthPlace":"Biglen, Bern, Switzerland",
            "deathDate":"24 November 1854",
            "deathPlace":"Bern, Switzerland",
            "marriagePlace":"Walkringen, Bern, Switzerland",
            "marriageDate":"25 May 1824",
            "descendancyNumber":"470.01-S",
            "ascendancyNumber":"234"
         },
         {
            "personId":"KWZV-TD6",
            "name":"Anna Tanner",
            "gender":"Female",
            "lifespan":"1798-1867",
            "birthDate":"14 December 1798",
            "birthPlace":"Walkringen, Bern, Switzerland",
            "deathDate":"1867",
            "marriagePlace":"Walkringen, Bern, Switzerland",
            "marriageDate":"25 May 1824",
            "descendancyNumber":"468.01-S"
         }
      ]
   },
   {
      "personId":"KWZV-TDD",
      "name":"Jacob Schwartz",
      "gender":"Male",
      "lifespan":"1798-1854",
      "birthDate":"25 February 1798",
      "birthPlace":"Biglen, Bern, Switzerland",
      "deathDate":"24 November 1854",
      "deathPlace":"Bern, Switzerland",
      "marriagePlace":"Walkringen, Bern, Switzerland",
      "marriageDate":"25 May 1824",
      "descendancyNumber":"470.01-S",
      "ascendancyNumber":"234"
   },
   {
      "personId":"KWZV-T69",
      "name":"Niklaus Mäüsli",
      "gender":"Male",
      "lifespan":"1743-Deceased",
      "birthDate":"15 March 1743",
      "birthPlace":"Grosshöchstetten, Bern, Switzerland",
      "marriagePlace":"Bern, Switzerland",
      "marriageDate":"about 1764",
      "ascendancyNumber":"464",
      "children":[
         {
            "personId":"KWZV-T6M",
            "name":"Anna Gfeller",
            "gender":"Female",
            "lifespan":"1738-Deceased",
            "marriagePlace":"Bern, Switzerland",
            "marriageDate":"about 1764",
            "descendancyNumber":"464-S"
         },
         {
            "personId":"KWZV-TDW",
            "name":"David Maeusli",
            "gender":"Male",
            "lifespan":"1780-Deceased",
            "birthDate":"20 October 1780",
            "birthPlace":"Grosshöchstetten, Bern, Switzerland",
            "descendancyNumber":"464.01",
            "ascendancyNumber":"232"
         },
         {
            "personId":"KWZV-TDZ",
            "name":"Susanna Barbara Fasnacht",
            "gender":"Female",
            "lifespan":"1792-1866",
            "birthDate":"2 December 1792",
            "birthPlace":"Muntelier, Fribourg, Switzerland",
            "deathDate":"22 November 1866",
            "descendancyNumber":"464.01-S"
         }
      ]
   },
   {
      "personId":"KWZV-TDW",
      "name":"David Maeusli",
      "gender":"Male",
      "lifespan":"1780-Deceased",
      "birthDate":"20 October 1780",
      "birthPlace":"Grosshöchstetten, Bern, Switzerland",
      "descendancyNumber":"464.01",
      "ascendancyNumber":"232"
   },
   {
      "personId":"KWZV-T6Z",
      "name":"Christen Tanner",
      "gender":"Male",
      "lifespan":"1755-1832",
      "birthDate":"13 July 1755",
      "birthPlace":"Walkringen, Bern, Switzerland",
      "deathDate":"5 May 1832",
      "marriageDate":"17 January 1794",
      "ascendancyNumber":"470",
      "children":[
         {
            "personId":"KWZV-T6D",
            "name":"Magdalena Moser",
            "gender":"Female",
            "lifespan":"1773-1832",
            "birthDate":"3 January 1773",
            "birthPlace":"Biglen, Bern, Switzerland",
            "deathDate":"10 September 1832",
            "marriageDate":"17 January 1794",
            "descendancyNumber":"470-S"
         },
         {
            "personId":"KWZV-TDD",
            "name":"Jacob Schwartz",
            "gender":"Male",
            "lifespan":"1798-1854",
            "birthDate":"25 February 1798",
            "birthPlace":"Biglen, Bern, Switzerland",
            "deathDate":"24 November 1854",
            "deathPlace":"Bern, Switzerland",
            "marriagePlace":"Walkringen, Bern, Switzerland",
            "marriageDate":"25 May 1824",
            "descendancyNumber":"470.01-S"
         },
         {
            "personId":"KWZV-TD6",
            "name":"Anna Tanner",
            "gender":"Female",
            "lifespan":"1798-1867",
            "birthDate":"14 December 1798",
            "birthPlace":"Walkringen, Bern, Switzerland",
            "deathDate":"1867",
            "marriagePlace":"Walkringen, Bern, Switzerland",
            "marriageDate":"25 May 1824",
            "descendancyNumber":"470.01"
         }
      ]
   },
   {
      "personId":"KWZV-T6K",
      "name":"Hans Jacob Egli",
      "gender":"Male",
      "lifespan":"1755-Deceased",
      "birthDate":"28 February 1755",
      "birthPlace":"Switzerland",
      "ascendancyNumber":"474",
      "children":[
         {
            "personId":"KWZV-T6L",
            "name":"Christina Schweizer",
            "gender":"Female",
            "lifespan":"1764-1834",
            "birthDate":"1 September 1764",
            "birthPlace":"Hasle bei Burgdorf, Bern, Switzerland",
            "deathDate":"1 March 1834",
            "descendancyNumber":"474-S"
         },
         {
            "personId":"KWZV-TDN",
            "name":"Peter Bieri",
            "gender":"Male",
            "lifespan":"1778-1858",
            "birthDate":"22 February 1778",
            "birthPlace":"Schangnau, Bern, Switzerland",
            "deathDate":"7 December 1858",
            "deathPlace":"Schangnau, Bern, Switzerland",
            "marriagePlace":"Schangnau, Bern, Switzerland",
            "marriageDate":"12 November 1813",
            "descendancyNumber":"472.01",
            "ascendancyNumber":"236"
         },
         {
            "personId":"KWZV-TDJ",
            "name":"Christina Egli",
            "gender":"Female",
            "lifespan":"1791-1850",
            "birthDate":"11 September 1791",
            "birthPlace":"Schangnau, Bern, Switzerland",
            "deathDate":"19 September 1850",
            "deathPlace":"Schangnau, Bern, Switzerland",
            "marriagePlace":"Schangnau, Bern, Switzerland",
            "marriageDate":"12 November 1813",
            "descendancyNumber":"474.01"
         }
      ]
   },
   {
      "personId":"KWZV-TDN",
      "name":"Peter Bieri",
      "gender":"Male",
      "lifespan":"1778-1858",
      "birthDate":"22 February 1778",
      "birthPlace":"Schangnau, Bern, Switzerland",
      "deathDate":"7 December 1858",
      "deathPlace":"Schangnau, Bern, Switzerland",
      "marriagePlace":"Schangnau, Bern, Switzerland",
      "marriageDate":"12 November 1813",
      "descendancyNumber":"472.01",
      "ascendancyNumber":"236"
   },
   {
      "personId":"KWZV-TDQ",
      "name":"Abraham Bieri",
      "gender":"Male",
      "lifespan":"1823-1873",
      "birthDate":"29 October 1823",
      "birthPlace":"Schangnau, Bern, Switzerland",
      "deathDate":"1 May 1873",
      "deathPlace":"Schangnau, Bern, Switzerland",
      "marriagePlace":"Thun, Bern, Switzerland",
      "marriageDate":"13 May 1848",
      "ascendancyNumber":"118",
      "children":[
         {
            "personId":"KWZV-TD3",
            "name":"Maria Zuercher",
            "gender":"Female",
            "lifespan":"1823-1883",
            "birthDate":"20 July 1823",
            "birthPlace":"Rüderswil, Bern, Switzerland",
            "deathDate":"2 February 1883",
            "deathPlace":"Schwarzenegg, Unterlangenegg, Bern, Switzerland",
            "marriagePlace":"Thun, Bern, Switzerland",
            "marriageDate":"13 May 1848",
            "descendancyNumber":"118-S"
         },
         {
            "personId":"KWZV-T85",
            "name":"Gottlieb Schwartz",
            "gender":"Male",
            "lifespan":"1859-1925",
            "birthDate":"20 January 1859",
            "birthPlace":"Schangnau, Bern, Switzerland",
            "deathDate":"18 August 1925",
            "deathPlace":"Logan, Cache, Utah, United States",
            "marriagePlace":"Thun, Bern, Switzerland",
            "marriageDate":"21 October 1882",
            "descendancyNumber":"118.01-S"
         },
         {
            "personId":"KWZV-T8R",
            "name":"Rosina Bieri",
            "gender":"Female",
            "lifespan":"1862-1896",
            "birthDate":"23 July 1862",
            "birthPlace":"Schwarzenegg, Unterlangenegg, Bern, Switzerland",
            "deathDate":"8 December 1896",
            "deathPlace":"Logan, Cache, Utah, United States",
            "marriagePlace":"Thun, Bern, Switzerland",
            "marriageDate":"21 October 1882",
            "descendancyNumber":"118.01"
         }
      ],
      "descendancyNumber":"238.01-S"
   },
   {
      "personId":"KWZV-T6V",
      "name":"Christen Bieri",
      "gender":"Male",
      "lifespan":"1744-1823",
      "birthDate":"11 October 1744",
      "birthPlace":"Schangnau, Bern, Switzerland",
      "deathDate":"27 October 1823",
      "ascendancyNumber":"472",
      "children":[
         {
            "personId":"KWZV-T62",
            "name":"Maria Klötzli",
            "gender":"Female",
            "lifespan":"1745-1818",
            "birthDate":"1745",
            "birthPlace":"Trub, Bern, Switzerland",
            "deathDate":"15 July 1818",
            "deathPlace":"Schangnau, Bern, Switzerland",
            "descendancyNumber":"472-S"
         },
         {
            "personId":"KWZV-TDN",
            "name":"Peter Bieri",
            "gender":"Male",
            "lifespan":"1778-1858",
            "birthDate":"22 February 1778",
            "birthPlace":"Schangnau, Bern, Switzerland",
            "deathDate":"7 December 1858",
            "deathPlace":"Schangnau, Bern, Switzerland",
            "marriagePlace":"Schangnau, Bern, Switzerland",
            "marriageDate":"12 November 1813",
            "descendancyNumber":"472.01"
         },
         {
            "personId":"KWZV-TDJ",
            "name":"Christina Egli",
            "gender":"Female",
            "lifespan":"1791-1850",
            "birthDate":"11 September 1791",
            "birthPlace":"Schangnau, Bern, Switzerland",
            "deathDate":"19 September 1850",
            "deathPlace":"Schangnau, Bern, Switzerland",
            "marriagePlace":"Schangnau, Bern, Switzerland",
            "marriageDate":"12 November 1813",
            "descendancyNumber":"472.01-S"
         }
      ]
   },
   {
      "personId":"KWZV-TDF",
      "name":"Christian Zuercher",
      "gender":"Male",
      "lifespan":"1794-1850",
      "birthDate":"20 June 1794",
      "birthPlace":"Rüderswil, Bern, Switzerland",
      "deathDate":"19 January 1850",
      "marriagePlace":"Schwarzenegg, Unterlangenegg, Bern, Switzerland",
      "marriageDate":"21 November 1818",
      "ascendancyNumber":"238",
      "children":[
         {
            "personId":"KWZV-TDX",
            "name":"Katharina",
            "gender":"Female",
            "lifespan":"1792-1871",
            "birthDate":"26 February 1792",
            "birthPlace":"Steffisburg, Bern, Switzerland",
            "deathDate":"19 February 1871",
            "marriagePlace":"Schwarzenegg, Unterlangenegg, Bern, Switzerland",
            "marriageDate":"21 November 1818",
            "descendancyNumber":"238-S"
         },
         {
            "personId":"KWZV-TDQ",
            "name":"Abraham Bieri",
            "gender":"Male",
            "lifespan":"1823-1873",
            "birthDate":"29 October 1823",
            "birthPlace":"Schangnau, Bern, Switzerland",
            "deathDate":"1 May 1873",
            "deathPlace":"Schangnau, Bern, Switzerland",
            "marriagePlace":"Thun, Bern, Switzerland",
            "marriageDate":"13 May 1848",
            "descendancyNumber":"238.01-S"
         },
         {
            "personId":"KWZV-TD3",
            "name":"Maria Zuercher",
            "gender":"Female",
            "lifespan":"1823-1883",
            "birthDate":"20 July 1823",
            "birthPlace":"Rüderswil, Bern, Switzerland",
            "deathDate":"2 February 1883",
            "deathPlace":"Schwarzenegg, Unterlangenegg, Bern, Switzerland",
            "marriagePlace":"Thun, Bern, Switzerland",
            "marriageDate":"13 May 1848",
            "descendancyNumber":"238.01"
         }
      ],
      "descendancyNumber":"478.01-S"
   },
   {
      "personId":"KWZV-T6F",
      "name":"Ulrich Zuercher",
      "gender":"Male",
      "lifespan":"1757-1818",
      "birthDate":"17 December 1757",
      "birthPlace":"Rüderswil, Bern, Switzerland",
      "deathDate":"21 June 1818",
      "marriageDate":"7 January 1781",
      "ascendancyNumber":"476",
      "children":[
         {
            "personId":"KWZV-T6N",
            "name":"Anna Gerber",
            "gender":"Female",
            "lifespan":"1759-1813",
            "birthDate":"3 August 1759",
            "birthPlace":"Schwarzenegg, Unterlangenegg, Bern, Switzerland",
            "deathDate":"5 May 1813",
            "marriageDate":"7 January 1781",
            "descendancyNumber":"476-S"
         },
         {
            "personId":"KWZV-TDF",
            "name":"Christian Zuercher",
            "gender":"Male",
            "lifespan":"1794-1850",
            "birthDate":"20 June 1794",
            "birthPlace":"Rüderswil, Bern, Switzerland",
            "deathDate":"19 January 1850",
            "marriagePlace":"Schwarzenegg, Unterlangenegg, Bern, Switzerland",
            "marriageDate":"21 November 1818",
            "descendancyNumber":"476.01"
         },
         {
            "personId":"KWZV-TDX",
            "name":"Katharina",
            "gender":"Female",
            "lifespan":"1792-1871",
            "birthDate":"26 February 1792",
            "birthPlace":"Steffisburg, Bern, Switzerland",
            "deathDate":"19 February 1871",
            "marriagePlace":"Schwarzenegg, Unterlangenegg, Bern, Switzerland",
            "marriageDate":"21 November 1818",
            "descendancyNumber":"476.01-S"
         }
      ]
   },
   {
      "personId":"KWZV-T6X",
      "name":"Ulrich Ochsenbein",
      "gender":"Male",
      "lifespan":"1754-Deceased",
      "birthDate":"6 October 1754",
      "birthPlace":"Fahrni, Bern, Switzerland",
      "deathDate":"dead",
      "marriagePlace":"Urtenen, Bern, Switzerland",
      "marriageDate":"14 March 1783",
      "ascendancyNumber":"478",
      "children":[
         {
            "personId":"KWZV-T66",
            "name":"Maria Hubacher",
            "gender":"Female",
            "lifespan":"1766-1845",
            "birthDate":"1766",
            "birthPlace":"Urtenen, Bern, Switzerland",
            "deathDate":"21 March 1845",
            "marriagePlace":"Urtenen, Bern, Switzerland",
            "marriageDate":"14 March 1783",
            "descendancyNumber":"478-S"
         },
         {
            "personId":"KWZV-TDF",
            "name":"Christian Zuercher",
            "gender":"Male",
            "lifespan":"1794-1850",
            "birthDate":"20 June 1794",
            "birthPlace":"Rüderswil, Bern, Switzerland",
            "deathDate":"19 January 1850",
            "marriagePlace":"Schwarzenegg, Unterlangenegg, Bern, Switzerland",
            "marriageDate":"21 November 1818",
            "descendancyNumber":"478.01-S"
         },
         {
            "personId":"KWZV-TDX",
            "name":"Katharina",
            "gender":"Female",
            "lifespan":"1792-1871",
            "birthDate":"26 February 1792",
            "birthPlace":"Steffisburg, Bern, Switzerland",
            "deathDate":"19 February 1871",
            "marriagePlace":"Schwarzenegg, Unterlangenegg, Bern, Switzerland",
            "marriageDate":"21 November 1818",
            "descendancyNumber":"478.01"
         }
      ]
   },
   {
      "personId":"KWZK-MM4",
      "name":"Charles MacAlistare",
      "gender":"Male",
      "lifespan":"1769-Deceased",
      "birthDate":"5 October 1769",
      "birthPlace":"Campbeltown, Argyll, Scotland",
      "ascendancyNumber":"480",
      "children":[
         {
            "personId":"KWZK-MMC",
            "name":"Mrs. Charles McAlister",
            "gender":"Female",
            "lifespan":"Deceased",
            "birthPlace":"Argyll, Scotland",
            "descendancyNumber":"480-S"
         },
         {
            "personId":"KWZV-11B",
            "name":"Charles McAlister",
            "gender":"Male",
            "lifespan":"1791-1876",
            "birthDate":"7 March 1791",
            "birthPlace":"Campbeltown, Argyll, Scotland",
            "deathDate":"23 February 1876",
            "deathPlace":"Glasgow, Lanarkshire, Scotland",
            "marriagePlace":"Greenock, Renfrewshire, Scotland",
            "marriageDate":"29 March 1819",
            "descendancyNumber":"482.01-S",
            "ascendancyNumber":"240"
         },
         {
            "personId":"KWZV-111",
            "name":"Helen or Ellen Maxwell",
            "gender":"Female",
            "lifespan":"1798-1864",
            "birthDate":"1798",
            "birthPlace":"Largs, North Ayrshire, Scotland",
            "deathDate":"4 April 1864",
            "deathPlace":"Glasgow, Lanarkshire, Scotland",
            "marriagePlace":"Greenock, Renfrewshire, Scotland",
            "marriageDate":"29 March 1819",
            "descendancyNumber":"480.01-S"
         }
      ]
   },
   {
      "personId":"KWZV-11B",
      "name":"Charles McAlister",
      "gender":"Male",
      "lifespan":"1791-1876",
      "birthDate":"7 March 1791",
      "birthPlace":"Campbeltown, Argyll, Scotland",
      "deathDate":"23 February 1876",
      "deathPlace":"Glasgow, Lanarkshire, Scotland",
      "marriagePlace":"Greenock, Renfrewshire, Scotland",
      "marriageDate":"29 March 1819",
      "descendancyNumber":"482.01-S",
      "ascendancyNumber":"240"
   },
   {
      "personId":"KWZV-11R",
      "name":"Charles Houston Maxwell McAlister",
      "gender":"Male",
      "lifespan":"1827-1898",
      "birthDate":"17 February 1827",
      "birthPlace":"Renfrewshire, Scotland",
      "deathDate":"25 January 1898",
      "deathPlace":"Logan, Cache, Utah, United States",
      "descendancyNumber":"242.01-S",
      "ascendancyNumber":"120"
   },
   {
      "personId":"KWZV-11P",
      "name":"John Archibald McAlister",
      "gender":"Male",
      "lifespan":"1851-1932",
      "birthDate":"22 August 1851",
      "birthPlace":"Newcastle upon Tyne, Northumberland, England",
      "deathDate":"29 November 1932",
      "deathPlace":"Los Angeles, Los Angeles, California, United States",
      "marriagePlace":"Salt Lake City, Salt Lake, Utah, United States",
      "marriageDate":"12 June 1871",
      "descendancyNumber":"122.01-S",
      "ascendancyNumber":"60"
   },
   {
      "personId":"KWZK-MMV",
      "name":"Jacob Pettibone Jr",
      "gender":"Male",
      "lifespan":"1751-1807",
      "birthDate":"20 December 1751",
      "birthPlace":"Simsbury, Hartford, Connecticut, United States",
      "deathDate":"18 October 1807",
      "deathPlace":"Simsbury, Hartford, Connecticut, United States",
      "ascendancyNumber":"490",
      "children":[
         {
            "personId":"KWZK-MMK",
            "name":"Rosetta Amanda Barber",
            "gender":"Female",
            "lifespan":"1758-1810",
            "birthDate":"15 May 1758",
            "birthPlace":"Simsbury, Hartford, CT",
            "deathDate":"18 April 1810",
            "deathPlace":"Hartford, Hartford, Connecticut, United States",
            "descendancyNumber":"490-S"
         },
         {
            "personId":"KWZK-MMS",
            "name":"Rosetta Lenora Pettibone",
            "gender":"Female",
            "lifespan":"1778-1846",
            "birthDate":"22 October 1778",
            "birthPlace":"Simsbury, Hartford, Connecticut, United States",
            "deathDate":"12 October 1846",
            "deathPlace":"Walnut Grove, Knox, Illinois, United States",
            "descendancyNumber":"490.01"
         }
      ]
   },
   {
      "personId":"KWZK-MM9",
      "name":"Robert Stein Haig",
      "gender":"Male",
      "lifespan":"1804-1876",
      "birthDate":"2 August 1804",
      "birthPlace":"St. Andrews, Fifeshire, Scotland",
      "deathDate":"1876",
      "deathPlace":"Utica, Oneida, New York, United States",
      "ascendancyNumber":"242",
      "children":[
         {
            "personId":"KWZV-11R",
            "name":"Charles Houston Maxwell McAlister",
            "gender":"Male",
            "lifespan":"1827-1898",
            "birthDate":"17 February 1827",
            "birthPlace":"Renfrewshire, Scotland",
            "deathDate":"25 January 1898",
            "deathPlace":"Logan, Cache, Utah, United States",
            "descendancyNumber":"242.01-S"
         },
         {
            "personId":"KWZK-MJ5",
            "name":"Mary Haig",
            "gender":"Female",
            "lifespan":"Deceased",
            "descendancyNumber":"242.01"
         }
      ]
   },
   {
      "personId":"KWZK-MM8",
      "name":"James Maxwell",
      "gender":"Male",
      "lifespan":"1778-1869",
      "birthDate":"17 July 1778",
      "birthPlace":"Greenock, Renfrewshire, Scotland",
      "deathDate":"1869",
      "marriagePlace":"West Greenock, Renfrewshire, Scotland",
      "marriageDate":"17 November 1795",
      "ascendancyNumber":"482",
      "children":[
         {
            "personId":"KWZK-MMZ",
            "name":"Elisabeth Colquhoun",
            "gender":"Female",
            "lifespan":"1780-1819",
            "birthDate":"1780",
            "birthPlace":"Greenock, Renfrewshire, Scotland",
            "deathDate":"1819",
            "marriagePlace":"West Greenock, Renfrewshire, Scotland",
            "marriageDate":"17 November 1795",
            "descendancyNumber":"482-S"
         },
         {
            "personId":"KWZV-11B",
            "name":"Charles McAlister",
            "gender":"Male",
            "lifespan":"1791-1876",
            "birthDate":"7 March 1791",
            "birthPlace":"Campbeltown, Argyll, Scotland",
            "deathDate":"23 February 1876",
            "deathPlace":"Glasgow, Lanarkshire, Scotland",
            "marriagePlace":"Greenock, Renfrewshire, Scotland",
            "marriageDate":"29 March 1819",
            "descendancyNumber":"482.01-S"
         },
         {
            "personId":"KWZV-111",
            "name":"Helen or Ellen Maxwell",
            "gender":"Female",
            "lifespan":"1798-1864",
            "birthDate":"1798",
            "birthPlace":"Largs, North Ayrshire, Scotland",
            "deathDate":"4 April 1864",
            "deathPlace":"Glasgow, Lanarkshire, Scotland",
            "marriagePlace":"Greenock, Renfrewshire, Scotland",
            "marriageDate":"29 March 1819",
            "descendancyNumber":"482.01"
         }
      ]
   },
   {
      "personId":"KWZK-MMW",
      "name":"Abraham Horton",
      "gender":"Male",
      "lifespan":"1795-1834",
      "birthDate":"18 February 1795",
      "birthPlace":"Sandhurst, Kent, England",
      "deathDate":"14 February 1834",
      "ascendancyNumber":"246",
      "children":[
         {
            "personId":"KWZK-MMQ",
            "name":"Sarah Forman",
            "gender":"Female",
            "lifespan":"1793-1874",
            "birthDate":"1793",
            "birthPlace":"Beckley, Sussex, England",
            "deathDate":"6 November 1874",
            "deathPlace":"South Hall Greenwood, Middlesex, District of Uxbridge, England",
            "descendancyNumber":"246-S"
         },
         {
            "personId":"KWZK-MMM",
            "name":"Lorenzo Snow",
            "gender":"Male",
            "lifespan":"1814-1901",
            "birthDate":"3 April 1814",
            "birthPlace":"Mantua, Portage, Ohio",
            "deathDate":"10 October 1901",
            "marriagePlace":"Salt Lake City, Salt Lake, Utah Territory, United States",
            "marriageDate":"9 October 1853",
            "descendancyNumber":"246.01-S",
            "ascendancyNumber":"122"
         },
         {
            "personId":"KWZV-11Y",
            "name":"Caroline Horton",
            "gender":"Female",
            "lifespan":"1824-1857",
            "birthDate":"25 December 1824",
            "birthPlace":"Sandhurst, Kent, England",
            "deathDate":"21 February 1857",
            "deathPlace":"Brigham City, Box Elder, Utah, United States",
            "marriagePlace":"Salt Lake City, Salt Lake, Utah Territory, United States",
            "marriageDate":"9 October 1853",
            "descendancyNumber":"246.01"
         }
      ],
      "descendancyNumber":"494.01-S"
   },
   {
      "personId":"KWZK-MMM",
      "name":"Lorenzo Snow",
      "gender":"Male",
      "lifespan":"1814-1901",
      "birthDate":"3 April 1814",
      "birthPlace":"Mantua, Portage, Ohio",
      "deathDate":"10 October 1901",
      "marriagePlace":"Salt Lake City, Salt Lake, Utah Territory, United States",
      "marriageDate":"9 October 1853",
      "descendancyNumber":"246.01-S",
      "ascendancyNumber":"122"
   },
   {
      "personId":"KWZK-MMP",
      "name":"Thomas Horton",
      "gender":"Male",
      "lifespan":"1764-1820",
      "birthDate":"1764",
      "birthPlace":"Worthing, West Sussex, England",
      "marriagePlace":"Northiam, East Sussex, England",
      "marriageDate":"29 January 1788",
      "ascendancyNumber":"492",
      "children":[
         {
            "personId":"KWZK-MM5",
            "name":"Elizabeth Ranger",
            "gender":"Female",
            "lifespan":"1764-Deceased",
            "birthDate":"1764",
            "birthPlace":"Northiam, East Sussex, England",
            "marriagePlace":"Northiam, East Sussex, England",
            "marriageDate":"29 January 1788",
            "descendancyNumber":"492-S"
         },
         {
            "personId":"KWZK-MMW",
            "name":"Abraham Horton",
            "gender":"Male",
            "lifespan":"1795-1834",
            "birthDate":"18 February 1795",
            "birthPlace":"Sandhurst, Kent, England",
            "deathDate":"14 February 1834",
            "descendancyNumber":"492.01"
         },
         {
            "personId":"KWZK-MMQ",
            "name":"Sarah Forman",
            "gender":"Female",
            "lifespan":"1793-1874",
            "birthDate":"1793",
            "birthPlace":"Beckley, Sussex, England",
            "deathDate":"6 November 1874",
            "deathPlace":"South Hall Greenwood, Middlesex, District of Uxbridge, England",
            "descendancyNumber":"492.01-S"
         }
      ]
   },
   {
      "personId":"KWZV-1GQ",
      "name":"Frank Snow McAlister",
      "gender":"Male",
      "lifespan":"1913-1913",
      "birthDate":"17 February 1913",
      "birthPlace":"Logan, Cache, Utah, United States",
      "deathDate":"19 February 1913",
      "deathPlace":"Utah, United States",
      "ascendancyNumber":"30",
      "children":[
         {
            "personId":"KWZV-T88",
            "name":"Alvin Schwartz Beutler",
            "gender":"Male",
            "lifespan":"1916-2011",
            "birthDate":"18 July 1916",
            "birthPlace":"North Logan, Cache, Utah, United States",
            "deathDate":"20 July 2011",
            "descendancyNumber":"30.01-S"
         },
         {
            "personId":"KWZV-1F5",
            "name":"Clarissa McAlister",
            "gender":"Female",
            "lifespan":"Living",
            "descendancyNumber":"30.01"
         }
      ],
      "descendancyNumber":"60.01"
   },
   {
      "personId":"KWZK-MMN",
      "name":"Walter Forman",
      "gender":"Male",
      "lifespan":"1770-Deceased",
      "birthDate":"1770",
      "birthPlace":"Great Britain, United Kingdom",
      "marriagePlace":"Beckley, Sussex, England",
      "marriageDate":"before 1793",
      "ascendancyNumber":"494",
      "children":[
         {
            "personId":"KWZK-MM2",
            "name":"Mrs. Walter Foreman",
            "gender":"Female",
            "lifespan":"1773-Deceased",
            "birthDate":"1773",
            "birthPlace":"Great Britain, United Kingdom",
            "marriagePlace":"Beckley, Sussex, England",
            "marriageDate":"before 1793",
            "descendancyNumber":"494-S"
         },
         {
            "personId":"KWZK-MMW",
            "name":"Abraham Horton",
            "gender":"Male",
            "lifespan":"1795-1834",
            "birthDate":"18 February 1795",
            "birthPlace":"Sandhurst, Kent, England",
            "deathDate":"14 February 1834",
            "descendancyNumber":"494.01-S"
         },
         {
            "personId":"KWZK-MMQ",
            "name":"Sarah Forman",
            "gender":"Female",
            "lifespan":"1793-1874",
            "birthDate":"1793",
            "birthPlace":"Beckley, Sussex, England",
            "deathDate":"6 November 1874",
            "deathPlace":"South Hall Greenwood, Middlesex, District of Uxbridge, England",
            "descendancyNumber":"494.01"
         }
      ]
   }
];


	
	
	
	// //Get authed user
	// var getAuthedUser = function () {
	// 	authService.getAuthedUser().then(function (data) {
	// 		$scope.authedUser = data;
	// 		getAncestryAndChildren();
	// 	});
	// };
	// getAuthedUser();

	// $scope.combinedFamily = [];
	
	// //Get ancestry and children
	
	// var getAncestryAndChildren = function () {
	// 	familyService.getAncestryAndChildren($scope.authedUser.personId, $scope.authedUser.accessToken).then(function (data) {
	// 		$scope.family= data;	
	// 		console.log(data);
	// 	});
	// };


	
	

	$scope.lifespanYears = [];
	$scope.lifespanTotalsArray = [];
	$scope.personNumbers = [];


	$scope.getLifespans = function () {
		$scope.testFamily.forEach(function (person) {
			person.lifespanArray = person.lifespan.split("-");
			person.lifespanArray[0] = Number(person.lifespanArray[0]);
			person.lifespanArray[1] = Number(person.lifespanArray[1]);

			if (Number.isInteger(person.lifespanArray[0]) && Number.isInteger(person.lifespanArray[1])) {
				$scope.cleanData.push(person);
				person.lifespanTotal = Number(person.lifespanArray[1]) - Number(person.lifespanArray[0]);
				$scope.lifespanTotalsArray.push(person.lifespanTotal);
				$scope.lifespanYears.push(person.lifespanArray[0]);
				// $scope.lifespanYears.push(person.lifespanArray[1]);

				if (person.ascendancyNumber) {
					person.ascendancyNumber = person.ascendancyNumber.split("-S");
					person.ascendancyNumber = Number(person.ascendancyNumber);
					$scope.personNumbers.push(person.ascendancyNumber);
				} else {
					person.descendancyNumber = person.descendancyNumber.split("-S");
					person.descendancyNumber = Number(person.descendancyNumber);
					$scope.personNumbers.push(person.descendancyNumber);
				}

			}
		});
		
		function compareNumbers(a, b) {
			return a - b;
		}
		
		
		$scope.sortedLifespanYears = $scope.lifespanYears.sort(compareNumbers);
		$scope.maxYear = $scope.sortedLifespanYears[$scope.sortedLifespanYears.length - 1];
		$scope.minYear = $scope.sortedLifespanYears[0];

		$scope.lifespanTotalsArray = $scope.lifespanTotalsArray.sort(compareNumbers);
		$scope.maxLifespan = $scope.lifespanTotalsArray[$scope.lifespanTotalsArray.length - 1];
		$scope.minLifespan = $scope.lifespanTotalsArray[0];

		// $scope.sortedPersonNumbers = $scope.personNumbers.sort();

		
		$scope.sortedPersonNumbers = $scope.personNumbers.sort(compareNumbers);

		$scope.maxPersonNumber = $scope.sortedPersonNumbers[$scope.sortedPersonNumbers.length - 1];
		$scope.minPersonNumber = $scope.sortedPersonNumbers[0];

	};


	$scope.getLifespans($scope.testFamily);

	
	// console.log("sortedlifespans", $scope.sortedLifespanYears);
	// console.log("unsorted numbers", $scope.personNumbers);
	// console.log("sorted numbers", $scope.sortedPersonNumbers);
	// console.log("min persn", $scope.minPersonNumber);
	// console.log("max persn", $scope.maxPersonNumber);
});


