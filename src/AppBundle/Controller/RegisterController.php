<?php

// src/AppBundle/Register/RegisterController.php
namespace AppBundle\Controller;

use AppBundle\Entity\CompanyUser;
use AppBundle\Form\CompanyUserType;

use AppBundle\Entity\Company;
use AppBundle\Form\CompanyType;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;

class RegisterController extends Controller
{
    /**
     * Matches /register exactly
     *
     * @Route("/register/user", name="register_user")
     */
    public function registerUserAction(Request $request)
    {
        $CompanyUser = new CompanyUser();

        $form = $this->createForm(CompanyUserType::class, $CompanyUser);

        // 2) handle the submit (will only happen on POST)
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            // 3) Encode the password (you could also do this via Doctrine listener)
            $password = $this->get('security.password_encoder')
                ->encodePassword($CompanyUser, $CompanyUser->getPlainPassword());
            $CompanyUser->setPassword($password);

            // 4) save the CompanyUser!
            $em = $this->getDoctrine()->getManager();
            $em->persist($CompanyUser);
            $em->flush();

            // ... do any other work - like sending them an email, etc
            // maybe set a "flash" success message for the CompanyUser

            $token = new UsernamePasswordToken($CompanyUser, null, 'main', $CompanyUser->getRoles());
            $this->get('security.token_storage')->setToken($token);
            $this->get('session')->set('_security_main', serialize($token));

            return $this->redirectToRoute('register_company');
        }

        return $this->render(
            'register/registerUser.html.twig',
            array('form' => $form->createView())
        );
    }

    /**
     * Matches /register/company exactly
     *
     * @Route("/register/company", name="register_company")
     */
    public function registerCompanyAction(Request $request)
    {
        /**
        * 
        */
        $Company = new Company();

        $form = $this->createForm(CompanyType::class, $Company);

        // 2) handle the submit (will only happen on POST)
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            //Get users id
            $user = $this->get('security.token_storage')->getToken()->getUser();
            $user = $user->getID();
        
            // 4) save the Company
            $em = $this->getDoctrine()->getManager();
            $em->persist($Company);
            $em->flush();

            // ... do any other work - like sending them an email, etc
            // maybe set a "flash" success message for the CompanyUser

            // return $this->redirectToRoute('dashboard');
            return $this->redirectToRoute('homepage');
        }

        return $this->render(
            'register/registerCompany.html.twig',
            array('form' => $form->createView())
        );
    }
}
