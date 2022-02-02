import React from "react";
import {Link} from "react-router-dom";

function MyList(props){

    return(
        <div className="min-h-screen">
            <div className="relative">
                <div className="sticky top-0 left-0 right-0 pt-3 px-3 grid grid-cols-10 gap-1">
                    <Link to="/presents" className="text-saffron-50 rounded-lg bg-primary-green p-2 col-start-8 col-span-3 text-center hover:bg-secondary-green">
                        Listes
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MyList
