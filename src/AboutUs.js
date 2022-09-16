import React from "react"
import "./index.css"
import { Button } from "semantic-ui-react"

export default function AboutUs() {
	return (
		<div id="about-us">
			<div className="grid-container" id="pos-1">
				<img
					src="https://www.gannett-cdn.com/media/2019/09/13/USATODAY/usatsports/247WallSt.com-247WS-577225-imageforentry6-7yr.jpg"
					alt="record-player"
					className="about-image"
				/>
			</div>
			<div className="grid-container" id="pos-2">
				<h1>About Us</h1>
				<p className="about-text">
					🎧 Record Junkie is a way to bring your analog life into the digital
					world. Any serious vinyl collector knows how difficult it is to keep
					track of all of your prized records. With Record Junkie, you can drink
					baja blast 'til the cows come home! ...what? Anyway, update your
					online collection with ease so you always know you have at home. Make
					comments about what gems you're never selling and what you're willing
					to trade.
				</p>
			</div>
			<div className="grid-container" id="pos-3">
				<h1>Give Us Money</h1>
				<p className="about-text2">
					Ok... so you're a rich vinyl nerd and we're very, very broke from
					attending Flatiron School. Find us on Venmo @RecordJunkie and give us
					all yr money! You'll be glad you did! One day when we're big shot web
					developers, we will remember that time you gave us money, and do
					nothing... Cheers!
				</p>
				<img
					src="https://rocksf.org/wp-content/uploads/2019/10/venmo-logo.png"
					alt="venmo"
					className="venmo-icon"
				/>
				<div className="brand-buttons">
					<Button circular color="facebook" icon="facebook" />
					<Button circular color="twitter" icon="twitter" />
					<Button circular color="linkedin" icon="linkedin" />
					<Button circular color="google plus" icon="google plus" />
				</div>
			</div>
			<div className="grid-container" id="pos-4">
				<img
					src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTIaggB6msfZAgThejXGRqo4cTw8cL9IGjawwPyKLCnSXMuK28jKGkqtZkrpLmq6-B3cwBtYLnUepdRCBlJubs"
					alt="mixer"
					className="about-image"
				/>
			</div>
		</div>
	)
}
