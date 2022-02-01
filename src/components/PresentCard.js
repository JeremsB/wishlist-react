import {IoEyeOutline, IoGiftOutline, IoGiftSharp} from "react-icons/io5";
import React from "react";
import PropTypes from "prop-types";
import UserPresentCard from "./UserPresentCard";

function PresentCard(props){

    let test = 1

    return(
        <div className="bg-saffron-50/75 rounded-lg mt-2 p-2 text-black grid grid-cols-10 gap-1">
            <div className="col-span-8">
                <strong className="align-sub">{props.label}</strong>
            </div>
            <div className="col-span-1">
                <IoEyeOutline size="30px"/>
            </div>
            <div className="col-span-1">
                {props.bought === false ?
                    <IoGiftOutline size="30px"/>
                :
                    <IoGiftSharp size="30px"/>
                }
            </div>
        </div>
    )
}
PresentCard.propTypes = {
    label: PropTypes.string,
    bought: PropTypes.bool
};
export default PresentCard
