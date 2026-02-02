import { createContext, useContext, useState } from "react";
// Creaiamo il contesto
const BudgetContext = createContext();

function BudgetProvider({ children }) {

    const [budget, setBudget] = useState(false);

    return (
        <BudgetContext.Provider
            value={{
                budget,
                setBudget,
            }}
        >
            {children}
        </BudgetContext.Provider>
    );
}

function useBudget() {
    const context = useContext(BudgetContext);
    return context;
}

export { BudgetProvider, useBudget }