import { IArticleCreateDTO } from "@modules/articles/dtos/ICreateArticleDTO";
import { IArticleRepository } from "@modules/articles/repositories/IArticleRepository";
import { getRepository, Repository } from "typeorm";
import { Article } from "../entities/Article";

export class ArticleRepository implements IArticleRepository {
  private repository: Repository<Article>;

  constructor() {
    this.repository = getRepository(Article);
  }

  public async create({
    featured,
    title,
    url,
    imageUrl,
    newsSite,
    summary,
    publishedAt,
    launches,
    events
  }: IArticleCreateDTO): Promise<Article> {
    const article = this.repository.create({
      featured,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      publishedAt,
      launches,
      events
    });

    return await this.repository.save(article);
  }

  public async findAll(skip: number, take: number): Promise<Article[]> {
    return this.repository.find({ skip, take });
  }

  public async findById(id: number): Promise<Article | undefined> {
    return this.repository.findOne(id);
  }

  public async update(id: number, article: Article): Promise<Article> {
    article.id = id;
    return await this.repository.save(article);
  }

  public async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}