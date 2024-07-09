import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { login } from '../redux/actions';

const MainSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, token } = useSelector(state => state.userLogin);

  useEffect(() => {
    // Récupération des informations du localStorage si présentes
    const savedEmail = localStorage.getItem('savedEmail');
    const savedRememberMe = localStorage.getItem('savedRememberMe') === 'true';

    if (savedEmail) {
      setEmail(savedEmail);
    }
    setRememberMe(savedRememberMe);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Veuillez remplir les deux champs pour vous connecter');
    } else {
      dispatch(login(email, password));
      if (rememberMe) {
        localStorage.setItem('savedEmail', email);
        localStorage.setItem('savedRememberMe', rememberMe);
      } else {
        localStorage.removeItem('savedEmail');
        localStorage.removeItem('savedRememberMe');
      }
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/user');
    }
  }, [token, navigate]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Email</label>
            <input
              type="email"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </section>
    </main>
  );
};

export default MainSignIn;

