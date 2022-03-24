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

      <i class="fa-solid fa-bars"></i>
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

    <div id="hamburgerContent" class="hidden">

      <a class="hamburgerPlanetLink" href="./mercury.html"><div class="hamburgerPlanetColorMercury"></div><span class="hamburgerPlanetName">MERCURY</span><i class="fa-solid fa-angle-right"></i></a>
      <a class="hamburgerPlanetLink" href="./venus.html"><div class="hamburgerPlanetColorVenus"></div><span class="hamburgerPlanetName">VENUS</span><i class="fa-solid fa-angle-right"></i></a>
      <a class="hamburgerPlanetLink" href="./index.html"><div class="hamburgerPlanetColorEarth"></div><span class="hamburgerPlanetName">EARTH</span><i class="fa-solid fa-angle-right"></i></a>
      <a class="hamburgerPlanetLink" href="./mars.html"><div class="hamburgerPlanetColorMars"></div><span class="hamburgerPlanetName">MARS</span><i class="fa-solid fa-angle-right"></i></a>
      <a class="hamburgerPlanetLink" href="./jupiter.html"><div class="hamburgerPlanetColorJupiter"></div><span class="hamburgerPlanetName">JUPITER</span><i class="fa-solid fa-angle-right"></i></a>
      <a class="hamburgerPlanetLink" href="./saturn.html"><div class="hamburgerPlanetColorSaturn"></div><span class="hamburgerPlanetName">SATURN</span><i class="fa-solid fa-angle-right"></i></a>
      <a class="hamburgerPlanetLink" href="./uranus.html"><div class="hamburgerPlanetColorUranus"></div><span class="hamburgerPlanetName">URANUS</span><i class="fa-solid fa-angle-right"></i></a>
      <a class="hamburgerPlanetLink" href="./neptune.html"><div class="hamburgerPlanetColorNeptune"></div><span class="hamburgerPlanetName">NEPTUNE</span><i class="fa-solid fa-angle-right"></i></a>

    </div>

  </header>

  <section class="planetDescription">

    <div class="planetDescription__img"><img class="mainImage" src="${planetDetails.images.planet}" alt=""></div>
    <div class="planetDescription__text">
     
      
    
      <!-- Overview Content Start -->
      <div id="overviewText">
      <h2 id="planetTitle">${planetDetails.name}</h2>
        <p>${planetDetails.overview.content}</p>
        <span class="source">Source : <a href="${planetDetails.overview.source}">Wikipedia</a><i class="fa-solid fa-square-up-right"></i></span> <!-- URL: https://en.wikipedia.org/wiki/Earth -->
      </div>
      <!-- Overview Content End -->
      
      <!-- Internal Structure Content Start -->
      <div id="structureText" class="hidden">
      <h2 id="planetTitle">${planetDetails.name}</h2>
        <p>${planetDetails.structure.content}</p>
        <span class="source">Source : <a href="${planetDetails.structure.source}">Wikipedia</a><i class="fa-solid fa-square-up-right"></i></span> <!-- URL: https://en.wikipedia.org/wiki/Earth#Internal_structure -->
      </div>
      <!-- Internal Structure Content End -->
      
      <!-- Surface Geology Content Start -->
      <div id="surfaceText" class="hidden">
      <h2 id="planetTitle">${planetDetails.name}</h2>
        <p>${planetDetails.geology.content}</p>
        <span class="source">Source : <a href="${planetDetails.geology.source}">Wikipedia</a><i class="fa-solid fa-square-up-right"></i></span> <!-- URL: https://en.wikipedia.org/wiki/Earth#Surface -->
      </div>
      <!-- Surface Geology Content End -->
      <div class="planetStates">
        <div id="buttonOverview"><span class="buttonNumber">01</span>Overview</div> 
        <div id="buttonStructure" class="buttonStructure"><span class="buttonNumber">02</span>Structure</div> 
        <div id="buttonSurface" class="buttonSurface"><span class="buttonNumber">03</span>Geology</div>
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
    let buttonOverview = document.querySelector("#buttonOverview");
    let buttonStructure = document.querySelector("#buttonStructure");
    let buttonSurface = document.querySelector("#buttonSurface");

    let planetImage = document.querySelector(".planetDescription__img");

    let overviewText = document.querySelector("#overviewText");
    let structureText = document.querySelector("#structureText");
    let surfaceText = document.querySelector("#surfaceText");

    buttonOverview.classList.add(`${planetDetails.name}`);
    console.log(buttonOverview);

    buttonOverview.addEventListener("click", () => {

        buttonStructure.classList.remove(`${planetDetails.name}`);
        buttonStructure.classList.add("buttonStructure");
        buttonSurface.classList.remove(`${planetDetails.name}`);
        buttonSurface.classList.add("buttonSurface");
        buttonOverview.classList.remove("buttonOverview");
        buttonOverview.classList.add(`${planetDetails.name}`);

        overviewText.classList.remove("hidden");
        structureText.classList.add("hidden");
        surfaceText.classList.add("hidden");

        planetImage.innerHTML = ` <img class="mainImage" src="${planetDetails.images.planet}" alt=""> `

    })
    buttonStructure.addEventListener("click", () => {

        buttonSurface.classList.remove(`${planetDetails.name}`);
        buttonSurface.classList.add("buttonSurface");
        buttonOverview.classList.remove(`${planetDetails.name}`);
        buttonOverview.classList.add("buttonOverview")
        buttonStructure.classList.remove("buttonStructure");
        buttonStructure.classList.add(`${planetDetails.name}`);

        overviewText.classList.add("hidden");
        structureText.classList.remove("hidden");
        surfaceText.classList.add("hidden");

        planetImage.innerHTML = ` <img class="mainImage" src="${planetDetails.images.internal}" alt=""> `
    })
    buttonSurface.addEventListener("click", () => {

        buttonOverview.classList.remove(`${planetDetails.name}`);
        buttonOverview.classList.add("buttonOverview")
        buttonStructure.classList.remove(`${planetDetails.name}`);
        buttonStructure.classList.add("buttonStructure");
        buttonSurface.classList.remove("buttonSurface");
        buttonSurface.classList.add(`${planetDetails.name}`);

        overviewText.classList.add("hidden");
        structureText.classList.add("hidden");
        surfaceText.classList.remove("hidden");

        planetImage.innerHTML = ` <img class="mainImage" src="${planetDetails.images.planet}" alt="">
        <img class="surfaceImage" src="${planetDetails.images.geology}" alt=""> `
    })

    let hamburgerButton = document.querySelector(".fa-bars");
    hamburgerButton.addEventListener("click", () => {
      console.log("hamburger");
      hamburgerContent.classList.toggle("hidden");
    })
}

displayFetch();













