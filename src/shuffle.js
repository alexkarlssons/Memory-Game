export default array => {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    let returnArray = []
    let idCounter = 0
    array.forEach(item => {
      returnArray[idCounter] = {item, idCounter}
      idCounter += 1
    });
    console.log(returnArray)
    return returnArray
}
