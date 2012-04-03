/*
 * Type Baseline
 *
 * Author: Ricardo Magalhães
 * Version: 0.1
 */

$(function () {

	showGrid(16);
	/* Display a vertical rythm grid to confirm the values */
	function showGrid (size, line) {

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
});




















