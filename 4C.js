if (true) {
  var cvs = document.getElementById("cvs");
  var ctx = cvs.getContext('2d');
  var screen_size = [16, 9, 16, 9, 0];
  var fps = 60;
  var load_src = 1, on_load_src = 0;
  var can_click = false, can_touch = false, can_keyboard = false;

  var data = LoadData();
  var pause = false;
  var room = 0;

  if (true) {
    cvs.innerHTML =
    "<style>"+
    "  body {"+
    "    background: #000000;"+
    "  }"+
    "  :root {"+
    "    --cvs_size_x: 16px;"+
    "    --cvs_size_y: 9px;"+
    "  }"+
    "  #cvs {"+
    "  margin: 0;"+
    "    padding: 0;"+
    "    background: rgb(206, 206, 206);"+
    "    position: absolute;"+
    "    top: 50%;"+
    "    left: 50%;"+
    "    margin-right: -50%;"+
    "    transform: translate(-50%, -50%);"+
    "    width: var(--cvs_size_x);"+
    "    height: var(--cvs_size_y);"+
    "  }"+
    "</style>";
  }
}



function ScreenSize () {
  if (window.innerWidth != cvs.width * screen_size[4] && window.innerHeight != cvs.height * screen_size[4]) {
    cvs.style.setProperty('--cvs_size_x', 16 + "px");
    cvs.style.setProperty('--cvs_size_y', 9 + "px");

    if (window.innerWidth / cvs.width > window.innerHeight / cvs.height) {
      screen_size[4] = window.innerHeight / cvs.height;
      screen_size[0] = cvs.width * screen_size[4];
      screen_size[1] = cvs.height * screen_size[4];
    }
    else {
      screen_size[4] = window.innerWidth / cvs.width;
      screen_size[0] = cvs.width * screen_size[4];
      screen_size[1] = cvs.height * screen_size[4];
    }

    screen_size[2] = screen_size[0];
    screen_size[3] = screen_size[1];
    cvs.style.setProperty('--cvs_size_x', screen_size[0] + "px");
    cvs.style.setProperty('--cvs_size_y', screen_size[1] + "px");
  }
  setTimeout(ScreenSize, 1000);
}

function SaveData () {
  localStorage.setItem(document.title, JSON.stringify(data));
}

function LoadData () {
  if (JSON.parse(localStorage.getItem(document.title))) {
    return JSON.parse(localStorage.getItem(document.title));
  }
  else {
    return data = {
      setting: {
        language: 0,
        fullscreen: false,
        sound: true,
        music: true
      }
    };
  }
}

function FullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
}

function FPS (num) {
  num * (60 / fps);
  return num;
}


function CvsClick(event) {
  const x = (event.clientX - ((window.innerWidth - screen_size[0]) / 2)) / screen_size[4];
  const y = (event.clientY - ((window.innerHeight - screen_size[1]) / 2)) / screen_size[4];
  Click(x, y);
}
cvs.addEventListener('mousedown', function(event) { if (can_click == true) { CvsClick(event); } });

function CvsTouch(event) {
  for (let i = 0; i < event.touches.length; i++) {
    const x = (event.targetTouches[i].pageX - ((window.innerWidth - screen_size[0]) / 2)) / screen_size[4];
    const y = (event.targetTouches[i].pageY - ((window.innerHeight - screen_size[1]) / 2)) / screen_size[4];
    Touch();
  }
}
cvs.addEventListener('touchstart', function(event) { if (can_touch == true) { CvsTouch(event); } });

document.onkeydown = function(event) { if (can_keyboard == true) { Keyboard(event); } };



//function Collider () {}



var intro_cube = [
  cube = {
    x: 0,
    y: -100,
    size: 0,
    speed: 0,
    rotate: 0,
  },
  cube = {
    x: 0,
    y: -100,
    size: 0,
    speed: 0,
    rotate: 0,
  },cube = {
    x: 0,
    y: -100,
    size: 0,
    speed: 0,
    rotate: 0,
  },cube = {
    x: 0,
    y: -100,
    size: 0,
    speed: 0,
    rotate: 0,
  },cube = {
    x: 0,
    y: -100,
    size: 0,
    speed: 0,
    rotate: 0,
  },cube = {
    x: 0,
    y: -100,
    size: 0,
    speed: 0,
    rotate: 0,
  },cube = {
    x: 0,
    y: -100,
    size: 0,
    speed: 0,
    rotate: 0,
  }
];
function PlayIntro () {
  ctx.font = '50px Arial';

  ctx.fillStyle = '#483D8B';
  ctx.fillRect(0, 0, cvs.width, cvs.height);
  
  for (let i = 0; i < 1; i++) {
    if (intro_cube[i].y > -100) {
      //intro_cube[i].y -= FPS(intro_cube[i].speed);
      //intro_cube[i].rotate -= FPS(intro_cube[i].rotate);
      intro_cube[i].size = 80;
      intro_cube[i].speed = 4;
      intro_cube[i].rotate = 4;
    }
    else {
      intro_cube[i].x = 0; // Math.random() * cvs.width;
      intro_cube[i].y = 0; //cvs.height + 100;
      intro_cube[i].size = Math.random() * 100 + 50;
      intro_cube[i].speed = Math.random() * 10 + 2;
      intro_cube[i].rotate = Math.random() * 10 + 2;
    }
    
    ctx.translate(intro_cube[i].x + intro_cube[i].size / 2, intro_cube[i].y + intro_cube[i].size / 2);
    ctx.rotate(intro_cube[i].rotate * Math.PI / 180);
    ctx.fillStyle = 'blue';
    ctx.fillRect(-intro_cube[i].x, -intro_cube[i].y, intro_cube[i].size, intro_cube[i].size);
    ctx.translate(-intro_cube[i].x - intro_cube[i].size / 2, -intro_cube[i].y - intro_cube[i].size / 2);

  context.save(); //new
  context.translate(x+image.width/2,y+image.height/2);
  context.rotate(degrees*Math.PI/180);
  context.drawImage(image,-image.width/2,-image.height/2);
  context.restore();


    //ctx.fillStyle = 'blue';
    //ctx.fillRect(intro_cube[i].x, intro_cube[i].y, intro_cube[i].size, intro_cube[i].size);
    //ctx.fillStyle = '#483D8B';
    //ctx.fillRect(intro_cube[i].x+10, intro_cube[i].y+10, intro_cube[i].size-20, intro_cube[i].size-20);
  }

  if (on_load_src < load_src) {
    ctx.fillStyle = 'white';
    ctx.fillText(txt.loading.loading[data.setting.language] + " " + Math.floor(on_load_src/load_src*100)+"%", cvs.width-350, cvs.height-50);
  }
  else {
    ctx.fillStyle = 'white';
    ctx.fillText(txt.loading.continue[data.setting.language], cvs.width-300, cvs.height-50);
  }
}