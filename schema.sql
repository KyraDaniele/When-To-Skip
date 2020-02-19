Database triggerTest

-- TODO:
-- Users can rate media, view what they've rated, edit rating, comment on media, delete comment


CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    username VARCHAR (50) NOT NULL,
    rated
    commented
);

CREATE TABLE media (
    id SERIAL PRIMARY KEY,
    title varchar (200) NOT NULL,
    info varchar NOT NULL,
    category varchar NOT NULL,
    rating 
    comment
    user_id foreign key user(id)
);
