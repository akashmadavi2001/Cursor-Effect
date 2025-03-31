let smoke = document.querySelector('.smoke');

document.addEventListener('mousemove',(e)=>{
          let elem = document.createElement('div');
    elem.classList.add('element');

    elem.style.left = `${e.clientX}px`;
    elem.style.top = `${e.clientY}px`;
    smoke.appendChild(elem);    

    elem.addEventListener('animationend',()=>{
        elem.remove();
    })
  })
