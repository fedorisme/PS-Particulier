//Change icon when switching between list view and tile view
var listtoggle = document.getElementsByClassName("list-toggle");

function viewButtonToggle() {
	for (var i = 0; i < listtoggle.length; i++) {
		if ( listtoggle[i].classList.contains('bi-card-list') ) {
			listtoggle[i].classList.add('bi-grid');
			listtoggle[i].classList.remove('bi-card-list');
		} else {
			listtoggle[i].classList.add('bi-card-list');
			listtoggle[i].classList.remove('bi-grid');
		}
	}
}

for (var i = 0; i < listtoggle.length; i++) {
    listtoggle[i].addEventListener('click', viewButtonToggle, false);
}


//Remove or add delivery adres section in order form
var bezorgToggleAan = document.getElementById("bezorganders");
var bezorgToggleUit = document.getElementById("bezorgzelf");
var bezorgToggleAfhaal = document.getElementById("bezorgafhaal");
var collapseBezorg = document.getElementById("collapseBezorg");
var contantOptie = document.getElementById("contantOptie");

function viewBezorgToggle() {
	if(bezorgToggleAan.checked) {
		if ( collapseBezorg.classList.contains('show') ) {

		} else {
			collapseBezorg.classList.add('show');
		}
		if ( contantOptie.classList.contains('show') ) {
			contantOptie.classList.remove('show');
		}
	} else if(bezorgToggleUit.checked) {
		if ( collapseBezorg.classList.contains('show') ) {
			collapseBezorg.classList.remove('show');
		}
		if ( contantOptie.classList.contains('show') ) {
			contantOptie.classList.remove('show');
		}
	}else if(bezorgToggleAfhaal.checked) {
		if ( collapseBezorg.classList.contains('show') ) {
			collapseBezorg.classList.remove('show');
		}
		if ( contantOptie.classList.contains('show') ) {

		} else {
			contantOptie.classList.add('show');
		}
	}
}

bezorgToggleAan.addEventListener('click', viewBezorgToggle, false);
bezorgToggleUit.addEventListener('click', viewBezorgToggle, false);
bezorgToggleAfhaal.addEventListener('click', viewBezorgToggle, false);

//Add BTW id for belgium customers in order form
var fland = document.getElementById("fland");
var btwIdBox = document.getElementById("btwIdBox");

function viewBtwToggle() {
	if(fland.value == 'Belgie') {
		if ( btwIdBox.classList.contains('show') ) {

		} else {
			btwIdBox.classList.add('show');
		}
	}else if(fland.value == 'Nederland') {
		if ( btwIdBox.classList.contains('show') ) {
			btwIdBox.classList.remove('show');
		}
	}
}

fland.addEventListener('click', viewBtwToggle, false);
