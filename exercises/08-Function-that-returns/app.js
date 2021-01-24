var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ******///

var dollarToYen = function(dollarValue){
    let euro = dollarToEuro(dollarValue);
    let yen = euroToYen(euro);
    return yen;
}

console.log(dollarToYen(137));