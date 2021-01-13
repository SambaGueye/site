import React from 'react';
import './styles/Contact.css'

export default function Contact() {
    return (
        <div className='main'>
            <form>
                <h2 className="title">Formulaire de contact</h2>
                <label>Prenom</label>
                <input type="text" name="" id=""/><br/>
                <label>Nom</label>
                <input type="text" name="" id=""/><br/>
                <label>email</label>
                <input type="email" name="" id=""/><br/>
                <label>Message</label>
                <input type="email" name="" id=""/><br/>
                <input type="button" value="Envoyer"/>
            </form>
        </div>
    )
}
