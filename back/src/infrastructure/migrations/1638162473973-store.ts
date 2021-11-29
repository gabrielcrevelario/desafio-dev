import { MigrationInterface, QueryRunner } from 'typeorm'

export class store1638162473973 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('create table `store`(`id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,   `type` varchar(2),   `dateStart` datetime,    `value` double,   `cpf` varchar(11),    `card` varchar(20),    `hour` varchar(10),    `storeOwner` varchar(20),   `nameStore` varchar(20))')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('store')
  }
}
