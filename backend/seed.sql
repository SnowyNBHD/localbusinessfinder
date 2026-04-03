
-- Insert users
INSERT INTO users (id, username) VALUES
	('000000', 'Medicalert'),
	('000001', 'SnowyNBHD'),
	('000002', 'SimplyD'),
	('000003', 'Jeff'),
	('000004', 'Bill'),
	('000005', 'Bob');

-- Insert businesses
INSERT INTO business (id, name, type, price_score, avg_rating, description, featured, uploader) VALUES
	('000000', 'McDonalds', 'Dining', 1.0, 2.5, 'Fast-Food Restaurant', TRUE, '000004'),
	('000001', 'Adenza Di Zeka', 'Dining', 2.6, 5.0, 'Italian Fine-Dining', TRUE, '000000'),
	('000002', 'Walmart', 'Shopping', 1.8, 4.0, 'Corporate greed run unchecked', FALSE, '000002'),
	('000003', 'Burger Joint', 'Dining', 2.0, 5.0, 'Theres a burger.', TRUE, '000003');

-- Insert reviews
INSERT INTO review (id, content, score, uploader, business_id) VALUES
	('000000', 'This place blows.', 2.0, '000000', '000000'),
	('000001', 'Not too shabby', 3.0, '000001', '000000'),
	('000002', 'Immaculate.', 5.0, '000002', '000001'),
	('000003', 'I love capitalism!!!', 4.0, '000003', '000002'),
	('000004', 'Very good burgers.', 5.0, '000004', '000003');
