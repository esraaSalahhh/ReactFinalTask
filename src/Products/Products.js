import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/actions/product';
import './Products.css';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Row, Col } from 'reactstrap';
export default function Products() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log(products);

  return (
    <>
      <h1>Product Page</h1>

      <Row>
        {products ? (Object.values(products).map((product, index) =>
          <Col lg="4" className="ca">
            <Card key={index} className="hei">
              <CardImg top width="100%" height="350px" src={product.image} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">{product.title}</CardTitle>
                <CardText>{product.price}</CardText>
              </CardBody>
            </Card>
          </Col>
        )) : (<h2>Not Found</h2>)}
      </Row>
    </>
  )
}

