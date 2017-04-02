<?php

// src/AppBundle/Company/ManageController.php
namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


class ManageController extends Controller
{
    /**
     * Matches /manage exactly
     *
     * @Route("/manage", name="manage")
     */
    public function manageAction(Request $request)
    {
        return new Response('<html><body>Admin page!</body></html>');
    }
}
