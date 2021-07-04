const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let id = event.target.searchByID.value;


    fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(data => {
      for(thing of data) {
        if(thing.id.toString() === id) {
          let title = document.querySelector("h4");
          let summary = document.querySelector("p");
          title.textContent = thing.title;
          summary.textContent = thing.summary;
        }
      }
    });
  });
  
}

document.addEventListener('DOMContentLoaded', init);