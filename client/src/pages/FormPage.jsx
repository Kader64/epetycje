import React from 'react';
import newBtn from './../imgs/add.png'
import { useState } from 'react';
import EditQuestion from '../components/EditQuestion';

const FormPage = () => {
    const [title, setTitle] = useState(["Ankieta Bez Tytułu"]);
    const [description, setDescription] = useState([]);
    var submitForm = () => {
        
    }
    return (
        <section className='main-formpage'>
            <div className='center-formpage'>
                <div className='title-formpage block-formpage'>
                    <input type="text" defaultValue="Ankieta Bez Tytułu" onBlur={(e) => {
                        setTitle(e.target.value)
                    }}></input>
                </div>

                <div className='desc-formpage block-formpage'>
                    <textarea defaultValue="Brak opisu. Kliknij aby dodać opis." onBlur={(e) => {
                        setDescription(e.target.value)
                    }}></textarea>
                </div>

                <EditQuestion/>



                <div className='question-addNew block-formpage'>
                    <img src={newBtn} alt="Dodaj nowe pytanie"></img>
                    <div className='newAction-text'>
                        Stwórz nowe pytanie
                    </div>
                </div>
                <div className='question-submit-block'>
                    <div className='question-submit-author'>
                        Autor: Imie Nazwisko
                    </div>
                    <div className='question-submit-btn' onClick={submitForm}>
                        Wyślij
                    </div>
                </div>
            </div>

        </section>
    );
};

export default FormPage;

