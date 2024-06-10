import React from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AccountSection from "./AccountSection";

const MainUser = () => {
    const navigate = useNavigate();
    const { firstName = '', lastName = '' } = useSelector((state) => state.userProfile);

    const handleEditClick = () => {
        navigate('/formulaire');
    };

    const welcomeMessage = `Welcome back ${firstName} ${lastName} !`;

    return (
        <main className="main-user bg-dark">
            <div className="header">
                <h1>{welcomeMessage}</h1>
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


