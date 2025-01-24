import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    function navigateHandler() {
        // navigate('/products');
        navigate('/products', { replace: true });
    }

    return (<>
        <h1>My Home Page</h1>
        <p>Go to <Link to="/products">the list of products</Link>.</p>
        <p>
            <button onClick={navigateHandler}>Go to Products</button>
        </p>
    </>);
}

export default HomePage;