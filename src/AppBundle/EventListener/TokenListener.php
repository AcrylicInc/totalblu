<?php
// src/AppBundle/EventListener/TokenListener.php

namespace AppBundle\EventListener;

use AppBundle\Entity\User;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Event\LifecycleEventArgs;

use AppBundle\Controller\TokenAuthenticatedController;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\FilterControllerEvent;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

use Symfony\Component\Security\Core\User\UserInterface;


/**
* This class is called on
* It requests the token before deciding to throw
* an exception.
*/
class TokenListener
{
	
	private $em;
	private $tokens;
	private $token_storage;
	private $entity;
	private $request;

	public function __construct(EntityManager $em, UserInterface $user, $tokens)
	{
		$this->em = $em;

		$this->tokens = $tokens;

		$this->token_storage = $token_storage;

		$this->request = Request::createFromGlobals();

		if (!$this->get('security.authorization_checker')->isGranted('IS_AUTHENTICATED_FULLY')) {
        throw $this->createAccessDeniedException();
    }
    $user = $this->get('security.token_storage')->getToken()->getUser();

	}

	public function onKernelController(FilterControllerEvent $event)
	{
		$controller = $event->getController();

		/**
		* $controller passed can be either a class * or a closure. It's not common in 
		* Symfony. If it's a class, it comes in an * array format.
		*/
		if ( !is_array($controller)) {
			return;
		}


		// echo "<pre>";
		// var_dump( $this->request->server->get('HTTP_HOST') );
		// echo "</pre>";

		$host = $this->request->server->get('HTTP_HOST');
        $subdomain = str_replace('.totalblu.com', '', $host);

		//$user = $this->entity->setCreatedBy($this->token_storage->getToken()->getUsername());

	        // Check the site exists.
	        $site = $this->em
	                ->getRepository('AppBundle:Company')
	                ->findOneBy(array('companyName' => $subdomain))
	        ;

	        $reservedSubdomains = array(
	            'totalblu.com', 'login'
	        );

	        if ( in_array($subdomain, $reservedSubdomains) ){
	            return;
	        }

	        $isAuth = 
	        $this->em->getRepository('AppBundle:Company')
	        ->findBy( array('companyName' => $subdomain, 'companyUser' => $user) );



		// if ( $controller[0] instanceof TokenAuthenticatedController){
		// 	$token = $event->getRequest()->query->get('token');

		// 	if ( !in_array($token, $this->tokens)) {
		// 		throw new AccessDeniedHttpException('This action needs a valid token!');
		// 	}

		// 	$event->getRequest()->attributes->set('auth_token', $token);
		// }
	}
	

	// public function onKernelResponse(FilterResponseEvent $events)
	// {

	// 	if ( !$token = $event->getRequest() ->attributes->get('auth_token')) {
	// 		return;
	// 	}

	// 	$response = $event->getResponse();

	// 	// Create a has and set it as a response header
	// 	$hash = sha1($response->getContent().$token);
	// 	$response->headers->set('X-CONTENT-HASH', $hash);
	// }
}