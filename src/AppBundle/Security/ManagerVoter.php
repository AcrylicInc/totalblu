<?php
// src/AppBundle/Security/ManagerVoter.php
namespace AppBundle\Security;

use AppBundle\Entity\Company;
use AppBundle\Entity\CompanyUser;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

class ManagerVoter extends Voter
{
    // these strings are just invented: you can use anything
    const VIEW = 'view';
    const MANAGE = 'manage';

    protected function supports($attribute, $subject)
    {   
       // var_dump($attribute);

        // if the attribute isn't one we support, return false
        if (!in_array($attribute, array(self::VIEW, self::MANAGE))) {
            return false;
        }

            var_dump($subject);

        // only vote on Company objects inside this voter
        // if (!$subject instanceof Company) {
        //     return false;
        // }

        return true;
    }

    protected function voteOnAttribute($attribute, $subject, TokenInterface $token)
    {
        $user = $token->getUser();


        if (!$user instanceof CompanyUser) {
            // the user must be logged in; if not, deny access
            return false;
        }
            var_dump($user);

        // you know $subject is a Post object, thanks to supports
        /** @var Post $post */
        $post = $subject;

        switch ($attribute) {
            case self::VIEW:
                return $this->canView($post, $user);
            case self::MANAGE:
                return $this->canManage($post, $user);
        }

        throw new \LogicException('This code should not be reached!');
    }

    private function canView(Post $post, User $user)
    {
        // if they can edit, they can view
        if ($this->canManage($post, $user)) {
            return true;
        }

        // the Post object could have, for example, a method isPrivate()
        // that checks a boolean $private property
        return !$post->isPrivate();
    }

    private function canManage(Post $post, User $user)
    {
        // this assumes that the data object has a getOwner() method
        // to get the entity of the user who owns this data object
        return $user === $post->getOwner();
    }
}