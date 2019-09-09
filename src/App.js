import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContext } from "./contexts/ProductContext";
import {CartContext} from "./contexts/CartContext";

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		//why did I have to use 2 set of curly braces for the values
		<ProductContext.Provider value = {{products, addItem}}>
			<CartContext.Provider value = {{cart}}>
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			{/* without context */}
			{/* <Route
				exact
				path="/"
				render={() => (
					<Products
						products={products}
						addItem={addItem}
					/>
				)} */}
				{/* {with context} */}
				<Route exact path="/" component={Products} />
			/>

			{/* <Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/> */}
			<Route path ="/cart" component = {ShoppingCart}/>
		</div>
		</CartContext.Provider> 
		</ProductContext.Provider>
	);
}

export default App;
