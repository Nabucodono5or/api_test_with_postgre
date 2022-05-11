import { MigrationInterface, QueryRunner, Table } from "typeorm";
// #,Name,Type 1,Type 2,Total,HP,Attack,Defense,Sp. Atk,Sp. Def,Speed,Generation,Legendary
export class CreatePokemon1652275866232 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "pokemon",
            columns: [{
                name: "id",
                type: "uuid",
                isPrimary: true
            },{
                name: "number",
                type: "numeric"
            },{
                name: "name",
                type: "varchar"
            },{
                name: "type1",
                type: "varchar"
            }, {
                name: "type2",
                type: "varchar"
            },{
                name: "hp",
                type: "numeric" 
            },{
                name: "attack",
                type: "numeric"
            },{
                name: "defense",
                type: "numeric"
            }, {
                name: "sp. atk",
                type: "numeric"
            }, {
                name: "sp. def",
                type: "numeric"
            },{
                name: "speed",
                type: "numeric"
            },{
                name: "generation",
                type: "numeric"
            },{
                name: "legendary",
                type: "boolean"
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pokemon");
    }

}
