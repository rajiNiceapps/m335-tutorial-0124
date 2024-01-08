import { Component, inject } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss',
})
export class MessagesComponent {
  messageService = inject(MessageService);
}
