/*
Falsy:
0 is false
'' empty sting is false
undefined
null
NaN

Truthy:
.positive and negetive any type of number
.any string
. ' ' single whitespace string is truthy '0', 'False'
[]
{}
anything else that is not falsy will be truthy
*/
const x = 0;
if (x) {
    console.log('variable is truthy')
}
else {
    console.log('variable is falsy')
}