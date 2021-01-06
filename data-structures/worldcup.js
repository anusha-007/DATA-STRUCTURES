function runProgram(input) {

    input = input.trim().split("\n");
    var zew_score = input[0].trim().split(" ");
    var eng_score = input[1].trim().split(" ");


    zew_score = zew_score.map(Number);
    eng_score = eng_score.map(Number);
    console.log(input,zew_score);

    var n = "New Zealand";
    var e = "England";

    if(zew_score[0] > eng_score[0])
    {
        console.log(n);
    }

    else if(zew_score[0] < eng_score[0])
    {
        console.log(e);
    }

    else{
        if(zew_score[1] > eng_score[1])
        {
            console.log(n)
        }

        else if(zew_score[1] < eng_score[1])
        {
            console.log(e);
        }

        else
        {
            if(zew_score[2] > eng_score[2])
            {
                console.log(n);
            }

            else
            {
                console.log(e);
            }
        }
    }
}

if (process.env.USERNAME === "user") {
    runProgram(`
    241 15 21
    241 15 26
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