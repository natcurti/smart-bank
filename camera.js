const startCamera = document.querySelector('[data-start-camera]');
const cameraField = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const takePicture = document.querySelector('[data-take-picture]');
const canvas = document.querySelector('[data-canvas]');
const message = document.querySelector('[data-message]');
const sendPicture = document.querySelector('[data-send-picture]');
let imgURL = '';

startCamera.addEventListener('click', async function(){
    const startVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
    startCamera.style.display = 'none';
    cameraField.style.display = 'flex';
    video.srcObject = startVideo;
})

takePicture.addEventListener('click', function(){
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    imgURL = canvas.toDataURL('image/jpeg');
    cameraField.style.display = 'none';
    message.style.display = 'flex';

})

sendPicture.addEventListener('click', () => {
    let register = localStorage.getItem('cadastro');
    register = JSON.parse(register);

    console.log(register);

    register.img = imgURL;
    localStorage.setItem('cadastro', JSON.stringify(register));

    window.location.href = "./accountCompleted.html";
})