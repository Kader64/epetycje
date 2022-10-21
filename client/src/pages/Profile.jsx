import Form from "../components/Form";
import React from 'react';
import { useEffect } from 'react';

function Profile() {
    useEffect(() => {
        window.reveal();
    }, [])
    return (
        <div>
            <section className='about'>
                <div className='username'>Imie Nazwisko</div>
                <div className='email'>(adresemail@gmail.com)</div>
                <div className="your-form-text">Ankiety utworzone przez ciebie:</div>
            </section>
            <section className="buttons-profile-container">
                <button className="public">Publiczne</button>
                <button className="no-public">Nie Publiczne</button>
            </section>
            <section className="forms_block">
                <Form />
                <Form />
                <Form />
            </section>
        </div>

    );
}

export default Profile;