import { TippingSummary } from "./TippingSummary"

export function Calculator() {
  return (
    <div className="bg-white rounded-t-xl flex flex-col gap-4 p-4">
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

      <TippingSummary />
    </div>
  )
}
