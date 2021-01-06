function runProgram(input) {

    input = Number(input);

    var arr = [4,7,47,74,474,447,477,444,744,747,777,774];
    var ans = false;
    if((input%4 == 0) || (input%7 == 0))
    {
        ans = true;

    }
    

    else
    {
        for(var i = 0; i < arr.length; i++)
        {
            if(input%arr[i] == 0)
            {
               ans = true;
               break;
            }
        }

    }

    if(ans)
    {
        console.log("Yes");
    }

    else
    {
        console.log("No");
    }


	
    //console.log(input)
}

if (process.env.USERNAME === "user") {
	runProgram(`16`);
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