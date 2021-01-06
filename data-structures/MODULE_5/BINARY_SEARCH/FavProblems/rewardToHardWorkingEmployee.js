function runProgram(input) {
    input = input.trim().split("\n");

    let [no_of_boxes, no_of_trucks] = input.shift().split(" ").map(Number);

    let boxes_weight = input.shift().trim().split(" ").map(Number);

    let trucks = input.shift().trim().split(" ").map(Number);
    boxes_weight.sort((a, b) => a - b);
    trucks.sort((a, b) => a - b);


    function possibleToTransport( boxes, trucks, no_of_boxes, no_of_trucks, mid ){
        let boxes_transported = 0;
        // let trucks_count = 0;
       

        for( let i = 0; i < no_of_trucks; i++){
            let time_taken = 0;
            for( let j = 0; j < no_of_boxes; j++){
                if( trucks[i] >= boxes[boxes_transported] && time_taken < mid){
                    time_taken += 2;
                    boxes_transported ++
                }
            }

        }

        if( boxes_transported == no_of_boxes){
            return true
        }

        else{
            return false
        }
       
    }


    function HardWorkingEmployee(boxes, trucks, no_of_boxes, no_of_trucks) {
        let low = 1;
        let high = 2 * no_of_boxes - 1;
        let ans = -1;
        while (low <= high) {
            let mid = Math.floor(low + (high - low) / 2);
            if ( possibleToTransport(boxes, trucks, no_of_boxes, no_of_trucks, mid) ) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }

    let min_time = HardWorkingEmployee(
        boxes_weight,
        trucks,
        no_of_boxes,
        no_of_trucks
    );
    console.log(min_time);


}


if (process.env.USERNAME === "user") {
	runProgram(`5 3
    2 5 2 4 7
    6 8 9`);
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