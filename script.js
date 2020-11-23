var BIGArray = [];

function makeBIGArray(data){
    BIGArray.push(data)
}


class TaskClass{
    constructor(name, tags){
        this.name = name;
        this.tags = tags;
        this.date;
    }
    returnName(){
        return this.name;
    }
    returnTags(){
        return this.tags;
    }
    returnDate(){
        return this.date;
    }

    makeObj(){
        var dateMe = new Date();
        var tmpObj = {name: this.returnName(), tags: this.returnTags(), date:dateMe};

        makeBIGArray(tmpObj);
    }
    
}

function state(){
    var tmp = new TaskClass('homework', 'work, focus, tiring, up late');
    var tmp1 = new TaskClass('school', 'work, focus, busy, worth it');
    var tmp2 = new TaskClass('homework', 'work, focus, tiring, up late, recent');

    tmp.makeObj(); tmp1.makeObj(); tmp2.makeObj();

    console.log('BIGArray', BIGArray);

    //fuzz(mySearch)

}