/*
* Type Baseline & Grid
*
* Author: Ricardo Magalhães
* Version: 0.2
*/

/* Creates the overlay grid */
function showGrid (cols) {

	var $body = $(document.body),
		nrOfCols = cols;
		$panel = $('<div></div>'),
		$grid = $('<div class="grid"></div>')
			.appendTo($body)
			.css({
				'position': 'absolute',
				'left' : 0,
				'top' : 0,
				'width' : '100%',
				'z-index' : '99'
			});

	createPanel().appendTo($body);  // Creates the control panel and adds it to the DOM
	createGrids(nrOfCols);          // Adds the grid rows to the panel
	addEvents();                    // Listens for clicks on the panel buttons

	function createGrids (cols) {
		var i = 1,
			docHeight = $(document).height(),
			$col = "";

		for ( ; i <= cols; i++) {
			$col = $('<div data-grid="grid' + i + '" class="jmt-'+ i +'"></div>')
				.appendTo($grid)
				.height(docHeight);

			$grid.css('opacity', 1); //Just so we can animate things a bit :)
		}
	}

	function createPanel() {
		$panel.addClass('panel')
			.css({
				'position' : 'absolute',
				'width' : '9em',
				'height' : '2em',
				'top' : 0,
				'left' : 0,
				'background-color' : '#cecece',
				'border-radius' : '0 5px 5px 0',
				'z-index' : 999,
				'box-shadow': '0px 0px 0px 1px rgba(255,255,255,.5) inset',
				'border' : '1px solid #888'
		});

		// Creating the controls afterwards.
		$panel.append('<div><a href="#" class="btn-grid">Grid</a><a href="#" class="btn-baseline">Baseline</a></div>');

		return $panel;
	}

	function addEvents() {

		var $gridButton = $panel.find('.btn-grid'),
			$baselineButton = $panel.find('.btn-baseline'),
			$baseline = $('.line-height');

		if ($gridButton.length && $baselineButton.length) {
			
			$gridButton.on('click', function(e) {
				e.stopPropagation();
				$grid.is(':visible') ? $grid.fadeOut() : $grid.fadeIn();
			});

			$baselineButton.on('click', function(e) {
				e.stopPropagation();
				$baseline.is(':visible') ? $baseline.fadeOut() : $baseline.fadeIn();
			});
		}
		return false;
	}
}

/* Display a vertical rythm grid to confirm the values */
function showBaseline (size, line) {

	var oldWrap = $('.line-height');

	if (oldWrap.length) oldWrap.remove();

	this.options = {
		fontSize: size,
		lineHeight: line
	};

	heightLines(this.options);

	function heightLines (options) {

		var fontSize = options.fontSize || 16,
			lineHeight =  options.lineHeight / options.fontSize || 1.5,
			unit = fontSize * lineHeight,
			wrapper = $('<div></div>')
			.addClass('line-height')
			.appendTo($(document.body)),
			rows = ($(document).height() - 25) / unit;

		for (var i = 0; i < rows; i++) {
			var grid = $('<div></div>').css({
				'height': unit,
				'width': '100%',
				'border-bottom': '1px dotted #ccc',
				'position': 'absolute',
				'top': unit * i,
				'content': ''
			}).appendTo('.line-height');
		}

		$('.line-height').css('overflow', "hidden");
	}
}