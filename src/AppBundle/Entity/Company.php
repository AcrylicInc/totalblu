<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use AppBundle\Entity\CompanyUser;

/**
 * Company
 *
 * @ORM\Table(name="tb_company")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\CompanyRepository")
 */
class Company
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="company_name", type="string", length=255, unique=true)
     */
    private $companyName;

    /**
     * @var int
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\CompanyUser", type="integer")
     */
    private $CompanyUser;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set companyName
     *
     * @param string $companyName
     *
     * @return Company
     */
    public function setCompanyName($companyName)
    {
        $this->companyName = $companyName;

        return $this;
    }

    /**
     * Get companyName
     *
     * @return string
     */
    public function getCompanyName()
    {
        return $this->companyName;
    }

    /**
     * Set CompanyUser
     *
     * @param integer $CompanyUser
     *
     * @return Company
     */
    public function setCompanyUser($CompanyUser)
    {
        $this->CompanyUser = $CompanyUser;

        return $this;
    }

    /**
     * Get CompanyUser
     *
     * @return int
     */
    public function getCompanyUser()
    {
        return $this->CompanyUser;
    }
}

