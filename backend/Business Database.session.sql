CREATE TABLE users (
    id VARCHAR(6) PRIMARY KEY,
    username VARCHAR(255) NOT NULL
);

CREATE TABLE business (
    id VARCHAR(6) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    price_score NUMERIC(3,1) NOT NULL,
    avg_rating NUMERIC(3,1) NOT NULL,
    description TEXT NOT NULL,
    featured BOOLEAN NOT NULL,
    uploader VARCHAR(6) NOT NULL,
    FOREIGN KEY (uploader) REFERENCES users(id)
);

CREATE TABLE review (
    id VARCHAR(6) PRIMARY KEY,
    content TEXT NOT NULL,
    score NUMERIC(3,1) NOT NULL,
    uploader VARCHAR(6) NOT NULL,
    business_id VARCHAR(6) NOT NULL,
    FOREIGN KEY (uploader) REFERENCES users(id),
    FOREIGN KEY (business_id) REFERENCES business(id)
);


