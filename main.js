function textepardefaut(evenement){
	if(evenement == "prisedefocus") {
		if(document.getElementById('search').value == "Rechercher...") {
			document.getElementById('search').style.color = "#00000";
			document.getElementById('search').value = "";
		}
        if(document.getElementById('search').value == "") {
			document.getElementById('search').style.color = "#00000";
			document.getElementById('search').value = "";
		}
	}
	if(evenement == "pertedefocus") {
		if(document.getElementById('search').value == "") {
			document.getElementById('search').value = 'Rechercher...';
			document.getElementById('search').style.color = "#000000";
		}
		if(document.getElementById('search').value == "Rechercher...") {
			document.getElementById('search').style.color = "#000000";
		}
	}
}