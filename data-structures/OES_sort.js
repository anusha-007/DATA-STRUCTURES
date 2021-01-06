function runProgram(input) {

    input = input.trim().split("\n");
    
    var n = Number(input[0]);

    var arr = input[1].trim().split(" ");

    arr = arr.map(Number);

    

    var odd_arr = [];
    var even_arr = [];

    for(var i = 0; i < n; i++)
    {
        var rem = 0;
        var num = arr[i];

        while(num > 0)
        {
            rem += num%10;
            num = Math.floor(num/10);
           
        }

        if(rem % 2 != 0)
        {
            odd_arr.push(arr[i]);
        }

        else
        {
            even_arr.push(arr[i]);
        }
    }

    


    function  merge(arr,low,mid,high)
    {
        let arr1 = arr.slice(low,mid+1);
        let arr2 = arr.slice(mid+1,high+1);

        let n = arr1.length;
        let m = arr2.length;

        let i = 0,j = 0;

        let k = low;

        while( i < n && j < m )
        {
            if(arr1[i] < arr2[j])
            {
                arr[k] = arr1[i]
                i++;
            }

            else {
                arr[k] = arr2[j];
                j++
            }

            k++

        }

        if(i < n)
        {
            while(i < n)
            {
                arr[k] = arr1[i];
                i++;
                k++
            }
        }

        if( j < m )
        {
            while( j < m )
            {
                arr[k] = arr2[j];
                j++;
                k++;
            }
        }

        return arr

    }


    function mergeSort(arr,low,high) {

        if(low < high)
        {
            let mid = Math.floor( (low + high)/2 );

            mergeSort( arr,low, mid )
            mergeSort( arr, mid+1,high)
            return merge(arr,low,mid,high)
        }
        
    }


    var a = mergeSort(odd_arr,0,odd_arr.length-1);
    var b = mergeSort(even_arr,0,even_arr.length-1);
    console.log(...[...a,...b])

    

    


}

if (process.env.USERNAME === "user") {
    runProgram(`
    8
    121 384 103 100 200 400 757 481`);
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