create schema alg;
SET search_path to alg;

CREATE TABLE  uzytkownik(
              uzytkownik_id SERIAL,
              imie VARCHAR,
              nazwisko VARCHAR,
              haslo VARCHAR not NULL,
              CONSTRAINT uzytkownik_pk PRIMARY KEY (uzytkownik_id)
);

create table animacja(
              animacja_id SERIAL,
              nazwa VARCHAR,
   			  CONSTRAINT animacja_pk PRIMARY KEY (animacja_id)
);
--jeden uzytkownik moze miec kilka takich samych animacji
create table animacja_zapis(
			  zapis_id SERIAL,
              animacja_id INTEGER,
              uzytkownik_id INTEGER,
              CONSTRAINT zapis_pk PRIMARY KEY (zapis_id),
              CONSTRAINT animacja_fk FOREIGN KEY (animacja_id) REFERENCES animacja(animacja_id),
              CONSTRAINT uzytkownik_fk FOREIGN KEY (uzytkownik_id)REFERENCES uzytkownik(uzytkownik_id)            
);


create table liczba_zapis
(
	liczba_id SERIAL,
	zapis_id INTEGER,
	liczba INTEGER,
	CONSTRAINT liczba_pk PRIMARY KEY (liczba_id),
    CONSTRAINT animacja_fk FOREIGN KEY (zapis_id) REFERENCES animacja_zapis(zapis_id)
);

insert into animacja(animacja_id,nazwa)
	values(1,'Sortowanie');

insert into animacja(animacja_id,nazwa)
	values(2,'Lista');

insert into animacja(animacja_id,nazwa)
	values(3,'Heapify');

insert into animacja(animacja_id,nazwa)
	values(4,'Sortowanie przez scalanie');


