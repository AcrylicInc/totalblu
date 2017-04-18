<?php

// src/AppBundle/Contoller/PeopleManagementController.php
namespace AppBundle\Controller;
use AppBundle\Entity\User;

use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

use AppBundle\Controller\TokenAuthenticatedController;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class PeopleManagementController extends Controller implements TokenAuthenticatedController
{

    private $host;
    protected $em;

    /**
     * @Route("/people-management", name="people_management")
     */
    public function dashboardAction(Request $request)
    {
    
        $this->em = $this->getDoctrine()->getManager();

        return $this->render('profile/overview.html.twig', array(

        ));
    }
}