import { Injectable, Inject } from '@angular/core';
import { Meta, Title, DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SeoService {

    constructor(private meta: Meta, private titleService: Title, @Inject(DOCUMENT) private doc) { }
    generateTags(config) {
        config = Object.assign({
            title: 'Hosiana | Tin đăng bất động sản, mua bán nhà đất, cho thuê nhà đất',
            description: 'Kênh bất động sản hàng đầu tại Việt Nam: mua bán nhà đất, cho thuê nhà đất, trao đổi nhà đất, dự án, căn hộ, căn hộ, biệt thự, villa, chung cư, văn phòng',
            image: 'https://hosiana.vn/assets/sliders/29-03-2018-06-59-30.jpg',
            slug: '',
            keywords: ''
        }, config);

        if(!config.image) {
            config.image = 'https://hosiana.vn/assets/sliders/29-03-2018-06-59-30.jpg';
        }
        this.meta.updateTag({ name: 'slug', content: config.slug });
        this.meta.updateTag({ name: 'image', content: config.image });
        this.meta.updateTag({ name: 'description', content: config.description });
        this.meta.updateTag({ name: 'keywords', content: config.keywords });
        this.meta.updateTag({ name: 'title', content: config.title });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@hosiana' });
        this.meta.updateTag({ name: 'twitter:title', content: config.title })
        this.meta.updateTag({ name: 'twitter:description', content: config.description });
        this.meta.updateTag({ name: 'twitter:image', content: config.image });

        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Hosiana | Tin đăng bất động sản, mua bán nhà đất, cho thuê nhà đất' });
        this.meta.updateTag({ property: 'og:title', content: config.title });
        this.meta.updateTag({ property: 'og:description', content: config.description });
        this.meta.updateTag({ property: 'og:image', content: config.image });

        this.titleService.setTitle(config.title);
        this.setCanonical();

    }

    setCanonical() {
        let link: HTMLLinkElement = this.doc.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.doc.head.appendChild(link);

        let docURL = this.doc.URL;
        let url = docURL.slice(0, docURL.lastIndexOf('?') > 0 ? docURL.lastIndexOf('?') : docURL.length);

        link.setAttribute('href', url);
    }

}
