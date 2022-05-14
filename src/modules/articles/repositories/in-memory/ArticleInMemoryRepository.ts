
import { IArticleCreateDTO } from "@modules/articles/dtos/ICreateArticleDTO";
import { Article } from "@modules/articles/infra/entities/Article";
import { AppError } from "@shared/errors/appError";
import { IArticleRepository } from "../IArticleRepository";


class ArticleInMemoryRepository implements IArticleRepository {
  private articles: Article[] = [];

  public async create({
    featured,
    events,
    imageUrl,
    launches,
    newsSite,
    publishedAt,
    summary,
    title,
    url
  }: IArticleCreateDTO): Promise<Article> {
    const article = new Article();

    Object.assign(article, {
      id: this.articles.length + 1, featured,
      events,
      imageUrl,
      launches,
      newsSite,
      publishedAt,
      summary,
      title,
      url
    });

    this.articles.push(article);

    return article;
  }

  public async findById(id: number): Promise<Article | undefined> {
    const article = this.articles.find(article => article.id === id);

    return article;
  }


  public async findAll(skip?: number, take?: number): Promise<Article[]> {
    return this.articles;
  }

  public async update(id: number, article: Article): Promise<Article> {
    const index = this.articles.findIndex(a => a.id === id);

    if (index === -1) {
      throw new AppError("Article not found");
    }

    const newArticle = this.articles[index] = { ...this.articles[index], ...article };

    return newArticle;
  }

  public async delete(id: number): Promise<void> {
    const index = this.articles.findIndex(a => a.id === id);

    if (index === -1) {
      throw new AppError("Article not found");
    }

    this.articles.splice(index, 1);
  }
}

export { ArticleInMemoryRepository };