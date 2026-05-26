-- leetcode 1757 Recyclable and Low Fat Products
SELECT product_id FROM Products WHERE low_fats='Y' && recyclable='Y'

-- leetcode 584 Find Customer Referee
SELECT name FROM Customer WHERE referee_id !=2 OR referee_id IS NULL

-- leetcode 595 Big Countries
SELECT name, population, area
FROM World
WHERE area >= '3000000' OR population >= '25000000'

-- 1148 Article Views I
SELECT DISTINCT author_id AS id -- use DISTINCT to deduplicate, AS id pushes author_id into a new id column
FROM Views
WHERE author_id = viewer_id
ORDER BY author_id ASC