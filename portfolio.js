const tablinks = document.getElementsByClassName('tab-link');
const tabtexts = document.getElementsByClassName('tab-text');

function opentab(tabname){
				for(tablink of tablinks){
								tablink.classList.remove('active-section');
				}
				for(tabtext of tabtexts){
								tabtext.classList.remove('active-tab');
				}
				event.currentTarget.classList.add('active-section');
				document.getElementById(tabname).classList.add('active-tab');
}
