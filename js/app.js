document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
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
  itemDiv.setAttribute("id", "item-div");
  itemDiv.appendChild( makeIdentifierDiv(identifierText) );
  itemDiv.appendChild( makeDistanceDiv(distanceName) );
  itemDiv.appendChild( makeClassDiv(classText, fractionText) );
  return itemDiv;
}

const makeIdentifierDiv = function (id) {
  const ident = document.createElement('h2');
  ident.textContent = `Planet Identifier: ${id.toUpperCase}`;
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
