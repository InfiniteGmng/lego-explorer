USE legos;

INSERT INTO LegoSet (name, setNumber, theme, pieces, price, releaseYear, availability)
VALUES 
  ('Millennium Falcon', '75257', 'Star Wars', 1351, 159.99, 2019, true),
  ('TIE Fighter', '75211', 'Star Wars', 469, 69.99, 2018, true);

INSERT INTO UserInfo (username, email, setsOwned, favoriteTheme, totalPieces)
VALUES 
  ('LegoFan123', 'legofan123@example.com', '["75257", "60292", "76161"]', 'Star Wars', 3000),
  ('LegoFan456', 'legofan456@example.com', '["75211", "60295", "76165"]', 'Super Heroes', 4000);
