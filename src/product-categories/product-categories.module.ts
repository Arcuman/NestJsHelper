import { Module } from '@nestjs/common';
import ProductCategoriesService from './product-categories.service';
import ProductCategoriesController from './product-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import ProductCategory from './productCategory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCategory])],
  controllers: [ProductCategoriesController],
  providers: [ProductCategoriesService],
})
export class ProductCategoriesModule {}
