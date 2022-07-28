const panels = document.querySelectorAll('.panels');

function handleClick(ev){
const currentPanel = ev.target;
currentPanel.classList.add('open');
currentPanel.classList.add('open-active')
}
for (let i=0; i< panels.length; i++){
    const panel = panels[i];
    panel.addEventListener('click', handleClick)
}
