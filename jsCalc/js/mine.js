

let nums = document.getElementsByClassName("numbers");

let result = document.getElementById("result");

let btns = document.getElementsByClassName("operator");

let history = '';


//add
for( let i = 0 ; i <= nums.length ; i++){

    nums[i].addEventListener("click" , function(val){
        result.value += val.target.value;

        // history += val.target.value;
        // console.log(history);
        for(let i = 0 ; i <= btns.length ; i++){
            if( result.value.endsWith("+") || result.value.endsWith("-") || result.value.endsWith("*") || result.value.endsWith("/") ){
                btns[i].disabled = true;
            }
            else{
                btns[i].disabled = false;
            }
        }
    })
};

//solve
function solve(){

    let x = result.value

    let y = eval(x);

    result.value = y;

    history += x + "=" + result.value + " " + ",";

    document.getElementById("history").innerHTML = history;


}

//delete all
function deleteAll(){
    result.value = ""
    for(let i = 0 ; i <=btns.length ; i++){
        btns[i].disabled = true;
    }
}






