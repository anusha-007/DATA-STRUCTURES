function runProgram(input) {

	
    //console.log(input)
    input = input.trim().split("\n");
    
    var n = Number(input[0]);

    //console.log(input);
    var arr = input[1].trim().split(" ");
    arr = arr.map(Number);
    console.log(arr);

    function elementsIndex(element , index)
    {
        return {element:element,index:index}  // return {element:index}
    }

    var ele_index = arr.map(elementsIndex)
    console.log(ele_index);
    function getIndex(element) {
        return element.index;
    }


    function sort(arr)
    {
        var n = arr.length;
        
        for(var i = 0; i < n-1; i++)
        {
            for(var j = 0; j < n-i-1;j++)
            {
                if(arr[j].element > arr[j+1].element)
                {
                    var temp = arr[j].element;
                    arr[j].element = arr[j+1].element;
                    arr[j+1].element = temp;

                    var temp = arr[j].index;
                    arr[j].index = arr[j+1].index;
                    arr[j+1].index = temp;

                }
                
            }
        }

        
        return arr;
    }

    //console.log(ele_index);
    var sorted_arr = sort(ele_index);
    console.log(sorted_arr,"i need u");

    console.log(sorted_arr.map(getIndex).join(" "));

	
}

if (process.env.USERNAME === "user") {
    runProgram(`
    5
    4 5 3 7 1`);
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