1221
12321
123421

let palindrome = (data)=>{
    let rem,temp,final = 0;
    temp = data;
    while(data>0){
        rem = data%10;
        data = parseInt(data/10);
        final = final*10+rem
    }
    if(final == temp){
        console.log(`Number ${temp} is palindrome`)
    }else{
        console.log(`Number ${temp} is Not a palindrome`)
    }
}

palindrome(1221)
VM671:10 Number 1221 is palindrome

palindrome(124321)
VM671:12 Number 124321 is Not a palindrome