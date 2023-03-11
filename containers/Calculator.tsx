import { ChangeEvent, MouseEvent, MouseEventHandler, useState } from "react"
import { Button } from "../components/Button"
import { InputBox } from "../components/InputBox"
import { Label } from "../components/Label"
import { TippingSummary } from "./TippingSummary"

export function Calculator() {
  const [tipPercentage, setTipPercentage] = useState(0)
  const [billAmount, setBillAmount] = useState(0)
  const [numberOfPeople, setNumberOfPeople] = useState(0)
  const tipPercentages = ["5%", "10%", "15%", "25%", "50%"]

  function handleBillAmount(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.valueAsNumber)
    setBillAmount(e.target.valueAsNumber)
  }

  function handleTipPercentage(e: MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement
    const percentage = target.innerText
    const [number, percentageSymbol] = percentage.split("%")
    setTipPercentage(parseInt(number))
  }

  function handleNumberOfPeople(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.valueAsNumber)
    setNumberOfPeople(e.target.valueAsNumber)
  }

  console.log({ tipPercentage })

  return (
    <div className="bg-white rounded-t-xl flex flex-col gap-4 p-8 text-xl">
      <div className="flex flex-col">
        <Label>Bill</Label>
        <InputBox
          type="number"
          icon="dollar"
          value={billAmount}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleBillAmount}
        />
      </div>

      <div>
        <Label>Select Tip %</Label>
        <div className="grid grid-cols-2 gap-4 mt-2">
          {tipPercentages.map((tipPercentage) => (
            <Button onClick={handleTipPercentage} key={tipPercentage}>
              {tipPercentage}
            </Button>
          ))}
          <InputBox
            className="bg-white"
            type="number"
            placeholder="Custom"
            onChange={() => console.log("custom tip")}
            value={tipPercentage}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <Label>Number of People</Label>
        <InputBox
          type="number"
          icon="people"
          value={numberOfPeople}
          onChange={() => handleNumberOfPeople}
        />
      </div>

      <TippingSummary />
    </div>
  )
}
