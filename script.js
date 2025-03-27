let smoke = document.querySelector('.smoke');

document.addEventListener('mousemove',(e)=>{
          let a = document.createElement('div');
    a.classList.add('element');

    a.style.left = `${e.clientX}px`;
    a.style.top = `${e.clientY}px`;
    smoke.appendChild(a);    

    a.addEventListener('animationend',()=>{
        a.remove();
    })
  })

