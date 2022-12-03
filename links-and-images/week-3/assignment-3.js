function compareNumbers(n1,n2){

    if (n1<n2){
        console.log(n2 + " is larger than " + n1); 
    }
    else{
        console.log(n1 + " is larger than " + n2);
    }
}
compareNumbers(7,5)

function evenOdd(n){
    let result;

    result = n%2;
    if (result == 0 ){
        console.log(n + " is an even number");
    }else{
        console.log(n + " is an odd number");
    }
}
evenOdd(10);