import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
	apiKey: "AIzaSyCXWQfIad0tPp6bez193iI7qe4HT7Wg-qA",
	authDomain: "recycle-c0192.firebaseapp.com",
	projectId: "recycle-c0192",
	storageBucket: "recycle-c0192.appspot.com",
	messagingSenderId: "103072355068",
	appId: "1:103072355068:web:da2c77597d89c6a6cb7d79",
	measurementId: "G-GGPWM9774M"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginCard = document.getElementById("loginCard");
const userCard = document.getElementById("userCard");

const pro_logo = document.getElementById("pro_logo");



function showUser(data) {
	userInfo.innerHTML = `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <img src="${data.photo || 'https://via.placeholder.com/80'}" alt="Profile" />
      `;
	loginCard.style.display = "none";
	userCard.style.display = "block";
}

function checkStoredUser() {
	const stored = localStorage.getItem("user");
	if (stored) {
		const userData = JSON.parse(stored);
		showUser(userData);
	}
}

checkStoredUser();

window.signInWithGoogle = async function() {
	try {
		const result = await signInWithPopup(auth, provider);
		const user = result.user;
		
		const userData = {
			name: user.displayName,
			email: user.email,
			photo: user.photoURL
		};
		
		localStorage.setItem("user", JSON.stringify(userData));
		showUser(userData);
	} catch (error) {
		console.error("Google Sign-in error:", error);
		alert("Login failed.");
	}
};

window.logout = function() {
	signOut(auth).then(() => {
		localStorage.removeItem("user");
		userCard.style.display = "none";
		loginCard.style.display = "block";
	});
};