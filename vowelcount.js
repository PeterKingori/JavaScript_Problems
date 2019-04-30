var input = (prompt("Please Enter A String Below")).toLowerCase();
var array = input.split("");
var count =0;
for (i = 0; i < array.length; i++)
  {
		if((array[i]==="a")||(array[i]==="e")||(array[i]==="i")||(array[i]==="o")||(array[i]==="u"))
    {
    	//array[i]="-";
      count++;
    }
	}
  //var changed_vowels =array.join(" ");
  alert("This string has " +count+ " vowels");
