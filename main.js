a = prompt('Enter a first number');
b = prompt('Enter a second number');
run = prompt('Enter an Operation to perform (+,-,/,*)')

if(run == '+'){
    alert( a + '+' + b +  '='  + (parseInt(a)+parseInt(b)));
}else if(run == '-'){
    alert( a + '-' + b +  '='  + (parseInt(a)-parseInt(b)));
}else if(run == '*'){
    alert( a + '*' + b +  '='  + (parseInt(a)*parseInt(b)));
}else if(run == '/'){
    alert( a + '/' + b +  '='  + (parseInt(a)/parseInt(b)));
}
