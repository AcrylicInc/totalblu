<?php
// src/AppBundle/Contoller/Planner.php
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

class PlannerController extends Controller implements TokenAuthenticatedController
{

    private $host;
    protected $em;

    /**
     * @Route("/planner", name="planner")
     * @Route("/planner/weekly", name="planner_weekly")
     * @Route("/planner/monthly", name="planner_monthly")
     * @Route("/planner/new-item", name="planner_new_item")
     */
    public function plannerAction(Request $request)
    {

        $this->em = $this->getDoctrine()->getManager();

        return $this->render('profile/overview.html.twig', array(

        ));
    }
}
