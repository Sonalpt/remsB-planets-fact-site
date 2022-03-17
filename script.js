let planetsData = [];
let planetIndex = document.querySelector(".planetIndex").innerHTML;
let planetIndexParsed = parseInt(planetIndex);
let mainContent = document.querySelector(".mainContent");
console.log(mainContent);
console.log(planetIndexParsed);
console.log(planetIndex);



async function fetchData() {
    await fetch("./data.json")
    .then(res => res.json())
    .then(data => planetsData = data);
}

async function displayFetch() {
    await fetchData();
    let planetDetails = planetsData[planetIndexParsed];
    console.log(planetDetails);
    mainContent.innerHTML = `
    <header>
        
    <nav>

      <h1>THE PLANETS</h1>

      <ul class="Planets">

        <li><a href="./mercury.html">MERCURY</a></li>
        <li><a href="./venus.html">VENUS</a></li>
        <li><a href="./index.html">EARTH</a></li>
        <li><a href="./mars.html">MARS</a></li>
        <li><a href="./jupiter.html">JUPITER</a></li>
        <li><a href="./saturn.html">SATURN</a></li>
        <li><a href="./uranus.html">URANUS</a></li>
        <li><a href="./neptune.html">NEPTUNE</a></li>

      </ul>

    </nav>

  </header>

  <section class="planetDescription">

    <div class="planetDescription__img"><img src="${planetDetails.images.planet}" alt=""></div>
    <div class="planetDescription__text">
     
      <h2 id="planetTitle">${planetDetails.name}</h2>
    
      <!-- Overview Content Start -->
      <div class="overview">
        <p>${planetDetails.overview.content}</p>
        <span class="source">Source : <a href="${planetDetails.overview.source}">Wikipedia</a><i class="fa-solid fa-square-up-right"></i></span> <!-- URL: https://en.wikipedia.org/wiki/Earth -->
      </div>
      <!-- Overview Content End -->
      
      <!-- Internal Structure Content Start -->
      <div class="internal hidden">
        <p>${planetDetails.structure.content}</p>
        <span class="source">Source : <a href="${planetDetails.structure.source}">Wikipedia</a><i class="fa-solid fa-square-up-right"></i></span> <!-- URL: https://en.wikipedia.org/wiki/Earth#Internal_structure -->
      </div>
      <!-- Internal Structure Content End -->
      
      <!-- Surface Geology Content Start -->
      <div class="surface hidden">
        <p>${planetDetails.geology.content}</p>
        <span class="source">Source : <a href="${planetDetails.geology.source}">Wikipedia</a><i class="fa-solid fa-square-up-right"></i></span> <!-- URL: https://en.wikipedia.org/wiki/Earth#Surface -->
      </div>
      <!-- Surface Geology Content End -->
      <div class="planetStates">
        <button><span class="buttonNumber">01</span>Overview</button> 
        <button><span class="buttonNumber">02</span>Internal Structure</button> 
        <button><span class="buttonNumber">03</span>Surface Geology</button>
      </div>
    </div>
     

  </section>

  <footer>

    <div class="planetNumbers">
      <span class="planetNumbers__title">Rotation Time</span> 
      <span class="planetNumbers__number">${planetDetails.rotation}</span> 
    </div>
    <div class="planetNumbers">
      <span class="planetNumbers__title">Revolution Time</span>
      <span class="planetNumbers__number">${planetDetails.revolution}</span>
    </div>
    <div class="planetNumbers">
      <span class="planetNumbers__title">Radius</span> 
      <span class="planetNumbers__number">${planetDetails.radius}</span>
    </div>
    <div class="planetNumbers">
      <span class="planetNumbers__title">Average Temp.</span>
      <span class="planetNumbers__number">${planetDetails.temperature}</span>
    </div>

  </footer>
    `
}
displayFetch();




