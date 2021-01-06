
function runProgram(input) {
	input = input.trim().split("\n");
	let arr_len = Number(input[0]);
	let arr = input[1].trim().split(" ").map(Number);

	arr.sort( (a, b) => a - b)

	console.log(arr);
	permutate(arr,0,arr_len);
	
	
}

function permutate(a,l,r){
	if(l == r){
		console.log(a.join(" "),"answer");
	}

	else{
		for( let i = l; i < r; i++ ){
			console.log(a,"Arr");
			
			console.log(a[l],a[i],"wt wrg");
			let temp = a[l];
			a[l] = a[i];
			a[i] = temp;

			permutate(a,l+1,r)
			temp = a[l];
			a[l] = a[i];
			a[i] = temp;

		}
	}
}










if (process.env.USERNAME === "user") {
    runProgram(`
    3
    1 0 3`);
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