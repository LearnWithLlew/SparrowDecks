function create(item1, item2){
  let results = [];
  let list1 = getItems(item1);
  let list2 = getItems(item2);
  while(0 < list1.length  && 0 < list2.length){
    var first = Math.random() >= 0.5;
    var from = first ? list1 : list2;
    if (0 < from.length){
      results.push(from.shift())
    }
  }
  return results;
}
function pad(number, length)
{
  var s = number+"";
  while (s.length < length) {
    s = "0" + s;
  }
  return s;
}


function getItems(item1){
  let results = []
  for (var i = 1; i <= item1.number; i++) {
    results.push( {
    "image": item1.name + pad(i,2)+ item1.prefix,
    "answer": item1.name
    });
  }
  return results;
}

export const sparrowsTrainingSet = {
  title: "Sparrows",
  left: "House",
  right: "Song",
  baseUrl: "sparrow/images/",
  examples: create({ name:"Song", number:50, prefix:".jpeg"}, { name:"House", number:50, prefix:".jpeg"})
};
