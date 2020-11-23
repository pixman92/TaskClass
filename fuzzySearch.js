
var savedResult; var keepGoing = true;
function fuzz(mySearch){

    const options = {
        includeScore: true,
  
        keys: ['name', 'tags']
    }
    
    const fuse = new Fuse(BIGArray, options);
    
    //========================================

    compareSearchTerms(mySearch);

    if(keepGoing == true){
        
        
        const result = fuse.search(mySearch);
        
        savedResult = result;
        console.log('result', savedResult);
        
        if(savedResult!=""){
            makeCardFromResult();
        }else{
            alert('No such results Found!');
        }
        
        savedResult=""; 
        
        
    }
    //     console.log('Special Search');
    // }
    //========================================
    
    
}

// [
//     {
//       "name": "homework",
//       "tags": "work, focus, tiring, up late",
//       "date": "2020-11-23T01:12:50.525Z"
//     },
//     {
//       "name": "school",
//       "tags": "work, focus, busy, worth it",
//       "date": "2020-11-23T01:12:50.525Z"
//     },
//     {
//       "name": "homework",
//       "tags": "work, focus, tiring, up late, recent",
//       "date": "2020-11-23T01:12:50.525Z"
//     }
//   ]

var flop = false;
function compareSearchTerms(searchSpecial){
    if(searchSpecial.toLowerCase().trim()=="create"){
        console.log('special case', );
                // create();

        // var create = new InnerMe();   
        // create.inner('<div id="create">'+'<div>Name?</div><input id="nameMe"></input>'+'<div><div>Tags?</div><input id="tagsMe">'+'</div>'+'</div><button id="hide">Hide</button><button id="makeNewTask">Create</button>', "#marg", true);


        
            document.getElementById('create').className= 'show';
            document.getElementById('hide').className= 'show';
            document.getElementById('makeNewTask').className= 'show';
            
          

        document.getElementById('hide').addEventListener('click', ()=>{
            document.getElementById('create').className = "hide";
            document.getElementById('hide').className = "hide";
            document.getElementById('makeNewTask').className = "hide";
            document.getElementById('hide').addEventListener('click', ()=>{
                fuzz(document.getElementById('search').value);
            });
        });


        

        document.getElementById('makeNewTask').addEventListener('click', ()=>{
            var nameMe = document.getElementById('nameMe').value;
            var tagsMe = document.getElementById('tagsMe').value;
            console.log(nameMe);
            console.log(tagsMe);
            
            var tasks = new TaskClass(nameMe, tagsMe);
            tasks.makeObj();
            
            console.log('BIGArray', BIGArray);
            
        });
            
            
            
            //========================================
            
            //========================================
            // document.getElementById('searchMe').removeEventListener('click', ()=>{});

            // document.getElementById('searchMe').addEventListener('click', (event)=>{
            //     event.preventDefault();
            //     console.log('value', document.getElementById('search').value);
            //     console.log('Separate but together, did I fire?', );
            //     fuzz(document.getElementById('search').value);
            // });



        



        // keepGoing=true;
    }

    if(searchSpecial=='help'){
        createResults("I am here to help");
    }

   
}

