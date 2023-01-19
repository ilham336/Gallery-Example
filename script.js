var container = document.querySelector('.container')
container.addEventListener('click', function(e){
	if(e.target.className = 'thumb'){
	
		    e.path[2].firstElementChild.src = e.target.src
	}
})