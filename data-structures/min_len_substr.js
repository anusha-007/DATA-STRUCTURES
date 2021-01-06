function runProgram(input) {

	
    //console.log(input);

    // var distinct_chars = distinct_check(input)
    // console.log(distinct_chars);
    

    var min_length  = 100000;
    var max_distinct = 0;

   for(var i = 0; i < input.length; i++)
   {
       
       var substr = "";
       for(j = 0; j <= i;j++)
       {
           substr += input[j];

           var ans = distinct_check(substr);
           if(ans > max_distinct)
           {
               max_distinct = ans;
               min_length = substr.length;
            //    if(substr.length < min_length)
            //    {
            //        min_length = substr.length
            //    }
           }

           if(ans == max_distinct)
           {
               min_length = substr.length;
           }


        //    console.log(substr);
        //    console.log(ans);

           //console.log(substr);

           
       }
       
       
   } 

   console.log(min_length)


   function distinct_check(str)
   {
       var dict = {}

       for(var i = 0; i < str.length;i++)
       {
           if(!dict[str[i]])
           {
               dict[str[i]] = 1;
           }

           else
           {
               var prev = dict[str[i]];
               dict[str[i]] = prev+1;
               
           }
       }

       var keys = Object.keys(dict).length
       return (keys);
  
    }


   //console.log(min)

	
}

if (process.env.USERNAME === "user") {
	runProgram(`zoomsessionmooz`);
} else {
	process.stdin.resume();
	process.stdin.setEncoding("ascii");
	let read = "";
	process.stdin.on("data", function (input) {
		read += input;
	});
	process.stdin.on("end", function () {
		read = read.replace(/\n$/, "");
		read = read.replace(/\n$/, "");
		runProgram(read);
	});
	process.on("SIGINT", function () {
		read = read.replace(/\n$/, "");
		runProgram(read);
		process.exit(0);
	});
}