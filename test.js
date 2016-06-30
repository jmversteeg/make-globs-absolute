import test from 'ava';
import makeGlobsAbsolute from './';


test('Map an array of globs to their absolute path equivalent', t => {
	process.chdir('/Users');
	t.deepEqual(makeGlobsAbsolute([]), []);
	t.deepEqual(makeGlobsAbsolute(['foo']), ['/Users/foo']);
	t.deepEqual(makeGlobsAbsolute(['!foo']), ['!/Users/foo']);
	t.deepEqual(makeGlobsAbsolute(['foo', '!foo/bar']), ['/Users/foo', '!/Users/foo/bar']);
	t.deepEqual(makeGlobsAbsolute(['!foo', 'foo/bar'], '/Some/other/dir'), ['!/Some/other/dir/foo', '/Some/other/dir/foo/bar']);
});
