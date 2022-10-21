import React from 'react';
import img from './../imgs/woda.jpg';

const EditQuestion = () => {
    return (
        <div className='question-block block-formpage'>
            <div className='question-block-title'>
                <input type="text" defaultValue="Pytanie 1"></input>
            </div>
            <div className='question-block-imgs'>
                <img src={img} alt="img"></img>
            </div>
            <div className='question-block-options'>
                <ul className='question-block-list'>
                    <li>
                        <input type="radio" name="radio1" disabled="true"></input>
                        <label>
                            <input type="text" defaultValue="Opcja 1"></input>
                        </label>
                    </li>
                    <li>
                        <input type="radio" name="radio1" disabled="true"></input>
                        <label>
                            <input type="text" defaultValue="Opcja 2"></input>
                        </label>
                    </li>
                    <li>
                        <input type="radio" name="radio1" disabled="true"></input>
                        <label>
                            <input type="text" defaultValue="Opcja 3"></input>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default EditQuestion;

