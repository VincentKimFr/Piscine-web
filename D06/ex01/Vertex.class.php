<?php

	require_once 'Color.class.php';

	Class Vertex
	{

		static bool $verbose = False;

		private float $_x = 0.0;
		private float $_y = 0.0;
		private float $_z = 0.0;
		private float $_w = 1.0;
		private color $_color;

		public function __construct(array $arr) {

			if (array_key_exists("color", $arr) == True)
				$this->_color = $arr["color"];
			else
				$this->_color = new Color(array("rgb" => (255 << 16) + (255 << 8) + 255));
			if (array_key_exists("x", $arr) == True and array_key_exists("y", $arr) == True and array_key_exists("z", $arr) == True) {
				$this->_x = $arr["x"];
				$this->_y = $arr["y"];
				$this->_z = $arr["z"];
			}
			if (array_key_exists("w", $arr) == True)
				$this->_w = $arr["w"];
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
			if (self::$verbose == True)
				return ($ret = sprintf("Vertex( x: %.2f, y: %.2f, z:%.2f, w:%.2f, $this->_color )",
					$this->_x, $this->_y, $this->_z, $this->_w));
			else
				return ($ret = sprintf("Vertex( x: %.2f, y: %.2f, z:%.2f, w:%.2f )",
					$this->_x, $this->_y, $this->_z, $this->_w));
		}

		static function doc() {
			readfile("Vertex.doc.txt");
			echo PHP_EOL;
			return;
		}
	}