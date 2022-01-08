import React from "react";
import cartContext from "./cart-context";
import { useReducer } from "react";
import { REMOVE_FROM_CART, MODIFY, EMPTY_CART, ADD_TO_CART } from "./actions";
const cartReducer = (state, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			const { payload } = action;
			const cartItems = state.items.concat(payload.payload);
			localStorage.setItem("cartItems", JSON.stringify(cartItems));
			return {
				totalAmount: state.totalAmount + payload.price,
				items: cartItems,
			};
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
	const modifyQuantity = (id) => {
		dispatch({ type: MODIFY, payload: id });
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
