import foods from './foods';

const food=foods();

function choice(){

const picked= food[Math.floor(Math.random()* food.length+1)];
return picked;

}

function remove(picked){
    const a = [...food]
    const index=a.indexOf(picked);
    if(index===-1){
        return undefined;
    }else{
        a.splice(index,1);
        return a;
    }

}

// function remove(picked) {
//     return food.filter(item => item !== picked)
// }

export {choice, remove};
