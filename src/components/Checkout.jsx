import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { RiseLoader } from "react-spinners";
import { BsEmojiWink } from 'react-icons/bs';
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';

const CheckOut = () => {

  const { cart, clear, getTotalPrice } = useContext(CartContext);
  const [visible, setVisible] = useState(true);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [orderId, setOrderId] = useState();

  const spinner = () => {
    console.log('SPINNER');
    return (
      <div className="mt-5 text-center">
        <RiseLoader size={8} />
      </div>
    )
  }

  // Agregar orden a firebase
  const addOrder = () => {
    setVisible(false);
    const date = new Date();
    const newOrder = {
      buyer: { name: name, lasttName: lastName, email: email, phone: phone, message: message },
      items: cart.map(item => ({ id: item.id, title: item.title, price: item.price, quantity: item.quantity, total_price: item.quantity * item.price })),
      date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      total: getTotalPrice(),
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, newOrder).then((snapShot) => {
      setOrderId(snapShot.id);
      updateStock();
      clear();
    });

  }

  // Actualizar stock de productos y cantidad vendida
  const updateStock = () => {
    const db = getFirestore();
    cart.forEach(item => {
      const updateCollection = doc(db, 'items', item.id);
      updateDoc(updateCollection, { stock: (item.stock - item.quantity) })
      updateDoc(updateCollection, { sold_quantity: (item.sold_quantity + item.quantity) })
    });
  }


  return (
    <>
      {(visible) ?
        <div className="flex mt-10 mb-28 items-center justify-start bg-white px-10 lg:px-0">
          <div className="mx-auto w-full max-w-lg">
            <h1 className="text-4xl font-medium">Finalizar compra</h1>
            <p className="mt-3">Complete los siguientes datos para finalizar la compra</p>

            <form className="mt-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="relative z-0">
                  <input type="text" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required
                    onInput={(e) => { setName(e.target.value) }} />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Tu nombre</label>
                </div>
                <div className="relative z-0">
                  <input type="text" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required
                    onInput={(e) => { setLastName(e.target.value) }} />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Tu apellido</label>
                </div>
                <div className="relative z-0">
                  <input type="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required
                    onInput={(e) => { setEmail(e.target.value) }} />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Tu email</label>
                </div>
                <div className="relative z-0">
                  <input type="text" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required
                    onInput={(e) => { setPhone(e.target.value) }} />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Tu teléfono</label>
                </div>
                <div className="relative z-0 col-span-2">
                  <textarea rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "
                    onInput={(e) => { setMessage(e.target.value) }}></textarea>
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Mensaje para el vendedor</label>
                </div>
              </div>
              <div className='flex justify-end'>
                <button type='button' onClick={addOrder} className="mt-5 text-white bg-red-400 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg shadow-red-200">Finalizar compra</button>
              </div>
            </form>
          </div>
        </div>
        :
        <div className="h-screen -mb-56 flex mt-10 justify-start bg-white px-10 lg:px-0">
          <div className="mx-auto w-full max-w-lg text-center">
            <BsEmojiWink className="w-full text-6xl my-10" />
            <h1 className="text-2xl lg:text-4xl font-medium">Gracias por tu compra</h1>
            <p className="mt-3">El número de comprobante de tu compra es:</p>
            {(!orderId) ? spinner()
              : <>
                <p className="mt-3 mb-10 text-lg font-medium">{orderId}</p>
                <Link to='/' className="m-15 text-white bg-red-400 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg shadow-red-200">Volver</Link>
              </>
            }
          </div>
        </div>
      }
    </>
  )
}

export default CheckOut