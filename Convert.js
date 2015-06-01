var dif = 1988;

function convertCalender(year) {
    if (year > dif) {
      return convertSeirekiToWareki(year);
    } else {
      return convertWarekiToSeireki(year);
    }
}

function convertWarekiToSeireki(year) {
    return year + dif;
}

function convertSeirekiToWareki(year) {
    return year - dif;
}

console.log("西暦" + convertWarekiToSeireki(27) + "年");
console.log("平成" + convertSeirekiToWareki(2015) + "年");
console.log("西暦" + convertCalender(27) + "年");
console.log("平成" + convertCalender(2015) + "年");
