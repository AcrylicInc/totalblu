<?php

// src/AppBundle/Register/RegisterController.php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class RegisterController extends Controller
{
    /**
     * Matches /register exactly
     *
     * @Route("/register", name="register")
     */
    public function indexAction()
    {
        return $this->render('register/register.html.twig', array());
    }
