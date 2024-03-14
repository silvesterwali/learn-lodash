const products=[
    {
        name:"silvester",
        age:21,
        adress:"home"
    },{
        name:"Cindy",
        age:21,
        adress:"home"
    },{
        name:"Cindy",
        age:22,
        adress:"Jawa"
    }
]


const result=Object.groupBy(products,({name})=>name)
console.log(result)