//This program checks for vowels in a string and replaces them with hyphens
//It uses a for loop to act on the array containing the string words
var input = prompt("Please Enter A String Below");
var array = input.split("");
for (var i = 0; i < array.length; i++)
  {
		if((array[i]==="a")||(array[i]==="e")||(array[i]==="i")||(array[i]==="o")||(array[i]==="u"))
    {
    	array[i]="-";
    }
	}
  var changed_vowels = array.join(" ");
  alert(changed_vowels);
