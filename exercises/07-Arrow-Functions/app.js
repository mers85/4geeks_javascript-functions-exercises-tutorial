const rapid = (string) => {
    var str = string.toLowerCase();
    var consonants = str.match(/[^aeiou]/gi);
    var onlyConsonants = "";

   //var xx = string.replace(/[aeiou]/ig,'').toUpperCase();

   for(i=0; i <= str.length -1 ; i++){
       if (consonants.includes(str[i])){
        onlyConsonants += str[i]
       }
   }

     return onlyConsonants.toUpperCase();
}
   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));