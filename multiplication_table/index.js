for (var i = 0; i < 9; ++i) {
    var multiplicationLine = '';
    for (var j = 0; j <= i; ++j) {
        if (j != 9 - 1) {
            multiplicationLine += `${i+1}*${j+1}=${(i+1) * (j+1)} `;
        }
        else {
            multiplicationLine += `${i+1}*${j+1}=${(i+1) * (j+1)}`;
        }
    }
    console.log(multiplicationLine);
}