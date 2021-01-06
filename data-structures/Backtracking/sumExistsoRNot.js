function runProgram(input) {
    input = input.trim().split("\n");
    let n = Number(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    let k = Number(input[2]);
    
     let ans = findSubset(0,0,k,arr)
     
     if(ans){
         console.log("yes")
     }
     else{
         console.log("no")
     }
     function findSubset(sum,index)
        { //console.log(arr,index)
            if(sum == k)
            {
                return true
            }
            if(index >= (arr.length))
            {
                return false
            }

            return findSubset(sum+arr[index],index+1) || findSubset(sum,index+1)
        }




}









if (process.env.USERNAME === "user") {
    runProgram(`
    9
1 2 3 4 5 6 7 8 9
5`);
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