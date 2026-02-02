
import { useEffect, useState } from "react"
import { Link } from "react-router"
import { useBudget } from "../Context/BudgetContext"

function Products() {
    const [products, setProducts] = useState([])
    const { budget } = useBudget()

    console.log("Il budget è attivo?", budget);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    let filteredProducts = products;

    if (budget === true) {
        filteredProducts = products.filter(product => product.price <= 30);
    }


    return (
        <div>
            <h1>Prodotti</h1>

            {filteredProducts.map(product => (
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



