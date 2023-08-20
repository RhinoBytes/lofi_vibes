let videoObject = [
  {
    "id": 1,
    "name": "Jazz Hands",
    "url": 'https://www.youtube.com/embed/fBxMJS_IplA',
    "icon": "fa-lemon"
  },
  {
    "id": 2,
    "name": "Lo-Fi",
    "url": 'https://www.youtube.com/embed/fbKImSR6PY8',
    "icon": "fa-leaf"
  },
  {
    "id": 3,
    "name": "Paris Chill",
    "url": 'https://www.youtube.com/embed/vkQcpY3T8T4',
    "icon": "fa-seedling"
  },
  {
    "id": 4,
    "name": "Peaceful Night",
    "url": "https://www.youtube.com/embed/DWPU6o_mfdg",
    "icon": "fa-pepper-hot"
  },
  {
    "id": 5,
    "name": "Raining Summer Day",
    "url": "https://www.youtube.com/embed/zKkV12wiimg",
    "icon": "fa-carrot"
  },
  {
    "id": 6,
    "name": "Lofi Hip-Hop",
    "url": "https://www.youtube.com/embed/jfKfPfyJRdk",
    "icon": "fa-leaf"
  },
];

let randomVideo = function(videoObject) {
  let num = Math.floor(Math.random() * videoObject.length);
  return videoObject[num];
};


document.addEventListener("DOMContentLoaded", function() {

  document.getElementById('randomizeButton').addEventListener('click', function() {
    let randomVideoObject = randomVideo(videoObject);
    document.getElementById('videoPlayer').src = randomVideoObject.url;
  });


  document.getElementById('videoBtn').addEventListener('click', function() {
    event.preventDefault();
    let addedVideoUrl = document.getElementById("url").value;
    let addedVideoName = document.getElementById("name").value;
    let addedVideoSymbol = document.getElementById("symbol").value;

    if (addedVideoUrl) {
      videoObject.push({
        id: videoObject.length + 1,
        name: addedVideoName,
        url: addedVideoUrl,
        icon: addedVideoSymbol
      });
      console.log(videoObject);
      document.getElementById("url").value = "";
      document.getElementById("name").value = "";
    }
  });



  videoObject.forEach(videoData => {
    const liTag = document.createElement('li');
    const iTag = document.createElement('i');
    const btnTag = document.createElement("button");

    iTag.classList.add("fa-solid", videoData.icon);
    btnTag.appendChild(iTag);
    btnTag.appendChild(document.createTextNode(videoData.name));
    btnTag.setAttribute("id", videoData.id);
    liTag.appendChild(btnTag);
    document.getElementById("videoList").appendChild(liTag);
    document.getElementById(videoData.id).addEventListener("click", function() {
      document.getElementById('videoPlayer').src = videoData.url;
    });
  });



});



