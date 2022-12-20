import { useState } from "react";

const ItemCount = ({ initialStock }) => {

    const [amount, setAmount] = useState(1);
    const [stock, setStock] = useState(initialStock);

    console.log(stock);

    const add = () => {
            setAmount(amount + 1);
    }

    const subtract = () => {
            setAmount(amount - 1);
    }

    const onAdd = () => {
        if (amount <= stock) {
            setStock(stock - amount);
            console.log('Agregaste ' + amount + ' unidades al carrito');
        }
    }

    return (
        <>
            <div className="py-5">
                <p className="text-sm">Stock: {stock}</p>
                <div className="flex px-3 my-3 p-1 justify-between items-center border rounded-md bg-white">
                    <div>
                        <button className="text-2xl font-semibold text-sky-600" disabled={amount <= stock}
                            onClick={subtract}>
                            -
                        </button>
                    </div>
                    <div>
                        <p>{amount}</p>
                    </div>
                    <div>
                        <button className="text-2xl font-semibold text-sky-600" disabled={amount >= stock}
                            onClick={add}>
                            +
                        </button>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <button className="py-2 px-4 bg-red-400 hover:bg-red-600 shadow-lg shadow-red-200 rounded-l-xl text-slate-50 font-medium"
                        onClick={onAdd}>
                        Agregar al carrito
                    </button>
                    <button className="py-2 px-4 bg-slate-400 hover:bg-slate-600 shadow-lg shadow-slate-300 rounded-r-xl text-slate-50 font-medium">
                        Ver carrito
                    </button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;