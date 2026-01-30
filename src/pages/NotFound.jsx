import { Link } from "react-router"

function NotFound() {
    return (
        <>
            <h1>ERROR 404 </h1>
            <Link to="/products">Torna ai prodotti</Link>
        </>
    )
}

export default NotFound