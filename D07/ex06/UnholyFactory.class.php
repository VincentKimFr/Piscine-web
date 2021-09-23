<?php

Class Unholyfactory {

	private $_fighters_list;

	public function __construct() {
		$this->_fighters_list = array();
	}

	public function absorb($fighter) {

		$_name;

		if ($fighter instanceof Fighter) {
			$this->_name = $fighter->__tostring();
			if (in_array($this->_name, $this->_fighters_list) == false) {
				print("(Factory absorbed a fighter of type " . $this->_name . ")" . PHP_EOL);
				$this->_fighters_list[$this->_name] = $fighter;
			} else
				print("(Factory already absorbed a fighter of type " . $this->_name . ")" . PHP_EOL);
		} else
			print("(Factory can't absorb this, it's not a fighter)" . PHP_EOL);
	}

	public function fabricate($req_fi) {

		if (in_array($req_fi, $this->_fighters_list) == false) {
			print("(Factory hasn't absorbed any fighter of type $req_fi)\n");
			return NULL;
		} else {
			print("(Factory fabricates a fighter of type $req_fi)\n");
			return (clone $this->_fighters_list[$req_fi]);
		}
	}
}