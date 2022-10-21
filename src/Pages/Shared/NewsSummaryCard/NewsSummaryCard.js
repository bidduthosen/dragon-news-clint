import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({news}) => {
    const {_id, title, rating, image_url, total_view, details, author} = news;
    return (
        <div>
            <Card className='mb-5'>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <Image
                         src={author.img} style={{height: '60px'}} className="me-3" roundedCircle	
                        ></Image>
                        <div>
                            <p className='m-0'>{author.name}</p>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark className='me-3'></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title className='my-3'>{title}</Card.Title>
                  <Card.Img variant="top" src={image_url} />
                  <Card.Text className='mt-3'>
                    {details.length > 300 ?
                        <p>{details.slice(0 , 300)+ '...'} <Link to={`/news/${_id}`}>READ MORE</Link></p>
                        :
                        <p>{details}</p>
                    }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <FaStar className='text-warning me-2'></FaStar>
                            <small>{total_view}</small>
                        </div>
                        <div>
                            <FaEye className='me-2'></FaEye>
                            <small>{rating.number}</small>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;