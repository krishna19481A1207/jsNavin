function getFastLaptop(Laptop1,Laptop2)
{
    if(laptop1.cpu > laptop2.cpu) console.log(laptop1)
    else console.log(laptop2)
    }


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
    cpu: 'i10',
    ram : 15,
    brand : 'lenovo',
    compare : function(laptop2)
    {
        if(laptop1.cpu > laptop2.cpu) console.log(laptop1)
        else console.log(laptop2)
    },
    getConfig : function()
    {
        
        console.log(this.cpu);
    }
}

//getFastLaptop(laptop1,laptop2)
laptop1.compare(laptop2)


