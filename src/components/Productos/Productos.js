import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import './Productos.css'

const Productos = () => {
    const [productsList, setProductsList] = useState(JSON.parse(localStorage.getItem("productos")));
    const eliminar = (element) => {
        setProductsList(productsList.filter(selec => selec.id !== element.id))
    }
    const eliminarTodo = () => {
        setProductsList([])
    }
    return (
        <>
            <div className='container mt-4'>
                <h2>Productos</h2>
                <Link to="/"><button className="btn btn-success me-3">Agregar +</button></Link>
                <button className="btn btn-danger" onClick={() => eliminarTodo()}>Eliminar todo</button>
                <div className='row border-top border-bottom mt-4 p-2'>
                    <div className='col-2 fw-bolder'>#</div>
                    <div className='col-3 fw-bolder'>Nombre del producto</div>
                    <div className='col-2 fw-bolder'>Cantidad</div>
                    <div className='col-2 fw-bolder'>Precio unitario</div>
                    <div className='col-2 fw-bolder'>Precio Final</div>
                    <div className='col-1 fw-bolder'>Acción</div>
                </div>
                {productsList.length <= 0 ?
                    <div className='d-flex justify-content-center mt-4'>
                        <h1>No hay productos, por favor ingrese uno.</h1>
                    </div>
                    :
                    <>
                        {productsList.map((producto, index) => (
                            <div className='row border-top border-bottom mt-4 p-2' key={producto.id}>
                                <div className='col-2 fw-bolder'>{index + 1}</div>
                                <div className='col-3 fw-bolder'>{producto.name}</div>
                                <div className='col-2 fw-bolder'>{producto.cantidad}</div>
                                <div className='col-2 fw-bolder'>${producto.precio}</div>
                                <div className='col-2 fw-bolder'>${producto.precio*producto.cantidad}</div>
                                <div className='col-1 fw-bolder'>
                                    <button type="button" className='btn btn-danger mr-auto p-2 ' style={{ height: "40px", width: "40px", border: "2px solid black" }} onClick={() => eliminar(producto)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </>
                }
            </div>
        </>
    );
}

export default Productos;