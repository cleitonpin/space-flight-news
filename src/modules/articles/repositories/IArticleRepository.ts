import { IArticleCreateDTO } from "../dtos/ICreateArticleDTO";
import { Article } from "../infra/entities/Article";

export interface IArticleRepository {
  findAll(skip?: number, take?: number): Promise<Article[]>;
  findById(id: number): Promise<Article | undefined>;
  create(article: IArticleCreateDTO): Promise<Article>;
  update(id: number, article: Article): Promise<Article>;
  delete(id: number): Promise<void>;
}