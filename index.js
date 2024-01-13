let grid = 0;
let gridSize = 0;

function createGrid(anumber) {
    grid = anumber*anumber;
    gridSize = 100/anumber;

    const el = document.getElementById('main-content-container');
    while(el.firstChild) el.removeChild(el.firstChild);

    for(let i=0; i<grid; i++){
        const aDiv = document.createElement('div');
        aDiv.id = 'sketch-div-' + i;
        aDiv.className = 'sketch-div';
        aDiv.style.cssText = 'width: ' + gridSize + '%; height: ' + gridSize + '%;';

        document.getElementById('main-content-container').appendChild(aDiv);
    }
    addListeners();
}

function addListeners(){
    let hovered = document.getElementsByClassName('sketch-div');
    for (let i = 0; i < hovered.length; i++){
        hovered[i].addEventListener("mouseover", getHoveredId);
    }
}

function getHoveredId(){
    console.log(this.id);
    let anId = this.id;
    let hoveredDiv = document.getElementById(anId);
    hoveredDiv.style.cssText = 'width: ' + gridSize + '%; height: ' + gridSize + '%; background-color: black';
}

function createSideForm(){
    let new_div = document.createElement('div');
    let newClass ='searchContainer';
    new_div.className = newClass;
    new_div.id = 'searchContainer';
    document.getElementById('left-content-container').appendChild(new_div);

    //Create title for the form
    let new_header = document.createElement('h3');
    let headerClass = 'formHeader';
    new_header.className = headerClass;
    document.getElementById('searchContainer').appendChild(new_header);

    //Populate and append the form title. 
    headerString = 'Enter New Grid Size: '; 
    new_header.appendChild(document.createTextNode(headerString));
    // Create line break
    let br = document.createElement('br');
    document.getElementById('searchContainer').appendChild(br.cloneNode());

    // Create value field for selected option
    let valueInput = document.createElement('input');
    valueInput.setAttribute('type', 'text');
    valueInput.setAttribute('name', 'input');
    valueInput.setAttribute('placeholder', 'Grid Size');
    valueInput.id = 'searchInput';

    document.getElementById('searchContainer').appendChild(valueInput);

    // Create a button and an event listner that passes the values contained in the form to function that updates the correct dictionary. 
    document.getElementById('searchContainer').appendChild(br.cloneNode());
    let actionButton = document.createElement('button');
    actionButton.appendChild(document.createTextNode('Submit'));
    actionButton.addEventListener('click', function() {createGrid(document.getElementById('searchInput').value)});
    document.getElementById('searchContainer').appendChild(actionButton);
}

createGrid(16);

createSideForm();