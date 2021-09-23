<?php
Class Color
{
	static bool $verbose = False;

	public int $red = 0;
	public int $green = 0;
	public int $blue = 0;

	public function add(Color $color2) {

		return(new Color(array("red" => $this->red + $color2->red, "green" => $this->green + $color2->green, "blue" => $this->blue + $color2->blue)));

	}

	public function sub(Color $color2) {

		return(new Color(array("red" => $this->red - $color2->red, "green" => $this->green - $color2->green, "blue" => $this->blue - $color2->blue)));

	}

	public function mult(float $nb) {

		return(new Color(array("red" => $this->red * $nb, "green" => $this->green * $nb, "blue" => $this->blue * $nb)));

	}

	public function __construct(array $arr) {

		if (array_key_exists("rgb", $arr) == True) {

			$arr["rgb"] = intval($arr["rgb"]);
			$this->red = $arr["rgb"] >> 16;
			$this->green = $arr["rgb"] % 2**16 >> 8;
			$this->blue = ($arr["rgb"] % (2**16)) % (2**8);

		}
		if (array_key_exists("red", $arr) == True)
			$this->red = intval($arr["red"]);
		if (array_key_exists("green", $arr) == True)
			$this->green = intval($arr["green"]);
		if (array_key_exists("blue", $arr) == True)
			$this->blue = intval($arr["blue"]);
		if (self::$verbose == True)
			echo $this . " constructed." . PHP_EOL;
		return;
	}

	public function __destruct() {
		if (self::$verbose == True)
			echo $this . " destructed." . PHP_EOL;
		return;
	}

	public function __toString() {
		$ret = sprintf("Color( red: %3d, green: %3d, blue: %3d )",
							$this->red, $this->green, $this->blue);
		return ($ret);
	}

	static function doc() {
		readfile("Color.doc.txt");
		echo PHP_EOL;
		return;
	}
}