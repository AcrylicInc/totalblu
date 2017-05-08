<?php
namespace ApiBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use ApiBundle\JsonReturn;

class EventController extends Controller
{
    /**
     * @Route("/api/events/{id}")
     */
    public function currentUserAction(Request $request)
    {
      $qb = $this->em->createQueryBuilder();

      $qb
          ->select(
              'partial u.{id, firstName, surname, emailAddress, status}'
          )
          ->from('AppBundle:User', 'u')
          ->leftJoin('u.events');

        if ($qb) {

            return JsonReturn::success($qb);
        }
        else {

            return JsonReturn::error('No currently logged in user.');
        }
    }
}
