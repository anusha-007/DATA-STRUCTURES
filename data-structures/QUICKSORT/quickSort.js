
function runProgram(input) {
    input = input.trim().split("\n")

    let arr_size = Number(input[0]);
    var arr = input[1].trim().split(" ")
    arr = arr.map(Number)


    quickSort(arr,0,arr_size-1)
    console.log(arr);
	
}

function  quickSort(arr,low,high) {
        if(low < high)
        {
            let pi = partition(arr,low,high)
            // console.log(pi,"inside pi")
           
               quickSort(arr,low,pi-1)

          
               quickSort(arr,pi+1,high)     
        }
        else{
            return arr
        }
    
}

function partition(arr,low,high) {
    
    let pivot  = arr[high];

    let i = low-1;
    

    for(var j = low; j < high; j++)
    {
        // console.log("inside for loop")
        if(arr[j] < pivot )
        {
            i = i+1;
            var temp  = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
   

    var temp  = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;


    
    // console.log(arr,"end")
    return i+1  //this is middle index left of it are smaller than that and right are greater than that element
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