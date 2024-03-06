import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() closeSidebarEvent = new EventEmitter<void>();
  
  closeSidebar() {
    this.closeSidebarEvent.emit();
  }
}
