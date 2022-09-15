function bonAppetit(bill: number[], k: number, b: number): void {
    // Write your code here
    let sum = bill.reduce((acc,val)=>acc+val);
    let tulbur = (sum - bill[k]) / 2;
    const isResult = b - tulbur
    if(isResult){
        console.log(isResult)
    }else{
        console.log("Bon Appetit")
    }
}