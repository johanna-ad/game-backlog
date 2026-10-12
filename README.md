# Game Backlog

Game Backlog är en enkel React-app där användaren kan lägga till spel som den vill testa. Spelen kan markeras som testade eller tas bort från listan.

## 1. State-hantering

Jag använder useState för att hålla reda på listan med spel och om spelen är testade eller inte. Varje spel har bland annat ett completed-värde som är true eller false. När state uppdateras renderar React om gränssnittet så att ändringen syns direkt.

## 2. Oföränderlighet (Immutability)

I React ska man inte använda till exempel .push() för att ändra en befintlig array direkt. Istället skapar jag en ny array med spread när jag lägger till ett spel och med .filter() när jag tar bort ett spel. Sedan uppdaterar jag state med den nya arrayen.

## 3. Kodgranskning

Funktionen använder .push(), vilket ändrar den befintliga arrayen direkt och sedan returnerar samma array. I React vill man istället skapa en ny array så att state kan uppdateras på rätt sätt. Jag skulle därför skriva: return [...todos, text] istället.

## Problemlösning och reflektion

När jag har kört fast har jag använt kursmaterialet och AI för att få hjälp att förstå problemen. Ett konkret exempel är när jag behövde förstå hur .map() och .filter() verkligen fungerade och hur de används för att ändra eller ta bort rätt spel i listan.

Jag har också använt AI för hjälp med felsökning och för att få kod förklarad när jag inte förstått vad de olika delarna gör. Jag har sedan testat ändringarna i min egen app för att se hur det faktiskt påverkar resultatet.

## Muntlig redovisning

https://funet-my.sharepoint.com/personal/3ggyhmu26_adoljo_folkuniversitetet_nu/_layouts/15/stream.aspx?id=%2Fpersonal%2F3ggyhmu26%5Fadoljo%5Ffolkuniversitetet%5Fnu%2FDocuments%2FInspelningar%2FM%C3%B6te%20med%20Johanna%20Adolfsson%20MU26%2D20261012%5F085012%2DM%C3%B6tesinspelning%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E853b4c9d%2Dea4f%2D4b10%2Db4bf%2D2487f19dfc81