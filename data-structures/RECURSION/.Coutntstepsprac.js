//input = input.trim().split("\n")
let input = [5 ,10, 6, 8]
    var no_of_people = input.length;
    var angry_values = input
    angry_values.sort((a, b) => a - b)
    var min_danger_value = angry_values[1] - angry_values[0]
    for( let i = 0; i < no_of_people; i++ ) {
        if( angry_values[i + 1] - angry_values[i] > min_danger_value ) {
            min_danger_value = angry_values[i + 1] - angry_values[i]
        } else if ( angry_values[i + 2] - angry_values[i] > min_danger_value ) {
            min_danger_value = angry_values[i + 2] - angry_values[i]
        }
    }
    console.log( min_danger_value )

