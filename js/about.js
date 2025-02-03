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

    });

    if(getedutitles[x].classList.contains('active')){
        geteducontents[x].style.height = geteducontents[x].scrollHeight+"px";
    }
}