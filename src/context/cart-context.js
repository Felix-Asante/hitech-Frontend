import React from "react";

const cartContext = React.createContext({
	totalAmount: 0,
	items: [],
	addToCart: (item) => {},
	modifyQuantity: (id) => {},
	removeFromCart: (id) => {},
	emptyCart: () => {},
});

export default cartContext;
