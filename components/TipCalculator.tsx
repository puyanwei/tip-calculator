import { TipCalculatorSummary } from "./TipCalculatorSummary"

export function TipCalculator() {
  return (
    <div>
      <div>
        <label>Bill</label>
        <input type="number" />
      </div>

      <div>
        <label>Select Tip %</label>
        <button>5%</button>
        <button>10%</button>
        <button>15%</button>
        <button>25%</button>
        <button>50%</button>
        <input type="number" placeholder="Custom" />
      </div>

      <div>
        <label>Number of People</label>
        <input type="number" placeholder="Custom" />
      </div>

      <TipCalculatorSummary />
    </div>
  )
}
