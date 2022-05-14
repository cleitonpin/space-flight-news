
import { AppError } from "@shared/errors/appError";
import { ArticleInMemoryRepository } from "@modules/articles/repositories/in-memory/ArticleInMemoryRepository";


import { faker } from '@faker-js/faker';
import { ListAllArticleUseCase } from "../list-all-article-use-case";
import { IArticleCreateDTO } from "@modules/articles/dtos/ICreateArticleDTO";
import { CreateArticleUseCase } from "../create-article-use-case";


let listAllArticleUseCase: ListAllArticleUseCase;
let articleInMemoryRepository: ArticleInMemoryRepository;
let createArticleUseCase: CreateArticleUseCase;

describe("list all articles use case test", () => {

  beforeEach(() => {
    articleInMemoryRepository = new ArticleInMemoryRepository();
    listAllArticleUseCase = new ListAllArticleUseCase(articleInMemoryRepository);
    createArticleUseCase = new CreateArticleUseCase(articleInMemoryRepository);
  })

  it("should able list all articles", async () => {
    const article: IArticleCreateDTO = {
      featured: faker.datatype.boolean(),
      events: [],
      imageUrl: faker.image.imageUrl(),
      launches: [],
      newsSite: faker.internet.domainName(),
      publishedAt: new Date(),
      summary: faker.lorem.sentence(),
      title: faker.lorem.sentence(),
      url: faker.internet.url()
    }

    await createArticleUseCase.execute(article);

    const articles = await listAllArticleUseCase.execute(0, 10);

    expect(articles).toHaveLength(1);
  })
})