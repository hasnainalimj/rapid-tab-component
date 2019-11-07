const container = document.querySelector("#wrapper");
const items = ["HTML", "CSS", "JS"];
items.map((value, index) => {
  return (container.innerHTML += `<div class="child" id=${value +
    index} onClick="go(${value + index})">
    <p class="text">${value}</p>
    <p class="caret">></p>
</div>`);
});
go = element => element.style.marginRight = "-200%";