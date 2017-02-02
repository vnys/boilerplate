// https://gist.github.com/batfink/8f73faa512ad21be9f1f
/* globals console */

'use strict';

var tag     = document.createElement.bind(document),
    txt     = document.createTextNode.bind(document),
    get     = document.querySelector.bind(document),
    getall  = document.querySelectorAll.bind(document),
    log     = console.log.bind(console),
    err     = console.error.bind(console);

export { tag, txt, get, getall, log, err };
