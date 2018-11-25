document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAll);
})

const handleFormSubmit = function (event) {
  event.preventDefault();
  console.log(event.target.identifier.value);
  console.log(event.target.distance.value);
  console.log(event.target.massClass.value);
  console.log(event.target.massFraction.value);
  const itemIdentifier = event.target.identifier.value;
  const itemDistance = event.target.distance.value;
  const itemClass = event.target.massClass.value;
  const itemFraction = event.target.massFraction.value;
  const newDiv = makeItemDiv(itemIdentifier, itemDistance,
    itemClass, itemFraction);
  const planetListDiv = document.querySelector('#exoplanet-list');
  planetListDiv.appendChild( newDiv);
  event.target.reset();
};

const makeItemDiv = function (identifierText, distanceName,
  classText, fractionText) {
  const itemDiv = document.createElement('div');
  if (classText === "Earth Masses") {
    let randNo = randomNumber(1, 7);
    let earthMassString = `item-earth-mass-${randNo}`
    itemDiv.setAttribute("id", earthMassString);
  };
  if (classText === "Jupiter Masses") {
    let randNo = randomNumber(1, 6);
    let jupiterMassString = `item-jupiter-mass-${randNo}`
    itemDiv.setAttribute("id", jupiterMassString);
  };
  itemDiv.appendChild( makeIdentifierDiv(identifierText) );
  itemDiv.appendChild( makeDistanceDiv(distanceName) );
  itemDiv.appendChild( makeClassDiv(classText, fractionText) );
  return itemDiv;
}

const randomNumber = function (min, max) {
  let minimum = Math.ceil(min);
  let maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

const makeIdentifierDiv = function (id) {
  const ident = document.createElement('h2');
  ident.textContent = `Planet Identifier: ${id.toUpperCase()}`;
  return ident;
}

const makeDistanceDiv = function (distance) {
  const dist = document.createElement('h3');
  dist.textContent = `Distance: ${distance}pc`;
  return dist;
}

const makeClassDiv = function (planetClass, massFrac) {
  const planetMass = document.createElement('h4');
  planetMass.textContent = `Planet mass: ${massFrac} ${planetClass}.`;
  return planetMass;
}

const handleDeleteAll = function (event) {
  const readingList = document.querySelector('#exoplanet-list');
  readingList.innerHTML = '';
}
