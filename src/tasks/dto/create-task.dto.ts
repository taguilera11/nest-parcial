import { Transform, TransformFnParams } from 'class-transformer';
import {
  IsBoolean,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

const trim = ({ value }: TransformFnParams): unknown =>
  typeof value === 'string' ? value.trim() : value;

export class CreateTaskDto {
  @Transform(trim)
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @Transform(trim)
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @IsMongoId()
  userId: string;
}
