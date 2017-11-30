var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'Triceratops';
var UpperDinosaur = dinosaur.toUpperCase();
var newText = text.replace('Velociraptor', UpperDinosaur);
var half = newText.substr(0, newText.length/2);
console.log(half);