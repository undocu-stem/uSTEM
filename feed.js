window.onload = () => {

fetch('/feed')
  .then()
let max = 20;
const inner = document.querySelector(".inner");

const loadMore = () => {
  for (var i = max-20; i < max; i++) {
    if(obj.category === "scholarship") {
      inner.innerHTML += `
        <div class="entry">
          <div>${obj.user.fname + " " + obj.user.lname}</div>
          <div>${obj.fields[0].daca}</div>
          <div>${obj.fields[0].undaca}</div>
          <div>${obj.category}</div>
          <div>${obj.fields[0].link}</div>
          <div>${obj.fields[0].amount}</div>
          <div>${obj.fields[0].region}</div>
        </div>
      `;
    }
  }
  max += 20;
}

const on = document.querySelector(".on");
const two = document.querySelector(".two");

on.addEventListener('scroll', () => {
  const top = on.scrollTop();
  two.html("top: "+top+" diff: "+($(".inner").height() - $(".on").height()));
  if(top >= inner.height() - on.height()){
    two.innerHTML += " bottom";
    loadMore()
  }
});

loadMore();

}