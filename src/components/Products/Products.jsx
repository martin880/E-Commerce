import React from 'react';
import Grid from '@material-ui/core';

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.', price: 'Rp1.000.000'},
    {id: 2, name: 'Macbook', description: 'Apple macbook.', price: 'Rp20.000.000'},
];

const Products = () => {
    <main>
        <Grid container justify = "center" spacing={4}>
        {products.map((product)=> (
            <Grid item key={product.id} sx={12} sm={6} md={4} lg={3}>
                <product product={product} />
            </Grid>
        ))}
        </Grid>
    </main>
}

export default Products;