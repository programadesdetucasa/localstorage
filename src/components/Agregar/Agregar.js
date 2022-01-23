import './Agregar.css'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Agregar = () => {
    const [productName, setProductName] = useState('')
    const [productQuantity, setProductQuantity] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [products, setProducts] = useState([])
    const guardarDatos = (e) => {
        e.preventDefault()
        const product = ({ name: productName, cantidad: productQuantity, precio: productPrice, id: uuidv4() })
        setProducts([...products, product])
        setProductName('')
        setProductPrice('')
        setProductQuantity('')
    }
    useEffect(() => {
        if (products != [])
            localStorage.setItem('productos', JSON.stringify(products))
    }, [products])
    return (
       
            <div className='container mt-4'>
                <h2>Agregar producto</h2>
                <form onSubmit={(e) => guardarDatos(e)}>
                    <div className="mb-3">
                        <label className="form-label">Nombre del producto</label>
                        <input pattern="([^\s][A-zÀ-ž\s]+)" required="required" type="text" className="form-control" onChange={(e) => setProductName(e.target.value)} title='Al menos dos letras' value={productName} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Cantidad</label>
                        <input min="0" required="required" type="number" className="form-control" onChange={(e) => setProductQuantity(e.target.value)} value={productQuantity} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Precio</label>
                        <input min="0" required="required" type="number" className="form-control" onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />
                    </div>
                    <button type="submit" className="btn btn-success">Guardar</button>
                </form>
            </div>
       
    );
}

export default Agregar;