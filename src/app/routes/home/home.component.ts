import { Component, OnInit } from '@angular/core';
import { SeoService } from '@app/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [SeoService]
})
export class HomeComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit() {
    this.seoService.generateTags({
        title: 'Feeds | Tin đăng mới nhất trên Hosiana',
        description: 'Cập nhật tin đăng bất động sản mới nhất, mua bán nhà đất, trao đổi nhà đất, dự án mới nhất, đại lý bất động sản, tin tức bất động sản, dịch vụ nhà cửa',
        slug: 'feeds',
        keywords: 'tin dang bat dong san, dai ly bat dong san, tin tuc bat dong san, dai ly bat dong san, dich vu nha cua'
    });
  }

}
