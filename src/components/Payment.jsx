import CurrencyType from './CurrencyType'
import PayPal from './PayPal'

const Payment = () => {
    return (
        <section className='payment'>
            <PayPal />           
            <CurrencyType/>
        </section>
    )
}

export default Payment