window.onscroll=function() {
	scroll();
	//stickit();
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function scroll(){
	if(document.documentElement.scrollTop>10)
	{
		document.getElementById("myBtn").style.display="block";
	}
	else
	{
		document.getElementById("myBtn").style.display="none";
	}
}
// function stickit() {
//   if (window.pageYOffset >= sticky) {
//   navbar.classList.add("sticky");
//   } else {
//   navbar.classList.remove("sticky");
//   }
// }
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}