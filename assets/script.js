const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
// (trovate l’array del team all’interno della cartella in allegato)




// DOM ELEMENT
const output =document.querySelector(".output")


// Dichiaro una stringa dove all'interno includero la parte di html
let stringa = ""

// PRENDO IL NOME I RUOLI EMAIL E IMG DAGLI ARRAY
for (let i = 0; i < teamMembers.length; i++) {
  // TEAM CARD 
  let teamIesimo = teamMembers[i]
  
  // In questo caso uso il Destructuring dove  vado a prendermi il nome il ruolo etcc...
  const { name, role, email, img } = teamIesimo
  // console.log(name, role, email, img)

  stringa += `
    <div class="card mb-5 col-4 bg-black text-white p-0 " style="max-width: 540px; ">
            <div class="row g-2 ">
              <div class="col-md-4">
                <img src="${img}" class="img-fluid rounded-start" alt="${name}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title">${name}</h3>
                  <p class="card-text">${role}</p>
                  <p class="card-text text-primary "><a href="#" class="text-decoration-none">${email}</a></p>
                </div>
              </div>
            </div>
    </div>
  
  `
  output.innerHTML = stringa
}





// SI POTREBBE FARE ANCHE CON FOREACH
// teamMembers.forEach(function(teamIesimo){
//   console.log(teamIesimo)
// }) 
