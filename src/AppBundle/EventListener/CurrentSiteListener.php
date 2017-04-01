<?php
namespace AppBundle\EventListener;

use AppBundle\Site\SiteManager;
use Doctrine\ORM\EntityManager;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Security\Core\SecurityContext;

class CurrentSiteListener
{

    /**
     * @var UrlGeneratorInterface
     */
    private $urlGenerator;

	private $siteManager;

	private $em;

	private $basehost;

    /**
     * @var SecurityContext
     */
    protected $context;

	public function __construct(SiteManager $siteManager, EntityManager $em, UrlGeneratorInterface $urlGenerator, ContainerInterface $container)
	{
        $this->urlGenerator = $urlGenerator;

        $this->context = $context;

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

        $reservedSubdomains = array(
            'totalblu.com', 'login'
        );


        if ( in_array($subdomain, $reservedSubdomains) ){
            return;
        }

       /**
        * If subdomain does not exist,
        * show template
        */
        if ( !$site ){
            return "No account";
            die();
        }

        /**
        *
        * Check if user is authorised
        * to access the site
        */
        var_dump($this->context);
        //$user = $this->get('security.token_storage')->getToken()->getUser();
       
        $isAuth = 
        $this->em->getRepository('AppBundle:Company')
        ->findBy( array('companyName' => $subdomain, 'companyUser' => $user) );


        if ( $isAuth ){
            var_dump(true);
        } else {
            var_dump(false);
        }

            //   $response = new RedirectResponse($this->urlGenerator->generate('login'));
            // $event->setResponse($response);
        $siteManager = $this->siteManager;
        $siteManager->setCurrentSite($site);

        // var_dump($siteManager->getCurrentSite());
	}
}