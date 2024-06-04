import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const AccountSection = ({ customClass, showIcon }) => {
    return (
        <section className={`account ${customClass}`}>
            <div className={`account-content-wrapper ${customClass}`}>
                <h3 className={`account-title ${customClass}`}>Argent Bank Checking (x8349)</h3>
                <p className={`account-amount ${customClass}`}>$2,082.79</p>
                <p className={`account-amount-description ${customClass}`}>Available Balance</p>
            </div>
            <div className={`account-content-wrapper cta ${customClass}`}>
                {showIcon ? (
                    <FontAwesomeIcon icon={faChevronRight} className={`transaction-icon ${customClass}`} />
                ) : (
                    <button className={`transaction-button ${customClass}`}>View transactions</button>
                )}
            </div>
        </section>
    );
}

export default AccountSection;

