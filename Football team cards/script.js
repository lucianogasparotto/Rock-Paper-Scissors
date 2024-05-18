const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
  team: "Brazil",
  sport: "Football",
  year:2002,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Luiz Felipe Scolari",
    matches: 7,
  },
  players: [
    {
      name: "Marcos",
      position: "goalkeeper",
      number: 1,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Cafú",
      position: "defender",
      number: 2,
      isCaptain: true,
      nickname: null,
    },
     {
      name: "Lúcio",
      position: "defender",
      number: 3,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Roque Júnior",
      position: "defender",
      number: 4,
      isCaptain: false,
      nickname: null
    },
    {
      name: "Edmílson",
      position: "midfielder",
      number: 5,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Roberto Carlos",
      position: "defender",
      number: 6,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ricardinho",
      position: "midfielder",
      number: 7,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Gilberto Silva",
      position: "midfielder",
      number: 8,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ronaldo Nazário",
      position: "forward",
      number: 9,
      isCaptain: false,
      nickname: "Fenômeno",
    },
    {
      name: "Ronaldo de Assis",
      position: "midfielder",
      number: 10,
      isCaptain: false,
      nickname: "Ronaldinho Gaucho",
    },
    {
      name: "Rivaldo",
      position: "forward",
      number: 11,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Dida",
      position: "goalkeeper",
      number: 12,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Belleti",
      position: "defender",
      number: 13,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Anderson Polga",
      position: "defender",
      number: 14,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Kleberson",
      position: "midfielder",
      number: 15,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ricardo",
      position: "midfielder",
      number: 16,
      isCaptain: false,
      nickname: "Kaká",
    },
    {
      name: "Denilson",
      position: "forward",
      number: 17,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Marcos",
      position: "midfielder",
      number: 18,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Juninho Paulista",
      position: "midfielder",
      number: 19,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Edilson",
      position: "forward",
      number: 20,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Luizão",
      position: "forward",
      number: 21,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Rogério Seni",
      position: "goalkeeper",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
  ],
};

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, number, isCaptain, nickname }) =>
        `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      `
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;
    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;
    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;

default:
  setPlayerCards();


  }
});
