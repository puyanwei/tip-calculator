import { Button } from "../components/Button"

export function TippingSummary() {
  const totalPerPerson = 0
  const totalAmount = 0

  function handleResetClick() {
    console.log("handleResetClick")
  }
  return (
    <div className="rounded-xl p-6 bg-dark-cyan text-white my-2">
      <div className="grid grid-cols-2">
        <div className="my-4">
          <div className="text-base font-semibold">Tip Amount</div>
          <div className="text-sm font-light opacity-50">/ person</div>
        </div>
        <div className="text-right text-3xl my-4 text-cyan">${totalPerPerson}</div>
      </div>
      <div>
        <div className="grid grid-cols-2 mb-4">
          <div className="my-4">
            <div className="text-base font-semibold">Total</div>
            <div className="text-sm font-light opacity-50">/ person</div>
          </div>
          <div className="text-right text-3xl my-4 text-cyan">${totalAmount}</div>
        </div>
      </div>

      <Button onClick={handleResetClick} theme="light">
        RESET
      </Button>
    </div>
  )
}
