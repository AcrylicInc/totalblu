<?php

// src/AppBundle/Contoller/DashboardController.php
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

class ProfileController extends Controller implements TokenAuthenticatedController
{

    private $host;
    protected $em;

    /**
     * Matches /profile exactly
     *
     * @Route("/profile", name="profile")
     * @Route("/profile/personal-details/", name="profile-details")
     * @Route("/profile/work-details/", name="work-details")
     * @Route("/profile/education/", name="education")
     */
    public function dashboardAction(Request $request)
    {
    
        $this->em = $this->getDoctrine()->getManager();

        return $this->render('profile/overview.html.twig', array(

        ));
    }
}
