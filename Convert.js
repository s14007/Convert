var dif = 1988;

function convertCalender(year) {

}
function convertWarekiToSeireki(year) {
  return year + dif;
}
function convertSeirekiToWareki(year) {
  return year - dif;
}

console.log("西暦" + convertWarekiToSeireki(27) + "年");
console.log("平成" + convertSeirekiToWareki(2015) + "年");
