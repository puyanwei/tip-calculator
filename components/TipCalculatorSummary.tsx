export function TipCalculatorSummary() {
  const totalPerPerson = 0
  const totalAmount = 0
  return (
    <div>
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

      <button>RESET</button>
    </div>
  )
}
