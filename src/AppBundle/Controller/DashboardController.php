<?php

// src/AppBundle/Contoller/DashboardController.php
namespace AppBundle\Controller;

use Doctrine\ORM\EntityManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;


class DashboardController extends Controller
{

    private $em;
    private $request;

    public function __construct(\Doctrine\ORM\EntityManager $em, Request $request){
        
        $this->em = $em;
        $this->request = $request;
    }

    /**#
     * Matches / exactly
     *
     * @Route("/")
     * @Route("/dashboard", name="dashboard")
     */
    public function dashboardAction()
    {

        $this->userAuthorized();

        return $this->render('manager/dashboard.html.twig', array(

        ));
    }


    public function userAuthorized()
    {
        var_dump($this->request);
        die();
        $host = $this->request->getHttpHost();

        //Check site exists
        $site = $this->em
                ->getRepository('AppBundle:Company')
                ->findOneBy(array('companyName' => $subdomain))
        ;

         /*
        Return subdomain from base url
        */
        $subdomain = str_replace('.totalblu.com', '', $host);

        $user = $this->get('security.token_storage')->getToken()->getUser();
        $userID = $user->getId();

        $isAuth = $this->em->getRepository('AppBundle:Company')
                ->findBy( array('companyName' => $subdomain, 'companyUser' => $userID) );

    }
}
