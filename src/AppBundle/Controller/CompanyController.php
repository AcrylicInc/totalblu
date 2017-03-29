<?php

// src/AppBundle/Company/CompanyController.php
namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;


class CompanyController extends Controller
{
    /**
     * Matches /dashboard exactly
     *
     * @Route("/dashboard", name="company_dashboard")
     */
    public function indexAction(Request $request)
    {

        $siteManager = $this->container->get('site_manager');

        return $this->render('default/index.html.twig', array(
            'site' => $siteManager->getCurrentSite(),
        ));
    }
}
