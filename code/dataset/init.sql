  CREATE TABLE IF NOT EXISTS DEGREE (
    COD_DEGREE varchar(10) PRIMARY KEY,
    TITLE_DEGREE varchar(50) NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS student (
    id varchar(30) PRIMARY KEY,
    surname varchar(100) not NULL,
    name varchar(100) NOT NULL,
    gender varchar(1) NOT NULL,
    nationality varchar(20) NOT NULL,
    email varchar(50) NOT NULL,
    COD_DEGREE varchar(10) NOT NULL,
    ENROLLMENT_YEAR int NOT NULL,
    FOREIGN KEY (COD_DEGREE) references DEGREE(COD_DEGREE)
 );

 
  CREATE TABLE IF NOT EXISTS TEACHER (
    id varchar(30) PRIMARY KEY,
    surname varchar(100) not NULL,
    name varchar(100) NOT NULL,
    email varchar(50) NOT NULL,
    COD_GROUP varchar(10) NOT NULL,
    COD_DEPARTMENT varchar(10) NOT NULL
 );
 
  CREATE TABLE IF NOT EXISTS CO_SUPERVISOR(
   id varchar(30) PRIMARY KEY,
   surname varchar(100) not NULL,
   name varchar(100) NOT NULL,
   email varchar(50) NOT NULL
  );
 
  CREATE TABLE IF NOT EXISTS THESIS_PROPOSAL (
   id serial PRIMARY KEY,
   title varchar(50) NOT NULL,
   SUPERVISOR_id varchar(30) NOT NULL,
   COSUPERVISOR_id varchar(30) NOT NULL,
   keywords varchar(50) not NULL,
   type varchar(30) NOT NULL,
   groups varchar(20) NOT NULL,         /* SHOULD BE CLARIFIED */
   description varchar(200) NOT NULL,
   required_knowledge varchar(50) NOT NULL,
   notes varchar(200),
   level varchar(5) NOT NULL,
   programme varchar(30) NOT NULL,        /* SHOULD BE CLARIFIED */
   deadline date NOT NULL,
   status varchar(10) not NULL,
   FOREIGN KEY (SUPERVISOR_ID) references TEACHER(id),
   FOREIGN KEY (COSUPERVISOR_ID) references CO_SUPERVISOR(id)
  );

  CREATE TABLE IF NOT EXISTS THESIS_APPLICATION (
    student_id varchar(30) NOT NULL,
    thesis_id serial NOT NULL,
    status varchar(10) NOT NULL DEFAULT 'idle',
    cv_uri varchar(250),
    FOREIGN KEY (student_id) references student(id),
    FOREIGN KEY (thesis_id) references THESIS_PROPOSAL(id),
    PRIMARY KEY (student_id, thesis_id)
  );

  CREATE TABLE IF NOT EXISTS CAREER (
    student_id varchar(30) NOT NULL,
    COD_COURSE varchar(15) NOT NULL,
    TITLE_COURSE varchar(30) NOT NULL,
    CFU int NOT NULL,
    GRADE int NOT NULL,
    ddate date NOT NULL,
    FOREIGN KEY (student_id) references student(id),
    PRIMARY KEY (student_id, COD_COURSE)
  );

  INSERT INTO DEGREE (COD_DEGREE, TITLE_DEGREE) values (
    'LM-32', 'Computer Engineering'
  );

  INSERT INTO DEGREE (COD_DEGREE, TITLE_DEGREE) values (
    'LM-19', 'Chemical Engineering'
  );

  INSERT INTO DEGREE (COD_DEGREE, TITLE_DEGREE) values (
    'LM-21', 'Biomedical Engineering'
  );

  INSERT INTO student(id,name,surname,gender,nationality,email,COD_DEGREE,ENROLLMENT_YEAR) values (
    's123','Marco','Rossi','M','italian','marco.rossi@email.com','LM-32',2019
  );

  INSERT INTO student(id,name,surname,gender,nationality,email,COD_DEGREE,ENROLLMENT_YEAR) values (
    's124','Federica','Verdi','F','italian','federica.verdi@email.com','LM-19',2022
  );

  INSERT INTO student(id,name,surname,gender,nationality,email,COD_DEGREE,ENROLLMENT_YEAR) values (
    's125','Josh','Page','M','usa','josh.page@email.com','LM-21',2018
  );
  
  INSERT INTO TEACHER(id, surname, name, email, COD_GROUP, COD_DEPARTMENT) values (
    't123', 'Bini', 'Enrico', 'bini.enrico@unito.it', 'G123', 'D123'
  );
   
 INSERT INTO TEACHER(id, surname, name, email, COD_GROUP, COD_DEPARTMENT) values (
    't124', 'Sereno', 'Matteo', 'sereno.matteo@unito.it', 'G123', 'D123'
  );
    
 INSERT INTO CO_SUPERVISOR(id, surname, name, email) values (
    'c123', 'Rossi', 'Andrea', 'rossi.andrea@email.it'
  );
  
 INSERT INTO CO_SUPERVISOR(id, surname, name, email) values (
    'c124', 'Neri', 'Marco', 'neri.marco@email.it'
  );
  
 INSERT INTO THESIS_PROPOSAL(title, SUPERVISOR_ID, COSUPERVISOR_ID, 
                              keywords, type, groups, description, 
                              required_knowledge, notes, level, programme, 
                              deadline, status) VALUES ('Title of Thesis One', 't123', 'c123', 'Chemistry', 'Industrial and work', 'Chemistry',
                                                        'Just a simple chemistry thesis', 'None', '', 'MSc', 'Degree in Chemistry',
                                                        '2023-12-31', 'active');

 INSERT INTO THESIS_PROPOSAL(title, SUPERVISOR_ID, COSUPERVISOR_ID, 
                              keywords, type, groups, description, 
                              required_knowledge, notes, level, programme, 
                              deadline, status) VALUES ('Title of Thesis Two', 't124', 'c123', 'Computer Science,AI,Deep Learning', 'In-company work', 'Cloud Computing',
                                                        'Just a simple computer engineering thesis', 'None', '', 'MSc', 'Degree in Computer Engineering',
                                                        '2024-01-01', 'active');

 INSERT INTO THESIS_APPLICATION(student_id, thesis_id, status, 
                              cv_uri) VALUES ('s125', 1, 'idle', '');