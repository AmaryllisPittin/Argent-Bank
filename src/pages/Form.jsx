import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../redux/actions';
import Header from "../components/Header";
import AccountSection from "../components/AccountSection";
import Footer from "../components/Footer";

const Form = () => {
    const dispatch = useDispatch();

    const { firstName, lastName, userName } = useSelector((state) => state.userProfile);
    const { token } = useSelector((state) => state.userLogin);

    const [newFirstname, setNewFirstname] = useState(firstName);
    const [newLastname, setNewLastname] = useState(lastName);
    const [newUsername, setNewUsername] = useState(userName);

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log('Submitting form with:', newUsername, newFirstname, newLastname);
        try {
            await dispatch(updateProfile(token, newFirstname, newLastname, newUsername));
            console.log('Profile updated successfully');
        } catch (error) {
            console.error("Erreur lors de la mise à jour du profil :", error);
        }
    };

    console.log('Current state:', { newUsername, newFirstname, newLastname });

    return (
        <div>
            <Header />
            <div className="form-container">
                <h1>Modifier les informations de l'utilisateur</h1>
                <form className="form" onSubmit={submitHandler}>
                    <div className="form__label-input">
                        <label className="label">Pseudo</label>
                        <input
                            className="input"
                            value={newUsername}
                            onChange={(e) => setNewUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form__label-input">
                        <label className="label">Prénom :</label>
                        <input
                            className="input"
                            value={newFirstname}
                            onChange={(e) => setNewFirstname(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form__label-input">
                        <label className="label">Nom :</label>
                        <input
                            className="input"
                            value={newLastname}
                            onChange={(e) => setNewLastname(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-button-container">
                        <button className="form-button" type="submit">Enregistrer</button>
                        <button className="form-button" type="button">Annuler</button>
                    </div>
                </form>
            </div>
            <AccountSection customClass="special-style" showIcon={true} />
            <AccountSection customClass="special-style" showIcon={true} />
            <AccountSection customClass="special-style" showIcon={true} />
            <Footer />
        </div>
    );
}

export default Form;
