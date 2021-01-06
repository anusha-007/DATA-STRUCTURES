function runProgram(input) {
    input = input.trim().split("\n");
    input = input.map(Number)
    var n = input[0];

    for( var i =1; i <= n; i++ )
    {
        var ans = isPossible(1,input[i])
        if(ans)
        {
            console.log("Yes")
        }

        else{
            console.log("No")
        }
    }

    function isPossible( curr, tomAmt )
    {
        if( tomAmt == 1 )
        {
            //console.log(curr)
            return true;
        }

        if( curr == tomAmt )
        {
            //console.log(curr,tomAmt)
            return true;

        }

        if(curr > tomAmt)
        {
            console.log(curr)
            return false;
        }

        return isPossible( curr*10, tomAmt ) || isPossible( curr*20, tomAmt )

    }



	
	
}

if (process.env.USERNAME === "user") {
    runProgram(`
    5
    1
    2
    10
    25
    200
    `);
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