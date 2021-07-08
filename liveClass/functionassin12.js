//programe for calculate run rate

function x(Target,currentScore,maxOver,overBowlled) {
    var currentRunRate;
    currentRunRate = (Target-currentScore)/(maxOver-overBowlled);
    return currentRunRate;  
};

console.log(x(300,100,50,20));

