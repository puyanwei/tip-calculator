import { ChangeEvent, MouseEvent, MouseEventHandler, useState } from "react"
import { Button } from "../components/Button"
import { InputBox } from "../components/InputBox"
import { Label } from "../components/Label"
import { TippingSummary } from "./TippingSummary"

export function Calculator() {
  const [tipPercentageChoice, setTipPercentageChoice] = useState(0)
  const [billAmount, setBillAmount] = useState(0)
  const [numberOfPeople, setNumberOfPeople] = useState(0)
  const tipPercentages = ["5%", "10%", "15%", "25%", "50%"]

  function handleBillAmount(e: ChangeEvent<HTMLInputElement>) {
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

  function handleReset() {
    setTipPercentageChoice(0)
    setBillAmount(0)
    setNumberOfPeople(0)
  }

  return (
    <div className="bg-white rounded-xl flex flex-col gap-4 lg:gap-8 p-8 text-xl lg:grid lg:grid-cols-2 lg:max-w-5xl lg:mx-auto lg:mt-16">
      <div>
        <div className="flex flex-col">
          <Label>Bill</Label>
          <InputBox type="number" icon="dollar" value={billAmount} onChange={handleBillAmount} />
        </div>

        <>
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
        </>

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
      </div>

      <TippingSummary
        tipPercentage={tipPercentageChoice}
        billAmount={billAmount}
        numberOfPeople={numberOfPeople}
        handleReset={handleReset}
      />
    </div>
  )
}
