<?php

class  House {
	public function introduce() {
		printf("House " . $this->getHouseName() . " of " . $this->getHouseSeat() . " : " . $this->getHouseMotto() . "\n");
		return;
	}
}