import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../app.service';
import { Category } from '../../models/Category';

@Component({
  selector: 'app-handle-categories',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './handle-categories.component.html',
  styleUrl: './handle-categories.component.css'
})
export class HandleCategoriesComponent implements OnInit{
  categories: Category[] = [];
  newCategory: string = '';
  editedCategory: Category | null = null;
  editedCategoryIndex: number = -1;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.appService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  addCategory(): void {
    if (this.newCategory.trim() !== '') {
      this.appService.addCategory(this.newCategory.trim()).subscribe(response => {
        this.newCategory = '';
        this.loadCategories();
      });
    }
  }

  editCategory(category: Category): void {
    const newName = prompt('Enter the new category name:', category.name);
    if (newName !== null) {
      category.name = newName;
      this.appService.updateCategory(category.id, category).subscribe(() => {
        this.loadCategories();
      });
    }
  }

  deleteCategory(categoryId: number): void {
    this.appService.deleteCategory(categoryId).subscribe(() => {
      this.loadCategories();
    });
  }

}
