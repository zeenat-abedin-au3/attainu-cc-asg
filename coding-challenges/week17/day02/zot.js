//the input array is assumed to have values in {0, 1, 2} 

function countzot(array) {
    let lo = 0;
    let hi = array.length - 1;
    let mid = 0, temp = 0;
    while (mid <= hi) {
        switch (array[mid]) {
            case 0: {
                temp = array[lo];
                array[lo] = array[mid];
                array[mid] = temp;
                lo++;
                mid++;
                break;
            }
            case 1:
                mid++;
                break;
            case 2: {
                temp = array[mid];
                array[mid] = array[hi];
                array[hi] = temp;
                hi--;
                break;
            }
        }
    }
    return array
}

const myArr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
console.log(countzot(myArr))
