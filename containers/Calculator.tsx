import { ChangeEvent, MouseEvent, MouseEventHandler, useState } from "react"
import { Button } from "../components/Button"
import { InputBox } from "../components/InputBox"
import { Label } from "../components/Label"
import { TippingSummary } from "./TippingSummary"

export function Calculator() {
  const [tipPercentageChoice, setTipPercentageChoice] = useState(0)
  const [billAmount, setBillAmount] = useState(0)
  const [numberOfPeople, setNumberOfPeople] = useState(0)
  const [active, setActive] = useState(false)
  const tipPercentages = ["5%", "10%", "15%", "25%", "50%"]

  function handleBillAmount(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.valueAsNumber)
    setBillAmount(e.target.valueAsNumber)
  }

  function handleTipPercentage(e: MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement
    const percentage = target.innerText
    const [number, _percentageSymbol] = percentage.split("%")
    setTipPercentageChoice(parseInt(number))
  }

  function handleCustomTipPercentage(e: ChangeEvent<HTMLInputElement>) {
    setTipPercentageChoice(e.target.valueAsNumber)
  }

  function handleNumberOfPeople(e: ChangeEvent<HTMLInputElement>) {
    setNumberOfPeople(e.target.valueAsNumber)
  }

  console.log({ tipPercentageChoice, billAmount, numberOfPeople })

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
            <Button
              onClick={handleTipPercentage}
              key={tipPercentage}
              active={`${tipPercentageChoice}%` === tipPercentage}
            >
              {tipPercentage}
            </Button>
          ))}
          <InputBox
            className="bg-white"
            type="number"
            placeholder="Custom"
            onChange={handleCustomTipPercentage}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <Label>Number of People</Label>
        <InputBox
          type="number"
          icon="people"
          value={numberOfPeople}
          onChange={handleNumberOfPeople}
          min={1}
          step={1}
        />
      </div>

      <TippingSummary />
    </div>
  )
}
