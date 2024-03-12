import { useGlobalContext } from '../context'

const PayPal = () => {
    const { setEnteredAmount } = useGlobalContext()

    return (
        <div className='paypal'>
            <label >Please enter the amount in SRB DINAR:</label>
            <input type="number" onInput={(e) => setEnteredAmount(e.target.value)} required/>           
        </div>
    )
}

export default PayPal