const panels = document.querySelectorAll('.panel');

function handleClick(ev){
const currentPanel = ev.currentTarget;
console.log(ev.target)
console.log(ev.currentTarget)
currentPanel.classList.toggle('open');
currentPanel.classList.toggle('open-active')
}
for (let i=0; i< panels.length; i++){
    const panel = panels[i];
    panel.addEventListener('click', handleClick)
}
