const panels = document.querySelectorAll('.panel');

function handleClick(ev){
const currentPanel = ev.currentTarget;
currentPanel.classList.toggle('open');

}

function handleText(ev){
    const property = ev.propertyName;
    const currentPanel = ev.currentTarget;
    if(property.includes('flex')){
        currentPanel.classList.toggle('open-active')
    }
}

for (let i=0; i< panels.length; i++){
    const panel = panels[i];
    panel.addEventListener('click', handleClick);
    panel.addEventListener('transitionend', handleText)
}
