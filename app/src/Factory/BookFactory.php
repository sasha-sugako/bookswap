<?php

namespace App\Factory;

use App\Entity\Book;
use App\Repository\BookRepository;
use App\Resource\BookResource;
use Symfony\Component\Routing\RouterInterface;

class BookFactory
{
    public function __construct(
        private RouterInterface $router,
        private BookRepository $bookRepository
    ) {}

    public function list(Book $book): BookResource{
        return new BookResource(
            _self: $this->router->generate('api_books'),
            id: $book->getId(),
            title: $book->getTitle(),
            description: $book->getDescription(),
            author: $book->getAuthor(),
            cover: $book->getCover(),
            genres: $book->getGenres(),
            owner: $book->getOwner()->getUsername(),
            ownerId: $book->getOwner()->getId(),
        );
    }
}
