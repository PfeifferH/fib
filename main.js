function previewFile() {
  var preview = document.getElementById('fib');
  var file    = document.getElementById('upload').files[0];
  var reader  = new FileReader();
  // listen for 'load' events on the FileReader
  reader.addEventListener("load", function () {
    // change the preview's src to be the "result" of reading the uploaded file (below)
    console.log(reader.result)
    preview.style.setProperty("--fileURL", "url(" + reader.result + ")");
  }, false);

  // if there's a file, tell the reader to read the data
  // which triggers the load event above
  if (file) {
    reader.readAsDataURL(file);
  }
}
