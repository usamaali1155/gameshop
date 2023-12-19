export default function search(str , products){

    console.log(str, products)
if(!str) return products
const _products = [];
products.forEach(p => {
    str.toLowerCase().split(" ").forEach(w => {
        if(p.name?.toLowerCase().split(" ").includes(w)){
            _products.push(p)
        }
    })
    
});
products.forEach(p => {
    str.toLowerCase().split(" ").forEach(w => {
        if(p.genre?.toLowerCase().split(" ").includes(w)){
            _products.push(p)
        }
    })
    
});
products.forEach(p => {
    str.toLowerCase().split(" ").forEach(w => {
        if(p.platform?.toLowerCase().split(" ").includes(w)){
            _products.push(p)
        }
    })
    
});

return _products
}