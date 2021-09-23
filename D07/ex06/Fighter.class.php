<?php

Class Fighter {

	private $_name;

	public function __construct($str) {
		$this->_name = $str;
	}

	public function __tostring() {
		return($this->_name);
	}
}