import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";


@Entity("users")
export class Users {
    @PrimaryColumn()
    public id : number;

    @Column()
    public email: string;

    @Column()
    public phone: string;

    @Column()
    public  avatar: string;

    @Column()
    public  password: string;

    @Column()
    public  provider: string;

    @Column()
    public username: string;



}
