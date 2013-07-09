#!/usr/bin/env node

// Find first K Prime numbers via basic for loop
// sieve algorithm

var firstkprime = function(k) {
    var arr = [];
    arr.push(2);
    var m3=9, m5=25, m7=49, i=3;
    var m11=121, m13=169, m17=289, m19=361, m23=529;
    for( ; i<k; i+=2 )
    {
	if( i!=m3 && i!=m5 && i!=m7 && i!=m11 && i!=m13 && i!=m17 && i!=m19 && i!=m23) 
	    arr.push(i);
	else
	{
            if( i==m3 ) m3+=6;
            if( i==m5 ) m5+=10;
            if( i==m7 ) m7+=14;
	    if( i==m11) m11+=22;
	    if( i==m13) m13+=26;
	    if( i==m17) m17+=34;
	    if( i==m19) m19+=38;
	    if( i==m23) m23+=46;
	}
	if (arr.length>99) break;
    } 
    return arr;
};

// Print to console
var fmt = function(arr) {
    var fs = require('fs');
    var outfile = "prime.txt";
    fs.writeFileSync(outfile, arr.join(",")); 
    //console.log(arr.length);

    return arr.join(" ");
};

var k = 600;
//console.log("firstkprime(" + k + ")");
console.log(fmt(firstkprime(k)));

