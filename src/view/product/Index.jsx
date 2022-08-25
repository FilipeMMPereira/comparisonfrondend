import React, { useEffect, useState } from 'react'
import Axios from '../../api/config'


function Product() {
    const [products, setProducts] = useState([1, 2, 3])
    useEffect(() => {
        Axios.get('/products').then(doc => {
            console.log(doc.data.result)
            setProducts(doc.data.result)
        }).catch(error => { console.log(error) })
    }, [])

    return (
        <main>

            {/* ----------------------- HEADER ---------------------------------- */}
            <section className="jumbotron jumbotron-fluid ">
                <article className="container">
                    <section>
                        <h1 className="display-4 font-weight-bold ">Product</h1>
                        {/* <p className="lead ">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
                    </section>
                </article>
            </section>

            {/* -------------------------- END HEADER-------------------------------- */}

            {/* -------------------------- BODY ------------------------------------- */}

            <section className="container">
                {/* ---------------- BASIC INFO  --------------------------------- */}
                <section className="row mt-5">
                    <article className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <section className="row align-items-center justify-content-center">
                                    <article className="col-md-6">
                                        <h4> Categories: 1</h4>
                                    </article>
                                    <article className="col-md-2">
                                        <i className="fa fa-list-alt fa-2x"></i>
                                    </article>
                                </section>

                            </div>
                        </div>
                    </article>
                    <article className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <section className="row align-items-center justify-content-center">
                                    <article className="col-md-6">
                                        <h4> Products: 2</h4>
                                    </article>
                                    <article className="col-md-2">
                                        {/* <i className="fa fa-list-alt fa-2x"></i> */}
                                        <i className="fa fa-chart-line fa-2x"></i>
                                    </article>
                                </section>

                            </div>
                        </div>
                    </article>
                    <article className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <section className="row justify-content-center">
                                    <article className="col-md-6">
                                        <h4> Price: 0</h4>
                                    </article>
                                    <article className="col-md-2 ">
                                        <div className="bg-dark rounded-circle" style={{ width: '37px', height: '37px' }}>
                                            <div className="text-center " style={{ paddingTop: '3px' }}>
                                                <h4 className="font-weight-bold text-white">$</h4>
                                            </div>
                                        </div>

                                    </article>
                                </section>

                            </div>
                        </div>
                    </article>
                </section>
                {/* ---------------- END BASIC INFO ------------------------------ */}


                {/* ---------------- PHONE LIST ---------------------------------- */}
                <section className="row mt-5 mb-5">
                    {products.map((product,index) => {
                        return (
                            <article className="col-md-6 mt-3 mb-3" key={index}>
                                <div className="card">
                                    <div className="card-body">
                                        <section className="row align-items-center">
                                            <article className="col-md-5">
                                                <img src={product.image} alt="" className="product-image" />
                                            </article>
                                            <article className="col-md-7">
                                                <ul className="list-group">
                                                    <li className="list-group-item"><span>Name:</span><h5> {product.name}</h5></li>
                                                    <li className="list-group-item">Price: <h5>{product.price} $</h5></li>
                                                </ul>

                                            </article>
                                        </section>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </section>
                {/* ---------------- END PHONE LIST ------------------------------ */}
            </section>

            {/* --------------------------------- END BODY --------------------------------------- */}

        </main>
    )
}

export default Product