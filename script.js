function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./images/icon=${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./images/icon=${player2}.svg" alt="Bandeira de ${player2}" />
    </li>
    
  `
}
let delay = -0.4

function createCard(date, day, games) {
  delay = delay + 0.4
  return `
   <div class="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/10", "Segunda", createGame("liberia", "08:00", "madeira")) +
  createCard("28/11", "Sexta", createGame("malaysia", "16:00", "mali")) +
  createCard("28/11", "Sexta", createGame("cape verde", "16:00", "brazil")) +
  createCard(
    "10/11",
    "Quinta",
    createGame("marshall island", "18:00", "mexico")
  )
