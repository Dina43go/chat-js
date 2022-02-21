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


/**
 * 
 * @param {*} area 
 * @param {*} option 
 */
export let dragOver = (area , option = {active , extention , systemFile , computing}  ) => {

    let file;
    
    area.addEventListener('drop' , (e)=> {
        e.preventDefault();

        if(option.systemFile != undefined) {
            
            if(option.systemFile.inputFile.el != undefined && option.extention != undefined) {
                if (option.extention.ext != undefined) {
                    if (option.extention.ext.includes(e.dataTransfer.files[0].type))
                        option.systemFile.inputFile.el.files = e.dataTransfer.files;
                    else
                        option.extention.extReaction();
                } else alert("préparez les extensions");
            } 
        }
        
            

        file =  e.dataTransfer.files[0];
        reader(file);
    })  
    
    area.addEventListener('dragover',(e)=> {
        e.preventDefault();
        area.classList.add(option.active);

        /** COMPUTING OPTION : CALLBACK */

        if (option.computing != undefined && option.computing.behaviorRevert != undefined) 
            option.computing.behaviorRevert();
        
            
    });

    area.addEventListener('dragleave',(e)=> {
        e.preventDefault();
        area.classList.remove(option.active);
    })


    if (option.systemFile != undefined) {
        if(option.systemFile.inputFile != undefined) {

            if (!option.systemFile.inputFile.display) 
                option.systemFile.inputFile.el.style.display = 'none';
            
            
            area.addEventListener('click' , ()=> {
                option.systemFile.inputFile.el.click();
            });

            if(option.systemFile.clickOption != undefined) {
                option.systemFile.clickOption.addEventListener('click',()=> {
                    option.systemFile.inputFile.el.click();
                })
            }
    
            option.systemFile.inputFile.el.addEventListener('change' , (e) => {
                
                file = e.target.files[0];
                reader(file);
            });
        }
    }

    // FUNCTION

    let reader = (fichier)=> {

        if (option.extention != undefined) {

            if (option.extention.ext.includes(file.type)) {
                
                // File reader system
                let fileReader = new FileReader();
                fileReader.readAsDataURL(fichier);

                fileReader.onload = ()=>{
                    let url = fileReader.result;
                    
                    if (option.systemFile != undefined) {
                        if (option.systemFile.img != undefined)
                            option.systemFile.img.setAttribute('src' , url);
                    }
                    

                    /** COMPUTING OPTION : CALLBACK */
                    if (option.computing != undefined && option.computing.behavior != undefined)
                        option.computing.behavior();
                    
                }
                // end File reader system
            } else  area.classList.remove(option.active);
        }
        
    }
}
