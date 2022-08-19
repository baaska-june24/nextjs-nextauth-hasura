SET check_function_bodies = false;
INSERT INTO "user".roles (id, role_name, role_priority) VALUES (1, 'admin', 1);
INSERT INTO "user".roles (id, role_name, role_priority) VALUES (2, 'user', 2);
SELECT pg_catalog.setval('"user".roles_id_seq', 2, true);
