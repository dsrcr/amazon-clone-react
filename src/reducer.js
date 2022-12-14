export const initialState = {
    basket: [{
        id: 3,
        title: "New apple ipad pro 12 cali wifi 128gb silver 4th Generation",
        price: 598.99,
        rating: 4,
        image: ""
    }],
    user: null
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
            
        case 'REMOVE_FROM_BASKET':
            return { state };
    
        default:
            return state;
    }
}

export default reducer;