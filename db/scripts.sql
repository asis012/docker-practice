
CREATE TABLE user
(
    id INT
    AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR
    (255) NOT NULL,
    last_name VARCHAR
    (255),
    email VARCHAR
    (255)
);

    INSERT INTO user
        (first_name, last_name, email)
    VALUES
        ('Ram', 'a', 'ram @gmail.com'),
        ('Sita', 'b', 'sita@gmail.com'),

        ('Gita', 'c', 'gita@gmail.com');
