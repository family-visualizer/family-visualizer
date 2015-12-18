###Read Person Ancestry with Specified Spouse and additional person and marriage details

https://familysearch.org/developers/docs/api/tree/Read_Person_Ancestry_with_Specified_Spouse_and_additional_person_and_marriage_details_usecase

```
GET /platform/tree/ancestry?person=P2mal-02&spouse=P3fem-03&personDetails=&marriageDetails=
Accept: application/x-fs-v1+json
Authorization: Bearer YOUR_ACCESS_TOKEN_HERE
```

leave spouse blank and it will find them automatically if they exist:  spouse=

##What you get back:

####links 

(links to other api calls you can make about this person/family)
  Includes: ancestry,   person,   descendancy,   self,   child-relationship


####persons

array of objects that contain this:

```
"display" : {
      "name" : "Daniel Earl Bishop",
      "gender" : "Male",
      "lifespan" : "1885-1981",
      "birthDate" : "06/27/1885",
      "birthPlace" : "De Witt, Clinton, Iowa, United States",
      "deathDate" : "12/05/1981",
      "deathPlace" : "Fulton, Whiteside, Illinois, United States",
      "marriageDate" : "08/13/1905",
      "marriagePlace" : "Rethwisch, Schleswig-Holstein, Preussen, Germany",
      "ascendancyNumber" : "2"
    }
```
-Ascendency (Ahnentafel): http://freepages.genealogy.rootsweb.ancestry.com/~jcat2/ahnentafel.html


###Read Person Despondency with Specified Spouse and additional person and marriage details
https://familysearch.org/developers/docs/api/tree/Read_Person_Descendancy_with_Specified_Spouse_and_additional_person_and_marriage_details_usecase

```
GET /platform/tree/descendancy?person=P1mal-1&spouse=P2fem-1-S&personDetails=&marriageDetails=
Accept: application/x-fs-v1+json
Authorization: Bearer YOUR_ACCESS_TOKEN_HERE
```

leave spouse blank and it will find them automatically if they exist:  spouse=

##What you get back:


####links 
(links to other api calls you can make about this person/family)
Includes: ancestry,   person,   descendancy,  child-relationship, additional-parent-relationship


####persons
array of objects that contain this:

```
 "display" : {
      "name" : "Elnor Bishop",
      "gender" : "Female",
      "lifespan" : "1909-2000",
      "birthDate" : "03/24/1909",
      "birthPlace" : "Schleswig-Holstein, Germany",
      "deathDate" : "05/27/2000",
      "deathPlace" : "Ottawa, La Salle, Illinois, United States",
      "marriageDate" : "10/11/1933",
      "marriagePlace" : "Hansuehn, Schleswig-Holstein, Preussen, Germany",
      "descendancyNumber" : "1.1"
    }
    
```
-Descendency (d'Aboville System): http://higdonfamily.org/research-tips-for-advanced/numbering-systems-for-genea/descending-numbering-system/daboville-system-1940.html
