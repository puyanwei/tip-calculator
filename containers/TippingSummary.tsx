import { Button } from "../components/Button"

interface TippingSummary {
  className?: string
  billAmount: number
  numberOfPeople: number
  tipPercentage: number
  handleReset: () => void
}

export function TippingSummary({
  className,
  billAmount,
  numberOfPeople,
  tipPercentage,
  handleReset,
}: TippingSummary) {
  const resolvedTipPerPerson = (billAmount * (tipPercentage / 100)) / numberOfPeople
  const tipPerPerson =
    resolvedTipPerPerson === Infinity || isNaN(resolvedTipPerPerson) ? 0 : resolvedTipPerPerson

  const resolvedTotalSplit = billAmount / numberOfPeople + tipPerPerson
  const totalSplit =
    resolvedTotalSplit === Infinity || isNaN(resolvedTotalSplit) ? 0 : resolvedTotalSplit

  return (
    <div className={`rounded-xl p-6 bg-dark-cyan text-white my-2 lg:flex lg:flex-col ${className}`}>
      <div className="grid grid-cols-2">
        <div className="my-4">
          <div className="text-base font-semibold">Tip Amount</div>
          <div className="text-sm font-light opacity-50">/ person</div>
        </div>
        <div className="text-right text-3xl my-4 text-cyan">${tipPerPerson.toFixed(2)}</div>
      </div>
      <div>
        <div className="grid grid-cols-2 mb-4">
          <div className="my-4">
            <div className="text-base font-semibold">Total</div>
            <div className="text-sm font-light opacity-50">/ person</div>
          </div>
          <div className="text-right text-3xl my-4 text-cyan">${totalSplit.toFixed(2)}</div>
        </div>
      </div>
      <div className="lg:flex lg:flex-grow" />
      <Button onClick={handleReset} theme="light">
        RESET
      </Button>
    </div>
  )
}
