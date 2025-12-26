import { IsString, MinLength } from 'class-validator';

export class UpdateProfileDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @MinLength(3)
  name: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  description: string;
}
