console.log("E  X  E  R  C  I  S  E  1 ")


let colors = ['green', 'yellow', 'blue', 'white'];
let color1 = colors.concat('black', 'pinck');
console.log(color1);
color1 = colors.fill('black', 2 ,3);
console.log(color1);
function forFIND (i){
 return i.length > 5;
   
}
console.log(colors.find(forFIND));
console.log(colors.findIndex(forFIND));

let mek = ['green', 'yellow',[['blue', 'white']]];
let erku = mek.flat(1);
console.log(erku);
let ereq = mek.flat(2)
console.log(ereq);
mek = [['green',[ ['yellow',[['blue',[ 'white']]]]]]];
let chors = mek.flat(Infinity)
console.log(chors); 

function forMap(i){
    i = i +"$$$";
    return i;
}
color1 = colors.map(forMap)
console.log(color1);

function forReduce (a,b) { 
    return a + b
} 
let arr = [12, 13, 14, 20]
console.log(arr.reduce(forReduce));
console.log(arr.reduce(forReduce, 50));
let arr1 = [12, 13, 16, 17]

console.log("");
console.log("E  X  E  R  C  I  S  E  2 ")
let arr5 = ["bbb", "bbb", "bbb", "bbb"]
let arr6 = ["bbb", "bbb", "bbb", "bbb", "aaa", "ccc"]
function check (array){
    let j = array.length;
    let k = 0;
  for (u = 0; u <= j; u++)
    if(array[u] == array[u+1]){
      k++;
    }
    if(k == j){
        console.log(true);
    }
    else console.log(false);
}
check(arr5)
check(arr6)


console.log("");
console.log("E  X  E  R  C  I  S  E  3 ")
function checkWord (word){
    let u = word.split("");
    let j = u.length;
    u = u.sort();
    let b = 0;
    for(let k = 0; k < j-1; k++){
        if(u[k] == u[k+1]){
            b++;
        }
    }
    if(b!=0){
        console.log(false);
    }
    else if(b==0){
        console.log(true);
    } 
}
checkWord("Helo")
checkWord("Hello")

console.log("");
console.log("E  X  E  R  C  I  S  E  4 ")
console.log("I N T E R S E C T I O N");
function intersection(arr1, arr2) {
    return arr1.filter(i => arr2.includes(i));
  }
let j = [1, 3, 2, 3, 4];
let f = [2, 3, 4, 5]
let answer = intersection(j, f);
console.log(answer); 


console.log(j);console.log("P U L L ");
function pull(arr, k, b){
    let f = 0;
    while(f <= arr.length){
        if(arr[f] === k && b == undefined ){
           arr.splice(f, 1); 
        }
        else if(arr[f] === k || arr[f] ===b && b != undefined ){
            arr.splice(f, 1); 
         }
        else f++;
    }
    
}
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
pull(array, 'a', 'c');
pull(j, 3)
console.log(j);
console.log(array);


console.log(j);console.log("T A I L");
function tail(arr){
    arr.splice(0,1)
}
tail(j)
console.log(j);

console.log(j);console.log("T A K E");
function take(arr,j){
    if(j!=0 && j != undefined){
        arr.splice(j,1)
    }
    else if(j==0){
        arr.splice(0, arr.length)
    }
    else if(j==undefined){
        arr = arr.splice(1,arr.length)
    }
}
let g = [1, 3, 2, 3, 4];
console.log(g);
take(g,3)
console.log(g);