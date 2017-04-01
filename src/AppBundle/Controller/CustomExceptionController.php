<?php
// src/AppBundle/Company/CustomExceptionController.php
namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;


class CompanyController extends Controller
{

    public function indexAction(Request $request)
    {

        return $this->render('error/notexists.html.twig');
    }
}
