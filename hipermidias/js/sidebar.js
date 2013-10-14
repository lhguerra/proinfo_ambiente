function fire_evt_scrolls() {
	$(".scroll").customScrollbar({
		skin: "default-skin",
		hScroll: false
	});
}

// function toggleBar() {
//   $(".saiba-mais").toggleClass("open");

//   var open = (".abrebarra");

//   open.bind("click", function() {
//     toggleBar();
//   });  
// };



function toggleBar1()
{
  document.getElementById('saiba-mais').classList.toggle("open");
  fire_evt_scrolls();
}

var abridoresDaBarra = document.getElementsByClassName("abrebarra1");

for(var i = 0; i < abridoresDaBarra.length; i++) {
  abridoresDaBarra[i].onclick = toggleBar1;
}

function toggleBar2()
{
  document.getElementById('glossario').classList.toggle("open");
  fire_evt_scrolls();
}

var abridoresDaBarra = document.getElementsByClassName("abrebarra2");

for(var i = 0; i < abridoresDaBarra.length; i++) {
  abridoresDaBarra[i].onclick = toggleBar2;
}

function toggleBar3()
{
  document.getElementById('saiba-mais2').classList.toggle("open");
  fire_evt_scrolls();
}

var abridoresDaBarra = document.getElementsByClassName("abrebarra3");

for(var i = 0; i < abridoresDaBarra.length; i++) {
  abridoresDaBarra[i].onclick = toggleBar3;
}

function toggleBar4()
{
  document.getElementById('glossario2').classList.toggle("open");
  fire_evt_scrolls();
}

var abridoresDaBarra = document.getElementsByClassName("abrebarra4");

for(var i = 0; i < abridoresDaBarra.length; i++) {
  abridoresDaBarra[i].onclick = toggleBar4;
}
