import { Button } from "../components/Button"
import { InputBox } from "../components/InputBox"
import { Label } from "../components/Label"
import { TippingSummary } from "./TippingSummary"

export function Calculator() {
  const tipPercentages = ["5%", "10%", "15%", "25%", "50%"]

  function handleTipPercentageClick() {
    console.log("handleTipPercentageClick")
  }
  return (
    <div className="bg-white rounded-t-xl flex flex-col gap-4 p-8 text-xl">
      <div className="flex flex-col">
        <Label>Bill</Label>
        <InputBox placeholder="0" type="number" icon="dollar" />
      </div>

      <div>
        <Label>Select Tip %</Label>
        <div className="grid grid-cols-2 gap-4 mt-2">
          {tipPercentages.map((tipPercentage) => (
            <Button onClick={handleTipPercentageClick} key={tipPercentage}>
              {tipPercentage}
            </Button>
          ))}
          <InputBox className="bg-white" type="number" placeholder="Custom" />
        </div>
      </div>

      <div className="flex flex-col">
        <Label>Number of People</Label>
        <InputBox type="number" placeholder="0" icon="people" />
      </div>

      <TippingSummary />
    </div>
  )
}
