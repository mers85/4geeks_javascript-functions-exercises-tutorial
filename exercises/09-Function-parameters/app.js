// Your code goes here:
function renderPerson(name,birthdate,eyescolor,age,genre){
    let ageString = age.toString();
    var result = name + ' ' + 'is a ' + ageString + ' years old' + ' ' + genre + ' born on ' + birthdate + ' with ' + eyescolor + ' eyes'
    return result;
}


  ///*** Do not edit below this line ****/
  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));