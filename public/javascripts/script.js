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

//adopter diplay variables

//display function scripts
function getHref() {
  let page = location.href
  return page.toString()
}
function checkFirstPet(page) {
  if (page.includes('adopter-profile/edit')) {
    const firstPet = document.querySelector('#firstPet')
    if (firstPet.textContent === 'true') {
      firstPet.textContent = 'This is my first Pet'
    } else {
      firstPet.textContent = "I've had pets before"
    }
  } else {
    return
  }
}

function checkOtherPets(page) {
  if (page.includes('adopter-profile/edit')) {
    const otherPets = document.querySelector('#otherPets')
    const numPets = document.querySelector('#numPets')
    if (otherPets.textContent === 'true') {
      otherPets.textContent = 'I have other pets'
      numPets.classList.toggle('active')
    } else {
      otherPets.textContent = "I don't have other pets"
    }
  } else {
    return
  }
}
function menuOptions(page) {
  if (page.includes('profile') && !page.includes('pet') && !page.includes('adopter')) {
    const role = document.querySelector('#role').textContent
    const adopterMenu = document.querySelector('#adopter-options')
    const adopteeMenu = document.querySelector('#adoptee-options')
    if (role === 'Role: adopter') {
      adopterMenu.classList.toggle('active')
    } else {
      adopteeMenu.classList.toggle('active')
    }
  } else {
    return
  }
}
function checkNeeds(page) {
  if (page.includes('pet') && page.includes('edit')) {
    const hasMedicalNeeds = document.querySelector('#hasMedicalNeeds')
    const dispNeeds = document.querySelector('#disp-needs')
    if (hasMedicalNeeds.textContent === 'true') {
      hasMedicalNeeds.textContent = 'Yes my pet has medical needs'
      dispNeeds.classList.toggle('active')
    } else {
      hasMedicalNeeds.textContent = "No It's Healthy"
    }
  } else {
    return
  }
}
function checkSterile(page) {
  if (page.includes('pet') && page.includes('edit')) {
    const isSterile = document.querySelector('#isSterile')
    if (isSterile.textContent === 'true') {
      isSterile.textContent = 'Yes, it  has been sterilized'
    } else {
      isSterile.textContent = 'No, it can still breed'
    }
  }
}
window.onload = checkFirstPet(getHref())
window.onload = checkOtherPets(getHref())
window.onload = checkNeeds(getHref())
window.onload = checkSterile(getHref())
window.onload = menuOptions(getHref())
//Adopter edit varibles
if (getHref().includes('adopter-profile/edit')) {
  const BtnAddPhoto = document.querySelector('#BtnAddPhoto')
  const addPhoto = document.querySelector('#addPhoto')
  const propertyEdit = document.querySelector('#property-edit')
  const popertyForm = document.querySelector('#item-property')
  const locationEdit = document.querySelector('#location-edit')
  const locationForm = document.querySelector('#item-location')
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

  //Universal listeners
  BtnAddPhoto.addEventListener('click', () => {
    addPhoto.classList.toggle('active')
  })

  propertyEdit.addEventListener('click', () => {
    popertyForm.classList.toggle('active')
  })
  //Adopter listeners
  homeEdit.addEventListener('click', () => {
    homeForm.classList.toggle('active')
  })

  yardEdit.addEventListener('click', () => {
    yardForm.classList.toggle('active')
  })

  peopleEdit.addEventListener('click', () => {
    peopleForm.classList.toggle('active')
  })

  childrenEdit.addEventListener('click', () => {
    childrenForm.classList.toggle('active')
  })

  employmentEdit.addEventListener('click', () => {
    employmentForm.classList.toggle('active')
  })

  freetimeEdit.addEventListener('click', () => {
    freetimeForm.classList.toggle('active')
  })

  firstPetEdit.addEventListener('click', () => {
    firstPetForm.classList.toggle('active')
  })

  petEdit.addEventListener('click', () => {
    petForm.classList.toggle('active')
  })

  locationEdit.addEventListener('click', () => {
    locationForm.classList.toggle('active')
  })
}
//adoptee listeners
if (getHref().includes('pet-profile/edit')) {
  const nameEdit = document.querySelector('#name-edit')
  const nameForm = document.querySelector('#item-name')
  const sterileEdit = document.querySelector('#sterile-edit')
  const sterileForm = document.querySelector('#item-sterile')
  const medicalNeedsEdit = document.querySelector('#medicalNeeds-edit')
  const medicalNeedsForm = document.querySelector('#item-medicalNeeds')
  const BtnAddPhoto = document.querySelector('#BtnAddPhoto')
  const addPhoto = document.querySelector('#addPhoto')
  const locationEdit = document.querySelector('#location-edit')
  const locationForm = document.querySelector('#item-location')
  const attributeEdit = document.querySelector('#attribute-edit')
  const attributeForm = document.querySelector('#item-attribute')
  BtnAddPhoto.addEventListener('click', () => {
    addPhoto.classList.toggle('active')
  })

  locationEdit.addEventListener('click', () => {
    locationForm.classList.toggle('active')
  })
  nameEdit.addEventListener('click', () => {
    nameForm.classList.toggle('active')
  })
  sterileEdit.addEventListener('click', () => {
    sterileForm.classList.toggle('active')
  })
  medicalNeedsEdit.addEventListener('click', () => {
    medicalNeedsForm.classList.toggle('active')
  })
  attributeEdit.addEventListener('click', () => {
    attributeForm.classList.toggle('active')
  })
}
