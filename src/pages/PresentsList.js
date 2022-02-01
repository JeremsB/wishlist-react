import React, {useEffect, useState} from 'react';
import UserPresentCard from "../components/UserPresentCard";
import {getOtherUsers} from "../store/actions/userAction";
import {useDispatch, useSelector} from "react-redux";

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
                <div className="sticky top-0 left-0 right-0 bg-azure-500">Contacts</div>
                {users != null ?
                    <div className="p-3">
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
