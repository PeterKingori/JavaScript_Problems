//This program checks for vowels in a string and replaces them with hyphens
//It uses the forEach method to act on the array containing the string words
var input = prompt("Please Enter A String Below");
var array = input.split("");
array.forEach(function vowel_check(vowel)
  {
  var i = -1;
  while(i<array.length){
  i = i+1;
  vowel =array[i];
		if((array[i]==="a")||(array[i]==="e")||				(array[i]==="i")||(array[i]==="o")||(array[i]==="u"))
    {
    	array[i]="-";
      i +=1;
    }
    }
	});
  var changed_vowels =array.join(" ");
  alert(changed_vowels);
