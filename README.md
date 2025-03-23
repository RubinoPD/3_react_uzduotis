# Užduotis: Naudotojų paieška su sąrašo optimizacija

## Tikslas:

Sukurti React programėlę, kuri leidžia ieškoti naudotojų pagal vardą ir rodo rezultatus optimizuotai naudojant useMemo, useCallback ir React.memo.

## Reikalavimai:

- Naudotojų sąrašas: Duotas didelis (bent 100) naudotojų masyvas su vardais, el. pašto adresais ir miestu. Galima sugeneruoti naudojant https://jsonplaceholder.typicode.com/users arba sukurti dirbtinį masyvą.
- Paieška: Vartotojas gali įvesti tekstą ir filtruoti naudotojus pagal vardą. Naudoti useMemo tam, kad paieška būtų efektyvesnė.
- Optimizacija: Naudoti React.memo naudotojų kortelėms (UserCard) optimizuoti. Naudoti useCallback paieškos funkcijai tam, kad nevyktų nereikalingi atvaizdavimai (angl. render).

## Papildomi reikalavimai:

- Pridėti „Valyti paiešką“ mygtuką.
- Rodyti žinutę, jei rezultatų nėra.
- Įdiegti paprastą loading būseną (useEffect).

---

# Naudotojų paieškos programėlė

Ši React programėlė leidžia efektyviai ieškoti naudotojų sąraše pagal vardą. Projektas demonstruoja React optimizacijos technikas, įskaitant `useMemo`, `useCallback` ir `React.memo`.

## Funkcijos

- **Didelis naudotojų sąrašas**: Automatiškai užkrauna 100 naudotojų iš JSONPlaceholder API arba sugeneruoja dirbtinį duomenų rinkinį
- **Paieška realiu laiku**: Greitai filtruoja naudotojus pagal vardą įvedant tekstą
- **Optimizuotas atvaizdavimas**: Naudojamos React optimizacijos, kad būtų išvengta bereikalingų komponentų atvaizdavimų
- **Responsive dizainas**: Veikia ir mobiliuose, ir staliniuose įrenginiuose

## Technologijos

- React 18+
- Vite
- Modern JavaScript (ES6+)
- CSS3

## Įdiegimas ir paleidimas

1. Klonuokite repozitoriją:

   ```
   git clone [repozitorijos-url]
   cd 3_react_uzduotis
   ```

2. Įdiekite priklausomybes:

   ```
   npm install
   ```

3. Paleiskite vystymo serverį:

   ```
   npm run dev
   ```

4. Atidarykite naršyklę adresu [http://localhost:5173](http://localhost:5173)

## Projekto struktūra

```
/src
  ├── components
        ├── SearchBar.jsx
        ├── UserCard.jsx
        ├── UserList.jsx
  ├── App.jsx         // Pagrindinis komponentas
  ├── App.css         // Stiliai
  └── main.jsx        // Entry point
```

## Komponentai

- **App**: Valdo bendrą būseną, paieškos logiką ir optimizuotą filtravimą
- **SearchBar**: Paieškos įvesties komponentas su "Valyti paiešką" mygtuku
- **UserList**: Atvaizduoja filtruotą naudotojų sąrašą arba pranešimą, jei rezultatų nėra
- **UserCard**: Atvaizduoja individualų naudotoją (optimizuotas su React.memo)

## Optimizacijos

1. **useMemo**:

   - Naudojamas filtruoti naudotojų sąrašą
   - Perskaičiuoja rezultatus tik kai pasikeičia paieškos terminas arba naudotojų sąrašas

2. **useCallback**:

   - Optimizuoja paieškos ir valymo funkcijas
   - Užtikrina, kad funkcijos nebūtų perkuriamos kiekvieno atvaizdavimo metu

3. **React.memo**:
   - Apsupa UserCard komponentą
   - Neleidžia bereikalingai atvaizduoti naudotojų, kurie nepasikeitė

## Būsenos valdymas

- Kraunami duomenys: Rodoma "Kraunami duomenys..." kol gaunami naudotojai
- Nėra rezultatų: Rodoma "Nerasta jokių naudotojų" kai filtras negrąžina jokių rezultatų

## Kūrėjas

Sukurta pagal užduotį, naudojant React ir Vite technologijas.
