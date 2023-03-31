const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid')[0];

window.addEventListener('load', dayNightMode)

input.addEventListener('keydown', function(event) {
    
    if (event.key.toLowerCase() === 'enter') {
      //проверка  console.log('its work')
       
        loadImg();
    }
})

function loadImg(){
    removeImages();

    const url = 'https://api.unsplash.com/search/photos?query='+input.value+'&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

    fetch(url)
    .then(response => {
      //проверка  console.log(response)
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })

    .then(data => {
        const imageNodes = [];
        for(let i = 0; 1 < data.results.length; i++) {
            imageNodes[i] = document.createElement('div');
            imageNodes[i].className = 'img';
            imageNodes[i].style.backgroundImage = "url("+data.results[i].urls.raw + "&w=1366&h=768" +")";
            imageNodes[i].addEventListener('dbclick', () => window.open(data.results[i].links.download,'_blank'));
            grid.appendChild(imageNodes[i]);
        }
    })
}

function removeImages(){
    grid.innerHTML = '';

}

function dayNightMode() {
    const data = new Date();
    const hour = data.getHours();

    if (hour >= 7 && hour < 20){
        document.body.style.backgroundColor = 'whitesmoke';
        document.body.style.color = 'black';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
}
 