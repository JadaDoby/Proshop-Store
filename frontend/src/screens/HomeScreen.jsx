import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import SortByPrice from '../components/SortbyPrice';
import SortByCat from '../components/SortbyCat';
import { useGetProductsQuery } from '../slices/productsApiSlice';

const HomeScreen = () => {
  const { pageNumber, keyword, minPrice, maxPrice, categoryFilter } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
    minPrice,
    maxPrice,
    category: categoryFilter,
  });

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    if (data && data.products) {
      const uniqueCategories = Array.from(new Set(data.products.map(product => product.category)));
      setCategories(uniqueCategories);
    }
  }, [data]);

  const onSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  let filteredProducts = data?.products || [];

  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
  }

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (error) {
    content = (
      <Message variant="danger">
        {error?.data?.message || error.error}
      </Message>
    );
  } else {
    content = (
      <>
        <h1>Latest Products</h1>
        <SortByPrice />
        <SortByCat categories={categories} onSelectCategory={onSelectCategory} />
        <Row>
          {filteredProducts.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        <Paginate
          pages={data.pages}
          page={data.page}
          keyword=""
    
        />
      </>
    );
  }

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light mb-4">
          Go Back
        </Link>
      )}
      {content}
    </>
  );
};

export default HomeScreen;
