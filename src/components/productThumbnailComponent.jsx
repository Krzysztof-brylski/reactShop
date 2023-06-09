import React,{useContext} from "react";
import {AppContext} from "../appContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom"
import Alert from 'react-popup-alert'
import ProductStarsComponent from "./productStarsComponent";
import {useAlert} from "react-alert";

/**
 * component for displaying post thumbnail in home page
 * @param product - product obj
 * @returns {*}
 * @constructor
 */
function PostThumbnailComponent({product}) {
    const {addItem,checkout}=useContext(AppContext);
    const alert=useAlert();
    const AddToCart=()=>{
        let res = addItem(product);
        alert.success(res.message);
    };

    return(
        <div className={"p-5 m-2 flex flex-col "}>
            <Link to={`/product/${product.id}`} className={"flex justify-center"}>
                <img src={`https://api.flotiq.com${product.product_images[0].url}`}  style={{width:"250px",height:"300px"}} className={"border p-1 border-gray-200"}/>
            </Link>
            <h2 className={"mt-1 font-semibold text-xl h-fit"}>{product.product_name}</h2>
            <h5 className={"mb-1 font-normal text-md h-fit capitalize"}>#{product.tag[0].tag_name}</h5>
            <ProductStarsComponent size={"lg"} stars={product.product_score}/>

            <span className={"my-2 font-bold text-xl"}>${product.product_price}</span>

            <button className={"px-4 py-3 bg-black text-white rounded-xl hover:bg-gray-300 hover:text-black"} onClick={AddToCart}>
                Add to cart
                <FontAwesomeIcon icon={faCartShopping} className={"text-gray-500 mx-2"}/>
            </button>
        </div>
    );
}
export default PostThumbnailComponent;