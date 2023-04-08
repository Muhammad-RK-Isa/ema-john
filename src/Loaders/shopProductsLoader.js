const shopProductLoader = async () => {
    try {
        const api = 'fakeData/products.json';
        const res = await fetch( api );
        const data = await res.json();
        return data;
    }
    catch ( error ) {
        console.log( error );
    }
};

export { shopProductLoader };