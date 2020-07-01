// Extract links from web page and then save as excel or csv file
// This script automatically save links as json to clipboard
// Then a new window will open pointed to https://json-csv.com/ where user needs to paste the clipboard data,
// Then convert and download the data onto desktop

function extract_links(callback) {
var data = [];
var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
  var o = new Object();
  o['serial_no'] = i;
  o['link'] = links[i].href;
  data.push(o);
}
copy(JSON.stringify(data));
  callback();
}
extract_links(function(){
  window.open("https://json-csv.com/");
});
