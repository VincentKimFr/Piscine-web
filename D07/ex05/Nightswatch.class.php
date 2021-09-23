<?php
	class NightsWatch implements IFighter {

		private $_fight;

		public function recruit ($fighter) {
			if ($fighter instanceof IFighter)
				$this->_fight .= $fighter->fight();
		}

		public function fight() {
			print($this->_fight);
		}
	}