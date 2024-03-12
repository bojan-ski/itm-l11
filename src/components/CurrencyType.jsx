import { useGlobalContext, conversionRates } from '../context'

const CurrencyType = () => {
    const { setCurrency } = useGlobalContext()

    return (
        <div className='currencyType'>
            <label>Please select currency type:</label>

            <select onChange={(e) => setCurrency(e.target.value)} required>
                {Object.keys(conversionRates).map(currency => {
                    return <option key={currency} value={currency}>
                        {currency.toUpperCase()}
                    </option>
                })}
            </select>
        </div>
    )
}

export default CurrencyType