
window.onload = ()=>{
    createSearchBar();

    //make search bar work!
    document.getElementById('searchMe').addEventListener('click', ()=>{
        console.log('value', document.getElementById('search').value);
        fuzz(document.getElementById('search').value);
    });

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

    resultMe.inner(makeMeHTML, "#parent", true);
}

//========================================

// var HTMLStr=""; var savedArray=[];
// function makeAForEach(array){
//     array.forEach((elem, index)=>{
//         HTMLStr =  "<div class='w3-card space'><div id='"+index+"'>" +"<div>"+elem.name+"</div>"+"<div>"+elem.tags+"</div>"+"<div>"+elem.date+"</div>"+"</div>";

//         savedArray.push(HTMLStr);

//         createResults(HTMLStr);
//         HTMLStr = "";
//     });
// }


//========================================
var HTMLStr=""; var savedArray=[];
function makeCardFromResult(){
    savedResult.forEach((elem, index)=>{
        // console.log(elem );
        // console.log(elem.item.name, elem.item.tags, elem.item.date);
        // console.log('index', index);

        HTMLStr = "<div class='w3-card space'><div id="+index+"><div>"+elem.item.name+"</div><div>"+elem.item.tags+"</div><div>"+elem.item.date+"</div></div></div>"

        savedArray.push(HTMLStr);

        createResults(HTMLStr);
    });
}