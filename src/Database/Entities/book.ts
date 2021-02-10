import {
    Entity, 
    PrimaryGeneratedColumn,
    Column} 
from 'typeorm';


@Entity('books')
class Book {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    ISBN: string;

    @Column()
    title: string;

    @Column()
    subtitle: string;

    @Column()
    price: number;

    @Column()
    description: string;
}

export default Book;

