CREATE DATABASE IF NOT EXISTS userdb;

CREATE TABLE IF NOT EXISTS users(
    u_id UUID PRIMARY KEY,
    username VARCHAR(24),
    retro JSON
);