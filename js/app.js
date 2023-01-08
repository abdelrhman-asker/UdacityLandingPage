// To Test Performace
const starting = performance.now();

// To Append its Childs
const MainUL = document.getElementById("navbar__list");
document
  .querySelector("ul")
  .setAttribute("style", "display: flex;flex-wrap: wrap;justify-content: end;");
// A simple for Loop to make Nav Content (Tring not to use Html and Css Files :-) and a
// function for Scrolling to Section Instead of Making it Using Href to Sections Id Because This Method will Change on URL)
const MainFunc = () => {
  for (let i = 0; i < 4; i++) {
    const ChildLi = document.createElement("a");
    ChildLi.innerHTML = `Section${i + 1}`;
    ChildLi.setAttribute("class", `section${i + 1}`);
    ChildLi.setAttribute(
      "style",
      "font-weight: bold; text-decoration: none  !important; color: black; padding: 20px 15px; cursor: pointer;"
    );
    MainUL.appendChild(ChildLi);
    let navigatorChild = document.querySelector(`.section${i + 1}`);
    let GotoSections = document.getElementById(navigatorChild.className);
    const scrollElement = () => {
      setTimeout(() => {
        GotoSections.scrollIntoView("smooth", "start");
      }, 300);
    };
    navigatorChild.addEventListener("click", scrollElement);
  }
};
MainFunc();
// A Function With For Loop And if Condition To Set Active and Changing Background and font color
//(there is other method by gives the element class and  give this class any styling i want in css file )
const makeActive = () => {
  for (let i = 0; i < 4; i++) {
    let sections = document.querySelector(`#section${i + 1}`);
    let rectSec = sections.getBoundingClientRect();
    // i made it with range in 150 to make someTime  in appearing if i made it 0 it will apply in very short range
    if (Math.abs(rectSec.top) <= 150) {
      sections.setAttribute("class", "Active");
      document.querySelector(`.section${i + 1}`).style.color = "white";
      document.querySelector(`.section${i + 1}`).style.backgroundColor =
        "black";
    } else {
      sections.removeAttribute("class", "Active");
      document.querySelector(`.section${i + 1}`).style.color = "black";
      document.querySelector(`.section${i + 1}`).style.backgroundColor =
        "white";
    }
  }
};

// for making scroll to top button and its styling
const btn = document.createElement("button");
btn.innerHTML = "To Top";
// (sorry for this styling i`m not a Designer)
btn.setAttribute(
  "style",
  "position: fixed; bottom: 30px; right:35px; background-color:blue; border-radius: 10px; cursor:pointer"
);
btn.addEventListener("click", function () {
  setTimeout(() => {
    window.scroll(0, 0);
  }, 200);
});
document.body.appendChild(btn);

const Ending = performance.now();
console.log((Ending - starting).toFixed(2), "Ms");
