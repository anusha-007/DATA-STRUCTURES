function runProgram(input) {
    input = input.trim().split("\n")
    console.log(input)
    var str_len = Number(input[0])
    console.log(str_len)
    var str= input[1].trim()
    console.log(str)


   function goodString(str_len, str)
   {
    let new_str= "";
       //console.log(str_len, str,"init")
       if(str_len == 0){
           console.log(0)
       }
       else if(str_len == 1){
           console.log(1)
       }

       else{
            let i = 0;
            while( i < (str_len - 1) )
            {
                if( str[i] !== str[i+1])
                {
                    new_str = new_str+str[i] + str[i+1]
                    i += 2;
                }
                else{
                    i = i + 1
                }
            }

       }
      
      return new_str

   }

   let ans = goodString( str_len, str )
   console.log(ans, "ans")
  
   console.log(str_len - ans.length )


}



if (process.env.USERNAME === "user") {
	runProgram(`100
    abbbbaabbbbababbbabababbbabaabaababaaababbbaaaabbabbbbbbbabbbbbbbbabbbaaababbaaabbabbaabaaabaaabbabb`);
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