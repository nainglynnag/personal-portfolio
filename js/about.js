const getedutitles = document.getElementsByClassName('eduTitle');
const geteducontents = document.querySelectorAll('.educontent');

for(let x=0;x < getedutitles.length;x++){
    getedutitles[x].addEventListener('click',function(e){
        this.classList.toggle('active');
        const getcontent = this.nextElementSibling;

        if(getcontent.style.height){
            getcontent.style.height = null; 
        }else{
            getcontent.style.height = getcontent.scrollHeight+"px";
        }

        // hide prev content 
        geteducontents.forEach(content =>{
            if(content != getcontent){
                content.style.height = null;
            }
        });

    });

    if(getedutitles[x].classList.contains('active')){
        geteducontents[x].style.height = geteducontents[x].scrollHeight+"px";
    }

}