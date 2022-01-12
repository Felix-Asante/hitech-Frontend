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
			const totalAmount = state.totalAmount + Number(payload.payload.price);

			localStorage.setItem("cartItems", JSON.stringify(cartItems));
			localStorage.setItem("tt", JSON.stringify(totalAmount));
			return {
				totalAmount: totalAmount,
				items: cartItems,
			};

		case MODIFY:
			const { id, actionType } = action.payload;
			const itemIndex = state.items.findIndex((item) => item.id === id);
			let quantity = Number(state.items[itemIndex].qty);
			let totalAmounts;
			const price = Number(state.items[itemIndex].price);

			if (actionType === "INCREASE") {
				state.items[itemIndex].qty = quantity + 1;
				totalAmounts = state.totalAmount + price;
				localStorage.setItem("cartItems", JSON.stringify(state.items));
			} else {
				totalAmounts = state.totalAmount - price;
				if (quantity === 1) {
					state.items.splice(itemIndex, 1);
				} else {
					state.items[itemIndex].qty = --quantity;
				}
				localStorage.setItem("cartItems", JSON.stringify(state.items));
			}
			console.log("mtt", totalAmount);
			localStorage.setItem("tt", JSON.stringify(totalAmounts));

			return {
				totalAmount: totalAmounts,
				items: state.items,
			};
		case REMOVE_FROM_CART:
			const key = action.payload;
			const indexOfItem = state.items.findIndex((item) => key === item.id);
			let total, items;
			if (indexOfItem < 0) {
				total = state.totalAmount;
				items = state.items;
			} else {
				const price =
					Number(state.items[indexOfItem].qty) *
					Number(state.items[indexOfItem].price);
				total = state.totalAmount - price;
				items = state.items.filter((item) => item.id !== key);
			}
			localStorage.setItem("cartItems", JSON.stringify(items));
			localStorage.setItem("tt", JSON.stringify(total));

			return { totalAmount: total, items: items };

		default:
			return { totalAmount: state.totalAmount, items: state.items };
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
		console.log("dispatch modify");
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
