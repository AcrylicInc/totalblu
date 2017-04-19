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
* This class redirects users to their dashboard
* after successful login
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
		$userId = $this->user->getID();

		$userCompany = $this->em
	                ->getRepository('AppBundle:Company')
	    ;
		
		$userCompany = $userCompany->findOneBy( array('user' => $userId ) )->getCompanyName();

		$response = new RedirectResponse( 'http://' . $userCompany . '.totalblu.com' . '/app_dev.php/' );
        return $response;
	}
}