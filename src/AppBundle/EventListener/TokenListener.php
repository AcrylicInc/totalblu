<?php

// /AppBundle/EventListener/TokenListener.php

namespace AppBundle\EventListener;

use AppBundle\Controller\DashboardController;
use symfony\Component\HttpKernal\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernal\Event\FilterControllerEvent;

/**
* This class is called on
* It requests the token before deciding to throw
* an exception.
*/
class TokenListener
{
	
	private $tokens;

	public function __construct($tokens)
	{
		$this->tokens = $tokens;
	}

	public function onKernalController(FilterControllerEvent $event){
		$controller = $event->getController();

		/**
		* $controller passed can be either a class * or a closure. It's not common in 
		* Symfony. If it's a class, it comes in an * array format.
		*/
		if ( !is_array($controller)) {
			return;
		}

		if ( $controller[0] instanceof TokenAuthenticatedController){
			$token = $event->getRequest()->query->get('token');

			if ( !in_array($token, $this->tokens)) {
				throw new AccessDeniedHttpException('This action needs a valid token!');
			}

			$event->getRequest()->attributes->set('auth_token', $token);
		}
	

	public function onKernelResponse(FilterResponseEvent $events)
	{

		if ( !$token = $event->getRequest() ->attributes->get('auth_token')) {
			return;
		}

		$response = $event->getResponse();

		// Create a has and set it as a response header
		$hash = sha1($response->getContent().$token);
		$response->headers->set('X-CONTENT-HASH', $hash);
	}
}