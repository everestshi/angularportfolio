import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tag } from '../../models/tag';
import { TagService } from '../services/tag.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  constructor(private tagService: TagService) { }
 
  tags: Tag[] = [];
  selectedTags: Tag[] = [];
  

  getTags(): void {
    this.tags = this.tagService.getTags();
  }

  ngOnInit(): void {
    this.getTags();
  } 

  @Input() tagFilters: Tag[] | undefined;
  @Output() newTagFilterEvent = new EventEmitter<Tag[]>();

  setTagFilter(tag: Tag) {
    // Toggle the selection of the tag
    if (this.selectedTags.includes(tag)) {
      this.selectedTags = this.selectedTags.filter(selectedTag => selectedTag !== tag);
    } else {
      this.selectedTags.push(tag);
    }
    // Emit the selected tags
    this.newTagFilterEvent.emit(this.selectedTags);
  }

  getUniqueCategories(): string[] {
    return [...new Set(this.tags.map(tag => tag.category))];
  }

  updateSelectedTags(tags: Tag[]): void {
    this.selectedTags = [...tags]; // Update selected tags
    this.newTagFilterEvent.emit(this.selectedTags); // Notify parent component
  }
}
