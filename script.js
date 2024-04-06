let names = [];

function addName() {
  const nameInput = document.getElementById("name-input");
  const name = nameInput.value;
  
  if (name !== "") {
    names.push(name);
    displayNames();
    nameInput.value = "";
  }
}

function displayNames() {
  const namesList = document.getElementById("names-list");
  namesList.innerHTML = "";
  
  for (let i = 0; i < names.length; i++) {
    const nameItem = document.createElement("p");
    nameItem.innerText = names[i];
    namesList.appendChild(nameItem);
  }
}

function shuffle() {
  if (names.length > 0) {
    const randomIndex = Math.floor(Math.random() * names.length);
    const winner = names[randomIndex];
    const winnerElement = document.getElementById("winner");
    winnerElement.innerText = "Winner: " + winner;
  }
}


function addName() {
  const nameInput = document.getElementById("name-input");
  const name = nameInput.value.trim(); // Trim leading and trailing spaces
  
  if (name !== "") {
    names.push(name);
    displayNames();
    nameInput.value = "";
  } else {
    alert("Please enter a valid name.");
  }
}