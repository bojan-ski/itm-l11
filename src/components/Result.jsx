import { useGlobalContext } from '../context'

const Result = () => {
    const { currency, updateCurrency, convertedAmount } = useGlobalContext()

    return (
        <div className='result'>
            <button className='btn' onClick={updateCurrency}>
                Convert
            </button>

            <div>
                <h2>New Amount:</h2>

                {convertedAmount > 0 ? 
                    <h3>
                        {convertedAmount} {currency.toUpperCase()}
                    </h3>
                    :
                    <h3>
                        Please enter amount you wish to convert
                    </h3>
            }
            </div>
        </div>
    )
}

export default Result