import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, sold, onAdd }) => {

    const [quantity, setQuantity] = useState(1);
    const [itemStock, setItemStock] = useState(0);
    const [soldOut, setSoldOut] = useState(false);
    const [stockAlert, setstockAlert] = useState(false);

    useEffect(() => {
        setItemStock(stock);
    }, [stock])

    const add = () => {
        (quantity < itemStock) && setQuantity(quantity + 1);
    }

    const subtract = () => {
        (quantity > 1) && setQuantity(quantity - 1);
    }


    const addToCart = (quantity) => {
        if (quantity > itemStock) {
            setstockAlert(true);
            return;
        }
        setItemStock(itemStock - quantity);
        setSoldOut(true);
        onAdd(quantity);
    }

    return (
        <>
            <div className="py-5">
                {
                    (!stockAlert) ?
                        <>
                            <div className="text-sm">Stock: {itemStock}</div>
                            <div className="text-sm font-semibold mb-4">{sold} personas compraron este producto</div>
                        </>
                        :
                        <div className="text-sm font-bold text-red-500">No hay stock suficiente</div>
                }
                {
                    (!soldOut) ?
                        <div className="flex px-3 my-3 p-1 justify-between items-center border rounded-md bg-white">
                            <div>
                                <button className="text-2xl font-semibold text-sky-600"
                                    onClick={subtract}>
                                    -
                                </button>
                            </div>
                            <div>
                                <p>{quantity}</p>
                            </div>
                            <div>
                                <button className="text-2xl font-semibold text-sky-600"
                                    onClick={add}>
                                    +
                                </button>
                            </div>
                        </div>
                        : null
                }
                <div className="flex flex-row ">
                    {
                        soldOut ?
                            <Link to={'/cart'} className="w-1/2 py-2 px-4 bg-lime-500 hover:bg-lime-600 shadow-lg shadow-red-200 rounded-l-md text-slate-50 font-medium text-center">
                                Terminar compra
                            </Link>
                            :
                            <button className="w-1/2 py-2 px-4 bg-red-400 hover:bg-red-600 shadow-lg shadow-red-200 rounded-l-md text-slate-50 font-medium text-center"
                                onClick={() => { addToCart(quantity) }}>
                                Agregar al carrito
                            </button>
                    }
                    {
                        soldOut ?
                            <Link to={'/'} className="w-1/2 py-2 px-4 bg-slate-400 hover:bg-slate-600 shadow-lg shadow-slate-300 rounded-r-md text-slate-50 font-medium text-center">
                                Seguir comprando
                            </Link>
                            :
                            <Link to={'/cart'} className="w-1/2 py-2 px-4 bg-slate-400 hover:bg-slate-600 shadow-lg shadow-slate-300 rounded-r-md text-slate-50 font-medium text-center">
                                Ver carrito
                            </Link>
                    }

                </div>
            </div>
        </>
    )
}


export default ItemCount;