import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userProfile } from '../redux/actions';
import AccountSection from "./AccountSection";

const MainUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.userLogin.token);
    const { firstName = '', lastName = '' } = useSelector((state) => state.userProfile);

    useEffect(() => {
        if (token) {
            dispatch(userProfile(token));
        }
    }, [dispatch, token]);

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
