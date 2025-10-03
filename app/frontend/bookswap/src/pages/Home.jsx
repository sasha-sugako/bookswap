import {Button, Card, Tag, Typography} from "antd";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import { Select  } from 'antd';
import {SortAscendingOutlined, SortDescendingOutlined, StarFilled} from "@ant-design/icons";

export default function Home(){
    const [tags, setTags] = useState([]);
    const [isSortedDesc, setSorted] = useState(false);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/books')
            .then(response => response.json())
            .then(data => {
                setBooks(data.data);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
    }, []);

    const predefinedOptions = [
        "George Orwell",
        "Jane Austen",
        "Classic Fiction",
        "Romance",
        "Dystopian",
        "Adventure",
        "Harper Lee",
        "F. Scott Fitzgerald",
        "Herman Melville"
    ];

    const filteredBooks = books.filter(book => {
        return tags.every(tag => {
            const lowerTag = tag.toLowerCase();
            return (
                book.title.toLowerCase().includes(lowerTag) ||
                book.author.toLowerCase().includes(lowerTag) ||
                book.genres.some(genre => genre.toLowerCase().includes(lowerTag))
            );
        });
    });
    const sortedBooks = filteredBooks.sort((a, b) => {
        if (isSortedDesc)
            return a.ownerRating - b.ownerRating
        return b.ownerRating - a.ownerRating
    })
    return (
        <>
            <div style={{display: 'flex', alignContent: 'center'}}>
                <Select
                    mode="tags"
                    style={{ width: '90%', marginBottom: 20, marginRight: '2rem' }}
                    placeholder="Search by title, author, or genre"
                    value={tags}
                    onChange={setTags}
                >{predefinedOptions.map(option => (
                    <Select.Option key={option} value={option}>
                        {option}
                    </Select.Option>
                ))}</Select>
                <Button onClick={() => setSorted(!isSortedDesc)}>{isSortedDesc ? <SortDescendingOutlined /> : <SortAscendingOutlined />}</Button>
            </div>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {sortedBooks.map((book) => (
                <Card key={book.id}
                      style={{
                          margin: '0.7rem',
                          height: 'auto',
                          width: '13rem',
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'center',
                      }}>
                    <div style={{position: 'relative'}}>
                        <img src={book.cover} alt={book.title} style={{height: '13rem', width: '9rem'}}/>
                        <Typography.Title level={5}>{book.title}</Typography.Title>
                        <Typography.Text>Author: {book.author}</Typography.Text>
                        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                            {book.genres.map((genre, index) => (<Tag key={index} style={{margin: '0.1rem'}}>{genre}</Tag>))}
                        </div>

                        <Link to={`/book/${book.id}`} style={{
                            color: 'transparent',
                            textDecoration: 'none',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',}} />
                    </div>
                    <div>
                        <p style={{marginRight: '0.1rem'}}>Owner:{" "}
                            <Link to={`/user/${book.ownerId}`}>
                                {book.owner}
                            </Link>
                        </p>
                        <p><StarFilled /> 4.6</p>
                    </div>
                </Card>))}
        </div>
        </>)
}
