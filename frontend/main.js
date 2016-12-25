'use strict';

console.log(`jQuery ${$.fn.jquery} is loaded`);
window.$ = $;
window.jQuery = $;

import '../sass/css.scss';
import Menu from './modules/menu';

var menu = new Menu,
		isMap = $('#map').is('#map'),
		isSlider = $('.slider').is('.slider'),
		scrollTiming = 0;
/***********************
********* MENU *********
************************/


(function adaptiveMenu () {

	var mobileView = window.matchMedia("(max-width: 768px)").matches,
			timing = 0;

	if ( mobileView ) {
		menu.initBurger();
		menu.initMobile();
	} else {
		menu.destructMobile();
	}

	$(window).resize(()=>{

		if ( !timing ) {
			timing = setTimeout(adaptiveMenu, 200);
		}

	});

})();

/**********************
********* MAP *********
***********************/

if ( isMap ) {

	require.ensure([], (require) => {
		require('./modules/map');
	});

}

/***********************
******** SLIDER ********
************************/


if ( isSlider ) {

	require.ensure([], (require) => {
		require('script!../node_modules/slick-carousel/slick/slick.js');
		$('.slider').slick({
			prevArrow: $('.left'),
			nextArrow: $('.right'),
			dots: true,
			appendDots: $('.slider-dots')
		});
	});

}

/************************
******* Scroll Up *******
*************************/

$(document).scroll(function(){

	if ( !scrollTiming ) {

		scrollTiming = setTimeout(function(){

			var scroll = $('body').scrollTop() ? $('body').scrollTop() : $('html').scrollTop();
			scroll >= 300 ? $('.scrollup').addClass('act') : $('.scrollup').removeClass('act');
			scrollTiming = 0;

		},300);

	}

});

import scrollup from './modules/scrollup';
$('.scrollup').scrollUp();

/***********************
******** REACT ********
***********************

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './react/store'
import routes from './react/routes'

const app = document.getElementById('app');
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

if (app) {
	ReactDOM.render((
		<Provider store={store}>
			<Router history={ history }>
				{ routes }
			</Router>
		</Provider>
	),app);

}*/
