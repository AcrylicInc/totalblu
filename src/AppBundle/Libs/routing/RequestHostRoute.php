<?php
// lib/routing/RequestHostRoute.class.php
class RequestHostRoute extends sfRequestRoute
{

	public function matchesUrl( $url, $context = array())
	{
		if (isset($this->requirements['sf_host'])) 
			&& 
			$this->requirements['sf_host'] != $context['host']) {
			return false;
		}

		return parent::matchesUrl($url, $context);
	}
}