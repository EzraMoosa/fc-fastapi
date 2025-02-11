document.addEventListener("DOMContentLoaded", function() {
    const welcomeScreen = document.getElementById("welcome-screen")
    const investmentScreen = document.getElementById("investment-screen")
    const bondScreen = document.getElementById("bond-screen")

    const investmentBtn = document.getElementById("investment-btn")
    const BondBtn = document.getElementById("bond-btn")
    const backBtnInvestment = document.getElementById("back-btn-investment")
    const backBtnBond = document.getElementById("back-btn-bond")


    // Investment fields
    const depositInput = document.getElementById("deposit")
    const interestRateInput = document.getElementById("interest-rate")
    const termInput = document.getElementById("term")
    const interestTypeInput = document.getElementById("interest-type")
    const investmentResult = document.getElementById("investment-result")

    // Bond fields
    const houseValueInput = document.getElementById("house-value")
    const annualInterestRateInput = document.getElementById("annual-interest-rate")
    const termMonthsInput = document.getElementById("term-months")
    const bondResult = document.getElementById("bond-result")

    // Investment button event handler
    investmentBtn.addEventListener("click", function () {
        welcomeScreen.style.display = "none"
        investmentScreen.style.display = "block"
    })

    // Bond button event handler
    BondBtn.addEventListener("click", function () {
        welcomeScreen.style.display = "none"
        bondScreen.style.display = "block"
    })

    // Back button for investment screen
    backBtnInvestment.addEventListener("click", function () {
        investmentScreen.style.display = "none"
        welcomeScreen.style.display = "block"
    })

    // Back button for bond screen
    backBtnBond.addEventListener("click", function () {
        bondScreen.style.display = "none"
        welcomeScreen.style.display = "block"
    })
})