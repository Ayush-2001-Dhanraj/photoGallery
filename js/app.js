const header = document.getElementsByTagName("header")[0];
const footer = document.getElementsByTagName("footer")[0];
const main = document.getElementsByTagName("main")[0];
const nillSection = document.getElementsByClassName("nillSection");
const buttons = document.getElementsByTagName("button");
const figure = document.getElementsByTagName("figure");
const filtersName = ["All", "Selfies", "Outdoor", "family"];
const filterEmoji = ["🌏", "🤳", "🌳", "👨‍👩‍👧‍👦"]

// filters buttons

const allBtn = document.getElementsByClassName("all")[0];
const selBtn = document.getElementsByClassName("sel")[0];
const outBtn = document.getElementsByClassName("out")[0];
const famBtn = document.getElementsByClassName("fam")[0];
const buttonArr = [allBtn, selBtn, outBtn, famBtn];

let headerHeight;
let footerHeight;
// nillSection[0].style.height = headerHeight + "px";
// nillSection[1].style.height = footerHeight + "px";

const resize = () => {
  headerHeight = header.offsetHeight;
  footerHeight = footer.offsetHeight;
  nillSection[0].style.height = headerHeight + "px";
  nillSection[1].style.height = footerHeight + "px";
  const lala = window.screen.width;
  if (lala > 800) {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].innerText = filtersName[i];
    }

  } else {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].innerText = filterEmoji[i];
    }
  }
}

const resolve = () => {
  for(let i = 0; i < figure.length; i++) {
    figure[i].style.display = "inline-block";
  }
}

const changeDisplay = (category, btn) => {
  for(let i = 0; i < figure.length; i++) {
    let classes = figure[i].classList;
    if(category == "all") {
      break;
    }
    if(classes == category) {
      continue;
    } else {
      figure[i].style.display = "none";
    }
  }
  buttonArr.forEach((element) => {
    if(element == btn) {
      element.style.backgroundColor = "#92817a";
      console.log(element);
    } else {
      element.style.backgroundColor = "#bedbbb";
    }
  });
}

allBtn.addEventListener("click", () => {
  console.log("all");
  resolve();
  changeDisplay("all", allBtn);
});

selBtn.addEventListener("click", () => {
  console.log("sel");
  resolve();
  changeDisplay("selfie", selBtn);
});

outBtn.addEventListener("click", () => {
  console.log("out");
  resolve();
  changeDisplay("outdoor", outBtn);
});

famBtn.addEventListener("click", () => {
  console.log("fam");
  resolve();
  changeDisplay("family", famBtn);
});

window.onresize = resize;

window.onscroll = () => {
  header.style.opacity = "0.7";
  footer.style.opacity = "0.7";
};

resize(); //For initial start
