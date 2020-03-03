function timestampToDate(timestamp) {

    var unixtimestamp = timestamp;
    var date = new Date(unixtimestamp * 1000);
    var year = date.getFullYear();
    var month = "0" + date.getMonth();
    var day = "0" + date.getDate();
    var hours = "0" + date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var convdataTime = year + '-' + month.substr(-2) + '-' + day.substr(-2) + ' ' + hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return convdataTime;
}

function sortByDate(array, mode = "asc") {

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (mode == "asc") {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            } else if (mode == "desc") {
                if (array[j] < array[j + 1]) {
                    let temp = array[j + 1];
                    array[j + 1] = array[j];
                    array[j] = temp;
                }
            } else {
                console.log("You can only sort by descending(mode = 'desc') or ascending(mode = 'asc')");
            }

        }
    }

    for(var i = 0; i < array.length; i++) {
        array[i] = timestampToDate(array[i]);
    }
    return array;

}

console.log(sortByDate([2323423,1345799933, 54747329], 'desc'));

function isPrime(number) {
    var prime;
    if(number == 2 || number == 1) {
        return true;
    }
    for(var i = 2; i < number; i++) {
        if(number % i == 0) {
            prime = false;
            break;
        } else {
            prime = true;
            continue
        }
    }
    return prime;
}


