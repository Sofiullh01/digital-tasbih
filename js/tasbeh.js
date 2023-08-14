const subDis = document.getElementById('subDis');
const subIncriment = document.getElementById('subIncriment');
const subDecncriment = document.getElementById('subDecncriment');

let initialValue1 = 0;
subIncriment.addEventListener('click', function(){

    if(initialValue1 === 33){
        return alert (' Complete Tasbih. Now You not count ')
    }
    initialValue1 += 1;
    subDis.innerText = initialValue1;
})

subDecncriment.addEventListener('click', function(){
    if(initialValue1 === 0){
        return alert (' You not count minus value')
    }
    initialValue1 -= 1;
    subDis.innerText = initialValue1;
})


const akbarDis = document.getElementById('akbarDis');
const akberIncriment = document.getElementById('akberIncriment');
const akberDecncriment = document.getElementById('akberDecncriment');

let initialValue2 = 0;
akberIncriment.addEventListener('click', function(){

    if(initialValue2 === 33){
        return alert (' Complete Tasbih. Now You not count ')
    }
    initialValue2 += 1;
    akbarDis.innerText = initialValue2;
});

akberDecncriment.addEventListener('click', function(){
    if(initialValue2 === 0){
        return alert (' You not count minus value')
    }
    initialValue2 -= 1;
    akbarDis.innerText = initialValue2;
});

const allDis = document.getElementById('allDis');
const allIncriment = document.getElementById('allIncriment');
const allDecncriment = document.getElementById('allDecncriment');

let initialValue3 = 0;
allIncriment.addEventListener('click', function(){

    if(initialValue3 === 34){
        return alert (' Complete Tasbih. Now You not count ')
    }
    initialValue3 += 1;
    allDis.innerText = initialValue3;
});

allDecncriment.addEventListener('click', function(){
    if(initialValue3 === 0){
        return alert (' You not count minus value')
    }
    initialValue3 -= 1;
    allDis.innerText = initialValue3;
});


const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', function(){
    initialValue1 = 0;
    initialValue2 = 0;
    initialValue3 = 0;
    subDis.innerText = 0;
    akbarDis.innerText = 0;
    allDis.innerText = 0;
});