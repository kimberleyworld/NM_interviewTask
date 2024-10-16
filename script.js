// Captions corresponding to each slide
const captions = [
  "Qaryut, Palestine, West Bank - April 4, 2024: Sabry Rateb, 52, enters a greenhouse that was attacked and damaged by settlers on several occasions. The village of Qaryut has been attacked frequently by settlers. The nearby settlement of Shiloh is expanding at speed, recently the settlers took over the village’s freshwater spring — a location that Palestinian villagers said that they had been shot at for trying to approach. (Photo by Lorenzo Tugnoli/ The Washington Post/ Contrasto)",

  "Yanun al-Fauqa, Palestine, West Bank - April 6, 2024: Mina, daughter of Adnan Abu Haniyeh, takes care of the family horse. Her house is bordering Itamar's Farm and most of her family land has been made inaccessible by the expansion of this outpost. The village of Yanun and nearby areas of Yanun al-Fauqa have been subject to frequent settlers' attacks. The outpost of Itamar's Farm, overlooking land of Yanun village, is quickly expanding. (Photo by Lorenzo Tugnoli/ The Washington Post/ Contrasto)",

  "Burin, Palestine, West Bank - April 6, 2024: The village of Burin has been almost completely encircled by settlements. The Soufan family lives near the border of one of the settlements. The family is harassed daily by settlers and was forced to build high walls and install barbed wire for protection. (Photo by Lorenzo Tugnoli/ The Washington Post/ Contrasto)",

  "Shilo settlement, Palestine, West Bank - April 9, 2024: Settlers train for quick responses to security threats in the settlement of Shilo. (Photo by Lorenzo Tugnoli/ The Washington Post/ Contrasto)",

  "Shiloh settlement, Palestine, West Bank - April 9, 2024: A settler opens the window of her house under construction. The Ahiya outpost of Shiloh settlement is in the process of being legalized. (Photo by Lorenzo Tugnoli/ The Washington Post/ Contrasto)",

  "Umm al-Kheir, Palestine, West Bank - July 8, 2024: The family of Yasser Al-Hathaleen gathers in the evening in the wreckage of one of the houses that was demolished. Palestinian residents were not allowed to enter their homes to recover their belongings before Israeli authorities carried out a demolition order on June 26. Umm al-Kheir is situated in close proximity to the settlement of Carmel. The residents of Umm al-Kheir are descendants of refugees who were expelled in 1948 from an area to the south that is now part of Israel. (Photo by Lorenzo Tugnoli/ The Washington Post/ Contrasto)",

  "Sawiya, Palestine, West Bank - October 27, 2023: The funeral of Bilal Saleh, a Palestinian man killed by settlers. Bilal was killed while picking olives from his land. A scuffle among Palestinians broke out during the funeral because some of the attendants were waving a Hamas flag, while most of the villagers were against it. (Photo by Lorenzo Tugnoli/ The Washington Post/ Contrasto)",

  "Havat Gilad settlement, Palestine, West Bank - December 10, 2023: Children play with wooden guns outside a house in Havat Gilad settlement in the Occupied West Bank. (Photo by Lorenzo Tugnoli/ The Washington Post/ Contrasto)",

  "Hebron, Palestine, West Bank - February 20, 2024: Palestinians stand near a passage that was recently blocked with a fence and barbed wire in Jaber neighborhood. The main road is closed to Palestinian cars and only available to settlers. Since the start of the war between Hamas and Israel, Palestinians in the West Bank have to live with increasing security measures. New checkpoints and barriers have made life harder for civilians. (Photo by Lorenzo Tugnoli/ The Washington Post/ Contrasto)",

  "Al-Mughayyir, Palestine, West Bank - April 15, 2024: A farmer stands near a pile of dead sheep outside the village. The sheep, mostly lambs, were slaughtered by settlers during a major attack on the village in April. The village was attacked by hundreds of settlers for two consecutive days. Palestinian Jehad Abu Alia was killed and 25 others were wounded in the attack. An unprecedented number of settlers' attacks on Palestinian villages took place in April after a young settler went missing in the West Bank. (Photo by Lorenzo Tugnoli/ The Washington Post/ Contrasto)",
];

// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // Custom pagination with numbers instead of dots
    renderBullet: function (index, className) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  },
  on: {
    slideChange: function () {
      updateCaption(this.activeIndex);
    },
  },
});

// Function to update the caption
function updateCaption(index) {
  const captionElement = document.getElementById("caption");
  captionElement.textContent = captions[index]; // Update caption based on slide index
}

// Set initial caption
updateCaption(0);
