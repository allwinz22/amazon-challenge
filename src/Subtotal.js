import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
    const [{ basket, totalPrice }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <p>
                Subtotal ({basket?.length} items):{" "}
                <strong>
                    <CurrencyFormat
                        thousandSeparator={true}
                        prefix={"$"}
                        value={totalPrice}
                        displayType={"text"}
                    />
                </strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
            </small>

            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
