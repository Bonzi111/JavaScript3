function Add(value)
{
    return function(data) 
    {
        if (typeof data !== 'undefined') 
        {
            value = value + data;
            return arguments.callee;
        } 
        else 
        {
            return value;
        }
    };
}
var a=Add(1)(2)(3)();
console.log(a);
var a=Add(1)(2)(3)(4)(5)(6)();
console.log(a);