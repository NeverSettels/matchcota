document.addEventListener(
  'DOMContentLoaded',
  () => {
    console.log('IronGenerator JS imported successfully!')
  },
  false
)
var deleteLinks = document.querySelectorAll('.delete')

for (var i = 0; i < deleteLinks.length; i++) {
  deleteLinks[i].addEventListener('click', function(event) {
    event.preventDefault()

    var choice = confirm(this.getAttribute('data-confirm'))

    if (choice) {
      window.location.href = this.getAttribute('href')
    }
  })
}

//Adopter edit  varibles
const BtnAddPhoto = document.querySelector('#BtnAddPhoto')
const addPhoto = document.querySelector('#addPhoto')
const propertyEdit = document.querySelector('#property-edit')
const popertyForm = document.querySelector('#item-property')
const homeEdit = document.querySelector('#home-edit')
const homeForm = document.querySelector('#item-home')
const yardEdit = document.querySelector('#yard-edit')
const yardForm = document.querySelector('#item-yard')
const peopleEdit = document.querySelector('#people-edit')
const peopleForm = document.querySelector('#item-people')
const childrenEdit = document.querySelector('#children-edit')
const childrenForm = document.querySelector('#item-children')
const employmentEdit = document.querySelector('#employment-edit')
const employmentForm = document.querySelector('#item-employment')
const freetimeEdit = document.querySelector('#freetime-edit')
const freetimeForm = document.querySelector('#item-freetime')
const firstPetEdit = document.querySelector('#firstPet-edit')
const firstPetForm = document.querySelector('#item-firstPet')
const petEdit = document.querySelector('#pet-edit')
const petForm = document.querySelector('#item-pet')
//adopter diplay variables
const firstPet = document.querySelector('#firstPet')
const otherPets = document.querySelector('#otherPets')
const numPets = document.querySelector('#numPets')

if (firstPet.textContent === 'true') {
  firstPet.textContent = 'This is my first Pet'
} else {
  firstPet.textContent = "I've had pets before"
}
//display scrips
if (otherPets.textContent === 'true') {
  otherPets.textContent = 'I have other pets'
  numPets.classList.toggle('active')
} else {
  otherPets.textContent = "I don't have other pets"
}
//Adopter listeners
BtnAddPhoto.onclick = e => {
  addPhoto.classList.toggle('active')
}
propertyEdit.onclick = e => {
  popertyForm.classList.toggle('active')
}
homeEdit.onclick = e => {
  homeForm.classList.toggle('active')
}
yardEdit.onclick = e => {
  yardForm.classList.toggle('active')
}
peopleEdit.onclick = e => {
  peopleForm.classList.toggle('active')
}
childrenEdit.onclick = e => {
  childrenForm.classList.toggle('active')
}
employmentEdit.onclick = e => {
  employmentForm.classList.toggle('active')
}
freetimeEdit.onclick = e => {
  freetimeForm.classList.toggle('active')
}
firstPetEdit.onclick = e => {
  firstPetForm.classList.toggle('active')
}
petEdit.onclick = e => {
  petForm.classList.toggle('active')
}
