import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    public id : number;

    @Column({default: ""})
    public name: string

    @Column({default: ""})
    public email: string

    @Column({default: ""})
    public phone: string

    @Column({default: ""})
    public  avatar: string

    @Column({default: ""})
    public  password: string

    @Column({default: ""})
    public  provider: string

}
