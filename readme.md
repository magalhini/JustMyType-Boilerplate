# JustMyType Boilerplate 

## Alpha 0.5

##This version is not yet fully ready for public use.

###What it is:

JustMyType is a configurable typography/layout boilerplate to ensure you start a new web project with:

* A perfect vertical rythm composition for your typography
* A fully adaptive and liquid layout (*em* sizing, no pixels values at all)
* An optional grid fluid grid system (using the border box model)
* Helper and reusable classes for typography
* An available and unobtrusive grid and baseline overlay you can show/hide at anytime

It contains configurable SASS/LESS variables that will ensure that you start a new project with a balanced **vertical rythm**, properly aligned quotes, paragraphs and other HTML elements that focus on typography.

This means no pixels business, everything is set using **relative values** (either em's or percentage).

To help you maintain consistency throughout your project, JMT also contains:

* A baseline you can show/hide at anytime
* A responsive/liquid grid overlay you can show/hide at anytime

As a bonus, it also includes a very simple **grid system** (12 columns for now) with relative values and some other **helper classes** that already establish consistency with the rest of the markup (hr, dropcaps, block quote, etc).

##How to use:

###Vertical Rythm

As of now, you must include the LESS stylesheet in order to configure your type values, and then compile it to a regular CSS file. If you don't want to use LESS, there will be a separate calculator file that will provide you with the values you need for your body copy and headings.

Simply input your desired values in pixels, and JMT will work out everything else for you.

You **only** need to use a pre-processor to calculate your initial type values, after that you can discard LESS/SASS at all if you wish.

###Grid System

The included grid system is incredibly simple and it makes use of the border-box **Box Sizing** model.
This means that you won't have to worry about paddings and borders breaking your layout. Note, however, than this border-box model DOES NOT work in IE<8.

Grid classes go from **.one** to **.twelve** and there are a couple of helper classes. Here's an example:
========================

<div class="row">
	<div class="four column">Content</div> <!-- .column simply floats left -->
	<div class="eight column">Content</div>
	<div class="wrapper"> <!-- .wrapper applies the same padding as grid classes, if you don't want to clutter content your markup -->
		<h1>Heading</h1>
		<h3>Subheading</h3>
	</div>
</div>

<div class="row">
	<div class="twelve column"></div> <!-- .column simply floats left -->
</div>

========================

To use the grid system, make sure to include the Grid Section in the styles.css file included in this boilerplate.

###Baseline & Grid Overlay

Include the script.js file and call their methods to display a panel at the top of your page from where you can activate the grid and baseline overlays at any time.

To use the grid system, make sure to include the styles.css file included in this boilerplate.

Example:
========================

<script src="js/script.js"></script>
<script>
	$(function () {
		showBaseline(16); // 16 is the font-size you've chosen for the body (in px)
		showGrid(12); // 12 is the number of columns
	});
</script>

#Next steps, as of 0.5A:#

* SASS/SCSS versions. As of now, only LESS is supported.
* Include an independent vertical rythm calculator if you don't want to use any sort of pre-processor at all.
* Make the grid overlay responsive (the same number of cols are shown when you resize the browser, uncool).
* Make the overlays a bit prettier.
* Re-organize the content so it's a bit more modular.


