CREATE TABLE place(
    id int primary key auto_increment,
    placeName varchar(120) not null,
    placeType char(10),
    lat decimal(15,9) not null,
    lng decimal(15,9) not null,
    imgUrl_1 varchar(100) not null,
    imgUrl_2 varchar(100),
    imgUrl_3 varchar(100),
    imgUrl_4 varchar(100),
    imgUrl_5 varchar(100)
);