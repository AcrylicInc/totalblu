<?php
namespace ApiBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use ApiBundle\JsonReturn;

use AppBundle\Entity\Company;

class CompanyController extends Controller
{
    /**
     * @Route("/api/company/{id}", name="api_company_by_id")
     */
    public function currentCompanyAction($id)
    {
        $qb = $this->getDoctrine()
            ->getManager()
            ->createQueryBuilder();

        $qb
            ->select(
                'partial c.{id, companyName}'
            )
            ->from('AppBundle:Company', 'c')
            ->where('c.id = :id')
            ->setParameter('id', $id);

        $company = $qb->getQuery()
            ->getArrayResult();

        if ($company) {
            return JsonReturn::success($company);
        }

        return JsonReturn::error("No company found.");
    }
}
