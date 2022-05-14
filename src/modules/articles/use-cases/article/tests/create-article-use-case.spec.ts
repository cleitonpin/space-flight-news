
import { AppError } from "@shared/errors/appError";
import { ArticleInMemoryRepository } from "@modules/articles/repositories/in-memory/ArticleInMemoryRepository";
import { CreateArticleUseCase } from "../create-article-use-case";
import { IArticleCreateDTO } from "@modules/articles/dtos/ICreateArticleDTO";
import { faker } from '@faker-js/faker';


let createArticleUseCase: CreateArticleUseCase;
let articleInMemoryRepository: ArticleInMemoryRepository;

describe("create category use case test", () => {

  beforeEach(() => {
    articleInMemoryRepository = new ArticleInMemoryRepository();
    createArticleUseCase = new CreateArticleUseCase(articleInMemoryRepository);
  })

  it("should create a article", async () => {
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

    const articles = await articleInMemoryRepository.findAll(0, 10);

    expect(articles).toHaveLength(1);
  })
})