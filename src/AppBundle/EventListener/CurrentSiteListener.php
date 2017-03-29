<?php
namespace AppBundle\EventListener;

use AppBundle\Site\SiteManager;
use Doctrine\ORM\EntityManager;

use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class CurrentSiteListener
{
	private $siteManager;

	private $em;

	private $basehost;

	public function __construct(SiteManager $siteManager, EntityManager $em, $baseHost = "totalblu.com")
	{
		$this->siteManager = $siteManager;
		$this->em = $em;
		$this->baseHost = $baseHost;
	}

	public function onKernalRequest(GetResponseEvent $event)
	{
		$request = $event->getRequest();

		$host = $request->getHttpHost();
		$baseHost = $this->baseHost;
        /*
        * Todo
        * Work out why base_host doesn't work, should just return the site url
        */
     //   $baseHost = $this->container->getParameter('base_host');

        /*
        Return subdomain from base url
        */
        $subdomain = str_replace('.totalblu.com', '', $host);
        
        $site = $this->em
                ->getRepository('AppBundle:Company')
                ->findOneBy(array('companyName' => $subdomain))
        ;

        if ( !$site )
            throw new NotFoundHttpException(sprintf(
                'No site found for "%s", subdomain "%s"',
                $host,
                $subdomain
            ));
        
        $siteManager = $this->siteManager;
        $siteManager->setCurrentSite($site);
	}
}