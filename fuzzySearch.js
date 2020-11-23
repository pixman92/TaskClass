
var savedResult;
function fuzz(mySearch){
    const options = {
        includeScore: true,
  
        keys: ['name', 'tags']
    }
    
    const fuse = new Fuse(BIGArray, options);
    
    const result = fuse.search(mySearch);

    savedResult = result;
    console.log('result', savedResult);
    
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