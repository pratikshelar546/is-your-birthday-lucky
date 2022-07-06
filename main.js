const date = document.querySelector("#birthdate");
const number = document.querySelector("#luckyno");
const click = document.querySelector("#button");
const msg = document.querySelector("#massage");



function calculateSum(dob){
    const birthdate = dob.replaceAll("-","");
    console.log(birthdate);
    let sum = 0;
    for(let i=0; i<birthdate.length;i++){
        sum = sum+ Number(birthdate.charAt(i));
    }
    checkLucky(sum);
  
}
function checkLucky(sum){
    const luckyNoIs = number.value;
    console.log(sum,luckyNoIs);
    const ans = sum % luckyNoIs;
    console.log(ans);
    if(ans === 0){
        msg.innerText="yehh!!! Your birthdate is lucky 🎉";
    }else{
        msg.innerText="ummmm!!! Your birthdate is not lucky 😔";
    }
}


click.addEventListener("click", function luckyOrNot(){
const dob = date.value;
  
calculateSum(dob);

})