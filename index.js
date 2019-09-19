var slideIndex = 0;
const slides = [
  {
    name: 'Jetsons Farm',
    page:
      'https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vSfkUzbPxmPQA49Az1tXINQ6MpfOHVq7rFthvikqkNIVADKThgOVCSrue_WEbOuBZ8i1M5L5FP9FjZV/pubhtml?gid=681837777&single=true',
    seconds: 20
  },
   {
    name: 'Racha Cuca',
    page:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQvcXuN_MWoenkykYHf4FEa832STbgvAqV_Tc06Rn6ToSAAl6TXHSvOR4Mw3X7Md-1k-KJ05yFBJaTF/pubhtml?gid=1082556539&single=true',
    seconds: 20
  },
  {
    name: 'Racha Cuca',
    page:
      'https://drive.google.com/file/d/1VqVGF7rPBOQ7HXKY_C8Bhe63Zab9MwX0/view',
    seconds: 20
  }
];

var i = -1;
showSlides();

function showSlides() {
  if (i == slides.length - 1) {
    i = -1;
  }
  i++;
  document.getElementById('slideshow-viewport').src = slides[i].page;
  document.getElementById('slideshow-viewport').contentWindow.location.href = slides[i].page;
  // $('#slideshow-viewport').attr('src', slides[i].page);
  setTimeout(showSlides, slides[i].seconds * 1000); // Change image every 2 seconds
}
