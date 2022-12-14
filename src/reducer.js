export const initialState = {
    basket: [{
        id: 4,
        title: "Dark Souls: Remastered (Nintendo Switch)",
        price: 39.99,
        rating: 5,
        image: "https://m.media-amazon.com/images/I/81QYu+NpCVL._AC_UY218_.jpg",
    }],
    user: null
}

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) =>
        item.price + amount, 0)

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            if (index >= 0) {
                // remove item
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove ${action.id}`)
            }
            return {
                ...state,
                basket: newBasket,
            };

        default:
            return state;
    }
}

export default reducer;