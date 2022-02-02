import React, {useEffect, useState} from 'react';
import UserPresentCard from "../components/UserPresentCard";
import {getOtherUsers} from "../store/actions/userAction";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

function PresentsList(props){

    const [mounted, setMounted] = useState(false);
    const dispatch = useDispatch();

    useEffect(async () => {
        if (!mounted) {
            await dispatch(getOtherUsers(localStorage.getItem("user_id")))
            setMounted(true);
        }
    }, [mounted, setMounted, getOtherUsers]);

    let users = useSelector((state) => state.users.others);

    return(
        <div className="min-h-screen">
            <div className="relative">
                <div className="sticky top-0 left-0 right-0 pt-3 px-3 grid grid-cols-10 gap-1">
                    <Link to="/my-list" className="text-saffron-50 rounded-lg bg-primary-green p-2 col-start-8 col-span-3 text-center hover:bg-secondary-green font-bold">
                        Ma liste
                    </Link>
                </div>
                {users != null ?
                    <div className="px-3 py-3">
                        {users?.map((user, index) => (
                            <div key={user.id}>
                                <UserPresentCard name={user.name} presents={user.presents}/>
                            </div>
                        ))}
                    </div>
                : ''}
            </div>
        </div>
    )
}

export default PresentsList
