INSERT INTO ROLES (role_name, enable) VALUES('staff', 1);
INSERT INTO ROLES (role_name, enable) VALUES('user', 1);


INSERT INTO USERS (name, surname, email, password, username, activated, create_date, role_id) VALUES('john', 'jackson', 'john@gmail.com', '$2y$10$PDYK3YFC7/UJCOgaiOQjWOGoAfKgRhKxleflK0g56qnblZ7HbONLS', 'john_j', 1, CURRENT_TIMESTAMP, 3);

INSERT INTO USERS (name, surname, email, password, username, activated, create_date, role_id) VALUES('jack', 'johnson', 'jack@gmail.com', '$2y$10$PDYK3YFC7/UJCOgaiOQjWOGoAfKgRhKxleflK0g56qnblZ7HbONLS', 'jack_j', 1, CURRENT_TIMESTAMP, 3);

INSERT INTO USERS (name, surname, email, password, username, activated, create_date, role_id) VALUES('jimmy', 'stevens', 'jimmy@gmail.com', '$2y$10$PDYK3YFC7/UJCOgaiOQjWOGoAfKgRhKxleflK0g56qnblZ7HbONLS', 'jimmy_j', 1, CURRENT_TIMESTAMP, 3);

INSERT INTO USERS (name, surname, email, password, username, activated, create_date, role_id) VALUES('admin', 'admin', 'admin@gmail.com', '$2y$10$PDYK3YFC7/UJCOgaiOQjWOGoAfKgRhKxleflK0g56qnblZ7HbONLS', 'admin', 1, CURRENT_TIMESTAMP, 1);

