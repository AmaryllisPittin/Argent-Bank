import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCog } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions';
import Logo from '../img/argentBankLogo.png';

const Header = () => {
    const dispatch = useDispatch();
    const userProfile = useSelector(state => state.userProfile);
    const navigate = useNavigate();
    const [showConfirmation, setShowConfirmation] = useState(false);

    useEffect(() => {
        console.log(userProfile.userName);
    }, [userProfile]);

    const handleLogout = () => {
        setShowConfirmation(true);
    };

    const confirmLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <nav className="main-nav">
            {userProfile.success ? (
                <>
                    <NavLink to="/" className="main-nav-logo">
                        <img
                            className="main-nav-logo-image"
                            src={Logo}
                            alt="Argent Bank Logo"
                        />
                        <h1 className="sr-only">Argent Bank</h1>
                    </NavLink>
                    <div>
                    <span className={`main-nav-item ${userProfile.userName ? 'custom-class' : ''}`}>
                        {userProfile.userName}
                        <FontAwesomeIcon icon={faUserCircle} className="main-nav-item__icon green-icon" />
                    </span>
                        <NavLink to="/settings" className="main-nav-item">
                            <FontAwesomeIcon icon={faCog} className="main-nav-item__icon green-icon" />
                        </NavLink>
                        <button onClick={handleLogout} className="main-nav-item">
                            <FontAwesomeIcon icon={faUserCircle} className="main-nav-item__icon" />
                            Sign Out
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <NavLink to="/" className="main-nav-logo">
                        <img
                            className="main-nav-logo-image"
                            src={Logo}
                            alt="Argent Bank Logo"
                        />
                        <h1 className="sr-only">Argent Bank</h1>
                    </NavLink>
                    <div>
                        <NavLink to="/sign-in" className="main-nav-item">
                            <FontAwesomeIcon icon={faUserCircle} className="main-nav-item__icon" />
                            Sign In
                        </NavLink>
                    </div>
                </>
            )}
            {showConfirmation && (
                <div className="confirmation-dialog">
                    <p>Êtes-vous sûr de vouloir vous déconnecter ?</p>
                    <div>
                        <button onClick={confirmLogout}>Oui</button>
                        <button onClick={() => setShowConfirmation(false)}>Annuler</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;


