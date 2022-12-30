let card = document.querySelectorAll(".content");
let aboutP = document.querySelector("#about-p");
window.onload = function () {
	aboutP.classList.add("fadeIn");
}
window.onscroll = function () {
	if (window.scrollY >= 300){
		card[0].classList.add("translate");
		card[1].classList.add("translate");
	}
};

//nav
let homeLink = document.querySelectorAll(".homeLink");
let visasLink = document.querySelectorAll(".visasLink");
let testLink = document.querySelectorAll(".testLink");
let aboutLink = document.querySelectorAll(".aboutLink");
let storiesLink = document.querySelectorAll(".storiesLink");
let accountLink = document.querySelectorAll(".accountLink");
let PrivacyPolicy = document.querySelector(".PrivacyPolicy");
let dVisa = document.querySelector(".dVisa");
let assistantVisa = document.querySelector(".assistantVisa");
let studyVisa = document.querySelector(".studyVisa");
let placementTest = document.querySelector(".placementTest");
let testByLevel = document.querySelector(".testByLevel");
let nationalityLaw = document.querySelector(".nationalityLaw");
let typesOfAccommodations = document.querySelector(".typesOfAccommodations");
let registrationInTheMunicipality = document.querySelector(".registrationInTheMunicipality");
let importantNews = document.querySelector(".importantNews");
let eleNavs = document.querySelectorAll(".eleNav");
let schedule = document.querySelectorAll(".schedule");
let home = document.querySelector(".home");
let account = document.querySelector(".account");
let visa1 = document.querySelector(".visa1");
let test1 = document.querySelector(".test1");
let storiesSection = document.querySelector(".stories-section");
homeLink[0].onclick = () => {
	eleNavs.forEach(e => {
		e.classList.remove("active");
		home.classList.add("display");
		account.classList.add("display");
		visa1.classList.add("display");
		test1.classList.add("display");
		storiesSection.classList.add("display");
	});
	schedule[0].classList.remove("show");
	schedule[1].classList.remove("show");
	schedule[2].classList.remove("show");
	homeLink[0].classList.add("active");
	home.classList.remove("display");
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
homeLink[1].onclick = () => {
	eleNavs.forEach(e => {
		e.classList.remove("active");
		home.classList.add("display");
		account.classList.add("display");
		visa1.classList.add("display");
		test1.classList.add("display");
		storiesSection.classList.add("display");
	});
	schedule[0].classList.remove("show");
	schedule[1].classList.remove("show");
	schedule[2].classList.remove("show");
	homeLink[0].classList.add("active");
	home.classList.remove("display");
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
visasLink[0].onclick = () => {
	schedule[0].classList.toggle("show");
	schedule[1].classList.remove("show");
	schedule[2].classList.remove("show");
}
visasLink[1].onclick = () => {
	schedule[0].classList.toggle("show");
	schedule[1].classList.remove("show");
	schedule[2].classList.remove("show");
}
testLink[0].onclick = () => {
	schedule[1].classList.toggle("show");
	schedule[0].classList.remove("show");
	schedule[2].classList.remove("show");
}
testLink[1].onclick = () => {
	schedule[1].classList.toggle("show");
	schedule[0].classList.remove("show");
	schedule[2].classList.remove("show");
}
aboutLink[0].onclick = () => {
	schedule[2].classList.toggle("show");
	schedule[0].classList.remove("show");
	schedule[1].classList.remove("show");
}
aboutLink[1].onclick = () => {
	schedule[2].classList.toggle("show");
	schedule[0].classList.remove("show");
	schedule[1].classList.remove("show");
}
storiesLink[0].onclick = () => {
	eleNavs.forEach(e => {
		e.classList.remove("active");
		home.classList.add("display");
		account.classList.add("display");
		visa1.classList.add("display");
		test1.classList.add("display");
		storiesSection.classList.add("display");
	});
	schedule[0].classList.remove("show");
	schedule[1].classList.remove("show");
	schedule[2].classList.remove("show");
	storiesLink[0].classList.add("active");
	storiesSection.classList.remove("display");
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
storiesLink[1].onclick = () => {
	eleNavs.forEach(e => {
		e.classList.remove("active");
		home.classList.add("display");
		account.classList.add("display");
		visa1.classList.add("display");
		test1.classList.add("display");
		storiesSection.classList.add("display");
	});
	schedule[0].classList.remove("show");
	schedule[1].classList.remove("show");
	schedule[2].classList.remove("show");
	storiesLink[0].classList.add("active");
	storiesSection.classList.remove("display");
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
accountLink[0].onclick = () => {
	eleNavs.forEach(e => {
		e.classList.remove("active");
		home.classList.add("display");
		account.classList.add("display");
		visa1.classList.add("display");
		test1.classList.add("display");
		storiesSection.classList.add("display");
	});
	schedule[0].classList.remove("show");
	schedule[1].classList.remove("show");
	schedule[2].classList.remove("show");
	accountLink[0].classList.add("active");
	account.classList.remove("display");
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
accountLink[1].onclick = () => {
	eleNavs.forEach(e => {
		e.classList.remove("active");
		home.classList.add("display");
		account.classList.add("display");
		visa1.classList.add("display");
		test1.classList.add("display");
		storiesSection.classList.add("display");
	});
	schedule[0].classList.remove("show");
	schedule[1].classList.remove("show");
	schedule[2].classList.remove("show");
	accountLink[0].classList.add("active");
	account.classList.remove("display");
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
dVisa.onclick = () => {
	eleNavs.forEach(e => {
		e.classList.remove("active");
		home.classList.add("display");
		account.classList.add("display");
		visa1.classList.add("display");
		test1.classList.add("display");
		storiesSection.classList.add("display");
	});
	schedule[0].classList.remove("show");
	schedule[1].classList.remove("show");
	schedule[2].classList.remove("show");
	visasLink[0].classList.add("active");
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
assistantVisa.onclick = () => {
	eleNavs.forEach(e => {
		e.classList.remove("active");
		home.classList.add("display");
		account.classList.add("display");
		visa1.classList.add("display");
		test1.classList.add("display");
		storiesSection.classList.add("display");
	});
	schedule[0].classList.remove("show");
	schedule[1].classList.remove("show");
	schedule[2].classList.remove("show");
	visasLink[0].classList.add("active");
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
studyVisa.onclick = () => {
	eleNavs.forEach(e => {
		e.classList.remove("active");
		home.classList.add("display");
		account.classList.add("display");
		visa1.classList.add("display");
		test1.classList.add("display");
		storiesSection.classList.add("display");
	});
	schedule[0].classList.remove("show");
	schedule[1].classList.remove("show");
	schedule[2].classList.remove("show");
	visasLink[0].classList.add("active");
	visa1.classList.remove("display");
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
placementTest.onclick = () => {
	eleNavs.forEach(e => {
		e.classList.remove("active");
		home.classList.add("display");
		account.classList.add("display");
		visa1.classList.add("display");
		test1.classList.add("display");
		storiesSection.classList.add("display");
	});
	schedule[0].classList.remove("show");
	schedule[1].classList.remove("show");
	schedule[2].classList.remove("show");
	testLink[0].classList.add("active");
	test1.classList.remove("display");
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
testByLevel.onclick = () => {
	eleNavs.forEach(e => {
		e.classList.remove("active");
		home.classList.add("display");
		account.classList.add("display");
		visa1.classList.add("display");
		test1.classList.add("display");
		storiesSection.classList.add("display");
	});
	schedule[0].classList.remove("show");
	schedule[1].classList.remove("show");
	schedule[2].classList.remove("show");
	testLink[0].classList.add("active");
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
nationalityLaw.onclick = () => {
	eleNavs.forEach(e => {
		e.classList.remove("active");
		home.classList.add("display");
		account.classList.add("display");
		visa1.classList.add("display");
		test1.classList.add("display");
		storiesSection.classList.add("display");
	});
	schedule[0].classList.remove("show");
	schedule[1].classList.remove("show");
	schedule[2].classList.remove("show");
	aboutLink[0].classList.add("active");
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
typesOfAccommodations.onclick = () => {
	eleNavs.forEach(e => {
		e.classList.remove("active");
		home.classList.add("display");
		account.classList.add("display");
		visa1.classList.add("display");
		test1.classList.add("display");
		storiesSection.classList.add("display");
	});
	schedule[0].classList.remove("show");
	schedule[1].classList.remove("show");
	schedule[2].classList.remove("show");
	aboutLink[0].classList.add("active");
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
registrationInTheMunicipality.onclick = () => {
	eleNavs.forEach(e => {
		e.classList.remove("active");
		home.classList.add("display");
		account.classList.add("display");
		visa1.classList.add("display");
		test1.classList.add("display");
		storiesSection.classList.add("display");
	});
	schedule[0].classList.remove("show");
	schedule[1].classList.remove("show");
	schedule[2].classList.remove("show");
	aboutLink[0].classList.add("active");
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
importantNews.onclick = () => {
	eleNavs.forEach(e => {
		e.classList.remove("active");
		home.classList.add("display");
		account.classList.add("display");
		visa1.classList.add("display");
		test1.classList.add("display");
		storiesSection.classList.add("display");
	});
	schedule[0].classList.remove("show");
	schedule[1].classList.remove("show");
	schedule[2].classList.remove("show");
	aboutLink[0].classList.add("active");
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
PrivacyPolicy.onclick = () => {
	eleNavs.forEach(e => {
		e.classList.remove("active");
		home.classList.add("display");
		account.classList.add("display");
		visa1.classList.add("display");
		test1.classList.add("display");
		storiesSection.classList.add("display");
	});
	schedule[0].classList.remove("show");
	schedule[1].classList.remove("show");
	schedule[2].classList.remove("show");
	PrivacyPolicy.classList.add("active");
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}

// vanila.js
VanillaTilt.init(document.querySelectorAll(".curvature"), {
	max: 25,
	speed: 400,
	glare: true,
	"max-glare": 1,
});

// whatsapp icon
let iconWhatsapp = document.querySelector("#icon-whatsapp");
let icon = document.querySelector(".icon");
let boxWhats = document.querySelector(".box-whats");
let innerBox = document.querySelector(".inner");
icon.onclick = whats;
innerBox.onclick = linkWhats;
function whats() {
	iconWhatsapp.classList.toggle("fa-solid");
	iconWhatsapp.classList.toggle("fa-xmark");
	iconWhatsapp.classList.toggle("fa-brands");
	iconWhatsapp.classList.toggle("fa-whatsapp");
	boxWhats.classList.toggle("display");
}
function linkWhats() {
	window.open("https://api.whatsapp.com/send/?phone=937235487&text&type=phone_number&app_absent=0")
}

// swiper
var swiper = new Swiper('.swiper', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 200,
		modifier: 1,
		slideShadows: true,
	},
	pagination: {
		el: '.swiper-pagination',
	},
});

// FormTest

var quizData = [{
	question: "Which language runs in a web browser?",
	a: "Java",
	b: "C",
	c: "Python",
	d: "JavaScript",
	correct: "d",
}, {
	question: "What does CSS stand for?",
	a: "Central Style Sheets",
	b: "Cascading Style Sheets",
	c: "Cascading Simple Sheets",
	d: "Cars SUVs Sailboats",
	correct: "b",
}, {
	question: "What does HTML stand for?",
	a: "Hypertext Markup Language",
	b: "Hypertext Markdown Language",
	c: "Hyperloop Machine Language",
	d: "Helicopters Terminals Motorboats Lamborginis",
	correct: "a",
}, {
	question: "What year was JavaScript launched?",
	a: "1996",
	b: "1995",
	c: "1994",
	d: "none of the above",
	correct: "b",
}, ];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let counter = 0;
let numberOfAnswers = 4;
var currentQuiz = Math.floor(Math.random() * quizData.length);
let score =0;
const deselectAnswers = () => {
	answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
	let answer;
	answerElements.forEach((answerElement) => {
		if (answerElement.checked) answer = answerElement.id;
	});
	return answer;
};
const loadQuiz = () => {
	deselectAnswers();
	const currentQuizData = quizData[currentQuiz];
	questionElement.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
	const answer = getSelected();
	if (answer) {
		if (answer === quizData[currentQuiz].correct)
		score++;
		counter++;
		quizData = quizData.slice(0 , currentQuiz).concat(quizData.slice(currentQuiz + 1 , quizData.length));
		currentQuiz = Math.floor(Math.random() * quizData.length);
		if (counter < numberOfAnswers) loadQuiz();
		else {
			quiz.innerHTML =`<h2>You answered ${score * (100 / numberOfAnswers)}% questions correctly</h2>`
		}
	}
});