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

    // Send data for investment to FastAPI
    async function calculateInvestment() {
        const data = {
            deposit: parseFloat(depositInput.value),
            interestRate: parseFloat(interestRateInput.value),
            term: parseInt(termInput.value),
            interest_type: interestTypeInput.value
        }

        const response = await fetch("http://127.0.0.1:8000/calculate_investment", {
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(data)
        })

        const result = await response.json()
        investmentResult.textContent = `Total investment: ZAR ${result.total}`
    }

    // Send data for bond to FastAPI
    async function calculateBond() {
        const data = {
            houseValue: parseFloat(houseValueInput.value),
            annualInterestRate: parseFloat(annualInterestRateInput.value),
            termMonths: parseInt(termMonthsInput.value)
        }

        const response = await fetch("http://127.0.0.1:8000/calculate_bond", {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(data)
        })

        const result = await response.json()
        bondResult.textContent = `Monthly repayment: ZAR ${result.montly_repayment}`
    }

    // Add event lister for changes
    document.getElementById("investment-screen").addEventListener("change", calculateInvestment)
    document.getElementById("bond-screen").addEventListener("change", calculateBond)
})