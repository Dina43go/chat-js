import { openSidebare } from "./libs/control.js";


var nav = document.querySelector('.tuild ul');
let dropNav = document.getElementsByClassName('drop-nav')[0].querySelectorAll('.drop-nav-child')

var btnsNav = nav.querySelectorAll('li')


openSidebare(btnsNav , dropNav)