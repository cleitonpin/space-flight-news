import { Article } from '../../../../modules/articles/infra/entities/Article';
import { articlesService } from '../../../../services/articles';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding'

export default class CreateArticles implements Seeder {
  public async run(factory: Factory, conn: Connection): Promise<any> {
    const articles = (
      await articlesService('articles', {
        params: {
          _start: 0,
          _sort: 'id',
          _limit: '100000',
        },
      })
    ).data;

    console.log(articles[0]);
    for (const article of articles) {
      await conn
        .createQueryBuilder()
        .insert()
        .into(Article)
        .values(article)
        .execute();
    }
  }
}