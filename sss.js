dayNightTheme = () => {
    let date = new Date();
    let hour = date.getHours();
  
    if(hour >= 7 && hour < 19){
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
    else{
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
  }
  
  window.addEventListener('load', dayNightTheme);
  
  document.querySelector("#input").addEventListener("keydown", (event) => {
    if (event.key == "Enter")
      apiRequest();
  });
  
  document.querySelector("#search").addEventListener("click", () => {
      apiRequest();
  });
  
  apiRequest = () => {
  
    document.querySelector("#grid").textContent = "";
  
    const url = 'https://api.unsplash.com/search/photos?query='+input.value+'&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
  
    fetch(url)
  
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
        return response.json();
     })
  
     .then(data => {
        loadImages(data);
     })
  
     .catch(error => console.log(error));   
  }
