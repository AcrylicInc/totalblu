<?php
// src/AppBundle/EventListener/TokenListener.php

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


/**
* This class is called on
* It requests the token before deciding to throw
* an exception.
*/
class TokenListener
{
	
	private $em;
	private $token_storage;
	private $entity;
	private $request;
	private $user;
	protected $reservedSubdomains;

	public function __construct(EntityManager $em, TokenStorageInterface $token_storage)
	{
		$this->em = $em;
		$this->token_storage = $token_storage;
		$this->request = Request::createFromGlobals();
		$this->reservedSubdomains = array(
	            'totalblu.com', 'login'
	    );

		if ( null !== $this->token_storage->getToken() ){
    		$this->user = $this->token_storage->getToken()->getUser();
		} else {
			return;
		}
	}

	public function onKernelController(FilterControllerEvent $event)
	{
		/*
		* $controller passed can be either a class or a Closure.
		* This is not usual in Symfony but it may happen.
		* If it is a class, it comes in array format
		*/

		$controller = $event->getController();
        if (!is_array($controller)) {
            return;
        }

        if ($controller[0] instanceof TokenAuthenticatedController) {
			
			$host = $this->request->server->get('HTTP_HOST');
	        $subdomain = str_replace('.totalblu.com', '', $host);


	        // Check the company profile exists.
	        $site = $this->em
	                ->getRepository('AppBundle:Company')
	                ->findOneBy(array('companyName' => $subdomain))
	        ;

	        if ( null == $site )
	        	throw new NotFoundHttpException('Site does not exist!'); 


	        //Check the use has permission to view company profile
	        $isAuth = $this->em->getRepository('AppBundle:Company')
	        		  ->findBy( array('companyName' => $subdomain, 'user' => $this->user->getId()) )
	        ;
	        
			if ( null == $isAuth )
	        	throw new NotFoundHttpException('You cannot access this page!'); 
		}
	}
}