import { Column, PrimaryColumn, BeforeInsert, Entity } from "typeorm";

const { nanoid } = require("nanoid")

@Entity('users')
export class User {

        @PrimaryColumn()
        id: string;

        @Column()
        name: string;
    
        @Column()
        email: string;
        
        @Column()
        age: string;

        @BeforeInsert()
        generateId() {
            this.id = `dev_${nanoid()}`
        }
}
