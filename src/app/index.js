import '../style/main.less';
import $ from 'jquery';
import 'particles.js';

let $window = $(window);
let $animation_elements = $('.scrollAnimate')

$(document).ready(() => {
	$window.trigger('scroll');
	particles();
})

$window.on('scroll resize', check_if_in_view);
function check_if_in_view() {
	let window_height = $window.height();
	let window_top_position = $window.scrollTop();
	let window_bottom_position = (window_top_position + window_height);

	$.each($animation_elements, function () {
		let $element = $(this);
		let element_height = $element.outerHeight();
		let element_top_position = $element.offset().top;
		let element_bottom_position = (element_top_position + element_height);

		// Check to see if this current container is within viewport
		if ((element_bottom_position >= window_top_position) && 
			(element_top_position <= window_bottom_position)) {
			$element.addClass('in-view');
		} else {
			$element.removeClass('in-view');
		}
	})
}

function particles() {
	particlesJS.load('particles', '/particlesjs-config.json', function () {
		console.log('particle.js loaded.');
	});
};