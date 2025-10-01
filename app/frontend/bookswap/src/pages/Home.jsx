import {Button, Card, Tag, Typography} from "antd";
import {Link} from "react-router-dom";
import {useState} from "react";
import { Select  } from 'antd';
import {SortAscendingOutlined, SortDescendingOutlined, StarFilled} from "@ant-design/icons";

const testBooks = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
        description: "A novel about the American dream and the roaring twenties.",
        status: "available",
        genres: ["Classic Fiction", "Drama"],
        ownerId: 101,
        ownerName: "Alice Johnson",
        ownerRating: 4.5,
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
        description: "A dystopian novel on totalitarianism and surveillance.",
        status: "requested",
        genres: ["Dystopian", "Political Fiction"],
        ownerId: 102,
        ownerName: "Bob Smith",
        ownerRating: 3.8,
    },
    {
        id: 3,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        cover: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
        description: "Classic novel about racial injustice in the Deep South.",
        status: "available",
        genres: ["Classic Fiction", "Historical Fiction"],
        ownerId: 103,
        ownerName: "Carla Brown",
        ownerRating: 4.9,
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        cover: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
        description: "Romantic novel exploring manners and matrimonial machinations.",
        status: "exchanged",
        genres: ["Romance", "Classic Fiction"],
        ownerId: 104,
        ownerName: "David Wilson",
        ownerRating: 4.2,
    },
    {
        id: 5,
        title: "Moby Dick",
        author: "Herman Melville",
        cover: "https://covers.openlibrary.org/b/id/5551060-L.jpg",
        description: "Epic tale of obsession and the sea.",
        status: "available",
        genres: ["Adventure", "Classic Fiction"],
        ownerId: 105,
        ownerName: "Emma Davis",
        ownerRating: 3.5,
    },
]

export default function Home(){
    const [tags, setTags] = useState([]);
    const [isSortedDesc, setSorted] = useState(false);

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

    const filteredBooks = testBooks.filter(book => {
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
                        <img src={book.cover} alt={book.title} style={{height: '13rem'}}/>
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
                                {book.ownerName}
                            </Link>
                        </p>
                        <p><StarFilled /> {book.ownerRating}</p>
                    </div>
                </Card>))}
        </div>
        </>)
}
