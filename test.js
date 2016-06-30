import test from 'ava';
import makeGlobsAbsolute from './';


test('Map an array of globs to their absolute path equivalent', t => {
	process.chdir('/usr');
	t.deepEqual(makeGlobsAbsolute([]), []);
	t.deepEqual(makeGlobsAbsolute(['foo']), ['/usr/foo']);
	t.deepEqual(makeGlobsAbsolute(['!foo']), ['!/usr/foo']);
	t.deepEqual(makeGlobsAbsolute(['/foo']), ['/foo']);
	t.deepEqual(makeGlobsAbsolute(['foo', '!foo/bar']), ['/usr/foo', '!/usr/foo/bar']);
	t.deepEqual(makeGlobsAbsolute(['!foo', 'foo/bar'], '/Some/other/dir'), ['!/Some/other/dir/foo', '/Some/other/dir/foo/bar']);
	t.deepEqual(makeGlobsAbsolute(['foo', '!/foo/bar'], '/Some/other/dir'), ['/Some/other/dir/foo', '!/foo/bar']);
});
