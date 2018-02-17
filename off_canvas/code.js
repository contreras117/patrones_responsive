var $sidePanel = document.getElementById("sidePanel");
var $body = document.body;

var gestos = new Hammer($body);

gestos.on('swiperight', function() {
	$sidePanel.classList.add("open");
});

gestos.on('swipeleft', function() {
	$sidePanel.classList.remove("open");
});