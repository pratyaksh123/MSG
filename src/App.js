import React, { useState, useEffect } from "react";
import "./App.css";
import Message from "./Message";
import { FormControl, Input } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);
	const [username, setUsername] = useState("");

	useEffect(() => {
		db.collection("messages")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setMessages(
					snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
				);
			});
	}, []);

	// useState{like a variable}
	//useEffect{like a condition}
	useEffect(() => {
		//code
		// const username=prompt("Please Enter Your Name") in JS
		setUsername(prompt("Please Enter Your Name"));
	}, []); //condition

	const sendMessage = (e) => {
		e.preventDefault();
		db.collection("messages").add({
			message: input,
			username: username,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setMessages([...messages, { username: username, message: input }]);
		setInput("");
	};
	return (
		<div className="App">
			<img
				className="image"
				alt="messenger"
				src="data:image/jpeg;base64,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"
			/>
			<h1>Welcome To Messenger</h1>
			<h2>Hello {username}</h2>
			<form className="app__form">
				<FormControl className="app__formControl">
					<Input
						className="app__input"
						placeholder="Enter a message..."
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<IconButton
						className="app__iconButton"
						disabled={!input}
						onClick={sendMessage}
						variant="contained"
						color="primary"
						type="submit"
					>
						<SendIcon />
					</IconButton>
				</FormControl>
			</form>
			<FlipMove>
				{messages.map(({ id, message }) => (
					<Message key={id} username={username} message={message} />
				))}
			</FlipMove>
		</div>
	);
}

export default App;
