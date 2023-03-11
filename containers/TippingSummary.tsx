import { Button } from "../components/Button"

export function TippingSummary() {
  const totalPerPerson = 0
  const totalAmount = 0

  function handleResetClick() {
    console.log("handleResetClick")
  }
  return (
    <div className=" rounded-xl p-4 bg-dark-cyan text-white">
      <div>
        <div>
          <div>Tip Amount</div>
          <div>/ person</div>
        </div>
        <div>{totalPerPerson}</div>
      </div>
      <div>
        <div>
          <div>
            <div>Total</div>
            <div>/ person</div>
          </div>
          <div>{totalAmount}</div>
        </div>
      </div>

      <Button onClick={handleResetClick} theme="light">
        RESET
      </Button>
    </div>
  )
}
