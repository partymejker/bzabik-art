# GitHub + VS Code — szybki poradnik

## 1. Uruchomienie BZABIK.ART

Otwórz VS Code i projekt:

F:\Projects\bzabik-art-1

Otwórz terminal:

Terminal → New Terminal

Uruchom:

npm run dev

Strona:
http://localhost:3000

Zatrzymanie serwera:
Ctrl + C


## 2. Pobranie najnowszej wersji z GitHuba

Przed rozpoczęciem pracy, jeśli projekt był zmieniany na innym komputerze:

git pull

Następnie:

npm run dev


## 3. Zapisanie swoich zmian na GitHubie

Po zakończeniu pracy:

git status

git add .

git commit -m "Opis zmian"

git push

Przykład:

git add .
git commit -m "Update homepage"
git push


## 4. Pierwsze pobranie projektu z GitHuba na nowy komputer

Potrzebujesz Git + Node.js + VS Code.

Przejdź do folderu, w którym chcesz mieć projekty:

cd F:\Projects

Sklonuj projekt:

git clone https://github.com/partymejker/bzabik-art.git

Wejdź do projektu:

cd bzabik-art

Zainstaluj biblioteki:

npm install

Uruchom:

npm run dev


## 5. Pobranie innego projektu z GitHuba

Na stronie projektu GitHub znajdź:

Code → HTTPS

Skopiuj adres, np.:

https://github.com/USER/NAZWA-PROJEKTU.git

W terminalu:

cd F:\Projects

git clone https://github.com/USER/NAZWA-PROJEKTU.git

cd NAZWA-PROJEKTU

Jeżeli jest to projekt Node.js:

npm install

npm run dev


## 6. Najważniejsze komendy Git

git status
→ pokazuje stan projektu

git pull
→ pobiera najnowsze zmiany z GitHuba

git add .
→ przygotowuje wszystkie zmiany do zapisu

git commit -m "Opis"
→ zapisuje zmiany lokalnie

git push
→ wysyła zmiany na GitHub

git clone ADRES
→ pobiera projekt z GitHuba po raz pierwszy


## TYPOWY WORKFLOW

START:

git pull
npm run dev

PRACA NAD STRONĄ...

KONIEC:

git add .
git commit -m "Opis zmian"
git push


UWAGA:

npm install wykonujesz po pierwszym sklonowaniu projektu
lub gdy zmieniły się zależności w package.json.

Nie wykonujesz npm install przy każdym uruchomieniu strony.