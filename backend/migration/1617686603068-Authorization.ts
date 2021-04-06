import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Authorization1617686603068 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "User",
            columns: [
                {
                    name: "id",
                    type: "serial",
                    isPrimary: true,
                    generationStrategy: "increment"
                },
                {
                    name: "username",
                    type: "varchar",
                },
                {
                    name: "password",
                    type: "varchar",
                },
                {
                    name: "createdAt",
                    type: "timestamp",
                    default: 'now()'
                }
            ]
        }), true);

        await queryRunner.query(`INSERT INTO "User" ("username", "password") VALUES ('admin', 'admin');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("User");
    }

}
