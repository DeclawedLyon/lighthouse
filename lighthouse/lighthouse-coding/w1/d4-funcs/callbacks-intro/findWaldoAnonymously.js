const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found(i);   // execute callback
    }
  }
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], index => console.log("Found Waldo at index ", index));