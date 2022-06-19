const cats = [
  {
    breed: "Hairless Cat",
    personality:
      "very devoted and loyal, they follow their humans around, wagging their tails doggy fashion, kneading with their padded toes, and purring with delight at the joy of being near their beloved humans. They demand your unconditional attention and are as mischievous (and lovable) as children.",
    originDate: 1986,
    image:
      "https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/sphynx-hairless-cat-detail.jpg?bust=1535567209&width=630",
  },
  {
    breed: "Balinese",
    personality:
      "Balinese are often in tune with your moods and will be right there to cheer you up if you’re sad or to share your joy when you’re happy. Vocal themselves, they may respond to your tone of voice, and a scolding tone may hurt their sensitive feelings.",
    originDate: 1900,
    image:
      "https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/balinese-detail.jpg?bust=1535566910&width=630",
  },
  {
    breed: "Persian",
    personality:
      "They love to play between periods of regal lounging on your favorite davenport. Proponents say that Persians do not deserve their furniture-with-fur reputation; they are intelligent, just not as inquisitive as some breeds, and not as active.",
    originDate: 1871,
    image:
      "https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/persian-detail.jpg?bust=1535567111&width=630",
  },
  {
    breed: "British Shorthair",
    personality:
      "British Shorthair need love and attention if they are to become the loyal, loving companions they can be; the more attention and affection you give them, the more they will repay you in kind. Once they get to know and trust you, British Shorthair are confident and devoted, and enjoy following you from room to room to keep an eye on your activities. ",
    originDate: 1960,
    image:
      "https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/british-shorthair-detail.jpg?bust=1535566957&width=630",
  },
];

const firstItem = document.getElementById("firstItem");
const secondItem = document.getElementById("secondItem");
const thirdItem = document.getElementById("thirdItem");
const fourthItem = document.getElementById("fourthItem");
const cardTitle = document.getElementById("title");
const cardParagraph = document.getElementById("paragraph");
const cardImage = document.getElementById("img");

//Array of all variables for list elements
const allClasses = [firstItem, secondItem, thirdItem, fourthItem];

//function that removes class "active"
function removeAllClasses() {
  allClasses.forEach((element) => {
    element.classList.remove("active");
  });
}

//function that adds content from "cats" object inside HTML
function addTextInHTML() {
  cardImage.src = this.image;
  cardTitle.innerHTML = `${this.breed}`;
  cardParagraph.innerHTML = `${this.personality} <br/> <br/> it originated in the year <b>${this.originDate} </b>`;
}

//Adding class "active" on clicked elements and replacing old content with new one from "cats" object
firstItem.addEventListener("click", function handleClick(e) {
  removeAllClasses();
  e.target.classList.add("active");
  addTextInHTML();
  cats[0].addTextInHTML = addTextInHTML;
  cats[0].addTextInHTML();
});

secondItem.addEventListener("click", function (e) {
  removeAllClasses();
  e.target.classList.add("active");
  addTextInHTML();
  cats[1].addTextInHTML = addTextInHTML;
  cats[1].addTextInHTML();
});

thirdItem.addEventListener("click", function (e) {
  removeAllClasses();
  e.target.classList.add("active");
  addTextInHTML();
  cats[2].addTextInHTML = addTextInHTML;
  cats[2].addTextInHTML();
});

fourthItem.addEventListener("click", function (e) {
  removeAllClasses();
  e.target.classList.add("active");
  addTextInHTML();
  cats[3].addTextInHTML = addTextInHTML;
  cats[3].addTextInHTML();
});
