import { Article } from "@modules/articles/infra/entities/Article";
import { IArticleRepository } from "@modules/articles/repositories/IArticleRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListAllArticleUseCase {
  constructor(
    @inject("ArticlesRepositories")
    private userRepository: IArticleRepository
  ) { }

  public async execute(skip: number, take: number): Promise<Article[]> {
    const articles = await this.userRepository.findAll(skip, take);
    return articles;
  }
}

export { ListAllArticleUseCase }