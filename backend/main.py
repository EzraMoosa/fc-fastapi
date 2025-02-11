from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credential=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class InvestmentInput(BaseModel):
    deposit: float
    interest_rate: float
    term: int
    interest_type: str


class BondInput(BaseModel):
    house_value: float
    annual_interest_rate: float
    term_months: int


@app.post("/calculate_investment")
def calculate_investment(data: InvestmentInput):
    if data.interest_type == 'simple':
        total = data.deposit * (1 + (data.interest_rate / 100) * data.term)
    else:
        total = data.deposit * ((1 + (data.interest_rate / 100)) ** data.term)
    return {"total": round(total, 2)}


@app.post("/calculate_bond")
def calculate_bond(data: BondInput):
    monthly_rate = (data.annual_interest_rate / 100) / 12
    repayment = (monthly_rate * data.house_value) / (1 - (1 + monthly_rate) ** -data.term_months)
    return {"monthly_repayment": round(repayment, 2)}