function runProgram(input) {

   
    //input = Number(input.trim())
    input = input.trim().split("\n")
    //console.log(input)
    let testCases = Number(input[0]);

    for(let i = 1; i <= testCases; i++)
    {
        let n = Number(input[i]);
        console.log(n,"inpit")
        
        let ans =  recurBack(n,0)
        console.log(ans);
    }
  
    
}

function recurBack(n,count){ 
    if( n == 1)
    {
        return count;
    }

    else if( n%2 == 0 )
    {
        count++;
        return recurBack(n/2,count)

  
    }
    else if( n%3 == 0) {
            
        count++;
        return recurBack((2*n)/3,count)


    }

    else if( n%5 == 0) {
            
        count++;
         return recurBack((4*n)/5,count)


    }

    else 
    {
       return -1;
    }
    console.log(count,"ans");
   
      

}

if (process.env.USERNAME === "user") {
    runProgram(`6
    1
    10
    25
    30
    14
    27`); 
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