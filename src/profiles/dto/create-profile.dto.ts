import { IsString, Length } from 'class-validator';

export class CreateProfileDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Length(3, 100)
  name: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  description: string;
}
