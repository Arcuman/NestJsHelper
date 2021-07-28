import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  content?: string;
  title: string;
  categoriesId?: number[];

  @IsString({ each: true })
  @IsNotEmpty()
  paragraphs: string[];
}

export default CreatePostDto;
