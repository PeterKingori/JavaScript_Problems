var year = parseInt(prompt("Enter a year: "));
if (year%4===0)//All leap years are divisible by 4
{
  /*However, there is still a small error that must be accounted for. To eliminate this error, the Gregorian calendar stipulates that a year that is evenly divisible by 100 (for example, 1900) is a leap year only if it is also evenly divisible by 400. */
    if(year%100===0)//Check if it is divisible by 100
    {
      if(year%400===0)//Also check if divisible by 400("It must be both divisible by 100 and 400 in that order")
      {
          alert("This is a leap year");
      }
      else//This means it's not divisible by 400.
      {
          alert("This not a leap year");
      }
    }
    else //This means it's not divisible by 100 but is also a leap year
    {
      alert("This is a leap year");
    }
}
else//This means it's not divisible by 4 so it's not a leap year
{
  alert("This is not a leap year");
}
