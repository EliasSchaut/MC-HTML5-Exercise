navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(mediaStream) {
        const video = document.getElementById('video');
        video.srcObject = mediaStream;
    })
    .catch(function(error) {
        alert("Something went wrong while accessing the camera!");
        console.error(error);
    });

function take_snapshot() {
    const video = document.getElementById('video');
    const img = document.getElementById('photo');
    const canvas = document.createElement('canvas');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0);

    img.src = canvas.toDataURL();
}


