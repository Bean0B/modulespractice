module.exports = {
  where: "You should eat here: ",
  restpick: function () {
    console.log(rest(["Alibaba", "Phovy", "Tacofino", "Noodlebox", "Pig", "PinkBicycle"]));
  }

};

// var restpick = rest(["foo", "pho"])

function rest(list) {
    return (list[Math.floor(Math.random()*list.length)]);
  }






//console.log(rest(["foo", "pho", "pizza"]))


//rest(["foo", "pho"])
// function getrandomstring

// var textArray = [
//     'song1.ogg',
//     'song2.ogg'
// ];
// var randomNumber = Math.floor(Math.random()*textArray.length);

// audioElement.setAttribute('src', textArray[randomNumber]);







// console.log(pickrandom(["Foo", "Tacofino", "Pho place"],  ))