(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});

	var TowersUI = Hanoi.TowersUI = function(){};

	TowersUI.prototype.render = function(start, end){
		console.log(start + " " + end);
		$("#"+start).removeClass("highlight");
		disc = $("#"+start).children().first()[0];
		$("#"+end).prepend(disc);
	};



})(this);
