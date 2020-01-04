CREATE TABLE IF NOT EXISTS projects(
  id            integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  name          text NOT NULL CHECK (name <> ''), 
  -- CHECK name <> ''     -> Un string que no sea vacio
  priority      integer NOT NULL,
  description   text,
  deliverydate  date NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks(

  id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  name text NOT NULL CHECK (name <> ''),
  done boolean,
  projectID INTEGER REFERENCES projects(id)
);


INSERT INTO projects( name, priority, description , deliverydate)
      VALUES ('Make a Wep App', 1 , 'Using Javscript', '2019-05-12');


INSERT INTO tasks(name, done, projectID)
VALUES('Download VueJs',false,1);

INSERT INTO tasks(name, done, projectID)
VALUES('Download NodeJs',false,1);

INSERT INTO tasks(name, done, projectID)
VALUES('Download Posgree',true,2);

INSERT INTO tasks(name, done, projectID)
VALUES('Download Electron',false,3);