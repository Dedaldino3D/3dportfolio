import { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import AOS from "aos";
import "react-alice-carousel/lib/alice-carousel.css";
import "react-bnb-gallery/dist/style.css";
import "aos/dist/aos.css";

const Styles = createGlobalStyle`

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box !important;
	}

	*::before, *::after {
		-webkit-box-sizing: inherit;
		box-sizing: inherit;
	}

	html {
		width: 100%;
	}

	html, body, #root {
		-webkit-text-size-adjust: 100%;
		text-size-adjust: 100%;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased !important;
		-moz-osx-font-smoothing: grayscale !important;
	}
	
	body {
		font-size: 400 14px/24px;
		font-family: "Inter", "Open Sans", Roboto, sans-serif;
		background-color: var(--white-100);
		/* color: #202124; */
		color: var(--text);
		line-height: 1.5;
	}

	body {
		--bg: #eff5f5;
		--text: #505763;
		--orange-link: rgb(255, 166, 0);
		--white: #fff;
		--white-100: #fafafa;
		--black: #0c0d0e;
		--orange: #f48024;
		--yellow: #fbf2d4;
		--green: #5eba7d;
		--blue: #0077cc;
		--facebook: #3b5998;
		--google: #ff0066;
		--twitter: #1a1aff;
		--black-025: #fafafb;
		--black-050: #eff0f1;
		--black-075: #e4e6e8;
		--black-100: #d6d9dc;
		--black-150: #c8ccd0;
		--black-200: #bbc0c4;
		--black-300: #9fa6ad;
		--black-350: #9199a1;
		--black-400: #848d95;
		--black-500: #6a737c;
		--black-600: #535a60;
		--black-700: #3c4146;
		--black-750: #2f3337;
		--black-800: #242729;
		--black-900: #0c0d0e;
		--orange-050: #fff7f2;
		--orange-100: #fee3cf;
		--orange-200: #fcd0ad;
		--orange-300: #f7aa6d;
		--orange-400: #f48024;
		--orange-500: #f2720c;
		--orange-600: #da670b;
		--orange-700: #bd5c00;
		--orange-800: #a35200;
		--orange-900: #874600;
		--blue-050: #f2f9ff;
		--blue-100: #cfeafe;
		--blue-200: #addafc;
		--blue-300: #6cbbf7;
		--blue-400: #379fef;
		--blue-500: #0095ff;
		--blue-600: #0077cc;
		--blue-700: #0064bd;
		--blue-800: #0054a3;
		--blue-900: #004487;
		--blue-light: #343c4b;
		--blue-link: #8190b0;
		--blue-bold: #262e3e;
		--blue-bolder: #18202e;
		--powder-050: #f4f8fb;
		--powder-100: #e1ecf4;
		--powder-200: #d1e5f1;
		--powder-300: #b3d3ea;
		--powder-400: #a0c7e4;
		--powder-500: #7aa7c7;
		--powder-600: #5b8db1;
		--powder-700: #39739d;
		--powder-800: #2c5777;
		--powder-900: #1e3c52;
		--green-025: #eef8f1;
		--green-050: #dcf0e2;
		--green-100: #cae8d4;
		--green-200: #a6d9b7;
		--green-300: #82ca9a;
		--green-400: #5eba7d;
		--green-500: #48a868;
		--green-600: #3d8f58;
		--green-700: #2f6f44;
		--green-800: #29603b;
		--green-900: #1e472c;
		--yellow-050: #fdf7e3;
		--yellow-100: #fbf2d4;
		--yellow-200: #f1e5bc;
		--yellow-300: #e6d178;
		--yellow-400: #e9c63f;
		--yellow-500: #ddb624;
		--yellow-600: #cea51b;
		--yellow-700: #b89516;
		--yellow-800: #9f8010;
		--yellow-900: #826a0b;
		--red-050: #fdf3f4;
		--red-100: #f9d3d7;
		--red-200: #f4b4bb;
		--red-300: #e87c87;
		--red-400: #de535e;
		--red-500: #d1383d;
		--red-600: #c02d2e;
		--red-700: #ac2726;
		--red-800: #942121;
		--red-900: #7a1819;
		--gold: #ffcc01;
		--gold-lighter: #fff4d1;
		--gold-darker: #f1b600;
		--silver: #b4b8bc;
		--silver-lighter: #e8e8e8;
		--silver-darker: #9a9c9f;
		--bronze: #caa789;
		--bronze-lighter: #f2e9e1;
		--bronze-darker: #ab825f;
		--fc-dark: #0c0d0e;
		--fc-medium: #3c4146;
		--fc-light: #6a737c;
		--focus-ring: rgba(0,149,255,0.15);
		--focus-ring-success: rgba(166,217,183,0.4);
		--focus-ring-warning: rgba(233,198,63,0.4);
		--focus-ring-error: rgba(192,45,46,0.15);
		--focus-ring-muted: rgba(36,39,41,0.1);
		--bs-sm: 0 1px 2px rgba(0,0,0,0.05),0 1px 4px rgba(0,0,0,0.05),0 2px 8px rgba(0,0,0,0.05);
		--bs-md: 0 1px 3px rgba(0,0,0,0.06),0 2px 6px rgba(0,0,0,0.06),0 3px 8px rgba(0,0,0,0.09);
		--bs-lg: 0 1px 4px rgba(0,0,0,0.09),0 3px 8px rgba(0,0,0,0.09),0 4px 13px rgba(0,0,0,0.13);
		--scrollbar: rgba(0,0,0,0.2);
		--blue: #0084ff;
		--violet: #8a00e6;
		--red: #ff0101;
		--red-soft: #d1383d;
		--yellow: #ffff00;
		--gray-95: #1a1a1a;
		--gray-90: #3d3d42;
		--gray-80: #595959;
		--gray-60: #808080;
		--gray-50: #a6a6a6;
		--gray-40: #a2a2a9;
		--gray-30: #cccccc;
		--gray-20: #d6d6db;
		--gray-10: #f1f1f3;
		--blue-95: #e8f0fe;
		--blue-90: #e6e6ff;
		--blue-85: #e6f9ff;
		--blue-80: #cce6ff;
		--blue-75: #99ccff;
		--blue-70: #80bfff;
		--blue-60: #66b5ff;
		--blue-50: #005cb3;
		--blue-20: #004080;
		--violet-90: #7a00cc;
		--violet-80: #9900ff;
		--violet-40: #ecb3ff;
		--violet-20: #f9e6ff;
		--red-90: #ff3300;
		--red-80: #ff8080;
		--red-70: #ff9999;
		--yellow-90: #ffff4d;
		--yellow-80: #ffff99;
		--yellow-40: #ffffcc;
		--yellow-10: #ffffe6;
		--focus-ring: rgba(0,149,255,0.15);
		--shadow-100: rgba(0,0,0,.5);
		--shadow-80: rgba(0,0,0,.3);
		--shadow-60: rgba(0,0,0,.2);
		--shadow-40: rgba(0,0,0,0.15);
		--shadow-20: rgba(0,0,0,0.1);
		--shadow-0: rgba(0,0,0,.012);
		--bs-xl: 0 1px 6px rgba(0,0,0,0.09),0 3px 12px rgba(0,0,0,0.09),0 4px 17px rgba(0,0,0,0.13);
		--bs-gl: 0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15);
		--bs-inset: inset 0 4px 6px 0 rgba(255, 255, 255, .3), inset 0 5px 8px 0 rgba(255, 255, 255, .4);
		--bs-post: 0 1px 3px 0 rgba(60, 64, 67, 0.05), 0 4px 8px 3px rgba(60, 64, 67, 0.15);
		--bs-ud: 0 0 1px 1px rgba(20,23,28,.1), 0 3px 1px 0 rgba(20,23,28,.1);
		--border: #dadce0;
	}

	ul {
		list-style: none;
	}

	p {
		padding: 0;
	}

	a {
		text-decoration: none;
		font-weight: 400;
		:link{
			color: var(--white);
		}
		:visited{
			color: var(--white);
		}
		:hover{
			color: var(--white-100);
		}
		:active{
			color: var(--white);
		}
	}

	input {
		color: var(--gray-95);
	}

	svg {
		font-size: calc(14px + (19 - 14) * ((100vw - 200px) / (1600 - 200))) ;
		min-height: calc(14px + (19 - 14) * ((100vw - 200px) / (1600 - 200)));
		font-weight: normal;
	}

	svg:not(:root) {
		overflow: hidden;
	}

		/*! normalize.css v3.0.2 | MIT License | git.io/normalize */

	/**
	 * 1. Set default font family to sans-serif.
	 * 2. Prevent iOS text size adjust after orientation change, without disabling
	 *    user zoom.
	 */

	html {
	  font-family: sans-serif; /* 1 */
	  -ms-text-size-adjust: 100%; /* 2 */
	  -webkit-text-size-adjust: 100%; /* 2 */
	}

	/**
	 * Remove default margin.
	 */

	/* HTML5 display definitions
	   ========================================================================== */

	/**
	 * Correct 'block' display not defined for any HTML5 element in IE 8/9.
	 * Correct 'block' display not defined for 'details' or 'summary' in IE 10/11
	 * and Firefox.
	 * Correct 'block' display not defined for 'main' in IE 11.
	 */

	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	main,
	menu,
	nav,
	section,
	summary {
	  display: block;
	}

	/**
	 * 1. Correct 'inline-block' display not defined in IE 8/9.
	 * 2. Normalize vertical alignment of 'progress' in Chrome, Firefox, and Opera.
	 */

	audio,
	canvas,
	progress,
	video {
	  display: inline-block; /* 1 */
	  vertical-align: baseline; /* 2 */
	}

	/**
	 * Prevent modern browsers from displaying 'audio' without controls.
	 * Remove excess height in iOS 5 devices.
	 */

	audio:not([controls]) {
	  display: none;
	  height: 0;
	}

	/**
	 * Address '[hidden]' styling not present in IE 8/9/10.
	 * Hide the 'template' element in IE 8/9/11, Safari, and Firefox < 22.
	 */

	[hidden],
	template {
	  display: none;
	}

	/* Links
	   ========================================================================== */

	/**
	 * Remove the gray background color from active links in IE 10.
	 */

	a {
	  background-color: transparent;
	}

	/**
	 * Improve readability when focused and also mouse hovered in all browsers.
	 */

	a:active,
	a:hover {
	  outline: 0;
	}

	/* Text-level semantics
	   ========================================================================== */

	/**
	 * Address styling not present in IE 8/9/10/11, Safari, and Chrome.
	 */

	abbr[title] {
	  border-bottom: 1px dotted;
	}

	/**
	 * Address style set to 'bolder' in Firefox 4+, Safari, and Chrome.
	 */

	b,
	strong {
	  font-weight: bold;
	}

	/**
	 * Address styling not present in Safari and Chrome.
	 */

	dfn {
	  font-style: italic;
	}

	/**
	 * Address variable 'h1' font-size and margin within 'section' and 'article'
	 * contexts in Firefox 4+, Safari, and Chrome.
	 */

	h1 {
	  font-size: 2em;
	  margin: 0.67em 0;
	}

	/**
	 * Address styling not present in IE 8/9.
	 */

	mark {
	  background: #ff0;
	  color: #000;
	}

	/**
	 * Address inconsistent and variable font size in all browsers.
	 */

	small {
	  font-size: 80%;
	}

	/**
	 * Prevent 'sub' and 'sup' affecting 'line-height' in all browsers.
	 */

	sub,
	sup {
	  font-size: 75%;
	  line-height: 0;
	  position: relative;
	  vertical-align: baseline;
	}

	sup {
	  top: -0.5em;
	}

	sub {
	  bottom: -0.25em;
	}

	/* Embedded content
	   ========================================================================== */

	/**
	 * Remove border when inside 'a' element in IE 8/9/10.
	 */

	img {
	  border: 0;
	}

	/**
	 * Correct overflow not hidden in IE 9/10/11.
	 */

	svg:not(:root) {
	  overflow: hidden;
	}

	/* Grouping content
	   ========================================================================== */

	/**
	 * Address margin not present in IE 8/9 and Safari.
	 */

	figure {
	  margin: 1em 40px;
	}

	/**
	 * Address differences between Firefox and other browsers.
	 */

	hr {
	  box-sizing: content-box;
	  height: 0;
	}

	/**
	 * Contain overflow in all browsers.
	 */

	pre {
	  overflow: auto;
	}

	/**
	 * Address odd 'em'-unit font size rendering in all browsers.
	 */

	code,
	kbd,
	pre,
	samp {
	  font-family: monospace, monospace;
	  font-size: 1em;
	}

	/* Forms
	   ========================================================================== */

	/**
	 * Known limitation: by default, Chrome and Safari on OS X allow very limited
	 * styling of 'select', unless a 'border' property is set.
	 */

	/**
	 * 1. Correct color not being inherited.
	 *    Known issue: affects color of disabled elements.
	 * 2. Correct font properties not being inherited.
	 * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.
	 */

	button,
	input,
	optgroup,
	select,
	textarea {
	  color: inherit; /* 1 */
	  font: inherit; /* 2 */
	  margin: 0; /* 3 */
	}

	/**
	 * Address 'overflow' set to 'hidden' in IE 8/9/10/11.
	 */

	button {
	  overflow: visible;
	}

	/**
	 * Address inconsistent 'text-transform' inheritance for 'button' and 'select'.
	 * All other form control elements do not inherit 'text-transform' values.
	 * Correct 'button' style inheritance in Firefox, IE 8/9/10/11, and Opera.
	 * Correct 'select' style inheritance in Firefox.
	 */

	button,
	select {
	  text-transform: none;
	}

	/**
	 * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native 'audio'
	 *    and 'video' controls.
	 * 2. Correct inability to style clickable 'input' types in iOS.
	 * 3. Improve usability and consistency of cursor style between image-type
	 *    'input' and others.
	 */

	button,
	html input[type="button"], /* 1 */
	input[type="reset"],
	input[type="submit"] {
	  -webkit-appearance: button; /* 2 */
	  cursor: pointer; /* 3 */
	}

	/**
	 * Re-set default cursor for disabled elements.
	 */

	button[disabled],
	html input[disabled] {
	  cursor: default;
	}

	/**
	 * Remove inner padding and border in Firefox 4+.
	 */

	button::-moz-focus-inner,
	input::-moz-focus-inner {
	  border: 0;
	  padding: 0;
	}

	/**
	 * Address Firefox 4+ setting 'line-height' on 'input' using '!important' in
	 * the UA stylesheet.
	 */

	input {
	  line-height: normal;
	}

	/**
	 * It's recommended that you don't attempt to style these elements.
	 * Firefox's implementation doesn't respect box-sizing, padding, or width.
	 *
	 * 1. Address box sizing set to 'content-box' in IE 8/9/10.
	 * 2. Remove excess padding in IE 8/9/10.
	 */

	input[type="checkbox"],
	input[type="radio"] {
	  box-sizing: border-box; /* 1 */
	  padding: 0; /* 2 */
	}

	/**
	 * Fix the cursor style for Chrome's increment/decrement buttons. For certain
	 * 'font-size' values of the 'input', it causes the cursor style of the
	 * decrement button to change from 'default' to 'text'.
	 */

	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
	  height: auto;
	}

	/**
	 * 1. Address 'appearance' set to 'searchfield' in Safari and Chrome.
	 * 2. Address 'box-sizing' set to 'border-box' in Safari and Chrome
	 *    (include '-moz' to future-proof).
	 */

	input[type="search"] {
	  -webkit-appearance: textfield; /* 1 */ /* 2 */
	  box-sizing: content-box;
	}

	/**
	 * Remove inner padding and search cancel button in Safari and Chrome on OS X.
	 * Safari (but not Chrome) clips the cancel button when the search input has
	 * padding (and 'textfield' appearance).
	 */

	input[type="search"]::-webkit-search-cancel-button,
	input[type="search"]::-webkit-search-decoration {
	  -webkit-appearance: none;
	}

	/**
	 * Define consistent border, margin, and padding.
	 */

	fieldset {
	  border: 1px solid #c0c0c0;
	  margin: 0 2px;
	  padding: 0.35em 0.625em 0.75em;
	}

	/**
	 * 1. Correct 'color' not being inherited in IE 8/9/10/11.
	 * 2. Remove padding so people aren't caught out if they zero out fieldsets.
	 */

	legend {
	  border: 0; /* 1 */
	  padding: 0; /* 2 */
	}

	/**
	 * Remove default vertical scrollbar in IE 8/9/10/11.
	 */

	textarea {
	  overflow: auto;
	}

	/**
	 * Don't inherit the 'font-weight' (applied by a rule above).
	 * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.
	 */

	optgroup {
	  font-weight: bold;
	}

	/* Tables
	   ========================================================================== */

	/**
	 * Remove most spacing between table cells.
	 */

	table {
	  border-collapse: collapse;
	  border-spacing: 0;
	}

	td,
	th {
	  padding: 0;
	}
`;

const GlobalStyles = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return <Styles />;
};

export default GlobalStyles;
