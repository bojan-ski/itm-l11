import { AppProvider } from './context';
import Payment from "./components/Payment"
import Result from './components/Result';
import { useReducer } from 'react';
import { initialUserState, userReducer } from './reducer/User';

function App() {
  const [userState, dispatch] = useReducer(userReducer, initialUserState)
  // console.log(state);
  // console.log(dispatch);

  // const [username, setUsername] = useState(null)
  // const [money, setMoney] = useState(null)
  // const [isUserCreated, setIsUserCreated] = useState(false)

  const saveUser = () => {
    if (userState.username === null || userState.username.trim() === '' || userState.money === null ) {
      console.log('bad data provided');
      return
    }
    dispatch({ type: "SET_USER_CREATED", payload: true })
  }

  return (
    <AppProvider>
      <>
        <div className="container">
          <Payment />

          {!userState.isUserCreated && (
            <form>
              <input type="text" placeholder='Enter your username' onInput={(e) => dispatch({ type: "SET_USERNAME", payload: e.target.value })} />
              <input type="number" placeholder='Enter your money' onInput={(e) => dispatch({ type: "SET_MONEY", payload: +e.target.value })} />

              <button type='button' onClick={saveUser}>
                Create User
              </button>
            </form>
          )}


          <Result />
        </div>
      </>
    </AppProvider>
  )
}

export default App
