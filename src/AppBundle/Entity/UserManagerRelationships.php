<?php
// src/AppBundle/Entity/UserManagerRelationships.php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/** @ORM\Table(name="tb_managers") @ORM\Entity() */
class UserManagerRelationships
{
    /** 
     * @ORM\Id()
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\User", inversedBy="id") 
     * @ORM\JoinColumn(name="user", referencedColumnName="id", nullable=false) 
     */
    protected $user;

    /** 
     * @ORM\Id()
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\User", inversedBy="id") 
     * @ORM\JoinColumn(name="manager", referencedColumnName="id", nullable=false) 
     */
    protected $manger;
}