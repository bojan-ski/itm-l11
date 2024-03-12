import { createContext, useContext, useState } from "react";

const AppContext = createContext()

export const conversionRates = {
    usd: 110,
    euro: 117,
    gbp: 137,
    rub: 1.2
}

export const AppProvider = ({ children }) => {
    const [currency, setCurrency] = useState("usd")
    const [enteredAmount, setEnteredAmount] = useState(0)
    const [convertedAmount, setConvertedAmount] = useState(0)

    const updateCurrency = () =>{
        setConvertedAmount((enteredAmount / conversionRates[currency]).toFixed(2))
    }

    return <AppContext.Provider value={{ currency, setCurrency, setEnteredAmount, updateCurrency, convertedAmount }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)