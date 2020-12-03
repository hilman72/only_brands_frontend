import React from "react"
import "./SearchBar.style.scss"


function SearchBar(){
    return (
    <div class="SearchBar">

        <form>
        <label>
            <input type="text" />
        </label>
            <select>
                <option>
                    Coupons
                </option>
                <option>
                    Brands
                </option>
                <option>
                    Users
                </option>
            </select>
            <input type="submit" value="Search"/>
        </form>
    </div>
    )
}


export default SearchBar;