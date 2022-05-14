
import { AppError } from "@shared/errors/appError";
import { ArticleInMemoryRepository } from "@modules/articles/repositories/in-memory/ArticleInMemoryRepository";
import { CreateArticleUseCase } from "../create-article-use-case";
import { faker } from '@faker-js/faker';
import { DeleteArticleUseCase } from "../delete-article-use-case";

let deleteArticleUseCase: DeleteArticleUseCase;
let createArticleUseCase: CreateArticleUseCase;
let articleInMemoryRepository: ArticleInMemoryRepository;

describe("delete article use case test", () => {

  beforeEach(() => {
    articleInMemoryRepository = new ArticleInMemoryRepository();
    deleteArticleUseCase = new DeleteArticleUseCase(articleInMemoryRepository);
    createArticleUseCase = new CreateArticleUseCase(articleInMemoryRepository);
  })

  it("should delete a article", async () => {
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

    const articleDeleted = await deleteArticleUseCase.execute(article.id);

    expect(articleDeleted).toBe(void 0);
  })

  it("should throw an error if article not found", async () => {
    await expect(deleteArticleUseCase.execute(1)).rejects.toBeInstanceOf(AppError);
  })
})