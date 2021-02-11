import React, {useState } from 'react';
import axios from 'axios';
import './Books.css';
import { Card, CardImg, CardText, CardBody,CardTitle,} from 'reactstrap';
import { Col } from 'reactstrap';
export default function Books() {
    const [books, setbooks] = useState([]);
    const [Search, setSearch] = useState();
    const [Err, setErr] = useState([]);
    const handleFormChange = (e) => {
        console.log(e.target.value, e.target.name)
        setSearch(e.target.value);
    };
    const handleFormSubmit = () => {
        console.log(Search);

        axios.get('https://www.googleapis.com/books/v1/volumes?',
            {
                params: {
                    q: Search
                },
            }
        )
            .then(function (response) {
                console.log(response);
                setbooks(response.data.items);
            })
            .catch(function (error) {
                console.log(error);
                setErr("Missing Name of Book");
            });
    };

    return (
        <div>
            <h1>Book Finder App</h1>
            <input
                onChange={handleFormChange}
                placeholder="Enter Book name"
                name="Search"
                className=" mt-4 mr-4"
                value={Search}
            />

            <button className="btn btn-info" onClick={handleFormSubmit} >
                Search
      </button>
            <br />
            <br />
            {books ? (books.map((book, index) =>
                <Col lg="4" className="ca">
                    <Card key={index} className="hei">
                        {console.log(book.volumeInfo.imageLinks)}
                        <CardImg top width="100%" src={book.volumeInfo.imageLinks.smallThumbnail} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">{book.volumeInfo.title}</CardTitle>
                            <CardText>{book.volumeInfo.description}</CardText>
                        </CardBody>
                    </Card>
                </Col>


            )) : (<h2>Not Found</h2>)}
            <p>{Err}</p>
        </div>
    )


}