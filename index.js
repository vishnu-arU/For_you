document.querySelector(".btn").addEventListener("click", change);
function change() {
  // var audio = new Audio("./audio/song.mp3");
  // audio.play();

  var video = document.createElement("video");
  video.src = "./video/video.mp4";
  video.controls = true;
  video.style.width = "50%";
  document.body.appendChild(video);
  video.play();
    alert("Miss you baby 😘");

  video.addEventListener("ended", function () {
    alert("Miss you baby 😘"); 
  });

  //audio.addEventListener("ended", function () {
    //alert("Miss you baby(Chullikambee😘)"); 
  //});
}
