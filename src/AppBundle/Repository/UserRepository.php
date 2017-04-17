<?php

// src/AppBundle/Repository/UserRepository.php
namespace AppBundle\Repository;

use Symfony\Bridge\Doctrine\Security\User\UserLoaderInterface;
use Doctrine\ORM\EntityRepository;

class UserRepository extends EntityRepository implements UserLoaderInterface
{
    public function loadUserByUsername($username)
    {
        return $this->createQueryBuilder('u')
            ->where('u.username = :username OR u.emailAddress = :emailAddress')
            ->setParameter('username', $username)
            ->setParameter('emailAddress', $username)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function getUserManagers($id)
    {
        $test = $this->createQueryBuilder('u')
		   ->find($id);

            var_dump($test);
            die();
    }
}