5!
5*4*3*2*1 = 120

function factorial(n){
    if(n==0 || n==1){
        return 1
    }else{
        return n*factorial(n-1)
    }
}

factorial(5)
120
factorial(6)
720