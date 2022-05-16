import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateArticle1652113012446 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('articles').then(async () => {
      await queryRunner.createTable(new Table({
        name: 'articles',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isGenerated: true,
            generatedIdentity: 'ALWAYS',
            isPrimary: true,
          },
          {
            name: 'featured',
            type: 'boolean',
            isNullable: true
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'url',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'imageUrl',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'newsSite',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'summary',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'publishedAt',
            type: 'timestamp',
            isNullable: true
          },
          {
            name: 'launches',
            type: 'text',
            isNullable: true
          },
          {
            name: 'events',
            type: 'text',
            isNullable: true
          }
        ]
      }))
    })
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropDatabase('articles')
    await queryRunner.dropTable('articles');
  }
}
