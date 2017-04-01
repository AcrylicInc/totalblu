<?php
namespace ApiBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use ApiBundle\JsonReturn;

class CompanyUserController extends Controller
{
    /**
     * @Route("/api/user/current", name="api_user_current")
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
}
