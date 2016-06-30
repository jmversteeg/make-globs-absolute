'use strict';

const _    = require('lodash');
const path = require('path');

/**
 *
 * @param {string} globArray
 * @param {string} [wd=process.cwd()]
 */
module.exports = function (globArray, wd) {

	if (!_.isString(wd)) wd = process.cwd();

	return _.map(globArray, glob => {

		let negating = _.startsWith(glob, "!");
		let plain    = negating ? glob.substring(1) : glob;

		if (path.isAbsolute(plain))
			return glob;
		else {
			return (negating ? "!" : "") + path.join(wd, plain);
		}
	});
};
