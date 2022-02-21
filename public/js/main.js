import { openSidebare  , dragOver} from "./libs/control.js";
import { User } from "../models/Users";

document.querySelector('.messagerie').scrollTo(0, document.body.scrollHeight);

let nav = document.querySelector('.tuild ul');
let dropNav = document.getElementsByClassName('drop-nav')[0].querySelectorAll('.drop-nav-child');
let btnsNav = nav.querySelectorAll('li');

openSidebare(btnsNav , dropNav);


let msgBox = document.querySelector('.messengerBox');
let zone = document.querySelector('.over-flow .drop-fils');

msgBox.addEventListener('dragover',(e)=> {
    e.preventDefault();
    zone.classList.add('up')
})

msgBox.addEventListener('dragleave',(e)=> {
    e.preventDefault();

    setTimeout(() => {
        zone.classList.remove('up')
        zone.classList.remove('active')
    }, 1500);
})

dragOver(zone , {
    active : 'active',
    systemFile : {
        clickOption : document.getElementById('uploded'),
        inputFile : {
            el : document.getElementById('messagefile'),
            display : false
        }
    },
    extention : {
        ext : ["image/jpg","image/jpeg" ,"image/png","image/gif","text/plain","application/zip","video/mp4" ,"video/x-matroska"], // "video/x-matroska" format .mkv
        extReaction : ()=> {
            alert('ce format de fichier n\' est pas autorisé ');
        }
    }
})