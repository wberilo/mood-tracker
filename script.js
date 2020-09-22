var data = {
  name: "bob",
  age: "12",
  aaaa:222
}

document.getElementById('import').onclick = function() {
  var files = document.getElementById('selectFiles').files;
console.log(files);
if (files.length <= 0) {
  return false;
}

var fr = new FileReader();

fr.onload = function(e) { 
console.log(e);
  var result = JSON.parse(e.target.result);
  var formatted = JSON.stringify(result, null, 2);
      document.getElementById('result').value = formatted;
}

fr.readAsText(files.item(0));
};

function downloadObjectAsJson(exportObj, exportName){
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href",     dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

//downloadObjectAsJson(data,'jatson')

$.getJSON("test.json", function(json) {
  console.log(json); // this will show the info it in firebug console
});
