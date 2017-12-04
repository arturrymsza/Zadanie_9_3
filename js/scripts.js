var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'Triceratops';
var upperDinosaur = dinosaur.toUpperCase();
var newText = text.replace('Velociraptor', upperDinosaur);
var half = newText.substr(0, newText.length/2);
console.log(half);