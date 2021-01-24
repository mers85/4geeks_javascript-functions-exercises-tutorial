const rapid = (string) => {
    let str = string.toLowerCase();
    let consonants = str.match(/[^aeiou]/gi);
    let onlyConsonants = "";

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