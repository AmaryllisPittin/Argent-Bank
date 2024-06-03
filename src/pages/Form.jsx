import React from "react";
import Header from "../components/Header";
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
                            <input></input>
                        </div>
                        <div className="form__label-input">
                            <label className="label">First name:</label>
                            <input></input>
                        </div>
                        <div className="form__label-input">
                            <label className="label">Last name:</label>
                            <input></input>
                        </div>
                        <button>Save</button>
                        <button>Cancel</button>
                    </form>
                </div>
            <Footer />
        </div>
    )
}

export default Home