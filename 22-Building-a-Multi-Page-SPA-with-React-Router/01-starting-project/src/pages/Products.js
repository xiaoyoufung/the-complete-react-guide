import { Link } from 'react-router-dom';

const PRODUCTS = [
    { id: 'p1', title: 'A Book', price: 6 },
    { id: 'p2', title: 'A Carpet', price: 60 },
    { id: 'p3', title: 'A Online Course', price: 600 },
]

function ProductsPage() {
    return (
        <>
            <h1>The Products Page</h1>
            <ul>
                {PRODUCTS.map(product => (
                    <li key={product.id}>
                        <Link to={`${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ProductsPage;