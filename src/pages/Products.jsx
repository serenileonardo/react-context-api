
import { useEffect, useState } from "react"
import { Link } from "react-router"

function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1>Prodotti</h1>

            {products.map(product => (
                <div key={product.id}>
                    <Link to={`/products/${product.id}`}>
                        <h3>{product.title}</h3>
                        <p>{product.price} €</p>
                    </Link>

                </div>
            ))}
        </div>
    )
}

export default Products



