import React from "react";
import cartContext from "./cart-context";
import { useReducer } from "react";
import { REMOVE_FROM_CART, MODIFY, EMPTY_CART, ADD_TO_CART } from "./actions";
const cartReducer = (state, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			const { payload } = action;
			const cartItems = state.items.concat({
				...payload.payload,
				alreadyAddedToCart: true,
			});

			localStorage.setItem("cartItems", JSON.stringify(cartItems));
			return {
				totalAmount: state.totalAmount + payload.price,
				items: cartItems,
			};

		case MODIFY:
			const { id, actionType } = action.payload;
			const itemIndex = state.items.findIndex((item) => item.id === id);
			let quantity = Number(state.items[itemIndex].qty);
			let totalAmount;
			const price = Number(state.items[itemIndex].price);

			if (actionType === "INCREASE") {
				state.items[itemIndex].qty = quantity + 1;
				totalAmount = state.totalAmount + price;
				localStorage.setItem("cartItems", JSON.stringify(state.items));
				return {
					totalAmount: totalAmount,
					items: state.items,
				};
			} else {
				totalAmount = state.totalAmount - price;
				if (quantity === 1) {
					state.items.splice(itemIndex, 1);
				} else {
					state.items[itemIndex].qty = --quantity;
				}
				localStorage.setItem("cartItems", JSON.stringify(state.items));

				return {
					totalAmount: totalAmount,
					items: state.items,
				};
			}

		default:
			console.log("NO MATCH");
	}
};
const CartProvider = (props) => {
	const initialState = {
		items: JSON.parse(localStorage.getItem("cartItems")) || [],
		totalAmount: 0,
	};
	const [cart, dispatch] = useReducer(cartReducer, initialState);

	const addToCart = (item) => {
		dispatch({ type: ADD_TO_CART, payload: item });
	};
	const modifyQuantity = (id, actionType) => {
		dispatch({ type: MODIFY, payload: { id, actionType } });
	};
	const removeFromCart = (id) => {
		dispatch({ type: REMOVE_FROM_CART, payload: id });
	};
	const emptyCart = () => {
		dispatch({ type: EMPTY_CART });
	};

	const contextValue = {
		items: cart.items,
		totalAmount: cart.totalAmount,
		modifyQuantity: modifyQuantity,
		removeFromCart: removeFromCart,
		emptyCart: emptyCart,
		addToCart: addToCart,
	};
	return (
		<cartContext.Provider value={contextValue}>
			{props.children}
		</cartContext.Provider>
	);
};

export default CartProvider;
