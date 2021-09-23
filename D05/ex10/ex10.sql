SELECT `title` AS `Title`, `summary` as `Summary`, `prod_year`
FROM `film`
INNER JOIN `genre` ON genre.id_genre = film.id_genre
WHERE genre.name = 'erotic'
ORDER BY `prod_year` DESC;