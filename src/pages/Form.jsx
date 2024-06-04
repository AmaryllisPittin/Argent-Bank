import React from "react";
import Header from "../components/Header";
import AccountSection from "../components/AccountSection";
import Footer from "../components/Footer"

const Home = () => {
    return (
        <div>
            <Header />
                <div className="form-container">
                    <h1>Edit user info</h1>
                    <form className="form">
                        <div className="form__label-input">
                            <label className="label">User name:</label>
                            <input className="input"></input>
                        </div>
                        <div className="form__label-input">
                            <label className="label">First name:</label>
                            <input className="input"></input>
                        </div>
                        <div className="form__label-input">
                            <label className="label">Last name:</label>
                            <input className="input"></input>
                        </div>
                    </form>
                    <div className="form-button-container">
                            <button className="form-button">Save</button>
                            <button className="form-button">Cancel</button>
                        </div>
                </div>
                <AccountSection customClass="special-style"  showIcon={true} />
                <AccountSection customClass="special-style"  showIcon={true} />
                <AccountSection customClass="special-style"  showIcon={true} />
            <Footer />
        </div>
    )
}

export default Home