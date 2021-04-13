let contentGrid = document.getElementById('contentGrid');

let jsonDatabase = [
  {
    "title" : "Far Cry 5",
    "genre" : "First Person Shooter",
    "releaseDate" : "March 27, 2018",
    "myRating" : "7/10",
    "completion": "32%",
    "imageURL" : "farcry.jpg"
  },
  {
    "title" : "Stardew Valley",
    "genre" : "Simulation, Role-Playing",
    "releaseDate" : "February 26, 2016",
    "myRating" : "8/10",
    "completion": "28%",
    "imageURL" : "stardew.png"
  },
  {
    "title" : "Days Gone",
    "genre" : "Action-Adventure, Survival Horror",
    "releaseDate" : "April 26, 2019",
    "myRating" : "8/10",
    "completion": "100%",
    "imageURL" : "daysgone.jpg"
  },
  {
    "title" : "Sims 4",
    "genre" : "Simulation",
    "releaseDate" : "September 2, 2014",
    "myRating" : "7/10",
    "completion": "100%",
    "imageURL" : "sims.jpg"
  },
  {
    "title" : "The Elder Scrolls V: Skyrim",
    "genre" : "Action Role-Playing",
    "releaseDate" : "November 11, 2011",
    "myRating" : "10/10",
    "completion": "100%",
    "imageURL" : "skyrim.png"
  },
  {
    "title" : "Kingdom Hearts 1.5 + 2.5 Remix: Birth By Sleep FINAL MIX",
    "genre" : "Action Role-Playing",
    "releaseDate" : "March 9, 2017",
    "myRating" : "10/10",
    "completion": "98%",
    "imageURL" : "kingdomhearts.png"
  },
  {
    "title" : "Slime Rancher",
    "genre" : "First person, Adventure, Simulation",
    "releaseDate" : "August 1, 2017",
    "myRating" : "7/10",
    "completion": "100%",
    "imageURL" : "slimerancher.jpg",
  },
  {
    "title" : "The Forest",
    "genre" : "Survival Horror",
    "releaseDate" : "April 30, 2018",
    "myRating" : "8/10",
    "completion": "100%",
    "imageURL" : "forest.png",
  },
  {
    "title" : "A Way Out",
    "genre" : "Co-op Action Adventure",
    "releaseDate" : "March 23, 2018",
    "myRating" : "8/10",
    "completion": "100%",
    "imageURL" : "wayout.png",
  },
  {
    "title" : "This War of Mine: The Little Ones",
    "genre" : "Indie Survival, Simulation",
    "releaseDate" : "November 14, 2014",
    "myRating" : "9/10",
    "completion": "100%",
    "imageURL" : "thiswar.jpg",
  }
];

for(var i = 0; i < jsonDatabase.length; i++){
  createElement(jsonDatabase[i]);
}

function createElement(incomingJSON){
  let newElement = document.createElement("div");
  newElement.classList.add("contentItem");
  newElement.style.backgroundColor = "rgba(198, 191, 245,.8)";
  newElement.style.borderColor = "#000";

  let newHeader = document.createElement("div");
  newHeader.classList.add("contentHeader");
  newElement.appendChild(newHeader);

  let title = document.createElement("h3");
  title.classList.add("title");
  title.innerText = incomingJSON["title"];
  newHeader.appendChild(title);

  let newContent = document.createElement("div");
  newContent.classList.add("contentDescription");
  newElement.appendChild(newContent);

  let date = document.createElement("p");
  date.classList.add("date");
  date.innerText = "Release Date: " + incomingJSON["releaseDate"];
  newContent.appendChild(date);

  let genre = document.createElement("p");
  genre.classList.add("genre");
  genre.innerText = "Genre: " + incomingJSON["genre"];
  newContent.appendChild(genre);

  let rate = document.createElement("p");
  rate.classList.add("rate");
  rate.innerText = "My Rating: " + incomingJSON["myRating"];
  newContent.appendChild(rate);

  let completion = document.createElement("p");
  completion.classList.add("rate");
  completion.innerText = "Completion: " + incomingJSON["completion"];
  newContent.appendChild(completion);

  let newImage = document.createElement("div");
  newImage.classList.add("contentImage");
  newElement.appendChild(newImage);

  let coverImage = document.createElement("img");
  coverImage.classList.add("coverImage");
  coverImage.src = incomingJSON["imageURL"];
  newImage.appendChild(coverImage);

  contentGrid.appendChild(newElement);
}
