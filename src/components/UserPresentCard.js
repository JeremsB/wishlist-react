import {IoEyeOutline, IoGiftOutline, IoGiftSharp} from "react-icons/io5";
import React from "react";
import PresentCard from "./PresentCard";
import PropTypes from "prop-types";

function UserPresentCard(props){

    return(
        <div className="bg-primary-green mb-3 rounded-lg p-2 text-saffron-50">
            <div className="text-center border-b-2 border-saffron-50">
                <strong>{props.name}</strong>
            </div>
            {props.presents.length !== 0 ?
                props.presents?.map((present, index) => (
                    <div key={present.id}>
                        <PresentCard
                            id={present.id}
                            url={present.url}
                            description={present.description}
                            bought={present.bought}
                            label={present.label}
                        />
                    </div>
                ))
            :
                <div className="text-center pt-2">
                    <strong>Aucun cadeau à afficher pour le moment</strong>
                </div>
            }

        </div>
    )
}
UserPresentCard.propTypes = {
    name: PropTypes.string,
    presents: PropTypes.array
};
export default UserPresentCard
