const searchProducts = async function(searchTerm){
    const res = await fetch(`http://localhost:3500/products?q=${searchTerm}&_sort=id&_order=desc`)
    
    const data = await res.json();
    return data;  
}

const deleteProduct = async function(key){

    await fetch(`http://localhost:3500/products/${key}`, {
            method: 'DELETE'
    })
}

const editProduct = async function(id, title, description, createdAt){
    await fetch(`http://localhost:3500/products/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'id': id,
                'title': title,
                'description': description,
                'createdAt': createdAt

            })
        })
}

const productData = {searchProducts, deleteProduct, editProduct}

export default productData;