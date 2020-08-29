

// scrooltop
const header = document.querySelector('#header');

window.onscroll =function(){

	let top = scrollY;
	if(top  >= 200){
		header.classList.add('active')
	}else
	{
		header.classList.remove('active')
	}

};

// Hum-burger
const hum = document.getElementById('hum');

hum.addEventListener("click", () =>{
	
	header.classList.toggle('change');
});


  // activemenu
  const menu = $(".menu ul li");
  menu.on('click', function() {
    menu.removeClass("active");
    $(this).addClass("active");
  });

// TIMER
const timer = document.getElementById('time');
const popup = document.getElementById('popup');
const fullContent = document.getElementById('fullContent');
const body = document.querySelector('body');
let  count = 5; 



function update() {

	let seconds = count;

    fullContent.style.opacity = "0.09";
    body.classList.add('noscroll');
	if(  seconds === 0){
		clearInterval(x);
		popup.style.display = "none";
		fullContent.style.opacity = "1";
		body.classList.remove('noscroll');
	  }

	timer.innerHTML = "00:0" + seconds;
	count--;
}
let x =  setInterval(update, 1000);