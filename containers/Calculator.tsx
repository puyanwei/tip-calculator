import { Button } from "../components/Button"
import { InputBox } from "../components/InputBox"
import { TippingSummary } from "./TippingSummary"

export function Calculator() {
  const tipPercentages = ["5%", "10%", "15%", "25%", "50%"]

  function handleTipPercentageClick() {
    console.log("handleTipPercentageClick")
  }
  return (
    <div className="bg-white rounded-t-xl flex flex-col gap-4 p-4">
      <div>
        <label>Bill</label>
        <InputBox placeholder="0" type="number" />
      </div>

      <div>
        <label>Select Tip %</label>
        <div className="grid grid-cols-2 gap-4">
          {tipPercentages.map((tipPercentage) => (
            <Button onClick={handleTipPercentageClick} key={tipPercentage}>
              {tipPercentage}
            </Button>
          ))}
          <InputBox type="number" placeholder="Custom" />
        </div>
      </div>

      <div>
        <label>Number of People</label>
        <InputBox type="number" placeholder="0" />
      </div>

      <TippingSummary />
    </div>
  )
}
