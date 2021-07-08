function x(){
    console.log('x function')
}

function y(){
    console.log('y function');
}

function abc(variable){
    variable();
}

abc(x);
abc(y);