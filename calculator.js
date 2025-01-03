const input = document.getElementsByClassName('input')[0];
const buttons =  document.querySelectorAll('button');

const btnArr = Array.from(buttons);
let str = '';
let history = [];

btnArr.forEach( (btn) => {
    btn.addEventListener('click', (e)=>{
        if(e.target.innerHTML == 'AC'){
            str = '';
            history = [];
            input.value = str;
        }else if(e.target.innerHTML == 'DEL') {
            str = str.substring(0, str.length-1);
            input.value = str;
        }else if(e.target.innerHTML == '='){
            if(str === ''){
               input.value = '0';
            }else {
            let result = eval(str);
            history = [];
            history.push(`${str} = ${result}`)
            input.value = result;}
        }else if(e.target.innerHTML == 'HIS'){
            input.value = history;
        }else if(e.target.innerHTML == '%'){
                str = (eval(str) / 100).toString(); 
                input.value = str; 
        } else{
            str += e.target.innerHTML;
            input.value = str;
        }
    })
})