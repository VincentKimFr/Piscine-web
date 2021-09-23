UPDATE `ft_table`
SET `creation date` = DATEADD(year, 20, `creation date`),
WHERE `id` > 5;