import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions';
import Logo from '../img/argentBankLogo.png';

const Header = () => {
    const dispatch = useDispatch();
    const userProfile = useSelector(state => state.userProfile);
    const navigate = useNavigate();

    console.log(userProfile);

    const handleLogout = () => {
        const confirmed = window.confirm('Êtes-vous sûr de vouloir vous déconnecter ?');
        if (confirmed) {
            dispatch(logout());
            localStorage.removeItem('token');
            navigate('/');
        }
    };

    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            {userProfile.success ? (
                <div>
                    <NavLink to="/user" className={`main-nav-item ${userProfile.userName ? 'custom-class' : ''}`}>
                        <FontAwesomeIcon icon={faUserCircle} className="main-nav-item__icon green-icon" />
                        {userProfile.userName}
                    </NavLink>
                    <span onClick={handleLogout} className="main-nav-item">
                        <FontAwesomeIcon icon={faRightFromBracket} className="main-nav-item__icon" />
                        Sign Out
                    </span>
                </div>
            ) : (
                <div>
                    <NavLink to="/sign-in" className="main-nav-item">
                        <FontAwesomeIcon icon={faUserCircle} className="main-nav-item__icon" />
                        Sign In
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Header;

