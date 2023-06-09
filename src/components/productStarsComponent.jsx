import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

/**
 * Component for displaying product stars counter
 * @param stars - start count [0 - 5]
 * @param size - star icon size
 * @returns {*}
 * @constructor
 */
function ProductStarsComponent({stars,size}) {
    const iterator=[1,2,3,4,5];
    return(
        <div className={"flex justify-center"}>
            {
                iterator.map((i)=>{
                    return (<FontAwesomeIcon size={size} icon={faStar} className={ i > Math.floor(stars) ? "text-gray-400":"text-yellow-500"} />);
                })
            }
        </div>
    );
}
export default ProductStarsComponent;