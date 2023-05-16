function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pinString;
    }
    else{
        return getPin();
    }
}
document.getElementById('pin_btn').addEventListener('click', function(){
    const pinDisplay = document.getElementById('pin_display');
    pinDisplay.value = getPin();
})

document.getElementById('buttons').addEventListener('click', function(event){
    const num = event.target.innerText;
    const calDisplay = document.getElementById('cal_display');
    if(isNaN(num)){
        if(num == 'C'){
            calDisplay.value = '';
        }
        
    }
    else {

        const displayNum = calDisplay.value;
        const updateNum = displayNum + num;
        calDisplay.value = updateNum;
    }
})