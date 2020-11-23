
window.onload = ()=>{
    //makes nice SearchBar HTML happen
    createSearchBar();
    createCreateForms();

    //make search bar work!
    document.getElementById('searchMe').addEventListener('click', ()=>{
        console.log('value', document.getElementById('search').value);
        fuzz(document.getElementById('search').value);
    });

    //ENTER button press to search
    document.getElementById('search').addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            // document.getElementById("searchMe").click();
            fuzz(document.getElementById('search').value);
        }
    });
    
    //populate Data
    state();
    

    //forms to be created in the background
    


}

function createCreateForms() {
    var createForMe = new InnerMe();   
    createForMe.inner('<div id="create">'+'<div>Name?</div><input id="nameMe"></input>'+'<div><div>Tags?</div><input id="tagsMe">'+'</div>'+'</div><button id="hide">Hide</button><button id="makeNewTask">Create</button>', "#marg", true);
    document.getElementById('create').className = "hide";
    document.getElementById('hide').className = "hide";
    document.getElementById('makeNewTask').className = "hide";
}




function createSearchBar() {
    var searchBar = new InnerMe();
    searchBar.inner('<div class="w3-card space" id="marg"><input id="search"></input><button id="searchMe">Search</button></div>', '#app', false);
    searchBar.inner('<div id="results"></div>', '#app', true);    

}

function createResults(makeMeHTML){
    //function that creates a Results card
    var resultMe = new InnerMe();

    
    resultMe.inner('<div id="parent"></div>', '#results', true);
    // document.getElementById('parent').innerHTML = "";
    
    resultMe.inner(makeMeHTML, "#parent", true);
}


//========================================
var HTMLStr=""; var savedArray=[];
function makeCardFromResult(){
    HTMLStr="";
    
    savedResult.forEach((elem, index)=>{
        // console.log(elem );
        // console.log(elem.item.name, elem.item.tags, elem.item.date);
        // console.log('index', index);

        HTMLStr += "<div class='w3-card space'><div id="+elem.item.UID+"><div>"+elem.item.name+"</div><div>"+elem.item.tags+"</div><div>"+elem.item.date+"</div></div></div>"

        // savedArray.push(HTMLStr);
        savedArray.push({index: index, name: elem.item.name, tags: elem.item.tags, date: elem.item.date});

    });
    document.getElementById('results').innerHTML = "";

    createResults(HTMLStr);
}