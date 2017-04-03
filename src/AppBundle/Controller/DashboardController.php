<?php

// src/AppBundle/Contoller/DashboardController.php
namespace AppBundle\Controller;
use AppBundle\Entity\Company;

use Doctrine\ORM\EntityManager;
//use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

use AppBundle\Controller\TokenAuthenticatedController;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DashboardController extends Controller implements TokenAuthenticatedController
{

    private $host;
    protected $em;

    /**
     * Matches / exactly
     *
     * @Route("/", name="dashboard")
     * @Route("/dashboard")
     */
    public function dashboardAction(Request $request)
    {
    
        $this->em = $this->getDoctrine()->getManager();

       //$status = $this->userAuthorized($request);

           switch ($status) {
                case 'anon':
                    return new RedirectResponse($this->generateUrl('login'));
                    break;

                case 'nosite':
                    return $this->render('error/nosite.html.twig');
                   break;
               
                case 'noauth':
                    return $this->render('error/noauth.html.twig');
                    break;
            }

        return $this->render('manager/dashboard.html.twig', array(

        ));
    }


    public function userAuthorized($request)
    {
        // Get user object, subdomain and host
        $user = $this->get('security.token_storage')->getToken()->getUser();
        $host = $request->server->get('HTTP_HOST');
        $subdomain = str_replace('.totalblu.com', '', $host);

        //Check company exists
        $siteExists = 
        $this->em
            ->getRepository('AppBundle:Company')
            ->checkSiteExists($subdomain);
        ;

        if ( !$siteExists ){
            return "nosite";
        }

        $isAuth = 
        $this->em
            ->getRepository('AppBundle:Company')
            ->checkUserIsAuthorized($subdomain, $user->getId())
        ;

        if ( !$isAuth ){
            return "noauth";
        }
    }
}
