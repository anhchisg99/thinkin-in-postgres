create table tasks (
     id SERIAL PRIMARY KEY,
    title varchar(20),
    content varchar(255),
    isCheck bool
)

-- insert into tasks(title,content,isCheck) values('cuong','cuoi',true);

/Users/leduonganhchi/Desktop/Gargare/thinking-in-postgres/config/init.sql