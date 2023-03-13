import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
    const [{ basket }] = useStateValue();

    function currencyFormat(num) {
        return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }

    return (
        <div className="subtotal">
            <p>
                Subtotal ({basket.length} items):{" "}
                <strong>{currencyFormat(getBasketTotal(basket))}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
            </small>

            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
