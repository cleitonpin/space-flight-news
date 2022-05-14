import { Article } from "@modules/articles/infra/entities/Article";
import { IArticleRepository } from "@modules/articles/repositories/IArticleRepository";
import { AppError } from "@shared/errors/appError";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateArticleUseCase {
  constructor(
    @inject("ArticlesRepositories")
    private userRepository: IArticleRepository
  ) { }

  public async execute(id: number, data: any): Promise<Article> {
    const article = await this.userRepository.findById(id)

    if (!article) {
      throw new AppError("Article not found");
    }

    return await this.userRepository.update(id, data);
  }
}

export { UpdateArticleUseCase };