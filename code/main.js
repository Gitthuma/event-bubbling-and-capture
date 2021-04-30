/*Reference the <button>, <div> and <video> and store them in variables*/

const btn = document.querySelector('button');
const videoBox = document.querySelector('div');
const video = document.querySelector('video');

/*Create a function, that when the <button> is clicked, the video is displayed, by changing the class attribute on the <div> from hidden to showing (CSS contains these two classes, which position the box off the screen and on the screen, respectively):*/

btn.onclick = function() {
    videoBox.setAttribute('class', 'showing');
}

/*Create a function, that when the area of the <div>(videoBox) outside the video is selected, the box should be hidden*/

videoBox.onclick = function() {
    videoBox.setAttribute('class', 'hidden');
};

/*Create a function, that when the video itself is selected, the video should start to play.*/

video.onclick = function() {
    video.play();
};