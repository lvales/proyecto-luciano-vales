import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';

const formatNumber = (number) => new Intl.NumberFormat().format(Math.round(number));

const Cart = () => {

	const { cart, clear, removeItem, getTotalPrice } = useContext(CartContext);

	const clickRemove = (id) => removeItem(id);

	const clickClear = () => clear();

	return (
		<>
			<div className="container flex flex-col -mb-44 h-screen mx-auto px-10 lg:px-28 f">
				<div className="lg:text-2xl mt-10 text-center">Canasta de compras</div>
				{(cart.length === 0) ?
					<div className='h-full'>
						<img className='mx-auto' src='../assets/img/empty_cart.png' alt="Canasta de compras" />
						<div className="lg:text-2xl mt-10 text-center">Ups... la canasta esta vacia, vuelve pronto</div>
						<div className="mt-10 text-center"><Link className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-red bg-red-400 active:bg-red-500 hover:bg-red-600" to="/">Volver</Link></div>
					</div>
					:
					cart.map(item =>
						<div key={item.id} className="text-center lg:flex border-b mt-5 lg:mt-14 mb-3 lg:items-center lg:justify-between lg:gap-5">
							<Link to={`/item/${item.id}`}><img className="w-20 p-5 mx-auto" src={item.photo_min} alt="image_thumbnail" /></Link>
							<Link to={`/item/${item.id}`} className="text-lg lg:w-3/5 ml-3 lg:text-md">{item.title}</Link>
							<div className="my-4 lg:my-0 lg:w-1/5 lg:ml-3 lg:text-md text-center">Cantidad: {item.quantity}</div>
							<button onClick={() => clickRemove(item.id)}><BsTrash className="text-2xl" /></button>
							<div className="my-5 lg:my-0 lg:w-1/5 lg:ml-3 text-lg lg:text-right font-medium">{"$ " + formatNumber(item.price * item.quantity)}</div>
						</div>
					)
				}
				{((cart.length !== 0)) ?
					<>
						<div className="text-center lg:flex mb-5">
							<button onClick={clickClear} className="text-xs lg:text-left lg:text-sm text-blue-400 lg:mt-10 w-1/2">Vaciar carrito</button>
							<div className="text-sm lg:w-1/2 lg:text-right lg:text-xl font-medium  lg:mt-10">Total de la compra: $ {formatNumber(getTotalPrice())}</div>
						</div>
						<hr />
						<div className="text-center lg:text-right my-10">
							<Link to={'/'} className="mr-3 text-white bg-gray-400 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-50-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg shadow-gray-200">Seguir comprando</Link>
							<Link to={'/checkout'} className="text-white bg-red-400 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg shadow-red-200">Comprar ahora</Link>
						</div>
					</>
					: null
				}
			</div>
		</>
	)
}

export default Cart