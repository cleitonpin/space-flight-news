import { Article } from "@modules/articles/infra/entities/Article";
import { IArticleRepository } from "@modules/articles/repositories/IArticleRepository";
import { AppError } from "@shared/errors/appError";
import { articlesService } from "services/articles";
import { inject, injectable } from "tsyringe";

@injectable()
class ListOneArticleUseCase {
  constructor(
    @inject("ArticlesRepositories")
    private userRepository: IArticleRepository
  ) { }

  public async execute(id: number): Promise<Article> {
    const article = await this.userRepository.findById(id);

    if (!article) {
      throw new AppError("Article not found");
    }

    return article;
  }
}

export { ListOneArticleUseCase }