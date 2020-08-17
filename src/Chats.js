import React from 'react'
import './Chats.css'
import Chat from './Chat'

const Chats = () => {
    return (
		<div className="chats">
			<Chat 
				name="Beyonce"
				message="Yo what's up"
				timestamp="40 seconds ago"
				profilePic="https://www.cheatsheet.com/wp-content/uploads/2020/07/beyonce-8.jpg"
		/>
			<Chat
				name="Mark"
				message="How are things going?"
				timestamp="9 minutes ago"
				profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg/1200px-Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg"
			/>
			<Chat
				name="Alicia"
				message="Got a pocket full of dreams"
				timestamp="20 minutes ago"
				profilePic="https://2l7g9kgsh281akevs49v281d-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/alicia-keys-1495182885.1.2560x1440.png"
			/>
			<Chat
				name="Trump"
				message="We're making America great again"
				timestamp="just now"
				profilePic="https://static01.nyt.com/images/2020/08/05/nyregion/05nytrumptaxes/05nytrumptaxes-videoSixteenByNineJumbo1600.jpg"
			/>
		</div>
    )
}

export default Chats

//https://github.com/dbarochiya