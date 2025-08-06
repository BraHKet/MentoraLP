// File: ChatSimulation.js

import React, { useState, useEffect, useRef } from 'react';
import './ChatSimulation.css'; // Non sono necessarie modifiche al CSS

// Percorso del file audio che metterai nella cartella `public`
const notificationSoundPath = '/suono.mp3';

const chatScript = [
    { sender: 'ai', type: 'text', content: 'Ottimo. Mi parli del Secondo Principio della Dinamica.' },
    { sender: 'user', type: 'text', content: 'Certo. Il principio afferma che la forza.....' },
    { sender: 'ai', type: 'text', content: 'Enunciazione corretta. Adesso mi scriva la formula e mi disegni un diagramma di corpo libero per un oggetto che scivola su un piano inclinato.' },
    { sender: 'user', type: 'text', content: 'Subito. Ecco la formula e il disegno:' },
    { sender: 'user', type: 'image', content: '/meme.png' }, // Ho rimesso il percorso corretto per l'immagine
    { sender: 'ai', type: 'text', content: 'Perfetto. Il diagramma mostra correttamente la forza peso... Passiamo al prossimo argomento. ' },
];

const ChatSimulation = () => {
    const [messages, setMessages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const chatContainerRef = useRef(null);

    // --- NUOVA FUNZIONE PER RIPRODURRE IL SUONO ---
    const playNotificationSound = () => {
        const sound = new Audio(notificationSoundPath);
        // Usiamo .catch() per evitare errori se il browser blocca l'audio automatico
        sound.play().catch(error => console.log("Riproduzione audio bloccata dal browser.", error));
    };

    useEffect(() => {
        if (currentIndex >= chatScript.length) return;

        const delay = chatScript[currentIndex].type === 'image' ? 1500 : 1800;

        const timer = setTimeout(() => {
            setMessages(prevMessages => [...prevMessages, chatScript[currentIndex]]);
            
            // --- RIPRODUCI IL SUONO QUANDO IL MESSAGGIO APPARE ---
            playNotificationSound();

            setCurrentIndex(prevIndex => prevIndex + 1);
        }, delay);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    useEffect(() => {
        if (chatContainerRef.current) {
            const { scrollHeight, clientHeight } = chatContainerRef.current;
            chatContainerRef.current.scrollTo({
                top: scrollHeight - clientHeight,
                behavior: 'smooth'
            });
        }
    }, [messages]);

    return (
        <div className="chat-simulation-container">
            <div className="chat-window" ref={chatContainerRef}>
                {messages.map((msg, index) => (
                    <div key={index} className={`message-bubble ${msg.sender === 'ai' ? 'ai-message' : 'user-message'} ${msg.type === 'image' ? 'image-container' : ''}`}>
                        {msg.type === 'text' ? (
                            msg.content
                        ) : (
                            <img src={msg.content} alt="Disegno dello studente" className="message-image" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatSimulation;