<?php
// src/AppBundle/Entity/User.php
namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\AdvancedUserInterface;
use AppBundle\Entity\Company;

/**
 * @ORM\Table(name="tb_users")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\UserRepository")
 */
class User implements AdvancedUserInterface, \Serializable
{
    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=25)
     */
    private $firstName;

    /**
     * @ORM\Column(type="string", length=25)
     */
    private $lastName;

    /**
     * @ORM\Column(type="string", length=25)
     */
    private $username;

    /**
     * @ORM\Column(type="json_array")
     */
    private $roles = ['ROLE_MANAGER'];

    /**
     * @ORM\Column(type="json_array")
     */
    private $managers = [];

    /**
     * @ORM\Column(type="json_array")
     */
    private $directReports = [];

    /**
     * @ORM\Column(type="string", length=25)
     */
    private $homeNumber;

    /**
     * @ORM\Column(type="string", length=25)
     */
    private $mobileNumber;

    /**
     * @ORM\Column(type="string", length=25)
    */
    private $address;

    /**
     * @ORM\Column(type="string", length=25)
    */
    private $city;

    /**
     * @ORM\Column(type="string", length=25)
    */
    private $county;

    /**
     * @ORM\Column(type="string", length=25)
    */
    private $postCode;

    /**
     * @Assert\NotBlank()
     * @Assert\Length(max=4096)
     */
    private $plainPassword;

    /**
     * @ORM\Column(type="string", length=64)
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=60, unique=true)
     */
    private $emailAddress;

    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Company")
     */
    private $company;



    

    /**
     * @ORM\Column(name="is_active", type="boolean")
     */
    private $isActive;

    public function __construct()
    {
        $this->isActive = true;
        // may not be needed, see section on salt below
        // $this->salt = md5(uniqid(null, true));
    }

    public function getID()
    {
        return $this->id;
    } 


    public function getCompany()
    {
        return $this->company;
    }

    public function setCompany($company)
    {
        $this->company = $company;
    }

    public function getEmailAddress()
    {
        return $this->emailAddress;
    }

    public function setEmailAddress($emailAddress)
    {
        $this->emailAddress = $emailAddress;
    }

    public function getFirstName()
    {
        return $this->firstName;
    }   

    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;
    }

    public function getLastName()
    {
        return $this->lastName;
    }   

    public function setLastName($lastName)
    {
        $this->lastName = $lastName;
    }

    public function getPlainPassword()
    {
        return $this->plainPassword;
    }

    public function getUsername()
    {
        return $this->emailAddress;
    }

    public function setUsername($username)
    {
        $this->username = $username;
    }

    public function setPlainPassword($password)
    {
        $this->plainPassword = $password;
    }  

    public function getPassword()
    {
        return $this->password;
    }

    public function setPassword($password)
    {
        $this->password = $password;
    }

    public function getSalt()
    {
        // you *may* need a real salt depending on your encoder
        // see section on salt below
        return null;
    }

    public function getRoles()
    {
        
        $roles = $this->roles;

        // Set role_manager as default!
        if ( count( $roles ) <= 0 ){
            $roles[] = 'ROLE_MANAGER';
        }

        return $roles;
    }

    public function setRoles( array $roles )
    {
        $this->roles = $roles;
    }

    public function getMobileNumber(){
        return $this->mobileNumber;
    }

    public function setMobileNumber($mobileNumber)
    {
        $this->mobileNumber = $mobileNumber;
    }

    public function getHomeNumber()
    {
        return $this->homeNumber;
    }

    public function setHomeNumber($homeNumber)
    {
        $this->homeNumber = $homeNumber;
    }

    public function getManagers() {
        return $this->managers;
    }

    public function setManagers( array $managers )
    {
        $this->managers = $managers;
    }

    public function getCity()
    {
        return $this->city;
    }

    public function setCity($city)
    {
        $this->city = $city;
    }

    public function getCounty()
    {
        return $this->county;
    }

    public function setCounty($county)
    {
        $this->county = $county;
    }

    public function getPostCode() {
        return $this->postCode;
    }

    public function setPostCode($postCode)
    {
        $this->postCode = $postCode;
    }

    public function getAddress()
    {
        return $this->homeAddress;
    }

    public function setAddress($address)
    {
        $this->address = $address;
    }

    public function eraseCredentials()
    {
    }

    public function isAccountNonExpired()
    {
        return true;
    }

    public function isAccountNonLocked()
    {
        return true;
    }

    public function isCredentialsNonExpired()
    {
        return true;
    }

    public function isEnabled()
    {
        return $this->isActive;
    }

    /** @see \Serializable::serialize() */
    public function serialize()
    {
        return serialize(array(
            $this->id,
            $this->username,
            $this->firstName,
            $this->lastName,
            $this->password,
            $this->isActive,
            $this->roles,
            // see section on salt below
            // $this->salt,
        ));
    }

    /** @see \Serializable::unserialize() */
    public function unserialize($serialized)
    {
        list (
            $this->id,
            $this->username,
            $this->firstName,
            $this->lastName,
            $this->password,
            $this->isActive,
            $this->roles,
            // see section on salt below
            // $this->salt
        ) = unserialize($serialized);
    }


    /**
    *   API Stuff
    */

    public function getUserInfo($id = null)

    {
        return [
        'id'        => $this->getID(),
        'firstName' => $this->getFirstName(),
        'lastName' => $this->getLastName(),
        'emailAddress'  => $this->getEmailAddress(),
        'homeNumber'  => $this->getHomeNumber(),
        'mobileNumber'  => $this->getMobileNumber(),
        ];
    }
}