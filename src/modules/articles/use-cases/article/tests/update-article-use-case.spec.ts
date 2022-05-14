
import { AppError } from "@shared/errors/appError";
import { ArticleInMemoryRepository } from "@modules/articles/repositories/in-memory/ArticleInMemoryRepository";
import { CreateArticleUseCase } from "../create-article-use-case";
import { faker } from '@faker-js/faker';
import { UpdateArticleUseCase } from "../update-article-use-case";

let updateArticleUseCase: UpdateArticleUseCase;
let createArticleUseCase: CreateArticleUseCase;
let articleInMemoryRepository: ArticleInMemoryRepository;

describe("update article use case test", () => {

  beforeEach(() => {
    articleInMemoryRepository = new ArticleInMemoryRepository();
    updateArticleUseCase = new UpdateArticleUseCase(articleInMemoryRepository);
    createArticleUseCase = new CreateArticleUseCase(articleInMemoryRepository);
  })

  it("should update a article", async () => {
    const article = await createArticleUseCase.execute({
      featured: faker.datatype.boolean(),
      events: [],
      imageUrl: faker.image.imageUrl(),
      launches: [],
      newsSite: faker.random.word(),
      publishedAt: faker.date.recent(),
      summary: faker.random.words(),
      title: faker.random.words(),
      url: faker.internet.url()
    });

    const articleUpdated = await updateArticleUseCase.execute(article.id, {
      featured: faker.datatype.boolean(),
      events: [faker.random.word()],
      imageUrl: faker.image.imageUrl()
    });

    expect(articleUpdated.id).toBe(article.id);
  })

  it("should throw an error if article not found", async () => {
    await expect(updateArticleUseCase.execute(1, {
      featured: faker.datatype.boolean(),
      events: [],
      imageUrl: faker.image.imageUrl(),
      launches: [],
      newsSite: faker.random.word(),
      publishedAt: faker.date.recent(),
      summary: faker.random.words(),
      title: faker.random.words(),
      url: faker.internet.url()
    })).rejects.toBeInstanceOf(AppError);
  })
})