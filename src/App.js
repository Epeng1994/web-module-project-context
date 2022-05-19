import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import {ProductContext} from './contexts/ProductContext'
import {CartContext} from './contexts/CartContext'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart(cart.concat(item))
	};

	const removeItem = id =>{
		setCart(cart.filter(a => a.id != id))
	}

	return (
		
			<div className="App">
				<Navigation cart={cart} />

				{/* Routes */}
				<Route exact path="/">
					<ProductContext.Provider value = {{products, addItem}}>
						<Products/>
					</ProductContext.Provider>
				</Route>

				<Route path="/cart">
					<CartContext.Provider value ={{cart, removeItem}}>
						<ShoppingCart cart={cart} />
					</CartContext.Provider>
				</Route>
			</div>
		
		
	);
}

export default App;
