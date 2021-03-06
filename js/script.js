/**
 * Created by lenovo on 2017/7/11.
 */
console.log('网页可见区域宽:' + document.body.clientWidth);
console.log('网页可见区域高:' + document.body.clientHeight);
console.log('网页可见区域高(包括边线的宽):' + document.body.offsetWidth);
console.log('网页可见区域高(包括边线的高):' + document.body.offsetHeight);
console.log('网页正文全文宽:' + document.body.scrollWidth);
console.log('网页正文全文高:' + document.body.scrollHeight);
console.log('网页被卷去的高:' + document.body.scrollTop);
console.log('网页被卷去的左:' + document.body.scrollLeft);
console.log('网页正文部分上' + document.body.screenTop);
console.log('网页正文部分左' + document.body.screenLeft);
console.log('屏幕分辨率的高' + document.body.height);
console.log('屏幕分辨率的宽' + document.body.width);
console.log('屏幕可用工作区宽' + document.body.availWidth);
console.log('屏幕可用工作区高' + document.body.availHeight);

var music = document.getElementById('music');
var audio = document.getElementsByTagName('audio')[0];

var page1 = document.getElementById('page1');
var page2 = document.getElementById('page2');
var page3 = document.getElementById('page3');


music.addEventListener('touchstart',function (event) {
    if (audio.paused){
        audio.play();  // 播放
        this.style.animationPlayState = 'running';
    } else {
        audio.pause();   // 暂停
        this.style.animationPlayState = 'paused';
    }
},false);

audio.addEventListener('ended',function (event) {
    music.setAttribute('class','');
},false);

page1.addEventListener('touchstart',function (event) {
    page1.style.display = 'none';
    page2.style.display = 'block';
    page3.style.display = 'block';
    page3.style.top = '100%';

    setTimeout(function () {
        page2.setAttribute('class','page fadeOut');
        page3.setAttribute('class','page fadeIn');
    },5500);
},false);