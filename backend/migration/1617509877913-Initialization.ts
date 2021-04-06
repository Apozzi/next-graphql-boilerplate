import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class Initialization1617509877913 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Person",
            columns: [
                {
                    name: "id",
                    type: "serial",
                    isPrimary: true,
                    generationStrategy: "increment"
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "address",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "email",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "birthDate",
                    type: "timestamp",
                },
                {
                    name: "phoneNumber",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "createdAt",
                    type: "timestamp",
                    default: 'now()'
                },
                {
                    name: "updatedAt",
                    type: "timestamp",
                    isNullable: true
                }
            ]
        }), true);

        await queryRunner.createTable(new Table({
            name: "Event",
            columns: [
                {
                    name: "id",
                    type: "serial",
                    isPrimary: true,
                    generationStrategy: "increment"
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "maxNumberOfGuests",
                    type: "int",
                },
                {
                    name: "date",
                    type: "timestamp",
                    isNullable: true
                },
                {
                    name: "createdAt",
                    type: "timestamp",
                    default: 'now()'
                },
                {
                    name: "updatedAt",
                    type: "timestamp",
                    isNullable: true
                }
            ]
        }), true);

        await queryRunner.createTable(new Table({
            name: "PersonInEvent",
            columns: [
                {
                    name: "id",
                    type: "serial",
                    isPrimary: true,
                    generationStrategy: "increment"
                },
                {
                    name: "personId",
                    type: "int",
                },
                {
                    name: "eventId",
                    type: "int",
                },
                {
                    name: "createdAt",
                    type: "timestamp",
                    default: 'now()'
                }
            ]
        }), true);

        await queryRunner.createForeignKey("PersonInEvent", new TableForeignKey({
            columnNames: ["personId"],
            referencedColumnNames: ["id"],
            referencedTableName: "Person",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("PersonInEvent", new TableForeignKey({
            columnNames: ["eventId"],
            referencedColumnNames: ["id"],
            referencedTableName: "Event",
            onDelete: "CASCADE"
        }));


        /* Registros das tabelas */
        await queryRunner.query(`INSERT INTO "Person" ("name", "address", "email", "birthDate", "phoneNumber") VALUES ('Rodrigo', 'Rua Pedro II', 'rodrigo@gmail.com', '10/11/1997', '(47) 9911229729');`);
        await queryRunner.query(`INSERT INTO "Person" ("name", "address", "email", "birthDate", "phoneNumber") VALUES ('Almenara', 'Rua Max Fride', 'almenara@gmail.com', '01/01/1992', '(47) 9915225729');`);
        await queryRunner.query(`INSERT INTO "Person" ("name", "address", "email", "birthDate", "phoneNumber") VALUES ('Jessica', 'Rua Tec Jordan', 'jessica@gmail.com', '01/05/1982', '(47) 9911224729');`);
        await queryRunner.query(`INSERT INTO "Person" ("name", "address", "email", "birthDate", "phoneNumber") VALUES ('Teresa', 'Rua Pedro IV', 'teresa@gmail.com', '01/05/1992', '(47) 9981226729');`);

        await queryRunner.query(`INSERT INTO "Event" ("name", "description", "maxNumberOfGuests", "date") VALUES ('Pascoa', 'Feriado nacional da pascoa', 20, '04/04/2020');`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("PersonInEvent");
        const foreignKeyPerson = table.foreignKeys.find(fk => fk.columnNames.indexOf("personId") !== -1);
        const foreignKeyEvent = table.foreignKeys.find(fk => fk.columnNames.indexOf("eventId") !== -1);
        await queryRunner.dropForeignKey("PersonInEvent", foreignKeyPerson);
        await queryRunner.dropForeignKey("PersonInEvent", foreignKeyEvent);
        await queryRunner.dropTable("PersonInEvent");
        await queryRunner.dropTable("Person");
        await queryRunner.dropTable("Event");
    }
}
