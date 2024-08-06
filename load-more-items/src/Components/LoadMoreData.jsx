import React, { useEffect, useState } from 'react';
import './Styles.css'
const LoadMoreData = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disable, setDisable] = useState(false)

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const result = await response.json();

            if (result && result.products && result.products.length) {
                setProducts((prevProducts) => [...prevProducts, ...result.products]);
            }
            setLoading(false);
        } catch (e) {
            console.error(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count]);

    useEffect(() => {
        if (products && products.length === 100) setDisable(true)
    }, [products])
    if (loading) {
        return <div>Loading Data! Please Wait</div>;
    }

    return (
        <div className='container'>
            <div className='product-container'>
                {products && products.length ?
                    products.map(item => (
                        <div className="product" key={item.id}>
                            <img src={item.images[0]} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))
                    : <div>No Products Found</div>
                }
            </div>
            <div className='button-container'>
                <button disabled={disable} onClick={() => setCount(count + 1)}>Load More Products</button>
                {disable ? <p>"U have reached max Products"</p> : null}
            </div>
        </div>
    );
}

export default LoadMoreData;
