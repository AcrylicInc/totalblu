<?php

// src/AppBundle/Register/RegisterController.php
namespace AppBundle\Controller;

use AppBundle\Form\CompanyAdminType;
use AppBundle\Entity\CompanyAdmin;
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
    public function registerAction(Request $request)
    {
        // 1) build the form
        $user = new CompanyAdmin();
        $form = $this->createForm(CompanyAdminType::class, $user);

        // 2) handle the submit (will only happen on POST)
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            // 3) Encode the password (you could also do this via Doctrine listener)
            $password = $this->get('security.password_encoder')
                ->encodePassword($user, $user->getPlainPassword());
            $user->setPassword($password);

            // 4) save the User!
            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();

            // ... do any other work - like sending them an email, etc
            // maybe set a "flash" success message for the user

            return $this->redirectToRoute('homepage');
        }

        return $this->render(
            'register/register.html.twig',
            array('form' => $form->createView())
        );
    }
}
