let laptop2 = {
    cpu: 'i7',
    ram : 15,
    brand : 'apple',
    getConfig : function()
    {
        
        console.log(this.cpu);
    }
}

let laptop1 = {
    cpu: 'i9',
    ram : 15,
    brand : 'lenovo',
    compare : function(other)
    {
        if(this.cpu > other.cpu) console.log(this)
        else console.log(other)
    },
    getConfig : function()
    {
        
        console.log(this.cpu);
    }
}

//getFastLaptop(laptop1,laptop2)
laptop2.compare(laptop1)