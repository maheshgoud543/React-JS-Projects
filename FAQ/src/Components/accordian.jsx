import React, { useState } from 'react';
import faqData from './accordianData';
import './style.css';

const Accordian = () => {
    const [selected, setSelected] = useState([]);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);

    const handleSelected = (getCurrentId) => {
        if (enableMultiSelection) {
            if (selected.includes(getCurrentId)) {
                setSelected(selected.filter(id => id !== getCurrentId));
            } else {
                setSelected([...selected, getCurrentId]);
            }   
        } else {
            setSelected(selected.includes(getCurrentId) ? [] : [getCurrentId]);
        }
    };

    const toggleMultiSelection = () => {
        setEnableMultiSelection(!enableMultiSelection);
        setSelected([]); 
    };

    return (
        <div className='Container'>
            <div>
                <h1> FAQ Accordian</h1>
                <button onClick={toggleMultiSelection}>
                    {enableMultiSelection ? 'Single Selection' : 'Multi Selection'}
                </button>
            </div>
            <div>
                <ul>
                    {faqData.map((faq, id) => (
                        <li key={id} className='FAQ'>
                            <div className='Question'>
                                <p>{faq.question}</p>
                                <button onClick={() => handleSelected(id)}>+</button>
                            </div>
                            <div>
                                {selected.includes(id) && <p>{faq.answer}</p>}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Accordian;
