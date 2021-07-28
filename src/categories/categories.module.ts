import { Module } from '@nestjs/common';
import CategoriesService from './categories.service';
import CategoriesController from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Category from './category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoriesController],
  exports: [CategoriesService],
  providers: [CategoriesService],
})
export class CategoriesModule {}