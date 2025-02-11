document.addEventListener("DOMContentLoaded", function() {
    const welcomeScreen = document.getElementById("welcome-screen");
    const investmentScreen = document.getElementById("investment-screen");
    const bondScreen = document.getElementById("bond-screen");

    const investmentBtn = document.getElementById("investment-btn");
    const bondBtn = document.getElementById("bond-btn");
    const backBtnInvestment = document.getElementById("back-btn-investment");
    const backBtnBond = document.getElementById("back-btn-bond");

    // Investment fields
    const depositInput = document.getElementById("deposit");
    const interestRateInput = document.getElementById("interest-rate");
    const termInput = document.getElementById("term");
    const interestTypeInput = document.getElementById("interest-type");
    const investmentResult = document.getElementById("investment-result");

    // Bond fields
    const houseValueInput = document.getElementById("house-value");
    const annualInterestRateInput = document.getElementById("annual-interest-rate");
    const termMonthsInput = document.getElementById("term-months");
    const bondResult = document.getElementById("bond-result");

    // Show different screens
    investmentBtn.addEventListener("click", function () {
        welcomeScreen.style.display = "none";
        investmentScreen.style.display = "block";
    });

    bondBtn.addEventListener("click", function () {
        welcomeScreen.style.display = "none";
        bondScreen.style.display = "block";
    });

    backBtnInvestment.addEventListener("click", function () {
        investmentScreen.style.display = "none";
        welcomeScreen.style.display = "block";
    });

    backBtnBond.addEventListener("click", function () {
        bondScreen.style.display = "none";
        welcomeScreen.style.display = "block";
    });

    // Send data for investment to FastAPI
    async function calculateInvestment() {
        const deposit = parseFloat(depositInput.value);
        const interestRate = parseFloat(interestRateInput.value);
        const term = parseInt(termInput.value);
        const interestType = interestTypeInput.value;

        if (isNaN(deposit) || isNaN(interestRate) || isNaN(term) || !interestType) {
            investmentResult.textContent = "Please fill in all fields correctly.";
            return;
        }

        const data = { deposit, interest_rate: interestRate, term, interest_type: interestType };

        try {
            const response = await fetch("http://127.0.0.1:8000/calculate_investment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`Server Error: ${response.status}`);
            }

            const result = await response.json();
            investmentResult.textContent = `Total Investment: ZAR ${result.total}`;
        } catch (error) {
            console.error("Error:", error);
            investmentResult.textContent = "An error occurred. Please try again.";
        }
    }

    // Send data for bond to FastAPI
    async function calculateBond() {
        const houseValue = parseFloat(houseValueInput.value);
        const annualInterestRate = parseFloat(annualInterestRateInput.value);
        const termMonths = parseInt(termMonthsInput.value);

        if (isNaN(houseValue) || isNaN(annualInterestRate) || isNaN(termMonths)) {
            bondResult.textContent = "Please fill in all fields correctly.";
            return;
        }

        const data = { house_value: houseValue, annual_interest_rate: annualInterestRate, term_months: termMonths };

        try {
            const response = await fetch("http://127.0.0.1:8000/calculate_bond", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`Server Error: ${response.status}`);
            }

            const result = await response.json();
            bondResult.textContent = `Monthly Repayment: ZAR ${result.monthly_repayment}`;
        } catch (error) {
            console.error("Error:", error);
            bondResult.textContent = "An error occurred. Please try again.";
        }
    }

    document.getElementById("calculate-investment").addEventListener("click", calculateInvestment);
    document.getElementById("calculate-bond").addEventListener("click", calculateBond);
});
