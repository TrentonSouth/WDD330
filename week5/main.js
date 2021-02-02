import Hikes from './hikes.js';

const myHikes = new Hikes ("hikes");

  //on load grab the array and insert it into the page
  window.addEventListener("load", () => {
   myHikes.showHikeList();
  });

  $('body').on('click', 'h2', function() {
	let name = $(this).html();
	$('#hikes').empty();
	$('#btnBack').show();
	myHikes.renderOneCompleteHike(name);
}); 

$('#btnBack').click(function() {
	$('#hikes').empty();
	$('#btnBack').hide();
	myHikes.showHikeList();
});