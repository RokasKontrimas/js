// 10. Funkciją, kuri patikrina ar įvestas tekstas turi porini raidžių skaičių ar neporinį.
//


// Task 10
function checkIfTextIsPaired(text) {
    if (!isNaN(text) || typeof text === "number" || text === undefined) {
        console.log('Value cannot be number')
    } else {
        let trimmedText = text.replaceAll(' ', '');
        let trimmedTextLength = trimmedText.length;
        if (trimmedTextLength % 2 === 0) {
            console.log('Number is paired')
        } else {
            console.log('Number is not paired')

        }
    }

}

checkIfTextIsPaired('Labass')

// Task 11

// 11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio.
// 11.1. Funkcija priima du argumentus: tekstą ir kelintą simbolį reikia grąžinti.
// 11.2. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".
//
// 11.3. Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.
//
// 11.4. Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio.

function checkTextSymbolsLength(text, symbolToReturn) {
    if (!isNaN(text) || typeof text === "number" || text === undefined) {
        console.log('Value cannot be number')
    } else if (isNaN(symbolToReturn) || typeof symbolToReturn !== "number") {
        console.log('Value cannot be string')
    } else if (symbolToReturn > text.length) {
        console.error(`${text} text have ${text.length} symbols and you trying to return ${symbolToReturn} `)
    } else if (symbolToReturn < 0) {
        console.log(text.charAt(text.length - (symbolToReturn * -1)))
    } else {
        console.log(text.charAt(symbolToReturn))
    }

}

checkTextSymbolsLength('abcdefg', -1)