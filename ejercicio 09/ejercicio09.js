let arreglo = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    date: "2022-08-08 20:30",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    date: "2022-08-08 20:30",
  },
  {
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    date: "2022-08-08 20:30",
  },
  {
    id: 4,
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    date: "2022-08-08 20:30",
  },
  {
    id: 5,
    name: "Jerry Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    date: "2022-08-08 20:30",
  },
  {
    id: 6,
    name: "Abadango Cluster Princess",
    status: "Alive",
    species: "Alien",
    type: "",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
    date: "2022-08-08 20:30:02" /*2022/08/08 20:30*/,
  },
];

function datos(cosa) {
  for (i = 0; i < cosa.length; i++) {
    document.getElementById("cuadrado").innerHTML += `<div class="card">
    <p>Id: ${cosa[i]["id"]} </p>
    <p>Name: ${cosa[i]["name"]}  </p>
    <p>Status: ${cosa[i]["status"]} </p>
    <p>Species: ${cosa[i]["species"]},</p>
    <p>Gender: ${cosa[i]["gender"]}</p>
    <img src= ${cosa[i]["image"]} alt="" class="imagen">
</div>`;
  }
}

datos(arreglo);
