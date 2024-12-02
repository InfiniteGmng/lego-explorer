USE legos;

-- Inserting Lego Set Data
INSERT INTO LegoSet (setNumber, name, theme, pieces, price, releaseYear, availability)
VALUES 
  (75257, 'Millennium Falcon', 'Star Wars', 1351, 159.99, 2019, true),
  (75211, 'TIE Fighter', 'Star Wars', 469, 69.99, 2018, true),
  (76139, 'Batmobile', 'Super Heroes', 3928, 249.99, 2020, true),
  (10307, 'Ninja Turtles', 'Teenage Mutant Ninja Turtles', 1700, 229.99, 2023, false);

-- Inserting User Info Data
INSERT INTO UserInfo (username, email, setsOwned, favoriteTheme, totalPieces)
VALUES 
  ('LegoFan123', 'legofan123@example.com', '["75257", "60292", "76161"]', 'Star Wars', 3000),
  ('LegoFan456', 'legofan456@example.com', '["75211", "60295", "76165"]', 'Super Heroes', 4000),
  ('BrickMaster', 'brickmaster@example.com', '["76139", "10307"]', 'Super Heroes', 5600),
  ('NinjaFan007', 'ninjafan007@example.com', '["10307"]', 'Teenage Mutant Ninja Turtles', 1700);
