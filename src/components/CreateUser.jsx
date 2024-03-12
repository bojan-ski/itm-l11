import { useEffect, useReducer } from 'react';
import { initialUserState, userReducer } from '../reducer/User';

const CreateUser = () => {
    const [userState, dispatch] = useReducer(userReducer, initialUserState())

    const saveUser = () => {
        if (userState.username === null || userState.username.trim() === '' || userState.money === null) {
            console.log('bad data provided');
            return
        }
        dispatch({ type: "SET_USER_CREATED", payload: true })
    }

    useEffect(() => {
        if(userState.isUserCreated){
            localStorage.setItem('user', JSON.stringify(userState))
        }
    }, [userState])

    return (
        <div className='createUser'>
            {!userState.isUserCreated && (
                <form>
                    <input type="text" placeholder='Enter your username' onInput={(e) => dispatch({ type: "SET_USERNAME", payload: e.target.value })} />
                    <input type="number" placeholder='Enter your money' onInput={(e) => dispatch({ type: "SET_MONEY", payload: +e.target.value })} />

                    <button type='button' onClick={saveUser}>
                        Create User
                    </button>
                </form>
            )}
        </div>
    )
}

export default CreateUser