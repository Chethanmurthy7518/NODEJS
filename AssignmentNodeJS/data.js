

const products = [
    {
        id:1,
        name:"Product1",
        description:"Description 1",
        price:1000

    },
    {
        id:2,
        product:"Product2",
        productDescription:"Description 2"

    },
    {
        id:3,
        product:"Product 3",
        productDescription:"Description 3"

    },
    {
        id:4,
        product:"Product 4",
        productDescription:"Description 4"

    }
]


// const ObjectArray = Object.keys(products)
// console.log(ObjectArray);
const requestHandler = (request,response)=>{
    const reqUrl = url.parse(request.url, true)
    console.log(reqUrl.pathname);
    const path = reqUrl.pathname
    if(request.url === '/'){
        response.end("Home Page ")
    }
    else if(path === '/products' && request.method === 'GET'){
        const product = JSON.stringify(products);
        response.end(product)
    }else if(path === '/products' && request.method === 'POST'){

        console.log(requrl.query);
        products.push(reqUrl.query);

        res.end(JSON.stringify(products));
        
    
   

    }else if(path === '/products' &&  request.method === 'PUT'){
        const id = reqUrl.query.id;

        const index = products.findIndex((product)=>{
            return parseInt(product.id) === parseInt(id)
        });
        products.splice(index,1,reqUrl.query)

        res.end(JSON.stringify(products));

    }
    
    
    
    

 

}


module.exports={
    requestHandler
}