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
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vRNCzg2yt698kYJd0reE6PpXT7lKgNB2rlO4-rAgHCd59H3HOjm6DJOy-46A6P7mKWENq_8-gUPbH2j/pubhtml?gid=1082556539&single=true',
    seconds: 20
  },
  {
    name: 'Racha Cuca',
    page:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQJBkN1CbqskTHHnDlV-LQCzHBCtC9DniWaIFOdrmzTDiOHdmUJ7opwtJyGXviMVFE9Za4yX75to-At/pubhtml?gid=1082556539&single=true',
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
