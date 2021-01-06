function runProgram(input) {
    input = input.trim().split("\n");

    let [no_of_boxes, no_of_trucks] = input.shift().split(" ").map(Number);
    //console.log(boxes, trucks, "boxes")

    let boxes_weight = input.shift().trim().split(" ").map(Number);
    //console.log(boxes_weights,"weig")

    let trucks = input.shift().trim().split(" ").map(Number);
    boxes_weight.sort((a, b) => a - b);
    trucks.sort((a, b) => a - b);

    function check(boxes,trucks, boxSize,truckSize, hrs) {
        let currTruck = 0;
        let boxTransported = 0;
        while( currTruck < truckSize) {
            let time = 0
            while( boxTransported < boxSize && time < hrs && trucks[currTruck] >= boxes[boxTransported] ){
                time += 2
                boxTransported++
            }
            currTruck++
        }
        if( boxTransported === boxSize ) return true;
        return false;
    }

    function HardWorkingEmployee(boxes, trucks, no_of_boxes, no_of_trucks) {
        let low = 1;
        let high = 2 * no_of_boxes - 1;
        let ans = -1;
        while (low <= high) {
            let mid = Math.floor(low + (high - low) / 2);
            if (check(boxes, trucks, no_of_boxes, no_of_trucks, mid)) {
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







function predicate(boxes, trucks, no_of_boxes, no_of_trucks, mid) {
       
    let trucks_count = 0;
    let boxes_transported = 0;
    let time = 0;

    let k = 0
    for( let i = k; i < no_of_boxes; i++)
    {
        if( trucks[ trucks_count ] >= boxes[i] )
        {
            if( time +2 <  mid ){
                boxes_transported += 1;
                time += 2
               
            }

            else{
                trucks_count += 1;
                k = i
                time = 0;
               

            }
        }
    }
    console.log( mid , "mid", no_of_boxes, "boxes", boxes_transported)

    if( boxes_transported == no_of_boxes){
        return true
    }

    // if( trucks_count+1 <= no_of_trucks ){
    //     return true
    // }

    else{
        return false
    }
    
}