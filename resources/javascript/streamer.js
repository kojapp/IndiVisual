// get video dom element
const video = document.querySelector('video');

// request access to webcam
navigator.mediaDevices.getUserMedia({video: {
    width: { min: 480, ideal: 720, max: 1080 },
    height: { min: 480, ideal: 720, max: 1080 }
  }}).then((stream) => video.srcObject = stream);

// returns a frame encoded in base64
const getFrame = () => {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    const data = canvas.toDataURL('image/png');
    return data;
}

const WS_URL = location.origin.replace(/^http/, 'ws');
const FPS = 3;
const ws = new WebSocket(WS_URL);
ws.onopen = () => {
    console.log(`Connected to ${WS_URL}`);
    setInterval(() => {
        ws.send(getFrame());
    }, 1000 / FPS);
}
