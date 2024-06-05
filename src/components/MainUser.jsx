import React from "react";
import { useNavigate } from 'react-router-dom';
import AccountSection from "./AccountSection";

const MainUser = () => {
    const navigate = useNavigate();
    const handleEditClick = () => {
        navigate('/formulaire');
    };

    return (
        <main className="main-user bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <AccountSection />
            <AccountSection />
            <AccountSection />
        </main>
    );
}

export default MainUser;
