USE legos;

INSERT INTO LegoSet (name, setNumber, theme, pieces, price, releaseYear, availability)
VALUES ('Millennium Falcon', '75257', 'Star Wars', 1351, 159.99, 2019, true);

INSERT INTO UserInfo (username, email, setsOwned, favoriteTheme, totalPieces)
VALUES ('LegoFan123', 'legofan123@example.com', '["75257", "60292", "76161"]', 'Star Wars', 3000);
