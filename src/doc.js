
export let popDoc = function(array){
  for (var i = 0; i < array.length; i++) {
    return `<p id="doc${i}out">${array[i].join(", ")}</p>`
  }
}
