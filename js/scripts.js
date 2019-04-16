//code for sliding carousel

let slideInterval = 4000;

function getFigures(){
    return document.getElementById('carousel').getElementsByTagName('figure');
}

function moveForward(){
    let pointer = 0;
    let figures = getFigures();
    figures = Array.prototype.slice.call(figures);


    figures.forEach(fig => {

        if(fig.className === 'visible'){
            fig.className = 'hidden';
        pointer = figures.indexOf(fig);
        }

    })

    if(++pointer === figures.length){
        pointer = 0;
    }

    figures[pointer].className = 'visible';
    setTimeout(moveForward,slideInterval);

}

function startPlayback(){
    setTimeout(moveForward,slideInterval);
}

startPlayback();
