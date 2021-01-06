
function runProgram(input) {
    input = input.trim().split("\n")

    let arr_size = Number(input[0]);
    var arr = input[1].trim().split(" ")
    arr = arr.map(Number)

    function elementIndex(element,index){
        return {element:element,index:index}
    }

    arr = arr.map(elementIndex)
   

    quickSort(arr,0,arr_size-1)
    
    function getIndex(element){
        return element.index
    }

    console.log(arr.map(getIndex).join(" "))
	
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
    
    let pivot  = arr[high].element;
    

    let i = low-1;
    

    for(var j = low; j < high; j++)
    {
        // console.log("inside for loop")
        if(arr[j].element < pivot )
        {
            i = i+1;
            var temp  = arr[i].element;
            arr[i].element = arr[j].element;
            arr[j].element = temp;

            var temp  = arr[i].index;
            arr[i].index = arr[j].index;
            arr[j].index = temp;
        }
    }
   

    var temp  = arr[i+1].element;
    arr[i+1].element = arr[high].element;
    arr[high].element = temp;

    var temp  = arr[i+1].index;
    arr[i+1].index = arr[high].index;
    arr[high].index = temp;

    

    
    // console.log(arr,"end")
    return i+1
}






if (process.env.USERNAME === "user") {
    runProgram(`
    3
    5 20 2`);
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