const option = document.getElementById('option');
const opens = document.getElementsByClassName('open');
function hide(){
				option.style.right = "-200px";
}
function closemenu(){
				option.style.right = "-200px";
}
function openmenu(){
				option.style.right = "0";
}
function change(line){
		if(event.target.className === 'home'){
						opens.style.width = '100%'
		}
}
