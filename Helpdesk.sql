drop database if exists IT_helpdesk;
create database IT_helpdesk;
use IT_helpdesk;





create table ticket (
    ticket_id int NOT NULL AUTO_INCREMENT,
    requester varchar(50),
    problemdetails varchar(50),
    phone varchar(15),
    email varchar(255),
    resolved bool,
    resolvedby varchar(30),
    resnotes varchar(500),
    isfavorite bool,
    PRIMARY KEY (ticket_id)
);





create table user (
    user_id INT NOT NULL AUTO_INCREMENT,
    user_name varchar(30),
    user_email varchar(50),
    PRIMARY KEY (user_id)
);





create table favorites (
    favorite_id INT NOT NULL AUTO_INCREMENT,
    ticketid int,
    personid int,
    FOREIGN KEY (ticketid) references ticket(ticket_id),
    FOREIGN KEY (personid) references user(user_id),
    PRIMARY KEY (favorite_id)
);




insert into user (user_name, user_email) values ('Al Camargo', 'alcamargo@rocketmortgage.com');
insert into user (user_name, user_email) values ('Eddie Osmanbasic', 'eddieosmanbasic@rocketmortgage.com');
insert into user (user_name, user_email) values ('AJ Willsea', 'ajwillsea@rocketmortgage.com');





insert into ticket (requester, problemdetails, phone, email, resolved, resolvedby, resnotes, isfavorite) values ('Jeff Cogswell', 'wifi connection', '517-555-5555', 'jcogswell@no.com', false, '', '', false);
insert into ticket (requester, problemdetails, phone, email, resolved, resolvedby, resnotes, isfavorite) values ('Riley Shirk', 'Angular Install', '313-123-5555', 'rileyshirk@rocketmortgage.com', true, 'Eddie', 'Had user restart', true);



insert into favorites (ticketid, personid) values (1, 1);
insert into favorites (ticketid, personid) values (2, 1);
insert into favorites (ticketid, personid) values (1, 2);
insert into favorites (ticketid, personid) values (2, 2);
insert into favorites (ticketid, personid) values (1, 3);
insert into favorites (ticketid, personid) values (2, 3);

