function runProgram(input) {
    input = input.trim().split("\n")
    console.log(input);
    var arr = input[1].trim().split(" ").map(Number);
//    console.log(arr)
//     console.log(input[1]);
    (quickSort(arr,0,arr.length-1))
    console.log(arr,"hii")
    
    function Partarray(arr,start,end){
        var pivalue = arr[end]
        let index = start;
        for(var i = start; i<end; i++){
            if(arr[i] <= pivalue){
                var temp = arr[i];
                arr[i] = arr[index];
                arr[index] = temp;
                 index++
            }
        }
        var swapi = arr[index];
        arr[index] = arr[end];
        arr[end] = swapi;
       
        return index
    }
function quickSort(arr, start, end){
    if(start >= end){
        return arr
    }else{
        let pindex = Partarray(arr,start,end)
        quickSort(arr,start,pindex-1)
        quickSort(arr,pindex+1,end)
    }
}
}
  
if (process.env.USERNAME === "user") {
    runProgram(`
    5
    3 5 0 9 8`);
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