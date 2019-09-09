var slideIndex = 0;
const slides = [
  {
    name: 'Burndown',
    page:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQvcXuN_MWoenkykYHf4FEa832STbgvAqV_Tc06Rn6ToSAAl6TXHSvOR4Mw3X7Md-1k-KJ05yFBJaTF/pubchart?oid=1745078327&format=image',
    seconds: 60
  },
  {
    name: 'Atividades',
    page:
      'https://docs.google.com/spreadsheets/d/1H7qHm-CM-yvAcnt99wA_eTaV3W2ss6sXGhwsOa5xlXI/edit#gid=379786966',
    seconds: 60
  },
  {
    name: 'Jetsons Farm',
    page:
      'https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vSfkUzbPxmPQA49Az1tXINQ6MpfOHVq7rFthvikqkNIVADKThgOVCSrue_WEbOuBZ8i1M5L5FP9FjZV/pubhtml?gid=681837777&single=true',
    seconds: 60
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
