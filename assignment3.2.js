function sum()
{
   var sum = 0;
   for(var i=0;i<arguments.length;i++)
   {
       sum +=Number(arguments[i]);
   }

   return sum;
}
var a=sum (20,10,14,9,0,25);
console.log(a);


