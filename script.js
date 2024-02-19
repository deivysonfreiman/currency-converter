const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelect0f = document.querySelector(".currency-select-of")

function convertValues() {
    const inputValue = document.querySelector(".input-currency").value
    const valueToConvert = document.querySelector(".currency-value")
    const convertedCurrencyValue = document.querySelector(".currency-value-converted")

    if (currencySelect0f.value == "real")
        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)

    if (currencySelect0f.value == "dolar")
        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)

    if (currencySelect0f.value == "euro")
        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)

    if (currencySelect0f.value == "libra")
        valueToConvert.innerHTML = new Intl.NumberFormat("GBP", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)

    if (currencySelect0f.value == "real" && (currencySelect.value == "real")) {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * 1)
    }

    if (currencySelect0f.value == "real" && (currencySelect.value == "dolar")) {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue * 0.20)
    }

    if (currencySelect0f.value == "real" && (currencySelect.value == "euro")) {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue * 0.19)
    }

    if (currencySelect0f.value == "real" && (currencySelect.value == "libra")) {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("GBP", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue * 0.16)
    }

    if (currencySelect0f.value == "dolar" && (currencySelect.value == "real")) {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * 4.97)
    }

    if (currencySelect0f.value == "dolar" && (currencySelect.value == "libra")) {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue * 0.79)
    }

    if (currencySelect0f.value == "dolar" && (currencySelect.value == "dolar")) {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue * 1)
    }

    if (currencySelect0f.value == "dolar" && (currencySelect.value == "euro")) {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue * 0.93)
    }

    if (currencySelect0f.value == "euro" && (currencySelect.value == "real")) {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * 5.35)
    }

    if (currencySelect0f.value == "euro" && (currencySelect.value == "dolar")) {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue * 1.08)
    }

    if (currencySelect0f.value == "euro" && (currencySelect.value == "euro")) {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue * 1)
    }

    if (currencySelect0f.value == "euro" && (currencySelect.value == "libra")) {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("GBP", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue * 0.86)
    }


    if (currencySelect0f.value == "libra" && (currencySelect.value == "libra")) {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("GBP", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue * 1)
    }

    if (currencySelect0f.value == "libra" && (currencySelect.value == "real")) {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * 6.26)
    }

    if (currencySelect0f.value == "libra" && (currencySelect.value == "dolar")) {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue * 1.26)
    }

    if (currencySelect0f.value == "libra" && (currencySelect.value == "euro")) {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("GBP", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue * 1.17)
    }
}

function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "real") {
        currencyImage.src = "./assets/brasil 2.png"
        currencyName.innerHTML = "Real"
    }

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }

    convertValues()
}


function changeCurrency1() {

    const currencyImage2 = document.querySelector(".currency-img2")
    const currencyName2 = document.querySelector(".currency-name2")

    if (currencySelect0f.value == "real") {
        currencyImage2.src = "./assets/brasil 2.png"
        currencyName2.innerHTML = "Real"
    }

    if (currencySelect0f.value == "dolar") {
        currencyImage2.src = "./assets/dolar.png"
        currencyName2.innerHTML = "Dólar americano"
    }

    if (currencySelect0f.value == "euro") {
        currencyImage2.src = "./assets/euro.png"
        currencyName2.innerHTML = "Euro"
    }

    if (currencySelect0f.value == "libra") {
        currencyImage2.src = "./assets/libra 1.png"
        currencyName2.innerHTML = "Libra"
    }

    convertValues()
}

convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)
currencySelect0f.addEventListener("change", changeCurrency1)















































/* PARTE 1 E 2

const buttonConvert = document.querySelector(".convert-button")

function convertCurrency() {

    const inputValue = document.querySelector(".input-currency").value
    const currencyValue = document.querySelector(".currency-value")
    const convertedValue = document.querySelector(".currency-value-converted")
    
    const dolarToday = 4.97

    const convertedCurrencyValue = inputValue / 4.97


    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)


    convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedCurrencyValue)
}


buttonConvert.addEventListener("click",convertCurrency)  

*/


/*  PARTE 3

  if (currencySelect.value == "dolar") {

        convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
    }

    if (currencySelect.value == "euro") {

        convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }

    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)
}

*/

/* 

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./gif/dolar.png"
    }
    
    if(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./gif/euro.png"
    }
 
     convertCurrency()
}

buttonConvert.addEventListener("click", convertCurrency)
currencySelect.addEventListener("change", changeCurrency)

*/





















/*


const buttonConvert = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertCurrency() {

    const inputValue = document.querySelector(".input-currency").value
    const currencyValue = document.querySelector(".currency-value")
    const convertedValue = document.querySelector(".currency-value-converted")


    const dolarToday = 4.97
    const euroToday = 5.20

    if(currencySelect.value == "dolar") {
        convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
    }

    if(currencySelect.value == "euro") {
        convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)

    }

    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./gif/dolar.png"
    }
    
    if(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./gif/euro.png"
    }
 
     convertCurrency()
}

buttonConvert.addEventListener("click", convertCurrency)
currencySelect.addEventListener("change", changeCurrency)


*/