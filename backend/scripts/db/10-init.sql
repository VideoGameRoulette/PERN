CREATE DATABASE userdb OWNER postgres;
\c userdb;
CREATE TABLE IF NOT EXISTS users(
    u_id UUID PRIMARY KEY,
    username VARCHAR(24),
    retro JSON
    created_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE,
);