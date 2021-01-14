var idx=1;
display(idx);
function increment()
{
	idx++;
	display(idx);
}

function display(x){
	var i;

	var pic=document.getElementsByClassName("mySlides");
	if(x>pic.length)
	{
		idx=1;
	}
	for(i=0;i<pic.length;i++)
	{
		pic[i].style.display="none";
	}
	pic[idx-1].style.display="block";
}