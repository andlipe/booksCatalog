import { BooksSeed } from "../seeds/book.seed";
import {getRepository, MigrationInterface, QueryRunner} from "typeorm";

export class SeedBooks1613053519492 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await getRepository("books").save(BooksSeed)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
