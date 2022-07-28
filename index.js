const panels = document.querySelectorAll('.panel');


function handleClick(ev){ 
    const openPanel = document.querySelectorAll('.open');
    const currentPanel = ev.currentTarget;
    const listOfOpenPanels = Array.from(openPanel)
    console.log(listOfOpenPanels)
    listOfOpenPanels.forEach(panel => panel.classList.remove('open'));
  
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
