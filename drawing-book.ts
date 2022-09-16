function pageCount(n: number, p: number): number {
    var frontArea = Math.floor(p/2);
    var backArea = Math.floor((n/2) - frontArea); 
    var isResult = Math.min(frontArea, backArea);
    return isResult;
}