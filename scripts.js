const convertbutton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")

function convertvalues() {

    const inputcurrencyvalue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-converted")
    const currencyValueConvert = document.querySelector(".currency-value")

    console.log(currencyselect.value)

    const dolar = 5.2
    const eurotoday = 6.2
    const libratoday = 5.3
    const Bitcointoday = 5.0

    if (currencyselect.value == "dolar") {

        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyvalue / dolar)

    }


    if (currencyselect.value == "euro") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
    currency: "EUR"
        }).format(inputcurrencyvalue / eurotoday)

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputcurrencyvalue)


    if (currencyselect.value == "libra") {

        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputcurrencyvalue / libratoday)

    }

if (currencyselect.value == "bitcoin") {
    currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(inputcurrencyvalue / Bitcointoday)

}


}

function changecurrency () {



const currencyName = document.getElementById ("currency-name")
const currencyImage = document.querySelector (".currency-img")




if (currencyselect.value == "dolar") {
currencyName.innerHTML = "Dólar americano"
currencyImage.src = "./assets/estados-unidos (1) 1.png"
}

if (currencyselect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/Design sem nome 3.png"

}

if (currencyselect.value == "libra") {
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./assets/libra 1.png"
}

if (currencyselect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin 1.png"

}




convertvalues()
}


currencyselect.addEventListener ("change", changecurrency)
convertbutton.addEventListener("click", convertvalues)





