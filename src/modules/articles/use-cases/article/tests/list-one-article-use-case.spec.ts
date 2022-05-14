
import { AppError } from "@shared/errors/appError";
import { ArticleInMemoryRepository } from "@modules/articles/repositories/in-memory/ArticleInMemoryRepository";

import { faker } from '@faker-js/faker';

import { IArticleCreateDTO } from "@modules/articles/dtos/ICreateArticleDTO";
import { CreateArticleUseCase } from "../create-article-use-case";
import { ListOneArticleUseCase } from "../list-one-article-use-case";


let listOneArticleUseCase: ListOneArticleUseCase;
let articleInMemoryRepository: ArticleInMemoryRepository;
let createArticleUseCase: CreateArticleUseCase;

describe("list one article use case test", () => {

  beforeEach(() => {
    articleInMemoryRepository = new ArticleInMemoryRepository();
    listOneArticleUseCase = new ListOneArticleUseCase(articleInMemoryRepository);
    createArticleUseCase = new CreateArticleUseCase(articleInMemoryRepository);
  })

  it("should able list one article", async () => {
    const articleCreate: IArticleCreateDTO = {
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

    await createArticleUseCase.execute(articleCreate);

    const article = await listOneArticleUseCase.execute(1);

    expect(article).toHaveProperty("id");
  })

  it("should not able list one article", async () => {
    expect(async () => {
      await listOneArticleUseCase.execute(200);

    }).rejects.toBeInstanceOf(AppError);
  })
})