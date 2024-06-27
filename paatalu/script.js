
let songIndex = 0;
let audioElement = new Audio('../songs/0.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from (document.getElementsByClassName('songItem'));
let background = document.querySelector('.container');
let masterSong = document.getElementById('masterSong');

let songs = [
    {songName:"heeriye heeriye",filePath:"../songs/1.mp3",coverPath: "../cover/1.jpeg"},
    {songName:"Aradhya...",filePath:"../songs/2.mp3",coverPath: "../cover/2.jpg"},
    {songName:"Ek Dum Ek Dum..",filePath:"../songs/3.mp3",coverPath: "../cover/3.jpg"},
    {songName:"Ramayya vastavayya..",filePath:"../songs/4.mp3",coverPath: "../cover/4.jpg"},
    {songName:"Khusi...",filePath:"../songs/5.mp3",coverPath: "../cover/5.jpg"},
    {songName:"Suttmala chusi pokala",filePath:"../songs/6.mp3",coverPath: "../cover/6.jpg"},
    {songName:"Tickettey konakundaa..",filePath:"../songs/7.mp3",coverPath: "../cover/7.jpg"},
    {songName:"Chandamama..",filePath:"../songs/8.mp3",coverPath: "../cover/8.jpg"},
    {songName:"Ye Valupu...",filePath:"../songs/9.mp3",coverPath: "../cover/9.jpg"},
    {songName:"sammohanudaa...",filePath:"../songs/10.mp3",coverPath: "../cover/10.jpg"},
    

]
songItem.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('descri')[0].innerText= songs[i].songName;

})
masterPlay.addEventListener('click' ,()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-solid', 'fa-play' ,'fa-xl');
        masterPlay.classList.add('fa-solid','fa-pause', 'fa-xl');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-solid','fa-pause', 'fa-xl');
        masterPlay.classList.add('fa-solid', 'fa-play' ,'fa-xl');
        gif.style.opacity = 0;
    }

});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('symbol')).forEach((element)=>{

        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('symbol')).forEach((element)=>{

    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `../songs/${songIndex}.mp3`;
        masterSong.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;
        background.style.backgroundImage = `url(../cover/${songIndex+1}.jpg)`;
        background.style.backgroundSize = "600px 800px";
        background.style.backgroundPosition = "right center";
        background.style.backgroundRepeat = "no-repeat";
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-solid','fa-play', 'fa-xl');
        masterPlay.classList.add('fa-solid', 'fa-pause' ,'fa-xl');
        
    })
})

document.getElementById('next').addEventListener('click',()=>{

    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `../songs/${songIndex}.mp3`;
    masterSong.innerText = songs[songIndex].songName;
    gif.style.opacity = 1;
    background.style.backgroundImage = `url(../cover/${songIndex+1}.jpg)`;
    background.style.backgroundSize = "600px 800px";
    background.style.backgroundPosition = "right center";
    background.style.backgroundRepeat = "no-repeat";
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-solid','fa-play', 'fa-xl');
    masterPlay.classList.add('fa-solid', 'fa-pause' ,'fa-xl');
})

document.getElementById('previous').addEventListener('click',()=>{

    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `../songs/${songIndex}.mp3`;
    masterSong.innerText = songs[songIndex].songName;
    gif.style.opacity = 1;
    background.style.backgroundImage = `url(../cover/${songIndex+1}.jpg)`;
    background.style.backgroundSize = "600px 800px";
    background.style.backgroundPosition = "right center";
    background.style.backgroundRepeat = "no-repeat";
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-solid','fa-play', 'fa-xl');
    masterPlay.classList.add('fa-solid', 'fa-pause' ,'fa-xl');
})


audioElement.addEventListener('timeupdate', ()=>{

        let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
        myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})