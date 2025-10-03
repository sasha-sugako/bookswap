<?php
declare(strict_types=1);

namespace App\Controller\api;

use App\Entity\Book;
use App\Factory\BookFactory;
use App\Repository\BookRepository;
use App\Resource\CollectionResource;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/api/books')]
class BookController extends AbstractController {

    function __construct(
        private BookRepository $bookRepository,
        private BookFactory $bookFactory
    ){}
    #[Route(path: '', name: 'api_books', methods: ['GET'])]
    function index(Request $request): Response{
        return $this->json(new CollectionResource(
            _self: $this->generateUrl('api_books'),
            data: array_map(
                fn (Book $book) => $this->bookFactory->list($book),
                $this->bookRepository->findAll()
            ),
        ));
    }
}
