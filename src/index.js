navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(mediaStream) {
        const video = document.getElementById('video');
        video.srcObject = mediaStream;
    })
    .catch(function(error) {
        alert("Something went wrong while accessing the camera!");
        console.error(error);
    });
