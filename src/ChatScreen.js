import React from 'react'
import { useState } from  'react'
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css'

const Chatscreen = () => {
	const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
          name: 'Beyonce',
            image: 'https://www.cheatsheet.com/wp-content/uploads/2020/07/beyonce-8.jpg',
          message: "Yo what's up" 
        },
        {
            name: 'Beyonce',
            image: 'https://www.cheatsheet.com/wp-content/uploads/2020/07/beyonce-8.jpg',
            message: "You coming through or what?"
        },
        {
            message: "Not sure yet?"
        }
		])
		
		const handleSend = (e) => {
			e.preventDefault()

			setMessages([...messages, {message: input}])
			setInput('')
		}
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH BEYONCE ON 05/15/2020</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser">{message.message}</p>
                        </div>
                )
                
								))}
								
				
					<form className="chatScreen__input">
						<input
							value={input}
							onChange={e => setInput(e.target.value)}
							className = "chatScreen__inputField"
							type="text" 
							placeholder="Type a message"/>
						<button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
					</form>
				
        </div>

        
    )
}

export default Chatscreen
