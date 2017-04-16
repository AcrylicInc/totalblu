<?php
// src/AppBundle/Entity/Manager.php
namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

use AppBundle\Entity\User;

/**
 * @ORM\Table(name="tb_managers")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ManagerRepository")
 */
class Manager
{
    /**
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")#
     */
    private $id;

    /**
     * Many users has Many managers.
     * @ORM\User
     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\User", mappedBy="id")
     */
    private $user;

    /**
     * One manager has many users.
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\User", mappedBy="id")
     * @JoinColumn(name="id", referencedColumnName="id")
     */
    private $manager;
   
    public function __construct()
    {
        $this->manager = new \Doctrine\Common\Collections\ArrayCollection();
        $this->user = new \Doctrine\Common\Collections\ArrayCollection();
    }

    public function getID()
    {
        return $this->id;
    } 

    public function getUser()
    {
        return $this->user;
    }

    public function setUser($user)
    {
        $this->user = $user;
    }

    public function getManager()
    {
        return $this->manager;
    }

    public function setManager($manager)
    {
        $this->manager = $manager;
    }

}