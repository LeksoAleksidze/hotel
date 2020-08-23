

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

