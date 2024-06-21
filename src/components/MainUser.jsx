import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userProfile } from '../redux/actions';
import AccountSection from "./AccountSection";

const MainUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            dispatch(userProfile(token));
        }
    }, [dispatch]);

    const { firstName = '', lastName = '' } = useSelector((state) => state.userProfile);

    const handleEditClick = () => {
        navigate('/formulaire');
    };

    const welcomeMessage = `Welcome back ${firstName} ${lastName} !`;

    return (
        <main className="main-user bg-dark">
            <div className="header">
                <h1 className="header__h1">{welcomeMessage}</h1>
                <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <AccountSection />
            <AccountSection />
            <AccountSection />
        </main>
    );
};

export default MainUser;

/********window.addEventListener('storage', function(e) {
  //console.log(e.key, e.oldValue,e.newValue, e.url, e.storageArea);
}); */


