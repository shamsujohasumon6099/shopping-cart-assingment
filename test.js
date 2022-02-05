function numbers(num,num2) {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum+=element;
        console.log(element);
        
    }
    console.log(sum);
}

numbers(3,5,7,8);