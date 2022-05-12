import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTeam1652364433501 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "team",
            columns: [{
                name: "trainer_id",
                type: "uuid",
                isPrimary: true
            }, {
                name: "pokemon_id",
                type: "uuid",
                isPrimary: true
            }],
            foreignKeys: [
                {
                    name: "fk_pokemon",
                    columnNames: ["pokemon_id"],
                    referencedTableName: "pokemon",
                    referencedColumnNames: ["id"]
                },{
                    name: "fk_trainer",
                    columnNames: ["trainer_id"],
                    referencedTableName: "trainer",
                    referencedColumnNames: ["id"]
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("team");
    }

}
