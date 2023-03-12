import React from "react";
import "./Header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="header">
            {/* amazon logo */}
            <Link to="/">
                <img
                    className="header__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon-logo"
                />
            </Link>

            {/* search box */}
            <div className="header__search">
                {/* search field */}
                <input className="header__searchInput" type="text" />
                {/* search Icon */}
                <SearchOutlinedIcon className="header__searchIcon" />
            </div>
            {/* header nav */}
            <div className="header__nav">
                {/* sign in */}
                <div className="header__option">
                    <span className="header__optionLineOne">Hello, Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                {/* returns & orders */}
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                {/* prime */}
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                {/* cart */}
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketOutlinedIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
