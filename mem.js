mem = {
	W: 8,
	H: 4
}

$(document).ready(function(){
	for (var j = 0; j < mem.H; j++) {
		for (var i = 0; i < mem.W; i++) {
			$('<div></div>').appendTo('.mem-table').card({x: i, y: j});
		}
	}
});

$.widget( 'mem.card', {

	options: {
	},
 
	_create: function() {
		this.element.addClass( 'mem-card ui-corner-all ui-widget-content' )
					.css('height', 'calc(' + 100 / mem.H + '% - 18px)')
					.css('width', 'calc(' + 100 / mem.W + '% - 18px)')
					.css('margin', '8px')
					.attr('id', 'card_' + this.options.x + '_' + this.options.y);
		if (this.options.x == 0){
			this.element.css('clear', 'both');
		}
			
		this.textElem = $('<div style="width: 50%; height: 50%; font: 5em bold; text-align: center;"></div>').appendTo(this.element).position({
			of: '#card_' + this.options.x + '_' + this.options.y,
		});
		
		this.close();
	},
	
	close: function() {
		this.textElem.text('$');
	},
	
	_destroy: function() {
		this.element.removeClass( 'mem-card' );
	}
});