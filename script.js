"use strict"
const users = [
	{
		userName: "Alice",
		lastName: "Johnson",
		age: 30,
		gender: "Female",
		address: {
			street: "Oak Avenue",
			number: 45,
			house: true,
		},
		role: "Software Engineer",
	},
	{
		userName: "Charlie",
		lastName: "Smith",
		age: 27,
		gender: "Male",
		address: {
			street: "Maple Street",
			number: 101,
			house: false,
		},
		role: "Project Manager",
	},
	{
		userName: "Diana",
		lastName: "Brown",
		age: 35,
		gender: "Female",
		address: {
			street: "Elm Road",
			number: 88,
			house: true,
		},
		role: "UX Designer",
	},
	{
		userName: "Eve",
		lastName: "Davis",
		age: 21,
		gender: "Female",
		address: {
			street: "Birch Lane",
			number: 7,
			house: false,
		},
		role: "Intern",
	},
	{
		userName: "Frank",
		lastName: "Miller",
		age: 40,
		gender: "Male",
		address: {
			street: "Pine Street",
			number: 200,
			house: true,
		},
		role: "CTO",
	},
	{
		userName: "Grace",
		lastName: "Wilson",
		age: 28,
		gender: "Female",
		address: {
			street: "Cedar Avenue",
			number: 99,
			house: false,
		},
		role: "Marketing Specialist",
	},
	{
		userName: "Henry",
		lastName: "Moore",
		age: 33,
		gender: "Male",
		address: {
			street: "Poplar Road",
			number: 16,
			house: true,
		},
		role: "HR Manager",
	},
	{
		userName: "Ivy",
		lastName: "Taylor",
		age: 25,
		gender: "Female",
		address: {
			street: "Willow Street",
			number: 52,
			house: false,
		},
		role: "Sales Associate",
	},
	{
		userName: "Jack",
		lastName: "Anderson",
		age: 29,
		gender: "Male",
		address: {
			street: "Spruce Avenue",
			number: 78,
			house: true,
		},
		role: "DevOps Engineer",
	},
	{
		userName: "Karen",
		lastName: "Thomas",
		age: 37,
		gender: "Female",
		address: {
			street: "Chestnut Street",
			number: 65,
			house: false,
		},
		role: "Finance Manager",
	},
	{
		userName: "Leo",
		lastName: "Harris",
		age: 22,
		gender: "Male",
		address: {
			street: "Fir Lane",
			number: 10,
			house: true,
		},
		role: "Data Analyst",
	},
]
function writeDom(user) {
	const container = document.querySelector(".container")
	container.innerHTML += `
	<article class="card">
		<div class="card-image">
			<img src="./assets/${user.gender === "Male" ? "02.jpg" : "01.jpg"}" alt="${
		user.userName
	}" />
			<span class="card-title">${user.userName}</span>
		</div>

		<div class="card-content">
			<ul class="list-group">
				<li class="list-group-item"><strong>Name:</strong>${user.userName}</li>
				<li class="list-group-item"><strong>Age:</strong>${user.age}</li>
				<li class="list-group-item">
					<strong>Address:</strong> ${user.address.number} ${user.address.street}
					<img class="list-group-img" src="./assets/${
						user.address.house ? "house.svg" : "apart.svg"
					}" alt="user's address" />
				</li>
				<li class="list-group-item">
					<strong>Role:</strong> ${user.role}
				</li>
			</ul>
		</div>
	</article>
`
}

users.forEach((user) => {
	writeDom(user)
})