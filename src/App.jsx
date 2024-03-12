import { AppProvider } from './context';
import Payment from "./components/Payment"
import Result from './components/Result';
import CreateUser from './components/CreateUser';

function App() {  
  return (
    <AppProvider>
      <>
        <div className="container">
          <CreateUser/>
          <Payment />
          <Result />
        </div>
      </>
    </AppProvider>
  )
}

export default App
