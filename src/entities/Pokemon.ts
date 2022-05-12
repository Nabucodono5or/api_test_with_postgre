import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("pokemon")
export class Pokemon {

    @PrimaryColumn()
    id: string;

    @Column()
    number: number;
    
    @Column()
    name: string;

    @Column()
    type1: string;

    @Column()
    type2: string;

    @Column()
    hp: number;

    @Column()
    attack: number;

    @Column()
    defense: number;

    @Column({ name: "sp. atk" })
    spAtk: number;

    @Column({ name: "sp. def" })
    spDef: number;

    @Column()
    speed: number;

    @Column()
    generation: number;

    @Column()
    legendary: boolean;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}
