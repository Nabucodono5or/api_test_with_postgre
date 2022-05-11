import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTrainer1652278489627 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "trainer",
            columns: [{
                name: "id",
                type: "uuid",
                isPrimary: true
            },{
                name: "name",
                type: "varchar",
                isNullable: false
            },{
                name: "age",
                type: "numeric"
            },{
                name: "city",
                type: "varchar"
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("trainer")
    }
}
