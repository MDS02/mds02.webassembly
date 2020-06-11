let oppervlakte;

function loadWebAssembly(fileName) {
  return fetch(fileName)
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.compile(buffer))
    .then(module => {return new WebAssembly.Instance(module) });
};
  
loadWebAssembly('oppervlakte.wasm')
  .then(instance => {
    oppervlakte = instance.exports._Z11oppervlaktei;
    console.log('Finished compiling Oppervlakte! Ready when you are...');
  });

  let rekenmachine;

function loadWebAssembly(fileName) {
  return fetch(fileName)
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.compile(buffer))
    .then(module => {return new WebAssembly.Instance(module) });
};
  
loadWebAssembly('rekenmachine.wasm')
  .then(instance => {
    rekenmachine = instance.exports.calculate;
    console.log('Finished compiling Rekenmachine! Ready when you are...');
  });
