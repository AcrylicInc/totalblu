<?php
namespace AppBundle\EventListener;

use AppBundle\Site\SiteManager;
use Doctrine\ORM\EntityManager;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class CurrentSiteListener
{

    /**
     * @var UrlGeneratorInterface
     */
    private $urlGenerator;

	private $siteManager;

	private $em;

	private $basehost;

	public function __construct(SiteManager $siteManager, EntityManager $em, UrlGeneratorInterface $urlGenerator )
	{
        $this->urlGenerator = $urlGenerator;

		$this->siteManager = $siteManager;
		$this->em = $em;
		$this->baseHost = "totalblu.com";
	}

	public function onKernelRequest(GetResponseEvent $event)
	{
		$request = $event->getRequest();

		$host = $request->getHttpHost();
		$baseHost = $this->baseHost;
        /*
        * Todo
        * Work out why base_host doesn't work, should just return the site url
        */
  
        /*
        Return subdomain from base url
        */
        $subdomain = str_replace('.totalblu.com', '', $host);
        

        $site = $this->em
                ->getRepository('AppBundle:Company')
                ->findOneBy(array('companyName' => $subdomain))
        ;

		if ( $subdomain === 'totalblu.com' ) {
            return;
		}

        /**
        * Check if user is logged in
        * and has access
        */
        
        if ( !$site ){
            $response = new RedirectResponse($this->urlGenerator->generate('login'));
            $event->setResponse($response);
       	}
        
        $siteManager = $this->siteManager;
        $siteManager->setCurrentSite($site);

        // var_dump($siteManager->getCurrentSite());
	}
}