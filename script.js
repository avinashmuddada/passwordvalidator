//calling all the paragraphs
let length=document.getElementById('length')
let uc=document.getElementById('uppercase')
let lc=document.getElementById('lowercase')
let num=document.getElementById('number')
let ss=document.getElementById('special')

function passwordvalidator(password){
    if(password.length<8){
        length.innerHTML="Your password must have 8 characters"
        length.style.color='red'
    }
    else{
        length.innerHTML="Your password satisfy's the length condition"
        length.style.color="green"
    }

    for(let i=0;i<password.length;i++)
    {
        if(password.charCodeAt(i)>=65 && password.charCodeAt(i)<=90) {
            uc.innerHTML="Your password must have atleast one uppercase letter"
            uc.style.color='green'
            break;
        }
        else{
            uc.innerHTML="Your password don't have altleast one uppercase letter"
            uc.style.color='red'
        }
    }
    for(let i=0;i<password.length;i++)
        {
            if(password.charCodeAt(i)>=97 && password.charCodeAt(i)<=122) {
                lc.innerHTML="Your password must have atleast one lowercase letter"
                lc.style.color='green'
                break;
            }
            else{
                lc.innerHTML="Your password don't have altleast one lowercase letter"
                lc.style.color='red'
            }
        }
    for (let i=0;i<password.length;i++) {
        if(password.charCodeAt(i)==64 || password.charCodeAt(i)==95) {
            ss.innerHTML="Your password must have atleast one special symbol"
            ss.style.color='green'
            break
        }
        else {
            ss.innerHTML="Your password dont't have atleast one special symbol"
            ss.style.color='red'
        }
    }
    for(let i=0;i<password.length;i++) {
        if(password.charCodeAt(i)>=48 || password.charCodeAt(i)>=57) {
            num.innerHTML="Your password must have atleast one digit"
            num.style.color='green'
            break
        }
        else {
            num.innerHTML="Your password don't have atleast one digit"
            num.style.color='red'
        }
    }
}