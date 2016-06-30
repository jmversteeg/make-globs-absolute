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
		if (path.isAbsolute(glob))
			return glob;
		else {
			let negating = _.startsWith(glob, "!");
			return negating ? ("!" + path.join(wd, glob.substring(1))) : path.join(wd, glob);
		}
	});
};
