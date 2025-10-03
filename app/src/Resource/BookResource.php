<?php
declare(strict_types=1);

namespace App\Resource;

class BookResource
{
    public function __construct(
        public ?string $_self,
        public ?int $id,
        public string  $title,
        public ?string $description,
        public ?string $author,
        public ?string $cover,
        public array $genres,
        public ?string $owner,
        public ?int $ownerId,
    )
    {
    }
}
