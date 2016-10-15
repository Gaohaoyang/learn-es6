'use strict';

function template() {
    var name = 'Chuanshi';
    var hobby = 'skate board';
    var dataArr = ['squash', 'basketball', 'football'];
    var parentNode = document.querySelector('.template');
    parentNode.innerHTML = ('\n<ul>\n    <li>' + name + '</li>\n    <li>' + hobby + '</li>\n</ul>\n').trim();
}
template();