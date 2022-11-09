//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const parts = path.split('/').filter(elem => elem.length);
    const stack = [];
    for (const dir of parts) {
        if (dir === '..') {
            stack.pop();
        } else if (dir !== '.') {
            stack.push(dir);
        }
    }

    return '/' + stack.join('/');
};

const input = ['/home/', '/../', '/home//foo/', '/usr/lib/../../root', "/a/./b/../../c/"];
for (const i of input) {
    console.log(i);
    console.log(simplifyPath(i));
}
