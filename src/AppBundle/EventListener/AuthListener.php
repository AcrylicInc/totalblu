<?php
// src/AppBundle/EventListener/AuthListener.php

namespace AppBundle\EventListener;

use AppBundle\Entity\User;
use AppBundle\Entity\Company;

use Doctrine\ORM\EntityManager;
// use Doctrine\ORM\Event\LifecycleEventArgs;

use AppBundle\Controller\TokenAuthenticatedController;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Event\FilterControllerEvent;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Security\Http\Authentication\AuthenticationSuccessHandlerInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Routing\Router;

/**
* This class is called on
* It requests the token before deciding to throw
* an exception.
*/
class AuthListener implements AuthenticationSuccessHandlerInterface
{
	
	private $token_storage;
	private $router;
	private $em;
	private $user;

	public function __construct(Router $router, TokenStorageInterface $token_storage, EntityManager $em)
	{
		$this->token_storage = $token_storage;
		$this->em = $em;
	}

	public function onAuthenticationSuccess(Request $request, TokenInterface $token)
	{

		if ( null === $this->token_storage->getToken() ) return;

    	$this->user = $this->token_storage->getToken()->getUser();
		

		$userCompany = $this->em
	                ->getRepository('AppBundle:Company');
	    ;
		
		var_dump( $userCompany->getCompanyName() );
		die();

		// var_dump($this->token_storage->getToken()->getUser());
	}
}