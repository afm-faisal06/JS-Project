//quote part
const quotesText=document.querySelector(".text-area .quote"),
quoteWriter=document.querySelector(".writer");
function randomQuote(){
fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
    quotesText.innerText=result.content;
    quoteWriter.innerText=result.author;
    });
}
randomQuote();
function changeGreen() {
    document.querySelector(".text-area").style.color = "blue";
    document.querySelector(".main-content").style.border="thick solid black"
    document.querySelector(".main-content").style.backgroundColor = "green";
    randomQuote();
  }
  
function changeYellow() {
    document.querySelector(".text-area").style.color = "black";
    document.querySelector(".main-content").style.border="thick solid green"
    document.querySelector(".main-content").style.backgroundColor = "yellow";
    randomQuote();
}
  
function changeSblue() {
    document.querySelector(".text-area").style.color = "red";
    document.querySelector(".main-content").style.border="thick solid orange"
    document.querySelector(".main-content").style.backgroundColor = "skyblue";
    randomQuote();
}
  
function changeOrange() {
    document.querySelector(".text-area").style.color = "green";
    document.querySelector(".main-content").style.border="thick solid skyblue"
    document.querySelector(".main-content").style.backgroundColor = "orange";
    randomQuote();
}

//converter part
function weightConverter() {
    conv = document.querySelector(".drop-value").value;
    let va= document.querySelector(".inva").value;
    console.log(conv,va,typeof(va));
    if(conv==="kg"){
        document.getElementById("outputs").innerHTML = `<span>${Number(va)*0.4536} Kilograms </span>`;
    }
    else{
        document.getElementById("outputs").innerHTML = `<span>${Number(va)*2.2046} Pounds</span>`;
    }
}
setInterval(weightConverter, 100);

//series part
function calculate() {
    var input = document.getElementById("numbers").value;
    var numbers = input.split(",").map(Number);
    var max = Math.max(...numbers);
    var min = Math.min(...numbers);
    var sum = numbers.reduce((a, b) => a + b, 0);
    var avg = sum / numbers.length;
    var reverse = numbers.slice().reverse();
    
    document.getElementById("max").innerHTML = max;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("avg").innerHTML = avg;
    document.getElementById("rv").innerHTML = reverse;
}

//magic part

// clear part
function clearText() {
    document.querySelector(".magic-textarea").value = "";
  }
  // capital lower part
  function cap() {
    if (document.querySelector(".btn-cap").textContent === "Capitalize Up") {
      const store = document.querySelector(".magic-textarea").value;
      document.querySelector(".magic-textarea").value = store.toUpperCase();
      document.querySelector(".btn-cap").textContent = "Capitalize Low";
    } else {
      const store = document.querySelector(".magic-textarea").value;
      document.querySelector(".magic-textarea").value = store.toLowerCase();
      document.querySelector(".btn-cap").textContent = "Capitalize Up";
    }
  }
  // sort part
  function sorted() {
    const store = document
      .querySelector(".magic-textarea")
      .value.split("\n")
      .sort();
    let temp = "";
    for (let i = 0; i < store.length; i++) {
      if (i !== store.length - 1) {
        temp = temp + store[i] + "\n";
      } else {
        temp = temp + store[i];
      }
    }
    document.querySelector(".magic-textarea").value = temp;
  }
  // reverse part
  function revText() {
    const store = document
      .querySelector(".magic-textarea")
      .value.split("\n")
      .reverse();
    let temp = "";
    for (let i = 0; i < store.length; i++) {
      if (i !== store.length - 1) {
        temp = temp + store[i] + "\n";
      } else {
        temp = temp + store[i];
      }
    }
    document.querySelector(".magic-textarea").value = temp;
  }
  // strip part
  function strip() {
    const store = document.querySelector(".magic-textarea").value.split("\n");
    let store2 = [];
    for (let i = 0; i < store.length; i++) {
      if (store[i] !== "") {
        store2.push(store[i]);
      }
    }
    let temp = "";
    for (let i = 0; i < store2.length; i++) {
      if (i !== store2.length - 1) {
        temp = temp + store2[i] + "\n";
      } else {
        temp = temp + store2[i];
      }
    }
    let store3 = temp.split("\n");
    temp = "";
    for (let j = 0; j < store3.length; j++) {
      if (j !== store3.length - 1) {
        temp = temp + store3[j].replace(/\s+/g, " ").trim() + "\n";
      } else {
        temp = temp + store3[j].replace(/\s+/g, " ").trim();
      }
    }
    document.querySelector(".magic-textarea").value = temp;
  }
  // add num part
  function add() {
    const store = document.querySelector(".magic-textarea").value.split("\n");
    let count = 1;
    let temp = "";
    for (let i = 0; i < store.length; i++) {
      if (i !== store.length - 1) {
        temp += `${count}. ` + store[i] + "\n";
      } else {
        temp += `${count}. ` + store[i];
      }
      count++;
    }
    document.querySelector(".magic-textarea").value = temp;
  }
  // shuffle part
  function shuffle() {
    const store = document.querySelector(".magic-textarea").value.split("\n");
    function shuffle(array) {
      let currentIndex = array.length,
        randomIndex;
  
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
  
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
  
      return array;
    }
    const store1 = shuffle(store);
    let temp = "";
    for (let i = 0; i < store1.length; i++) {
      if (i !== store1.length - 1) {
        temp = temp + store1[i] + "\n";
      } else {
        temp = temp + store1[i];
      }
    }
    document.querySelector(".magic-textarea").value = temp;
  }