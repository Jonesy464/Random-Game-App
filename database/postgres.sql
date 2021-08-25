CREATE DATABASE IF NOT EXISTS mvp;

\c mvp;

DROP SCHEMA IF EXISTS games CASCADE;
CREATE SCHEMA games;

CREATE TABLE IF NOT EXISTS games.favorites (
  id SERIAL PRIMARY KEY,
  game_id INT NOT NULL,
  title VARCHAR (150) NOT NULL,
  platform VARCHAR (150) NOT NULL,
  genre VARCHAR (150) NOT NULL,
  short_description TEXT NOT NULL,
  freetogame_profile_url TEXT NOT NULL,
  thumbnail TEXT NOT NULL,
  developer VARCHAR (150) NOT NULL
);