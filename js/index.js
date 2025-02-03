const jobs = ["Freelance Developer.","Frontend Developer.","Backend Developer.","Data Analyst."];
const gettxtani = document.querySelector('.txtAni');

function* generator(){
    let idx = 0;

    while(true){
        yield idx++;

        if(idx > 3){
            idx = 0;
        };
    };

};

const txtnumber = generator();

function delwords(){

    let getword = gettxtani.innerHTML;
    let getlastidx= getword.length-1;
    // console.log(getword);
    
    let delinterval = setInterval(function(){

        if(getlastidx >= 0){
            // remove word by word 
            gettxtani.innerHTML = getword.substring(0,getlastidx);
            getlastidx--;
        }else{
           
            // get new jobs
            showwords(jobs[txtnumber.next().value]);
            clearInterval(delinterval);
        }
    },500);

};

function showwords(word){

    let x = 0;

    gettxtani.innerHTML = '';
        
    let showinterval = setInterval(function(){

        if(x >= word.length){
            clearInterval(showinterval);
            delwords();
        }else{
            gettxtani.innerHTML += word[x];
            x++;
        }
    },500);

};

showwords(jobs[txtnumber.next().value]);