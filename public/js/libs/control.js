/**
 * 
 * @param {HTMLTableColElement} btnsNav 
 *      contient la liste de tous les boutons cliqueable pour l apparition de la side barre
 * 
 * @param {HTMLTableColElement} dropNav 
 *      contient la liste des sous éléments de la drop-nav
 *      Shéma : drop-nav|
 *                      |- drop-nav-child
 *                      |- drop-nav-child
 *                      |- drop-nav-child
 */

export let openSidebare = (btnsNav , dropNav)=> {
    
    let saveState = undefined;
    btnsNav.forEach((el ,index)=> {
        el.addEventListener('click',()=>{
            saveState = index;
            for(let key=0 ; key<dropNav.length ; key++) {
                if(key == saveState) continue;
                console.log(key)
                dropNav[key].classList.remove('active')
            }
            !dropNav[index].classList.contains('active') ? dropNav[index].classList.add('active') : dropNav[index].classList.remove('active');
            
            console.log("etat",saveState);
        })
    })
};