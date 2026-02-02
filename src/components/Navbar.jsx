import { NavLink } from "react-router"
import { useBudget } from "../Context/BudgetContext"



function Navbar() {
    const { budget, setBudget } = useBudget()
    function toggleBudget() {
        console.log("imposto il budget")
        setBudget(!budget)
    }

    return (
        <nav>
            <ul>
                <li> <NavLink to="/">Home</NavLink></li>
                <li> <NavLink to="/about">Chi siamo</NavLink></li>
                <li> <NavLink to="/products">Prodotti</NavLink></li>
                <li> <button onClick={toggleBudget}>Budget Mode</button></li>
            </ul>
        </nav>
    )
}

export default Navbar
