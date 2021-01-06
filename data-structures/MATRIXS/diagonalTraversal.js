function runProgram(input) {

 input = input.trim().split('\n');
 

 let testCases = Number(input[0]);

 var pos = 1;
 for(var i = 0; i< testCases; i++)
 {
     var n = Number(input[pos])

     var matrix = [];

     for(var j = (pos + 1); j <= (pos+n);j++)
     {
         var arr = input[j].trim().split(" ")
         arr = arr.map(Number)
         matrix.push(arr)
     }
     
     //console.log(matrix)
     var output = diagonalTraverse(n,matrix)
     console.log(...output);
     pos = pos+n +1;

 }


}
	
function diagonalTraverse(n, matrix) {
    // var n = 1;
    // var matrix = [[20]];

    var user = {};

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            var ans = i + j;

            if (!user[ans]) {
                user[ans] = [matrix[i][j]];
            } else {
                user[ans].push(matrix[i][j]);
                // console.log(user[ans])
            }
        }
    }

    var out = [];
    for (var key in user) {
        if (Number(key) % 2 == 0) {
            user[key].reverse();
        }

        out = [...out, ...user[key]];
    }

    
    return out;
}



if (process.env.USERNAME === "user") {
	runProgram(`3
    1
    20
    2
    1 2
    3 4
    3
    1 2 3
    4 5 6
    7 8 9`);
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
