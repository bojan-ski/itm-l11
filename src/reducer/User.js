export const initialUserState = () => {
    const userData = JSON.parse(localStorage.getItem('user'))

    if (userData) {
        return {
            username: userData.username,
            money: userData.money,
            isUserCreated: userData.isUserCreated
        }
    } else {
        return {
            username: null,
            money: null,
            isUserCreated: false
        }
    }
}

export const userReducer = (state, action) => {
    switch (action.type) {
        case "SET_USERNAME":
            return { ...state, username: action.payload }
        case "SET_MONEY":
            return { ...state, money: action.payload }
        case "SET_USER_CREATED":
            return { ...state, isUserCreated: action.payload }
        default:
            return state
    }
}