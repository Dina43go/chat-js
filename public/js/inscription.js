import { dragOver } from "./libs/control.js";
import { User } from "../models/Users.js";

let realZone = document.querySelector('.dragArea');

/**
 *  DRAG-OVER Function
 */
dragOver(realZone , {
    active : 'active',
    systemFile : {
        inputFile : {
            el : document.getElementById('inputf'),
            display : false
        },
        img : document.querySelector('.profile-selection'),
    },

    extention : {
        ext : ["image/jpg","image/jpeg" ,"image/png"],
        extReaction : ()=> {
            alert('ce format de fichier n\' est pas autorisé ');
        }
    },

    computing : {
        behavior : ()=> {
            document.querySelector('.info-text div').classList.add('displayNo'); 
            document.querySelector('.cx').classList.add('active');
        },

        behaviorRevert : ()=> {
            document.querySelector('.info-text div').classList.remove('displayNo');
            document.querySelector('.cx').classList.remove('active');
        }
    }
});

const Person = new User("jone Dhoe");

console.log(Person.name);

/**
 * 
 */

 const form = document.querySelector('.inscription');
 const area = document.querySelector('.area');
 const next = document.querySelector('.next');
 let btns = document.querySelectorAll('.inputStyle');



 btns[0].addEventListener('click',(e)=>{
     e.preventDefault();
     next.classList.add('quit');
     area.classList.add('pass');
 });

 form.addEventListener('submit' , (e)=> {
     e.preventDefault();

    let data = new FormData(form);
    console.log([...data.entries()]);
 })

