function runProgram(input) {

    input = input.trim().split("\n")

    let arr_size = Number(input[0]);
    var arr = input[1].trim().split(" ")
    arr = arr.map(Number)
    var ans = merge_sort(arr,0,arr_size)
	console.log(ans)
	
}


function merge_sort(arr,lo,hi){
    if(lo < hi)
    {
        let mid = Math.floor((lo+hi)/2);

        merge_sort(arr,lo,mid)
        merge_sort(arr,mid+1,hi)
        return merge(arr,lo,mid,hi)
    }

    else {
        return  arr
    }


}

function merge(arr,lo,mid,hi)
{
    // var n = mid-lo+1;
    // var m = hi-mid;

    var arr1 = arr.slice(lo,mid+1)
    
    var arr2 = arr.slice(mid+1,hi+1)
    console.log("af")
    console.log(arr1);
    console.log(arr2);
    console.log("Be")
    let n = arr1.length;
    let m = arr2.length;
    let i = 0;
    let j = 0;
    var main = [];
    k=0;

    while(i < n && j <m)
    {
        // console.log(arr)
         console.log(main[k])
        if(arr1[i] < arr2[j])
        {
            main[k] = arr1[i]
            k++;
            i++
        }

        else{
            main[k] = arr2[j];
           
            k++;
            j++;
            console.log(main[k])
         }
    }

    if( i < n){
        while( i < n)
        {
            main[k] = arr1[i]
            console.log(arr[i],"12")
            k++;
            i++;
        }
    }
    
    if( j < m)
    {
        while( j < m)
        {
            main[k] = arr2[j]
            k++;
            j++;
        }
    
    }
    console.log(main,"hii")

    return main
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