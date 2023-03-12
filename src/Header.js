import React from "react";
import "./Header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

function Header() {
    return (
        <div className="header">
            {/* amazon logo */}
            <img
                className="header__logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon-logo"
            />
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
                <div className="header__optionBasket">
                    <ShoppingBasketOutlinedIcon />
                    <span className="header__optionLineTwo header__basketCount">
                        0
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Header;
