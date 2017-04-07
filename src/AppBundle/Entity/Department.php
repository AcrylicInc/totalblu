<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Department
 *
 * @ORM\Table(name="tb_department")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\DepartmentRepository")
 */
class Department
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
     * @ORM\Column(name="department_name", type="string", length=255)
     */
    private $departmentName;

    /**
     * @var int
     *
     * @ORM\Column(name="CompanyId", type="integer")
     */
    private $companyId;

    /**
     * @var array
     *
     * @ORM\Column(name="department_manager", type="json_array")
     */
    private $departmentManager;


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
     * Set departmentName
     *
     * @param string $departmentName
     *
     * @return Department
     */
    public function setDepartmentName($departmentName)
    {
        $this->departmentName = $departmentName;

        return $this;
    }

    /**
     * Get departmentName
     *
     * @return string
     */
    public function getDepartmentName()
    {
        return $this->departmentName;
    }

    /**
     * Set companyId
     *
     * @param integer $companyId
     *
     * @return Department
     */
    public function setCompanyId($companyId)
    {
        $this->companyId = $companyId;

        return $this;
    }

    /**
     * Get companyId
     *
     * @return int
     */
    public function getCompanyId()
    {
        return $this->companyId;
    }

    /**
     * Set departmentManager
     *
     * @param array $departmentManager
     *
     * @return Department
     */
    public function setDepartmentManager($departmentManager)
    {
        $this->departmentManager = $departmentManager;

        return $this;
    }

    /**
     * Get departmentManager
     *
     * @return array
     */
    public function getDepartmentManager()
    {
        return $this->departmentManager;
    }
}

