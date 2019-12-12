$(document).ready(function () {

  $("#monica-head").hover(function() {
    $("#monica").css("display", "block");
  }, function(){
    $("#monica").css("display", "none");
  }
)

$("#juanitabroaddrick-head").hover(function() {
  $("#juanitabroaddrick").css("display", "block");
}, function(){
  $("#juanitabroaddrick").css("display", "none");
}
)

$("#kathleenwilley-head").hover(function() {
  $("#kathleenwilley").css("display", "block");
}, function(){
  $("#kathleenwilley").css("display", "none");
}
)

$("#paulajones-head").hover(function() {
  $("#paulajones").css("display", "block");
}, function(){
  $("#paulajones").css("display", "none");
}
)

$("#genniferflowers-head").hover(function() {
  $("#genniferflowers").css("display", "block");
}, function(){
  $("#genniferflowers").css("display", "none");
}
)

$("#kenstarr-head").hover(function() {
  $("#kenstarr").css("display", "block");
}, function(){
  $("#kenstarr").css("display", "none");
}
)

$("#vernonjordan-head").hover(function() {
  $("#vernonjordan").css("display", "block");
}, function(){
  $("#vernonjordan").css("display", "none");
}
)

$("#newt-head").hover(function() {
  $("#newt").css("display", "block");
}, function(){
  $("#newt").css("display", "none");
}
)

$("#boblivingston-head").hover(function() {
  $("#boblivingston").css("display", "block");
}, function(){
  $("#boblivingston").css("display", "none");
}
)

$("#maxinewaters-head").hover(function() {
  $("#maxinewaters").css("display", "block");
}, function(){
  $("#maxinewaters").css("display", "none");
}
)

$("#lindatripp-head").hover(function() {
  $("#lindatripp").css("display", "block");
}, function(){
  $("#lindatripp").css("display", "none");
}
)



$('#accusers').click(function() {
  console.log("accusers button clicked");

//var thirdplayers = document.getElementById('billclinton');
var thirdplayers = document.getElementsByClassName('keyplayers');

//works to change opacity of thirdplayers
 for (var i=0, len=thirdplayers.length|0; i<len; i=i+1|0) {
   thirdplayers[i].style.opacity =0.2;
 }

 var clearfaces = document.getElementsByClassName('accusers');
  for (var i=0, len=clearfaces.length|0; i<len; i=i+1|0) {
    clearfaces[i].style.opacity =1;
  }


}) //end button clicked







$('#keyplayers').click(function() {
  console.log("keyplayers button clicked");

//var thirdplayers = document.getElementById('billclinton');
var keyplayers = document.getElementsByClassName('accusers');

//works to change opacity of thirdplayers
 for (var i=0, len=keyplayers.length|0; i<len; i=i+1|0) {
   keyplayers[i].style.opacity =0.2;
 }

 var clearfaces = document.getElementsByClassName('keyplayers');
  for (var i=0, len=clearfaces.length|0; i<len; i=i+1|0) {
    clearfaces[i].style.opacity =1;
  }
}) //end button clicked




});
