const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'f', 'g', 'h']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})
document.addEventListener('keydown', e => {
    if(e.repeat) return
    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)
    
    if(whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if(blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
   
    
})


function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime=0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}

document.addEventListener('keydown', event => {
    //const keyCode = event.key
    switch (event.keyCode) {
        case 090: // z
          setBackgroundColor('red');
          break;
        case 088: // x
          setBackgroundColor('green');
          break;
        case 67: // c
          setBackgroundColor('blue');
          break;
        case 086: // v
          setBackgroundColor('yellow');
          break;
        case 66: // b
          setBackgroundColor('black');
          break;
        case 78: // n
          setBackgroundColor('white');
          break;
        case 77: // m
          setBackgroundColor('purple');
          break;
        case 083: // s
          setBackgroundColor('aqua');
          break;
        case 068: //d
        setBackgroundColor('grey');
        break;
        case 70: //f
        setBackgroundColor('brown');
        break;
        case 71: //g
        setBackgroundColor('pink');
        break;
        case 72: //h
        setBackgroundColor('gold')

       

        
    }
  });
  
  function setBackgroundColor(color) {
      document.querySelector('body').style.backgroundColor = color;
  }