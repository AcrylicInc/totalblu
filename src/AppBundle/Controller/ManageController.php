<?php

// src/AppBundle/Company/ManageController.php
namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;


class ManageController extends Controller
{
    /**
     * Matches /manage exactly
     *
     * @Route("/manage", name="manage")
     */
    public function indexAction(Request $request)
    {

        $siteManager = $this->container->get('site_manager');

        return $this->render('default/index.html.twig', array(
            'site' => $siteManager->getCurrentSite(),
        ));
    }
}
