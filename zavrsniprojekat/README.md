World Countries
Aplikacija prikazuje sve zemlje sveta, njihovu statistiku, zastave.SSastoji se iz dva dela,Public i Private. U Public delu postoji samo forme za login i registraciju povezane sa serverom.Uspesno logovanje nam omogucava dalji pristup, ulazak u Private sektor koji je zapravo i sama aplikacija.

##Instalacija

##Aplikacija je radjena u reactu. Pokretanje app se vrsi komandom:npm start

Registracija:
Postoje 6 polja za unos(Ime, Prezime,Korisnicko ime, E-mail, sifra i ponovljenja sifra).Da bi forma bila validna i registracija uspesna potrebno je popuniti pomenuta polja.Sifra i Ponovljena sifra moraju biti identicne, i imati najmanje 6 karaktera, polje za email mora sadrzati @.Na stranici registracija postoji i dugme koje nas vraca nazad(na login stranu(default page).Klikom na dugme submit, ako je registracija uspesna odlazimo na login stranu, ako je neuspsna ispisuje se alert.

##Login:
Za samo logovanje potrebno je popuniti dva polja(Korisnicko ime, i password), prethodno uneti u registraciji.Klikom na dugme submit odlazimo na home page.

##Home stranica:
Sadrzi navigacioni bar, slider sa fotografijama o mapama sveta, i dugme Discover World, cijim klikom odlazimo na stranicu sa interaktivnom mapom sveta.Navigacioni bar sadrzi logo(Pokretac) i linkove ka ostalim stranam kao i link za logout

##Countries:
Stranica prikazuje sve zemlje sveta.Realizovana pomocu axios servisa i API poziva.na njoj se nalaze opcije:select(moze da se vrsi selekcija zemalja po subregionima, takodje postoji mogucnost multi selecta(vise parametra unetih u select, kao i njihovo brisanje), search polje, omogucava nam pretragu po imenu zemlje, i dva dugmeta za sortiranje koja sortiraju zemlje sveta po poulaciji(broju stanovnika), opadajuce i rastuce.Na dnu stranice nalaze se dva dugmeta za stranicenje.Na stranici se inicijalno pokazuju kartice za 9 zemalja.Select, search, sort i paginacija su u korelaciji jedno sa drugim.

##My Country:
Stranica pokazuje podatke o jednoj zemlji(u ovom slucaju Konkretno o Srbiji).Prilikom prelaska misem preko zastave dobija se hover efect: kartica Srbije se prekriva karticom na kojoj se nalazi grb.Sa leve strane stranice, nalazi se kompozija slika sa nekim od predela iz same zemlje.Stranica takodje realizovana uz pomoz axios servisa i API poziva

##Discover World:
Interaktivna mapa sveta,prelaskom misa preko nje, dobijaju se podaci o obliku zemlje, njenoj poziciji na mapi sveta, kao i label sa naizvom zemlje i brojem stanovnika.

Funkcionalnosti:
1-Ispisivanje podataka, API:https://restcountries.eu/rest/v2, koriscena metoda Get
2.Select-omogucava selektovanje po subregionima, React-Select
3.MultiSelect-omogucaba naprednu pretragu za zadatih vise parametra, kao i njihovo brisanje,React-Select
3.Search-omogucava pretragu po nazivu zemlje, React-SearchBox
4.Sort-dva dugmeta koja omogucavaju sortiranje, asc i desc, sortiraju zemlje po br stanovnika
5.Paginacija-dva dugmeta za prethodnu i sledecu stranu, na stranici se prikazuju inicijalno po 9 zemalja
6.Interaktivna mapa sveta sa podacima o nazivu zemlje i br stanocnika, React-Composable Map


Built With: 

React
React-Slide
React-Composable-map
Css
Axios
Photoshop



Autor
Milos Ristic-web developer

