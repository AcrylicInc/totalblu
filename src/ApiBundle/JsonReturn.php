<?php

namespace ApiBundle;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class JsonReturn
{
    public static function success($data = null)
    {

        if (is_null($data)) {
            $data = ['status' => 'success'];
        }
        return new JsonResponse($data);
    }

    public static function error($message)
    {
        return new Response($message);
    }
}
