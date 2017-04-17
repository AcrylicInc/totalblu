<?php
namespace ApiBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use ApiBundle\JsonReturn;

class UserController extends Controller
{
    /**
     * @Route("/api/user/current", name="api_user_current")
     * @Route("/api/user/current/{id}")
     */
    public function currentUserAction(Request $request)
    {
        if ($user = $this->getUser()) {

            return JsonReturn::success($user->getUserInfo());
        }
        else {

            return JsonReturn::error('No currently logged in user.');
        }
    }

    /**
     * @Route("/api/user/{id}/")
     */
    public function selectUserAction($id)
    {
      $qb = $this->getDoctrine()
            ->getManager()
            ->createQueryBuilder();

        $qb
            ->select(
                'partial u.{id, firstName, lastName, emailAddress}'
            )
            ->from('AppBundle:User', 'u')
            ->where('u.id = :id')
            ->setParameter('id', $id);

        $user = $qb->getQuery()
            ->getArrayResult();

        if ($user) {
            return JsonReturn::success($user);
        }

        return JsonReturn::error("No user found.");
    }

    /**
     * @Route("/api/user/{id}/managers/", name="api_user_current")
     */
    public function getUserManagersAction($id)
    {
        $em = $this->getDoctrine()
            ->getManager();


        $qb = $em->createQueryBuilder()
            ->select(
                'u',
                'um'
            )
            ->from('AppBundle:UserManagerRelationships', 'u')
            ->leftJoin('AppBundle:User', 'um')
            ->where('um.id = :id')
            ->setParameter('id', $id);


        $results = $qb->getQuery()
            ->getArrayResult();


        if ($results) {
            return JsonReturn::success($results);
        }

        return JsonReturn::error("No results found.");
    }
}
