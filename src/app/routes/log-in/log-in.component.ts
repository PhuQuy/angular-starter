import { Component, OnInit } from '@angular/core';
import { SeoService } from '@app/services/seo.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  providers: [SeoService]
})
export class LogInComponent implements OnInit {

    constructor(private seoService: SeoService) { }

  ngOnInit() {
      setTimeout(() => {
          this.seoService.generateTags({
              title: 'ahihi',
              description: 'ahihi',
              slug: 'feeds',
              keywords: 'ahihi'
          });
      }, 2000);
  }

}
