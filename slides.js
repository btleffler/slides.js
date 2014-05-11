/**
 *
 * Slides. It's like a slide show. No one has seen that before.
 * Author: Benjamin Leffler <btleffler@gmail.com>
 *
 */

(function () {

	"use strict";

	var Slides;

	Slides = function (elem, options) {
		var p;

		if (typeof elem === "string")
			elem = document.getElementById(elem);

		this.element = elem;
		this.options = {};

		for (p in options) {
			if (options.hasOwnProperty(p) && p !== "hasOwnProperty")
				this.options[p] = options[p];
		}

		return this;
	};

	Slides.prototype.next = function () {};
	Slides.prototype.prev = function () {};

})();
