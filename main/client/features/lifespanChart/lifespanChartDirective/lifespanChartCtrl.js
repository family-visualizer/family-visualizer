angular.module('app').controller('lifespanChartCtrl', function ($scope, familyService) {

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


	$scope.combinedFamily = [];


	
	

	var testFamily = [
		{
			"personId": "KWZK-SJV",
			"name": "Rufus B. Humphrey",
			"gender": "Male",
			"lifespan": "1814-1890",
			"birthDate": "5 September 1814",
			"birthPlace": "Flemingsburg, Fleming, Kentucky, United States",
			"deathDate": "5 July 1890",
			"deathPlace": "Rowan, Kentucky, United States",
			"marriagePlace": "Lawrence, Kentucky, United States",
			"marriageDate": "5 March 1834",
			"ascendancyNumber": "322",
			"children": [
				{
					"personId": "KWZK-SNK",
					"name": "Paulina Jane Humphrey",
					"gender": "Female",
					"lifespan": "1854-1918",
					"birthDate": "15 July 1854",
					"birthPlace": "Morehead, Rowan, Kentucky, United States",
					"deathDate": "9 January 1918",
					"deathPlace": "Vinita, Craig, Oklahoma, United States",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZK-SJW",
			"name": "William Smith",
			"gender": "Male",
			"lifespan": "1817-1885",
			"birthDate": "15 June 1817",
			"birthPlace": "Guernsey, Ohio, United States",
			"deathDate": "24 August 1885",
			"deathPlace": "Jefferson Township, Pike, Indiana, United States",
			"marriagePlace": "Hocking, Athens, Ohio, United States",
			"marriageDate": "18 August 1846",
			"ascendancyNumber": "324",
			"children": [
				{
					"personId": "KWZK-SVY",
					"name": "William Smith",
					"gender": "Male",
					"lifespan": "1840-1847",
					"birthDate": "1840",
					"deathDate": "1847",
					"deathPlace": "Ohio, United States",
					"descendancyNumber": "1.1"
				},
				{
					"personId": "KWZK-SVB",
					"name": "Elizabeth K Smith",
					"gender": "Female",
					"lifespan": "1842-Deceased",
					"birthDate": "1842",
					"birthPlace": "Ohio, United States",
					"descendancyNumber": "1.2"
				},
				{
					"personId": "KWZK-SKM",
					"name": "Emma C. Smith",
					"gender": "Female",
					"lifespan": "1842-Deceased",
					"birthDate": "1842",
					"birthPlace": "Ohio, United States",
					"descendancyNumber": "1.3"
				},
				{
					"personId": "KWZK-SK9",
					"name": "Isaac Monroe Smith",
					"gender": "Male",
					"lifespan": "1844-1902",
					"birthDate": "1844",
					"birthPlace": "Vinton, Ohio, United States",
					"deathDate": "1902",
					"deathPlace": "Union Township, Morgan, Ohio, United States",
					"descendancyNumber": "1.4"
				}
			]
		},
		{
			"personId": "KWZK-SJX",
			"name": "John Myers",
			"gender": "Male",
			"lifespan": "1822-1896",
			"birthDate": "30 January 1822",
			"birthPlace": "Fleming, Kentucky, United States",
			"deathDate": "14 July 1896",
			"deathPlace": "Fleming, Kentucky, United States",
			"marriagePlace": "Fleming, Kentucky, United States",
			"marriageDate": "14 December 1848",
			"ascendancyNumber": "320",
			"children": [
				{
					"personId": "KWZK-SNJ",
					"name": "James Wesley Meyers",
					"gender": "Male",
					"lifespan": "1855-1921",
					"birthDate": "1 April 1855",
					"birthPlace": "Heidelberg, Lee, Kentucky, United States",
					"deathDate": "8 October 1921",
					"deathPlace": "Maxwell, Lincoln, Nebraska, United States",
					"marriagePlace": "Fleming, Kentucky",
					"marriageDate": "1873",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZK-SNJ",
			"name": "James Wesley Meyers",
			"gender": "Male",
			"lifespan": "1855-1921",
			"birthDate": "1 April 1855",
			"birthPlace": "Heidelberg, Lee, Kentucky, United States",
			"deathDate": "8 October 1921",
			"deathPlace": "Maxwell, Lincoln, Nebraska, United States",
			"marriagePlace": "Fleming, Kentucky",
			"marriageDate": "1873",
			"ascendancyNumber": "160",
			"children": [
				{
					"personId": "KWZK-SJ6",
					"name": "Hattie Meyers",
					"gender": "Female",
					"lifespan": "1874-1962",
					"birthDate": "13 April 1874",
					"birthPlace": "Rowan, Kentucky, United States",
					"deathDate": "10 August 1962",
					"descendancyNumber": "1.1"
				},
				{
					"personId": "KWZK-SN8",
					"name": "S. J. Tilden Meyers",
					"gender": "Male",
					"lifespan": "1876-1959",
					"birthDate": "17 September 1876",
					"birthPlace": "Kentucky, United States",
					"deathDate": "20 November 1959",
					"marriagePlace": "Maxwell, Lincoln, Nebraska, United States",
					"marriageDate": "1906",
					"descendancyNumber": "1.2"
				},
				{
					"personId": "KWZK-SJZ",
					"name": "Dolphin Percy Meyers",
					"gender": "Male",
					"lifespan": "1878-1974",
					"birthDate": "25 May 1878",
					"birthPlace": "Hillsboro, Fleming, Kentucky, United States",
					"deathDate": "12 April 1974",
					"deathPlace": "Twin Falls, Twin Falls, Idaho, United States",
					"descendancyNumber": "1.3"
				},
				{
					"personId": "KWZK-SJC",
					"name": "Pearl M. Meyers",
					"gender": "Female",
					"lifespan": "1881-1973",
					"birthDate": "26 May 1881",
					"birthPlace": "Stapleton, Logan, Nebraska, United States",
					"deathDate": "January 1973",
					"descendancyNumber": "1.4"
				},
				{
					"personId": "KWZK-SJH",
					"name": "Kate Meyers",
					"gender": "Female",
					"lifespan": "1884-1972",
					"birthDate": "22 January 1884",
					"birthPlace": "Kentucky, United States",
					"deathDate": "20 November 1972",
					"deathPlace": "San Jose, Santa Clara, California, United States",
					"descendancyNumber": "1.5"
				},
				{
					"personId": "KWZK-SJ8",
					"name": "Omar Meyers",
					"gender": "Male",
					"lifespan": "1886-1974",
					"birthDate": "5 September 1886",
					"birthPlace": "Danville, Vermilion, Illinois, United States",
					"deathDate": "14 February 1974",
					"descendancyNumber": "1.6"
				},
				{
					"personId": "KWZK-SJD",
					"name": "Edna Meyers",
					"gender": "Female",
					"lifespan": "1896-1902",
					"birthDate": "5 May 1896",
					"birthPlace": "Illinois, United States",
					"deathDate": "12 January 1902",
					"descendancyNumber": "1.7"
				}
			]
		},
		{
			"personId": "KWZK-SN8",
			"name": "S. J. Tilden Meyers",
			"gender": "Male",
			"lifespan": "1876-1959",
			"birthDate": "17 September 1876",
			"birthPlace": "Kentucky, United States",
			"deathDate": "20 November 1959",
			"marriagePlace": "Maxwell, Lincoln, Nebraska, United States",
			"marriageDate": "1906",
			"ascendancyNumber": "80",
			"children": [
				{
					"personId": "KWZK-SNX",
					"name": "Guy Meyers",
					"gender": "Male",
					"lifespan": "1907-1957",
					"birthDate": "1907",
					"birthPlace": "North Platte, Lincoln, Nebraska, United States",
					"deathDate": "1957",
					"deathPlace": "North Platte, Lincoln, Nebraska, United States",
					"descendancyNumber": "1.1"
				},
				{
					"personId": "KWZK-SNH",
					"name": "Richard George Meyers",
					"gender": "Male",
					"lifespan": "1908-1996",
					"birthDate": "11 September 1908",
					"birthPlace": "Maxwell, Lincoln, Nebraska, United States",
					"deathDate": "14 December 1996",
					"marriagePlace": "North Platte, Lincoln, Nebraska, United States",
					"marriageDate": "15 November 1930",
					"descendancyNumber": "1.2"
				}
			]
		},
		{
			"personId": "KWZK-SNN",
			"name": "George Hampson Smith",
			"gender": "Male",
			"lifespan": "1847-1933",
			"birthDate": "28 May 1847",
			"birthPlace": "Ohio, United States",
			"deathDate": "26 February 1933",
			"deathPlace": "Ericson, Wheeler, Nebraska, United States",
			"marriagePlace": "Otwell, Pike, Indiana, United States",
			"marriageDate": "4 May 1870 / 1871",
			"ascendancyNumber": "162",
			"children": [
				{
					"personId": "KWZK-SJ9",
					"name": "William Velzie Smith",
					"gender": "Male",
					"lifespan": "1872-1933",
					"birthDate": "31 May 1872",
					"birthPlace": "Otwell, Pike, Indiana, United States",
					"deathDate": "30 October 1933",
					"marriageDate": "13 June 1893",
					"descendancyNumber": "1.1"
				},
				{
					"personId": "KWZK-SJM",
					"name": "Eva Smith",
					"gender": "Female",
					"lifespan": "1873-1876",
					"birthDate": "21 November 1873",
					"birthPlace": "Otwell, Pike, Indiana, United States",
					"deathDate": "17 January 1876",
					"descendancyNumber": "1.2"
				},
				{
					"personId": "KWZK-SN1",
					"name": "Anna Marilla Smith",
					"gender": "Female",
					"lifespan": "1877-1934",
					"birthDate": "24 March 1877",
					"birthPlace": "Otwell, Pike, Indiana, United States",
					"deathDate": "30 May 1934",
					"marriageDate": "12 August 1895",
					"descendancyNumber": "1.3"
				},
				{
					"personId": "KWZK-SJ7",
					"name": "Attie C. Smith",
					"gender": "Female",
					"lifespan": "1879-1918",
					"birthDate": "31 January 1879",
					"birthPlace": "Otwell, Pike, Indiana, United States",
					"deathDate": "8 December 1918",
					"marriageDate": "31 January 1900",
					"descendancyNumber": "1.4"
				},
				{
					"personId": "KWZK-SJS",
					"name": "Lester George Smith",
					"gender": "Male",
					"lifespan": "1880-1841",
					"birthDate": "20 December 1880",
					"birthPlace": "Otwell, Pike, Indiana, United States",
					"deathDate": "27 June 1841",
					"deathPlace": "North Platte, Lincoln, Nebraska, United States",
					"marriageDate": "4 May 1904",
					"descendancyNumber": "1.5"
				},
				{
					"personId": "KWZK-SNZ",
					"name": "Mertie (Merty) Smith",
					"gender": "Female",
					"lifespan": "1882-1949",
					"birthDate": "2 September 1882",
					"birthPlace": "Otwell, Pike, Indiana, United States",
					"deathDate": "28 February 1949",
					"deathPlace": "North Platte, Lincoln, Nebraska, United States",
					"marriagePlace": "Maxwell, Lincoln, Nebraska, United States",
					"marriageDate": "1906",
					"descendancyNumber": "1.6"
				},
				{
					"personId": "KWZK-SJ3",
					"name": "Gertie (Gerty) Smith",
					"gender": "Female",
					"lifespan": "1882-1958",
					"birthDate": "2 September 1882",
					"birthPlace": "Otwell, Pike, Indiana, United States",
					"deathDate": "19 January 1958",
					"marriageDate": "4 May 1904",
					"descendancyNumber": "1.7"
				},
				{
					"personId": "KWZK-SJ4",
					"name": "Everett Clinton Smith",
					"gender": "Male",
					"lifespan": "1884-1974",
					"birthDate": "17 May 1884",
					"birthPlace": "Otwell, Pike, Indiana, United States",
					"deathDate": "4 May 1974",
					"deathPlace": "North Platte, Lincoln, Nebraska, United States",
					"descendancyNumber": "1.8"
				},
				{
					"personId": "KWZK-SJQ",
					"name": "Mary May Smith",
					"gender": "Female",
					"lifespan": "1892-1964",
					"birthDate": "3 December 1892",
					"birthPlace": "Garfield Township, Frontier, Nebraska, United States",
					"deathDate": "31 October 1964",
					"marriageDate": "24 May 1912",
					"descendancyNumber": "1.9"
				},
				{
					"personId": "KWZK-SNY",
					"name": "Herbert Leroy Smith",
					"gender": "Male",
					"lifespan": "1894-1958",
					"birthDate": "21 December 1894",
					"birthPlace": "Garfield Township, Frontier, Nebraska, United States",
					"deathDate": "6 April 1958",
					"marriageDate": "20 July 1915",
					"descendancyNumber": "1.10"
				}
			]
		},
		{
			"personId": "KWZK-SNW",
			"name": "Dale Richard Meyers",
			"gender": "Male",
			"lifespan": "1931-2013",
			"birthDate": "9 September 1931",
			"birthPlace": "North Platte, Lincoln, Nebraska, United States",
			"deathDate": "27 January 2013",
			"deathPlace": "Portland, Multnomah, Oregon, United States",
			"ascendancyNumber": "20",
			"children": [
				{
					"personId": "KWZV-R95",
					"name": "Steven Meyers",
					"gender": "Male",
					"lifespan": "1961-Living",
					"birthDate": "11 August 1961",
					"birthPlace": "Eugene, Lane, Oregon, United States",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZK-SNT",
			"name": "Charles William Phelps",
			"gender": "Male",
			"lifespan": "1853-1934",
			"birthDate": "22 August 1853",
			"birthPlace": "Barton, Washington, Wisconsin, United States",
			"deathDate": "5 September 1934",
			"marriagePlace": "Schuyler, Missouri, United States",
			"marriageDate": "25 February 1874",
			"ascendancyNumber": "166",
			"children": [
				{
					"personId": "KWZK-SV9",
					"name": "Frank Phelps",
					"gender": "Male",
					"lifespan": "1876-1949",
					"birthDate": "22 September 1876",
					"birthPlace": "Davis, Iowa, United States",
					"deathDate": "26 December 1949",
					"descendancyNumber": "1.1"
				},
				{
					"personId": "KWZK-SN6",
					"name": "Ada Lee Phelps",
					"gender": "Female",
					"lifespan": "1888-1983",
					"birthDate": "22 February 1888",
					"birthPlace": "Kansas, United States",
					"deathDate": "November 1983",
					"descendancyNumber": "1.2"
				},
				{
					"personId": "KWZK-SJB",
					"name": "Mary S Phelps",
					"gender": "Female",
					"lifespan": "1891-Deceased",
					"birthDate": "26 March 1891",
					"birthPlace": "Davis, Iowa, United States",
					"descendancyNumber": "1.3"
				}
			]
		},
		{
			"personId": "KWZK-398",
			"name": "William Garland",
			"gender": "Male",
			"lifespan": "1818-1872",
			"birthDate": "2 February 1818",
			"birthPlace": "Barbourville, Knox, Kentucky, United States",
			"deathDate": "26 June 1872",
			"deathPlace": "Pike, Indiana, United States",
			"marriagePlace": "Knox, Kentucky, United States",
			"marriageDate": "23 December 1849",
			"ascendancyNumber": "326",
			"children": [
				{
					"personId": "KWZK-39G",
					"name": "Mary Jane Garland",
					"gender": "Female",
					"lifespan": "1851-1920",
					"birthDate": "5 April 1851",
					"birthPlace": "Knox, Kentucky, United States",
					"deathDate": "17 June 1920",
					"deathPlace": "Clackamas, Oregon, United States",
					"descendancyNumber": "1.1"
				},
				{
					"personId": "KWZK-SNV",
					"name": "Rebecca Garland",
					"gender": "Female",
					"lifespan": "1852-1915",
					"birthDate": "18 November 1852",
					"birthPlace": "Barbourville, Knox, Kentucky, United States",
					"deathDate": "30 April 1915",
					"deathPlace": "North Platte, Lincoln, Nebraska, United States",
					"marriagePlace": "Otwell, Pike, Indiana, United States",
					"marriageDate": "4 May 1870 / 1871",
					"descendancyNumber": "1.2"
				},
				{
					"personId": "KWZK-39D",
					"name": "Rebecca Garland",
					"gender": "Female",
					"lifespan": "1852-1915",
					"birthDate": "18 November 1852",
					"birthPlace": "Barbourville, Knox, Kentucky, United States",
					"deathDate": "30 April 1915",
					"deathPlace": "North Platte, Lincoln, Nebraska, United States",
					"marriagePlace": "Otwell, Pike, Indiana, United States",
					"marriageDate": "4 May 1870 / 1871",
					"descendancyNumber": "1.3"
				},
				{
					"personId": "KWZK-39L",
					"name": "Joseph Henry Garland",
					"gender": "Male",
					"lifespan": "1854-1934",
					"birthDate": "6 July 1854",
					"birthPlace": "Knox, Kentucky, United States",
					"deathDate": "25 December 1934",
					"deathPlace": "Caldwell, Canyon, Idaho, United States",
					"descendancyNumber": "1.4"
				},
				{
					"personId": "KWZK-39F",
					"name": "Franklin Garland",
					"gender": "Male",
					"lifespan": "1856-Deceased",
					"birthDate": "19 March 1856",
					"birthPlace": "Knox, Kentucky, United States",
					"descendancyNumber": "1.5"
				},
				{
					"personId": "KWZK-391",
					"name": "Sarah Elizabeth Garland",
					"gender": "Female",
					"lifespan": "1857-Deceased",
					"birthDate": "17 November 1857",
					"birthPlace": "Knox, Kentucky, United States",
					"descendancyNumber": "1.6"
				},
				{
					"personId": "KWZK-39J",
					"name": "Nancy Ellen Garland",
					"gender": "Female",
					"lifespan": "1861-Deceased",
					"birthDate": "20 July 1861",
					"birthPlace": "Knox, Kentucky, United States",
					"descendancyNumber": "1.7"
				},
				{
					"personId": "KWZK-395",
					"name": "Melinda Garland",
					"gender": "Female",
					"lifespan": "1863-Deceased",
					"birthDate": "25 September 1863",
					"birthPlace": "Pike, Indiana, United States",
					"descendancyNumber": "1.8"
				},
				{
					"personId": "KWZK-39X",
					"name": "William Garland",
					"gender": "Male",
					"lifespan": "1865-Deceased",
					"birthDate": "17 March 1865",
					"birthPlace": "Pike, Indiana, United States",
					"descendancyNumber": "1.9"
				},
				{
					"personId": "KWZK-3S3",
					"name": "Caroline Garland",
					"gender": "Female",
					"lifespan": "1867-1945",
					"birthDate": "1867",
					"birthPlace": "Indiana, United States",
					"deathDate": "19 September 1945",
					"descendancyNumber": "1.10"
				},
				{
					"personId": "KWZK-392",
					"name": "infant Garland",
					"gender": "unknown",
					"lifespan": "1871-Deceased",
					"birthDate": "4 September 1871",
					"descendancyNumber": "1.11"
				}
			]
		},
		{
			"personId": "KWZK-3VX",
			"name": "George Benton Senior",
			"gender": "Male",
			"lifespan": "1852-1897",
			"birthDate": "1852",
			"birthPlace": "Ohio, United States",
			"deathDate": "25 September 1897",
			"deathPlace": "Rooks, Kansas, United States",
			"ascendancyNumber": "164",
			"children": [
				{
					"personId": "KWZK-SJP",
					"name": "Arthur Henry Senior",
					"gender": "Male",
					"lifespan": "1880-1950",
					"birthDate": "13 September 1880",
					"birthPlace": "Rooks, Kansas, United States",
					"deathDate": "16 May 1950",
					"descendancyNumber": "1.1"
				},
				{
					"personId": "KWZK-SJL",
					"name": "E. Maude Senior",
					"gender": "Female",
					"lifespan": "1884-Deceased",
					"birthDate": "1884",
					"birthPlace": "Kansas, United States",
					"descendancyNumber": "1.2"
				},
				{
					"personId": "KWZK-SND",
					"name": "Corwin Percy Senior",
					"gender": "Male",
					"lifespan": "1889-1960",
					"birthDate": "22 February 1889",
					"birthPlace": "Stockton, Rooks, Kansas, United States",
					"deathDate": "22 April 1960",
					"deathPlace": "Banks, Washington, Oregon, United States",
					"descendancyNumber": "1.3"
				}
			]
		},
		{
			"personId": "KWZK-SNH",
			"name": "Richard George Meyers",
			"gender": "Male",
			"lifespan": "1908-1996",
			"birthDate": "11 September 1908",
			"birthPlace": "Maxwell, Lincoln, Nebraska, United States",
			"deathDate": "14 December 1996",
			"marriagePlace": "North Platte, Lincoln, Nebraska, United States",
			"marriageDate": "15 November 1930",
			"ascendancyNumber": "40",
			"children": [
				{
					"personId": "KWZK-SNW",
					"name": "Dale Richard Meyers",
					"gender": "Male",
					"lifespan": "1931-2013",
					"birthDate": "9 September 1931",
					"birthPlace": "North Platte, Lincoln, Nebraska, United States",
					"deathDate": "27 January 2013",
					"deathPlace": "Portland, Multnomah, Oregon, United States",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-R95",
			"name": "Steven Meyers",
			"gender": "Male",
			"lifespan": "1961-Living",
			"birthDate": "11 August 1961",
			"birthPlace": "Eugene, Lane, Oregon, United States",
			"ascendancyNumber": "10",
			"children": [
				{
					"personId": "KWZV-RMV",
					"name": "Erin Meyers",
					"gender": "Female",
					"lifespan": "1988-Living",
					"birthDate": "15 June 1988",
					"birthPlace": "Provo, Utah, Utah, United States",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZK-SND",
			"name": "Corwin Percy Senior",
			"gender": "Male",
			"lifespan": "1889-1960",
			"birthDate": "22 February 1889",
			"birthPlace": "Stockton, Rooks, Kansas, United States",
			"deathDate": "22 April 1960",
			"deathPlace": "Banks, Washington, Oregon, United States",
			"ascendancyNumber": "82",
			"children": [
				{
					"personId": "KWZK-SNC",
					"name": "Lottie Leone Senior",
					"gender": "Female",
					"lifespan": "1911-2001",
					"birthDate": "3 May 1911",
					"deathDate": "30 May 2001",
					"deathPlace": "Oregon Township, Washington, Iowa, United States",
					"marriagePlace": "North Platte, Lincoln, Nebraska, United States",
					"marriageDate": "15 November 1930",
					"descendancyNumber": "1.1"
				},
				{
					"personId": "KWZK-SN2",
					"name": "George B Senior",
					"gender": "Male",
					"lifespan": "1914-1984",
					"birthDate": "24 January 1914",
					"birthPlace": "Kansas, United States",
					"deathDate": "2 March 1984",
					"deathPlace": "Grandview, Yakima, Washington, United States",
					"marriagePlace": "Skamania, Skamania, Washington, United States",
					"marriageDate": "14 October 1959",
					"descendancyNumber": "1.2"
				}
			]
		},
		{
			"personId": "KWZK-9W8",
			"name": "Homer Call",
			"gender": "Male",
			"lifespan": "1834-1908",
			"birthDate": "9 January 1834",
			"birthPlace": "Madison Township, Williams, Ohio, United States",
			"deathDate": "12 July 1908",
			"deathPlace": "Willard, Box Elder, Utah, United States",
			"ascendancyNumber": "176",
			"children": [
				{
					"personId": "KWZK-97Y",
					"name": "Josiah Call",
					"gender": "Male",
					"lifespan": "1862-1943",
					"birthDate": "18 April 1862",
					"birthPlace": "Willard, Box Elder, Utah Territory, United States",
					"deathDate": "1 October 1943",
					"deathPlace": "Rigby, Jefferson, Idaho, United States",
					"marriagePlace": "Salt Lake City, Salt Lake, Utah, United States",
					"marriageDate": "24 April 1918",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZK-9WH",
			"name": "George Henry Facer",
			"gender": "Male",
			"lifespan": "1834-1903",
			"birthDate": "4 July 1834",
			"birthPlace": "Eynesbury, Huntingdonshire, England",
			"deathDate": "22 February 1903",
			"deathPlace": "Willard, Box Elder, Utah, United States",
			"marriagePlace": "Eynesbury, Huntingdonshire, England",
			"marriageDate": "6 September 1857",
			"ascendancyNumber": "178",
			"children": [

			]
		},
		{
			"personId": "KWZK-9HT",
			"name": "Henry Facer",
			"gender": "Male",
			"lifespan": "1811-1836",
			"birthDate": "15 June 1811",
			"birthPlace": "Colmworth, Bedford, England",
			"deathDate": "19 September 1836",
			"deathPlace": "Comberton, Cambridgeshire, England",
			"marriagePlace": "Comberton, Cambridgeshire, England",
			"marriageDate": "12 October 1831",
			"ascendancyNumber": "356",
			"children": [
				{
					"personId": "KWZK-9WH",
					"name": "George Henry Facer",
					"gender": "Male",
					"lifespan": "1834-1903",
					"birthDate": "4 July 1834",
					"birthPlace": "Eynesbury, Huntingdonshire, England",
					"deathDate": "22 February 1903",
					"deathPlace": "Willard, Box Elder, Utah, United States",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZK-97Y",
			"name": "Josiah Call",
			"gender": "Male",
			"lifespan": "1862-1943",
			"birthDate": "18 April 1862",
			"birthPlace": "Willard, Box Elder, Utah Territory, United States",
			"deathDate": "1 October 1943",
			"deathPlace": "Rigby, Jefferson, Idaho, United States",
			"ascendancyNumber": "88",
			"children": [

			]
		},
		{
			"personId": "KWZK-9W5",
			"name": "James Prior",
			"gender": "Male",
			"lifespan": "1816-1904",
			"birthDate": "11 December 1816",
			"birthPlace": "St.Neots, Hunts., Eng.",
			"deathDate": "26 June 1904",
			"marriagePlace": "Eynesbury, Huntingdonshire, England",
			"marriageDate": "3 September 1838",
			"ascendancyNumber": "358",
			"children": [
				{
					"personId": "KWZK-97B",
					"name": "Mary Prior",
					"gender": "Female",
					"lifespan": "1840-1930",
					"birthDate": "27 January 1840",
					"birthPlace": "Graveley, Cambridgeshire, England",
					"deathDate": "12 December 1930",
					"marriagePlace": "Eynesbury, Huntingdonshire, England",
					"marriageDate": "6 September 1857",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZK-97P",
			"name": "Allan Willard Call",
			"gender": "Male",
			"lifespan": "1904-1996",
			"birthDate": "29 April 1904",
			"birthPlace": "Rigby, Jefferson, Idaho, United States",
			"deathDate": "18 November 1996",
			"deathPlace": "Rigby, Jefferson, Idaho, United States",
			"ascendancyNumber": "44",
			"children": [
				{
					"personId": "KWZK-97T",
					"name": "Betty Lou Call",
					"gender": "Female",
					"lifespan": "1928-1996",
					"birthDate": "1 October 1928",
					"birthPlace": "Rigby, Jefferson, Idaho, United States",
					"deathDate": "19 November 1996",
					"deathPlace": "Salt Lake City, Salt Lake, Utah, United States",
					"marriagePlace": "Rigby, Jefferson, Idaho, United States",
					"marriageDate": "1 May 1947",
					"descendancyNumber": "1.1"
				},
				{
					"personId": "KWZV-T3N",
					"name": "Willard Rex Call",
					"gender": "Male",
					"lifespan": "Living",
					"descendancyNumber": "1.2"
				}
			]
		},
		{
			"personId": "KWZV-T3N",
			"name": "Willard Rex Call",
			"gender": "Male",
			"lifespan": "Living",
			"ascendancyNumber": "22",
			"children": [
				{
					"personId": "KWZV-R39",
					"name": "Susan Call",
					"gender": "Female",
					"lifespan": "1964-Living",
					"birthDate": "7 June 1964",
					"birthPlace": "Salt Lake City, Salt Lake, Utah, United States",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZK-9JC",
			"name": "William Bleasdale",
			"gender": "Male",
			"lifespan": "1796-1885",
			"birthDate": "4 December 1796",
			"birthPlace": "Thornley, Lancashire, England",
			"deathDate": "August 1885",
			"deathPlace": "Centerville, Davis, Utah, United States",
			"marriagePlace": "Goosnargh, Lancashire, England",
			"marriageDate": "27 September 1820",
			"ascendancyNumber": "362",
			"children": [
				{
					"personId": "KWZK-9XT",
					"name": "Jennette Bleasdale",
					"gender": "Female",
					"lifespan": "1826-1921",
					"birthDate": "10 February 1826",
					"birthPlace": "Thornley, Lancashire, England",
					"deathDate": "20 May 1921",
					"deathPlace": "Menan, Jefferson, Idaho, United States",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZK-SMV",
			"name": "John Rawlston Poole",
			"gender": "Male",
			"lifespan": "1829-1894",
			"birthDate": "13 May 1829",
			"birthPlace": "Leesville, Lawrence, Indiana, United States",
			"deathDate": "16 September 1894",
			"deathPlace": "Idaho Falls, Bonneville, Idaho, United States",
			"ascendancyNumber": "180",
			"children": [
				{
					"personId": "KWZK-9J9",
					"name": "Mary Elizabeth Poole",
					"gender": "Female",
					"lifespan": "1849-1850",
					"birthDate": "September 1849",
					"birthPlace": "Farmington, Van Buren, Iowa, United States",
					"deathDate": "9 June 1850",
					"deathPlace": "United States",
					"descendancyNumber": "1.1"
				},
				{
					"personId": "KWZK-9NN",
					"name": "Joseph Ewalt Poole",
					"gender": "Male",
					"lifespan": "1851-1851",
					"birthDate": "24 February 1851",
					"birthPlace": "Centerville, Davis, Utah, United States",
					"deathDate": "24 February 1851",
					"deathPlace": "Centerville, Davis, Utah, United States",
					"descendancyNumber": "1.2"
				},
				{
					"personId": "KWZK-9NW",
					"name": "John Bleasdale Poole",
					"gender": "Male",
					"lifespan": "1854-1854",
					"birthDate": "1854",
					"birthPlace": "Centerville, Davis, Utah, United States",
					"deathDate": "24 October 1854",
					"deathPlace": "Centerville, Davis, Utah, United States",
					"descendancyNumber": "1.3"
				},
				{
					"personId": "KWZK-9N5",
					"name": "Rebecca Margaret Poole",
					"gender": "Female",
					"lifespan": "1855-1935",
					"birthDate": "29 August 1855",
					"birthPlace": "Ogden, Weber, Utah Territory, United States",
					"deathDate": "11 January 1935",
					"deathPlace": "Rexburg, Madison, Idaho, United States",
					"descendancyNumber": "1.4"
				},
				{
					"personId": "KWZK-9FY",
					"name": "Hiram Poole",
					"gender": "Male",
					"lifespan": "1856-Deceased",
					"birthDate": "1856",
					"birthPlace": "Utah Territory, United States",
					"descendancyNumber": "1.5"
				},
				{
					"personId": "KWZK-9XX",
					"name": "William Micajah Poole",
					"gender": "Male",
					"lifespan": "1858-1955",
					"birthDate": "17 January 1858",
					"birthPlace": "Ogden, Weber, Utah, United States",
					"deathDate": "10 January 1955",
					"deathPlace": "Blackfoot, Bingham, Idaho, United States",
					"descendancyNumber": "1.6"
				},
				{
					"personId": "KWZK-9NJ",
					"name": "Jeanette Alice Poole",
					"gender": "Female",
					"lifespan": "1860-1953",
					"birthDate": "23 May 1860",
					"birthPlace": "Ogden, Weber, Utah, United States",
					"deathDate": "7 August 1953",
					"deathPlace": "Denver, Denver, Colorado, United States",
					"descendancyNumber": "1.7"
				},
				{
					"personId": "KWZK-9N3",
					"name": "Susanna Rosetta Poole",
					"gender": "Female",
					"lifespan": "1862-1949",
					"birthDate": "4 July 1862",
					"birthPlace": "Ogden, Weber, Utah, United States",
					"deathDate": "19 February 1949",
					"deathPlace": "Menan, Jefferson, Idaho, United States",
					"descendancyNumber": "1.8"
				},
				{
					"personId": "KWZK-9N8",
					"name": "Reuben Mack Poole",
					"gender": "Male",
					"lifespan": "1864-1940",
					"birthDate": "25 November 1864",
					"birthPlace": "Ogden, Weber, Utah Territory, United States",
					"deathDate": "5 May 1940",
					"deathPlace": "Menan, Jefferson, Idaho, United States",
					"descendancyNumber": "1.9"
				},
				{
					"personId": "KWZK-9N7",
					"name": "Walter J. Poole",
					"gender": "Male",
					"lifespan": "1866-Deceased",
					"birthDate": "1866",
					"birthPlace": "Utah Territory, United States",
					"descendancyNumber": "1.10"
				},
				{
					"personId": "KWZK-9NF",
					"name": "Emily Poole",
					"gender": "Female",
					"lifespan": "1867-Deceased",
					"birthDate": "1867",
					"birthPlace": "Utah Territory, United States",
					"descendancyNumber": "1.11"
				},
				{
					"personId": "KWZK-9NK",
					"name": "Christena Jane Poole",
					"gender": "Female",
					"lifespan": "1868-1956",
					"birthDate": "16 January 1868",
					"birthPlace": "Ogden, Weber, Utah, United States",
					"deathDate": "13 August 1956",
					"deathPlace": "Rigby, Jefferson, Idaho, United States",
					"descendancyNumber": "1.12"
				},
				{
					"personId": "KWZK-9NG",
					"name": "Milburn Benton Poole",
					"gender": "Male",
					"lifespan": "1871-1960",
					"birthDate": "24 February 1871",
					"birthPlace": "Ogden, Weber, Utah, United States",
					"deathDate": "12 January 1960",
					"deathPlace": "Rigby, Jefferson, Idaho, United States",
					"descendancyNumber": "1.13"
				},
				{
					"personId": "KWZK-9NR",
					"name": "Ewatt Poole",
					"gender": "Male",
					"lifespan": "1874-Deceased",
					"birthDate": "1874",
					"birthPlace": "Utah Territory, United States",
					"descendancyNumber": "1.14"
				}
			]
		},
		{
			"personId": "KWZK-9XX",
			"name": "William Micajah Poole",
			"gender": "Male",
			"lifespan": "1858-1955",
			"birthDate": "17 January 1858",
			"birthPlace": "Ogden, Weber, Utah, United States",
			"deathDate": "10 January 1955",
			"deathPlace": "Blackfoot, Bingham, Idaho, United States",
			"ascendancyNumber": "90",
			"children": [
				{
					"personId": "KWZK-97R",
					"name": "Lillias Poole",
					"gender": "Female",
					"lifespan": "1903-1995",
					"birthDate": "2 April 1903",
					"birthPlace": "Annis, Jefferson, Idaho, United States",
					"deathDate": "6 December 1995",
					"deathPlace": "Idaho Falls, Bonneville, Idaho, United States",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZ6-15X",
			"name": "Lorraine Ivanov",
			"gender": "Female",
			"lifespan": "1985-Living",
			"birthDate": "2 February 1985",
			"ascendancyNumber": "2",
			"children": [

			]
		},
		{
			"personId": "KWZV-TTK",
			"name": "Howard Elmo Madsen",
			"gender": "Male",
			"lifespan": "1893-1983",
			"birthDate": "16 November 1893",
			"birthPlace": "Rigby, Jefferson, Idaho, United States",
			"deathDate": "16 February 1983",
			"deathPlace": "Scottsdale, Maricopa, Arizona, United States",
			"ascendancyNumber": "46",
			"children": [
				{
					"personId": "KWZV-T77",
					"name": "Ruth Carma Madsen",
					"gender": "Female",
					"lifespan": "Living",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-YXJ",
			"name": "Robert Baker",
			"gender": "Male",
			"lifespan": "1960-Living",
			"birthDate": "1 April 1960",
			"birthPlace": "Maryland, United States",
			"ascendancyNumber": "6",
			"children": [
				{
					"personId": "KWZV-TYP",
					"name": "Zachary Baker",
					"gender": "Male",
					"lifespan": "1992-Living",
					"birthDate": "16 September 1992",
					"birthPlace": "Van Nuys, Los Angeles, California, United States",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZK-SMZ",
			"name": "Micajah Poole",
			"gender": "Male",
			"lifespan": "1800-1873",
			"birthDate": "25 March 1800",
			"birthPlace": "Virginia, United States",
			"deathDate": "21 January 1873",
			"deathPlace": "Farmington, Van Buren, Iowa, United States",
			"marriagePlace": "Leesville, Guthrie Township, Lawrence, Indiana, United States",
			"marriageDate": "1 June 1828",
			"ascendancyNumber": "360",
			"children": [
				{
					"personId": "KWZK-SMV",
					"name": "John Rawlston Poole",
					"gender": "Male",
					"lifespan": "1829-1894",
					"birthDate": "13 May 1829",
					"birthPlace": "Leesville, Lawrence, Indiana, United States",
					"deathDate": "16 September 1894",
					"deathPlace": "Idaho Falls, Bonneville, Idaho, United States",
					"descendancyNumber": "1.1"
				},
				{
					"personId": "KWZK-SMF",
					"name": "Wyatt A. Poole",
					"gender": "Male",
					"lifespan": "1830-1908",
					"birthDate": "14 December 1830",
					"birthPlace": "Leesville, Lawrence, Indiana, United States",
					"deathDate": "7 June 1908",
					"deathPlace": "Clatsop, Oregon, United States",
					"marriagePlace": "Leesville, Lawrence, Indiana, United States",
					"marriageDate": "8 May 1867",
					"descendancyNumber": "1.2"
				},
				{
					"personId": "KWZK-SM8",
					"name": "Milburn Zolman Poole",
					"gender": "Male",
					"lifespan": "1833-1891",
					"birthDate": "29 April 1833",
					"birthPlace": "Leesville, Lawrence, Indiana, United States",
					"deathDate": "11 February 1891",
					"deathPlace": "West Liberty, Muscatine, Iowa, United States",
					"marriagePlace": "Ohio, United States",
					"marriageDate": "February 1868",
					"descendancyNumber": "1.3"
				},
				{
					"personId": "KWZK-SM6",
					"name": "William Sylvester Poole",
					"gender": "Male",
					"lifespan": "1835-1911",
					"birthDate": "30 March 1835",
					"birthPlace": "Leesville, Lawrence, Indiana, United States",
					"deathDate": "23 September 1911",
					"deathPlace": "Muscatine, Iowa, United States",
					"marriagePlace": "Muscatine, Iowa, United States",
					"marriageDate": "29 November 1855",
					"descendancyNumber": "1.4"
				},
				{
					"personId": "KWZK-SM2",
					"name": "Martin McDaniel Poole",
					"gender": "Male",
					"lifespan": "1838-1918",
					"birthDate": "4 February 1838",
					"birthPlace": "Farmington, Van Buren, Iowa, United States",
					"deathDate": "30 May 1918",
					"deathPlace": "Clarkston, Asotin, Washington, United States",
					"descendancyNumber": "1.5"
				},
				{
					"personId": "KWZK-SMX",
					"name": "Joseph Parshall Poole",
					"gender": "Male",
					"lifespan": "1840-1929",
					"birthDate": "16 October 1840",
					"birthPlace": "Farmington, Van Buren, Iowa, United States",
					"deathDate": "10 February 1929",
					"deathPlace": "Lee Township, Franklin, Iowa, United States",
					"marriagePlace": "Primrose, Lee, Iowa, United States",
					"marriageDate": "21 February 1867",
					"descendancyNumber": "1.6"
				},
				{
					"personId": "KWZK-SMN",
					"name": "Susanna Mary Poole",
					"gender": "Female",
					"lifespan": "1842-1842",
					"birthDate": "29 January 1842",
					"birthPlace": "Farmington, Van Buren, Iowa, United States",
					"deathDate": "13 October 1842",
					"deathPlace": "Farmington, Van Buren, Iowa, United States",
					"descendancyNumber": "1.7"
				},
				{
					"personId": "KWZK-SMJ",
					"name": "Ewalt Poole",
					"gender": "Male",
					"lifespan": "1844-1863",
					"birthDate": "13 June 1844",
					"birthPlace": "Farmington, Van Buren, Iowa, United States",
					"deathDate": "5 September 1863",
					"deathPlace": "West Liberty, Muscatine, Iowa, United States",
					"descendancyNumber": "1.8"
				},
				{
					"personId": "KWZK-SMD",
					"name": "Adaline Poole",
					"gender": "Female",
					"lifespan": "1847-1936",
					"birthDate": "4 January 1847",
					"birthPlace": "Farmington, Van Buren, Iowa, United States",
					"deathDate": "21 July 1936",
					"deathPlace": "Cleo Springs, Major, Oklahoma, United States",
					"marriageDate": "13 October 1864",
					"descendancyNumber": "1.9"
				},
				{
					"personId": "KWZK-SMK",
					"name": "Benton Poole",
					"gender": "Male",
					"lifespan": "1849-1930",
					"birthDate": "28 September 1849",
					"birthPlace": "Harrison Township, Lee, Iowa, United States",
					"deathDate": "7 April 1930",
					"deathPlace": "Farmington, Van Buren, Iowa, United States",
					"marriagePlace": "Iowa, United States",
					"marriageDate": "28 April 1881",
					"descendancyNumber": "1.10"
				}
			]
		},
		{
			"personId": "KWZV-TDS",
			"name": "Johannes Beutler",
			"gender": "Male",
			"lifespan": "1802-1875",
			"birthDate": "10 October 1802",
			"birthPlace": "Trubschachen, Bern, Switzerland",
			"deathDate": "18 March 1875",
			"deathPlace": "Trubchachen, Bern, Switzerland",
			"marriagePlace": "Röthenbach im Emmental, Bern, Switzerland",
			"marriageDate": "6 May 1823",
			"ascendancyNumber": "224",
			"children": [
				{
					"personId": "KWZV-T8L",
					"name": "Peter Beutler",
					"gender": "Male",
					"lifespan": "1830-1893",
					"birthDate": "24 May 1830",
					"birthPlace": "Lauperswil, Bern, Switzerland",
					"deathDate": "30 November 1893",
					"deathPlace": "Paris, Bear Lake, Idaho, United States",
					"marriagePlace": "Trub, Bern, Switzerland",
					"marriageDate": "18 March 1859",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-TD5",
			"name": "Niklaus Beutler",
			"gender": "Male",
			"lifespan": "1771-Deceased",
			"birthDate": "4 August 1771",
			"birthPlace": "Trubschachen, Bern, Switzerland",
			"deathPlace": "Switzerland",
			"marriagePlace": "Trubschachen, Bern, Switzerland",
			"marriageDate": "1796",
			"ascendancyNumber": "448",
			"children": [
				{
					"personId": "KWZV-TDS",
					"name": "Johannes Beutler",
					"gender": "Male",
					"lifespan": "1802-1875",
					"birthDate": "10 October 1802",
					"birthPlace": "Trubschachen, Bern, Switzerland",
					"deathDate": "18 March 1875",
					"deathPlace": "Trubchachen, Bern, Switzerland",
					"marriagePlace": "Röthenbach im Emmental, Bern, Switzerland",
					"marriageDate": "6 May 1823",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-T8L",
			"name": "Peter Beutler",
			"gender": "Male",
			"lifespan": "1830-1893",
			"birthDate": "24 May 1830",
			"birthPlace": "Lauperswil, Bern, Switzerland",
			"deathDate": "30 November 1893",
			"deathPlace": "Paris, Bear Lake, Idaho, United States",
			"marriagePlace": "Trub, Bern, Switzerland",
			"marriageDate": "18 March 1859",
			"ascendancyNumber": "112",
			"children": [
				{
					"personId": "KWZV-T8J",
					"name": "Gottfried Beutler",
					"gender": "Male",
					"lifespan": "1860-1923",
					"birthDate": "23 January 1860",
					"birthPlace": "Rüderswil, Bern, Switzerland",
					"deathDate": "9 December 1923",
					"deathPlace": "Logan, Cache, Utah, United States",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-T8P",
			"name": "Johannes Aeschlimann",
			"gender": "Male",
			"lifespan": "1814-1886",
			"birthDate": "31 July 1814",
			"birthPlace": "Biglen, Bern, Switzerland",
			"deathDate": "3 March 1886",
			"deathPlace": "Switzerland",
			"marriagePlace": "Rüegsau, Bern, Switzerland",
			"marriageDate": "13 January 1837",
			"ascendancyNumber": "226",
			"children": [
				{
					"personId": "KWZV-T8X",
					"name": "Maria Aeschlimann",
					"gender": "Female",
					"lifespan": "1837-1898",
					"birthDate": "12 May 1837",
					"birthPlace": "Rüegsau, Bern, Switzerland",
					"deathDate": "7 February 1898",
					"deathPlace": "Logan, Cache, Utah, United States",
					"marriagePlace": "Trub, Bern, Switzerland",
					"marriageDate": "18 March 1859",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-T8J",
			"name": "Gottfried Beutler",
			"gender": "Male",
			"lifespan": "1860-1923",
			"birthDate": "23 January 1860",
			"birthPlace": "Rüderswil, Bern, Switzerland",
			"deathDate": "9 December 1923",
			"deathPlace": "Logan, Cache, Utah, United States",
			"ascendancyNumber": "56",
			"children": [
				{
					"personId": "KWZV-T8F",
					"name": "Alfred Beutler",
					"gender": "Male",
					"lifespan": "1887-1971",
					"birthDate": "24 April 1887",
					"birthPlace": "Allmendingen, Thun, Bern, Switzerland",
					"deathDate": "18 February 1971",
					"deathPlace": "North Logan, Cache, Utah, USA",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-TDV",
			"name": "Johannes Aeschlimann",
			"gender": "Male",
			"lifespan": "1789-1848",
			"birthDate": "8 February 1789",
			"birthPlace": "of Ruegsau, Bern, Switzerland",
			"deathDate": "29 January 1848",
			"marriagePlace": "Rüegsau, Bern, Switzerland",
			"marriageDate": "20 August 1813",
			"ascendancyNumber": "452",
			"children": [
				{
					"personId": "KWZV-T8P",
					"name": "Johannes Aeschlimann",
					"gender": "Male",
					"lifespan": "1814-1886",
					"birthDate": "31 July 1814",
					"birthPlace": "Biglen, Bern, Switzerland",
					"deathDate": "3 March 1886",
					"deathPlace": "Switzerland",
					"marriagePlace": "Rüegsau, Bern, Switzerland",
					"marriageDate": "13 January 1837",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-TDK",
			"name": "Hans Zuercher",
			"gender": "Male",
			"lifespan": "1776-1830",
			"birthDate": "18 March 1776",
			"birthPlace": "Trubschachen, Bern, Switzerland",
			"deathDate": "25 January 1830",
			"deathPlace": ",, Switzerland",
			"marriagePlace": "Trubschachen, Bern, Switzerland",
			"marriageDate": "about 1808",
			"ascendancyNumber": "454",
			"children": [
				{
					"personId": "KWZV-T8G",
					"name": "Magdalena Zuercher",
					"gender": "Female",
					"lifespan": "1809-1854",
					"birthDate": "3 November 1809",
					"birthPlace": "Trubschachen, Bern, Switzerland",
					"deathDate": "7 December 1854",
					"deathPlace": "Rüegsau, Bern, Switzerland",
					"marriagePlace": "Rüegsau, Bern, Switzerland",
					"marriageDate": "13 January 1837",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-T8F",
			"name": "Alfred Beutler",
			"gender": "Male",
			"lifespan": "1887-1971",
			"birthDate": "24 April 1887",
			"birthPlace": "Allmendingen, Thun, Bern, Switzerland",
			"deathDate": "18 February 1971",
			"deathPlace": "North Logan, Cache, Utah, USA",
			"ascendancyNumber": "28",
			"children": [
				{
					"personId": "KWZV-T88",
					"name": "Alvin Schwartz Beutler",
					"gender": "Male",
					"lifespan": "1916-2011",
					"birthDate": "18 July 1916",
					"birthPlace": "North Logan, Cache, Utah, United States",
					"deathDate": "20 July 2011",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-T69",
			"name": "Niklaus Mäüsli",
			"gender": "Male",
			"lifespan": "1743-Deceased",
			"birthDate": "15 March 1743",
			"birthPlace": "Grosshöchstetten, Bern, Switzerland",
			"marriagePlace": "Bern, Switzerland",
			"marriageDate": "about 1764",
			"ascendancyNumber": "464",
			"children": [
				{
					"personId": "KWZV-TDW",
					"name": "David Maeusli",
					"gender": "Male",
					"lifespan": "1780-Deceased",
					"birthDate": "20 October 1780",
					"birthPlace": "Grosshöchstetten, Bern, Switzerland",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-T8Y",
			"name": "Samuel Mausli",
			"gender": "Male",
			"lifespan": "1826-1886",
			"birthDate": "3 October 1826",
			"birthPlace": "Grosshöchstetten, Bern, Switzerland",
			"deathDate": "7 July 1886",
			"deathPlace": "Bern, Bern, Switzerland",
			"marriagePlace": "Grosshöchstetten, Bern, Switzerland",
			"marriageDate": "18 July 1862",
			"ascendancyNumber": "116",
			"children": [
				{
					"personId": "KWZV-T85",
					"name": "Gottlieb Schwartz",
					"gender": "Male",
					"lifespan": "1859-1925",
					"birthDate": "20 January 1859",
					"birthPlace": "Schangnau, Bern, Switzerland",
					"deathDate": "18 August 1925",
					"deathPlace": "Logan, Cache, Utah, United States",
					"marriagePlace": "Thun, Bern, Switzerland",
					"marriageDate": "21 October 1882",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-TDD",
			"name": "Jacob Schwartz",
			"gender": "Male",
			"lifespan": "1798-1854",
			"birthDate": "25 February 1798",
			"birthPlace": "Biglen, Bern, Switzerland",
			"deathDate": "24 November 1854",
			"deathPlace": "Bern, Switzerland",
			"marriagePlace": "Walkringen, Bern, Switzerland",
			"marriageDate": "25 May 1824",
			"ascendancyNumber": "234",
			"children": [
				{
					"personId": "KWZV-TD9",
					"name": "Anna Katharina Schwartz",
					"gender": "Female",
					"lifespan": "1836-1905",
					"birthDate": "27 April 1836",
					"birthPlace": "Schangnau, Bern, Switzerland",
					"deathDate": "25 April 1905",
					"deathPlace": "Bern, Switzerland",
					"marriagePlace": "Grosshöchstetten, Bern, Switzerland",
					"marriageDate": "18 July 1862",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-T6C",
			"name": "Peter Schwartz",
			"gender": "Male",
			"lifespan": "1750-Deceased",
			"birthDate": "6 December 1750",
			"birthPlace": "Biglen, Bern, Switzerland",
			"marriagePlace": "Münsingen, Bern, Switzerland",
			"marriageDate": "8 October 1779",
			"ascendancyNumber": "468",
			"children": [
				{
					"personId": "KWZV-TDD",
					"name": "Jacob Schwartz",
					"gender": "Male",
					"lifespan": "1798-1854",
					"birthDate": "25 February 1798",
					"birthPlace": "Biglen, Bern, Switzerland",
					"deathDate": "24 November 1854",
					"deathPlace": "Bern, Switzerland",
					"marriagePlace": "Walkringen, Bern, Switzerland",
					"marriageDate": "25 May 1824",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-T6Z",
			"name": "Christen Tanner",
			"gender": "Male",
			"lifespan": "1755-1832",
			"birthDate": "13 July 1755",
			"birthPlace": "Walkringen, Bern, Switzerland",
			"deathDate": "5 May 1832",
			"marriageDate": "17 January 1794",
			"ascendancyNumber": "470",
			"children": [
				{
					"personId": "KWZV-TD6",
					"name": "Anna Tanner",
					"gender": "Female",
					"lifespan": "1798-1867",
					"birthDate": "14 December 1798",
					"birthPlace": "Walkringen, Bern, Switzerland",
					"deathDate": "1867",
					"marriagePlace": "Walkringen, Bern, Switzerland",
					"marriageDate": "25 May 1824",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-TDW",
			"name": "David Maeusli",
			"gender": "Male",
			"lifespan": "1780-Deceased",
			"birthDate": "20 October 1780",
			"birthPlace": "Grosshöchstetten, Bern, Switzerland",
			"ascendancyNumber": "232",
			"children": [
				{
					"personId": "KWZV-T8Y",
					"name": "Samuel Mausli",
					"gender": "Male",
					"lifespan": "1826-1886",
					"birthDate": "3 October 1826",
					"birthPlace": "Grosshöchstetten, Bern, Switzerland",
					"deathDate": "7 July 1886",
					"deathPlace": "Bern, Bern, Switzerland",
					"marriagePlace": "Grosshöchstetten, Bern, Switzerland",
					"marriageDate": "18 July 1862",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-T85",
			"name": "Gottlieb Schwartz",
			"gender": "Male",
			"lifespan": "1859-1925",
			"birthDate": "20 January 1859",
			"birthPlace": "Schangnau, Bern, Switzerland",
			"deathDate": "18 August 1925",
			"deathPlace": "Logan, Cache, Utah, United States",
			"marriagePlace": "Thun, Bern, Switzerland",
			"marriageDate": "21 October 1882",
			"ascendancyNumber": "58",
			"children": [
				{
					"personId": "KWZV-T82",
					"name": "Rosa Schwartz",
					"gender": "Female",
					"lifespan": "1887-1986",
					"birthDate": "9 May 1887",
					"birthPlace": "Uetendorf, Bern, Switzerland",
					"deathDate": "10 August 1986",
					"deathPlace": "Oklahoma City, Oklahoma, Oklahoma, United States",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-T6V",
			"name": "Christen Bieri",
			"gender": "Male",
			"lifespan": "1744-1823",
			"birthDate": "11 October 1744",
			"birthPlace": "Schangnau, Bern, Switzerland",
			"deathDate": "27 October 1823",
			"ascendancyNumber": "472",
			"children": [
				{
					"personId": "KWZV-TDN",
					"name": "Peter Bieri",
					"gender": "Male",
					"lifespan": "1778-1858",
					"birthDate": "22 February 1778",
					"birthPlace": "Schangnau, Bern, Switzerland",
					"deathDate": "7 December 1858",
					"deathPlace": "Schangnau, Bern, Switzerland",
					"marriagePlace": "Schangnau, Bern, Switzerland",
					"marriageDate": "12 November 1813",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-TDN",
			"name": "Peter Bieri",
			"gender": "Male",
			"lifespan": "1778-1858",
			"birthDate": "22 February 1778",
			"birthPlace": "Schangnau, Bern, Switzerland",
			"deathDate": "7 December 1858",
			"deathPlace": "Schangnau, Bern, Switzerland",
			"marriagePlace": "Schangnau, Bern, Switzerland",
			"marriageDate": "12 November 1813",
			"ascendancyNumber": "236",
			"children": [
				{
					"personId": "KWZV-TDQ",
					"name": "Abraham Bieri",
					"gender": "Male",
					"lifespan": "1823-1873",
					"birthDate": "29 October 1823",
					"birthPlace": "Schangnau, Bern, Switzerland",
					"deathDate": "1 May 1873",
					"deathPlace": "Schangnau, Bern, Switzerland",
					"marriagePlace": "Thun, Bern, Switzerland",
					"marriageDate": "13 May 1848",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-T6K",
			"name": "Hans Jacob Egli",
			"gender": "Male",
			"lifespan": "1755-Deceased",
			"birthDate": "28 February 1755",
			"birthPlace": "Switzerland",
			"ascendancyNumber": "474",
			"children": [
				{
					"personId": "KWZV-TDJ",
					"name": "Christina Egli",
					"gender": "Female",
					"lifespan": "1791-1850",
					"birthDate": "11 September 1791",
					"birthPlace": "Schangnau, Bern, Switzerland",
					"deathDate": "19 September 1850",
					"deathPlace": "Schangnau, Bern, Switzerland",
					"marriagePlace": "Schangnau, Bern, Switzerland",
					"marriageDate": "12 November 1813",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-T6F",
			"name": "Ulrich Zuercher",
			"gender": "Male",
			"lifespan": "1757-1818",
			"birthDate": "17 December 1757",
			"birthPlace": "Rüderswil, Bern, Switzerland",
			"deathDate": "21 June 1818",
			"marriageDate": "7 January 1781",
			"ascendancyNumber": "476",
			"children": [
				{
					"personId": "KWZV-TDF",
					"name": "Christian Zuercher",
					"gender": "Male",
					"lifespan": "1794-1850",
					"birthDate": "20 June 1794",
					"birthPlace": "Rüderswil, Bern, Switzerland",
					"deathDate": "19 January 1850",
					"marriagePlace": "Schwarzenegg, Unterlangenegg, Bern, Switzerland",
					"marriageDate": "21 November 1818",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-TDQ",
			"name": "Abraham Bieri",
			"gender": "Male",
			"lifespan": "1823-1873",
			"birthDate": "29 October 1823",
			"birthPlace": "Schangnau, Bern, Switzerland",
			"deathDate": "1 May 1873",
			"deathPlace": "Schangnau, Bern, Switzerland",
			"marriagePlace": "Thun, Bern, Switzerland",
			"marriageDate": "13 May 1848",
			"ascendancyNumber": "118",
			"children": [
				{
					"personId": "KWZV-T8R",
					"name": "Rosina Bieri",
					"gender": "Female",
					"lifespan": "1862-1896",
					"birthDate": "23 July 1862",
					"birthPlace": "Schwarzenegg, Unterlangenegg, Bern, Switzerland",
					"deathDate": "8 December 1896",
					"deathPlace": "Logan, Cache, Utah, United States",
					"marriagePlace": "Thun, Bern, Switzerland",
					"marriageDate": "21 October 1882",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-TDF",
			"name": "Christian Zuercher",
			"gender": "Male",
			"lifespan": "1794-1850",
			"birthDate": "20 June 1794",
			"birthPlace": "Rüderswil, Bern, Switzerland",
			"deathDate": "19 January 1850",
			"marriagePlace": "Schwarzenegg, Unterlangenegg, Bern, Switzerland",
			"marriageDate": "21 November 1818",
			"ascendancyNumber": "238",
			"children": [
				{
					"personId": "KWZV-TD3",
					"name": "Maria Zuercher",
					"gender": "Female",
					"lifespan": "1823-1883",
					"birthDate": "20 July 1823",
					"birthPlace": "Rüderswil, Bern, Switzerland",
					"deathDate": "2 February 1883",
					"deathPlace": "Schwarzenegg, Unterlangenegg, Bern, Switzerland",
					"marriagePlace": "Thun, Bern, Switzerland",
					"marriageDate": "13 May 1848",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-T6X",
			"name": "Ulrich Ochsenbein",
			"gender": "Male",
			"lifespan": "1754-Deceased",
			"birthDate": "6 October 1754",
			"birthPlace": "Fahrni, Bern, Switzerland",
			"deathDate": "dead",
			"marriagePlace": "Urtenen, Bern, Switzerland",
			"marriageDate": "14 March 1783",
			"ascendancyNumber": "478",
			"children": [
				{
					"personId": "KWZV-TDX",
					"name": "Katharina",
					"gender": "Female",
					"lifespan": "1792-1871",
					"birthDate": "26 February 1792",
					"birthPlace": "Steffisburg, Bern, Switzerland",
					"deathDate": "19 February 1871",
					"marriagePlace": "Schwarzenegg, Unterlangenegg, Bern, Switzerland",
					"marriageDate": "21 November 1818",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-T88",
			"name": "Alvin Schwartz Beutler",
			"gender": "Male",
			"lifespan": "1916-2011",
			"birthDate": "18 July 1916",
			"birthPlace": "North Logan, Cache, Utah, United States",
			"deathDate": "20 July 2011",
			"ascendancyNumber": "14",
			"children": [
				{
					"personId": "KWZV-YJQ",
					"name": "Bonnie Beutler",
					"gender": "Female",
					"lifespan": "Living",
					"birthPlace": "Provo, Utah, Utah, United States",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZK-MM8",
			"name": "James Maxwell",
			"gender": "Male",
			"lifespan": "1778-1869",
			"birthDate": "17 July 1778",
			"birthPlace": "Greenock, Renfrewshire, Scotland",
			"deathDate": "1869",
			"marriagePlace": "West Greenock, Renfrewshire, Scotland",
			"marriageDate": "17 November 1795",
			"ascendancyNumber": "482",
			"children": [
				{
					"personId": "KWZV-111",
					"name": "Helen or Ellen Maxwell",
					"gender": "Female",
					"lifespan": "1798-1864",
					"birthDate": "1798",
					"birthPlace": "Largs, North Ayrshire, Scotland",
					"deathDate": "4 April 1864",
					"deathPlace": "Glasgow, Lanarkshire, Scotland",
					"marriagePlace": "Greenock, Renfrewshire, Scotland",
					"marriageDate": "29 March 1819",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-11R",
			"name": "Charles Houston Maxwell McAlister",
			"gender": "Male",
			"lifespan": "1827-1898",
			"birthDate": "17 February 1827",
			"birthPlace": "Renfrewshire, Scotland",
			"deathDate": "25 January 1898",
			"deathPlace": "Logan, Cache, Utah, United States",
			"ascendancyNumber": "120",
			"children": [
				{
					"personId": "KWZV-11P",
					"name": "John Archibald McAlister",
					"gender": "Male",
					"lifespan": "1851-1932",
					"birthDate": "22 August 1851",
					"birthPlace": "Newcastle upon Tyne, Northumberland, England",
					"deathDate": "29 November 1932",
					"deathPlace": "Los Angeles, Los Angeles, California, United States",
					"marriagePlace": "Salt Lake City, Salt Lake, Utah, United States",
					"marriageDate": "12 June 1871",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-11B",
			"name": "Charles McAlister",
			"gender": "Male",
			"lifespan": "1791-1876",
			"birthDate": "7 March 1791",
			"birthPlace": "Campbeltown, Argyll, Scotland",
			"deathDate": "23 February 1876",
			"deathPlace": "Glasgow, Lanarkshire, Scotland",
			"marriagePlace": "Greenock, Renfrewshire, Scotland",
			"marriageDate": "29 March 1819",
			"ascendancyNumber": "240",
			"children": [
				{
					"personId": "KWZV-11R",
					"name": "Charles Houston Maxwell McAlister",
					"gender": "Male",
					"lifespan": "1827-1898",
					"birthDate": "17 February 1827",
					"birthPlace": "Renfrewshire, Scotland",
					"deathDate": "25 January 1898",
					"deathPlace": "Logan, Cache, Utah, United States",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZK-MM4",
			"name": "Charles MacAlistare",
			"gender": "Male",
			"lifespan": "1769-Deceased",
			"birthDate": "5 October 1769",
			"birthPlace": "Campbeltown, Argyll, Scotland",
			"ascendancyNumber": "480",
			"children": [
				{
					"personId": "KWZV-11B",
					"name": "Charles McAlister",
					"gender": "Male",
					"lifespan": "1791-1876",
					"birthDate": "7 March 1791",
					"birthPlace": "Campbeltown, Argyll, Scotland",
					"deathDate": "23 February 1876",
					"deathPlace": "Glasgow, Lanarkshire, Scotland",
					"marriagePlace": "Greenock, Renfrewshire, Scotland",
					"marriageDate": "29 March 1819",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZK-MM9",
			"name": "Robert Stein Haig",
			"gender": "Male",
			"lifespan": "1804-1876",
			"birthDate": "2 August 1804",
			"birthPlace": "St. Andrews, Fifeshire, Scotland",
			"deathDate": "1876",
			"deathPlace": "Utica, Oneida, New York, United States",
			"ascendancyNumber": "242",
			"children": [
				{
					"personId": "KWZK-MJ5",
					"name": "Mary Haig",
					"gender": "Female",
					"lifespan": "Deceased",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZK-MMP",
			"name": "Thomas Horton",
			"gender": "Male",
			"lifespan": "1764-1820",
			"birthDate": "1764",
			"birthPlace": "Worthing, West Sussex, England",
			"marriagePlace": "Northiam, East Sussex, England",
			"marriageDate": "29 January 1788",
			"ascendancyNumber": "492",
			"children": [
				{
					"personId": "KWZK-MMW",
					"name": "Abraham Horton",
					"gender": "Male",
					"lifespan": "1795-1834",
					"birthDate": "18 February 1795",
					"birthPlace": "Sandhurst, Kent, England",
					"deathDate": "14 February 1834",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-11P",
			"name": "John Archibald McAlister",
			"gender": "Male",
			"lifespan": "1851-1932",
			"birthDate": "22 August 1851",
			"birthPlace": "Newcastle upon Tyne, Northumberland, England",
			"deathDate": "29 November 1932",
			"deathPlace": "Los Angeles, Los Angeles, California, United States",
			"marriagePlace": "Salt Lake City, Salt Lake, Utah, United States",
			"marriageDate": "12 June 1871",
			"ascendancyNumber": "60",
			"children": [
				{
					"personId": "KWZV-1GQ",
					"name": "Frank Snow McAlister",
					"gender": "Male",
					"lifespan": "1913-1913",
					"birthDate": "17 February 1913",
					"birthPlace": "Logan, Cache, Utah, United States",
					"deathDate": "19 February 1913",
					"deathPlace": "Utah, United States",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZK-MMM",
			"name": "Lorenzo Snow",
			"gender": "Male",
			"lifespan": "1814-1901",
			"birthDate": "3 April 1814",
			"birthPlace": "Mantua, Portage, Ohio",
			"deathDate": "10 October 1901",
			"marriagePlace": "Salt Lake City, Salt Lake, Utah Territory, United States",
			"marriageDate": "9 October 1853",
			"ascendancyNumber": "122",
			"children": [
				{
					"personId": "KWZV-11G",
					"name": "Clarissa Caroline Snow",
					"gender": "Female",
					"lifespan": "1854-1917",
					"birthDate": "10 July 1854",
					"birthPlace": "Salt Lake City, Salt Lake, Utah, United States",
					"deathDate": "15 October 1917",
					"deathPlace": "Salt Lake City, Salt Lake, Utah, United States",
					"marriagePlace": "Salt Lake City, Salt Lake, Utah, United States",
					"marriageDate": "12 June 1871",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZK-MMW",
			"name": "Abraham Horton",
			"gender": "Male",
			"lifespan": "1795-1834",
			"birthDate": "18 February 1795",
			"birthPlace": "Sandhurst, Kent, England",
			"deathDate": "14 February 1834",
			"ascendancyNumber": "246",
			"children": [
				{
					"personId": "KWZV-11Y",
					"name": "Caroline Horton",
					"gender": "Female",
					"lifespan": "1824-1857",
					"birthDate": "25 December 1824",
					"birthPlace": "Sandhurst, Kent, England",
					"deathDate": "21 February 1857",
					"deathPlace": "Brigham City, Box Elder, Utah, United States",
					"marriagePlace": "Salt Lake City, Salt Lake, Utah Territory, United States",
					"marriageDate": "9 October 1853",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZK-MMN",
			"name": "Walter Forman",
			"gender": "Male",
			"lifespan": "1770-Deceased",
			"birthDate": "1770",
			"birthPlace": "Great Britain, United Kingdom",
			"marriagePlace": "Beckley, Sussex, England",
			"marriageDate": "before 1793",
			"ascendancyNumber": "494",
			"children": [
				{
					"personId": "KWZK-MMQ",
					"name": "Sarah Forman",
					"gender": "Female",
					"lifespan": "1793-1874",
					"birthDate": "1793",
					"birthPlace": "Beckley, Sussex, England",
					"deathDate": "6 November 1874",
					"deathPlace": "South Hall Greenwood, Middlesex, District of Uxbridge, England",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZV-1GQ",
			"name": "Frank Snow McAlister",
			"gender": "Male",
			"lifespan": "1913-1913",
			"birthDate": "17 February 1913",
			"birthPlace": "Logan, Cache, Utah, United States",
			"deathDate": "19 February 1913",
			"deathPlace": "Utah, United States",
			"ascendancyNumber": "30",
			"children": [
				{
					"personId": "KWZV-1F5",
					"name": "Clarissa McAlister",
					"gender": "Female",
					"lifespan": "Living",
					"descendancyNumber": "1.1"
				}
			]
		},
		{
			"personId": "KWZK-MMV",
			"name": "Jacob Pettibone Jr",
			"gender": "Male",
			"lifespan": "1751-1807",
			"birthDate": "20 December 1751",
			"birthPlace": "Simsbury, Hartford, Connecticut, United States",
			"deathDate": "18 October 1807",
			"deathPlace": "Simsbury, Hartford, Connecticut, United States",
			"ascendancyNumber": "490",
			"children": [
				{
					"personId": "KWZK-MMS",
					"name": "Rosetta Lenora Pettibone",
					"gender": "Female",
					"lifespan": "1778-1846",
					"birthDate": "22 October 1778",
					"birthPlace": "Simsbury, Hartford, Connecticut, United States",
					"deathDate": "12 October 1846",
					"deathPlace": "",
					"descendancyNumber": "1.1"
				}
			]
		}
	];







});

