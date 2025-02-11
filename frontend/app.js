document.addEventListener("DOMContentLoaded", function() {
    const welcomeScreen = document.getElementById("welcome-screen")
    const investmentScreen = document.getElementById("investment-screen")
    const bondScreen = document.getElementById("bond-screen")

    const investmentBtn = document.getElementById("investment-btn")
    const BondBtn = document.getElementById("bond-btn")
    const backBtnInvestment = document.getElementById("back-btn-investment")
    const backBtnBond = document.getElementById("back-btn-bond")

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