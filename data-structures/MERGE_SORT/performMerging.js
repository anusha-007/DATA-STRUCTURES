var arr1 = [1,2,3];
var arr2 = [4,5,6];

n = arr1.length;
m = arr2.length;
var i = 0;
var j = 0;
var main = [];
var k = 0;
while( i < n && j < m)
{

    if(arr1[i] < arr2[j])
    {
        main[k] = arr1[i]
        k++;
        i++;
    }

    else
    {
        main[k] = arr2[j];
        j++;
        k++;
    }

}

if( i < n){
    while( i < n)
    {
        main[k] = arr1[i]
        k++;
        i++;
    }
}

if( j < m)
{
    while( j < m)
    {
        main[k] = arr2[j]
        k++;
        j++;
    }

}
console.log(main)