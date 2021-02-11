import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBook1612918957971 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'book',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'ISBN',
                        type: 'varchar(30)',
                        isNullable: false,
                    },
                    {
                        name: 'title',
                        type: 'varchar(100)',
                        isNullable: false,
                    },
                    {
                        name: 'subtitle',
                        type: 'varchar(100)',
                    },
                    {
                        name: 'price',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'description',
                        type: 'varchar(1000)',
                        isNullable: false,
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('books');
    }

}
