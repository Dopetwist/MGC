import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function Chat() {

    return (
        <div id="chat-container">
            <a href="https://misan" target="_blank" rel="noopener noreferrer" id="chat-btn">
                <FaWhatsapp size={30} id="whatsapp-icon" />
                <span>Let's chat</span>
            </a>
        </div>
    )
}

export default Chat;