import { AppProvider } from './context';
import Payment from "./components/Payment"
import Result from './components/Result';

function App() {
  return (
    <AppProvider>
      <>
        <div className="container">
          <Payment />
          <Result/>
        </div>
      </>
    </AppProvider>
  )
}

export default App
