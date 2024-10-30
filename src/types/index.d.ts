export interface TPost {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    meta_title: string;
    nav_title: string;
    description: string;
    date: any;
    image: string;
    image_bg_color: string;
    show_cta: boolean;
    authors: string[];
    categories: string[];
    tags: string[];
    order: number;
    draft: boolean;
  };
  render: () => Promise<{ Content: any }>;
}

export interface THub {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    meta_title: string;
    nav_title: string;
    description: string;
    date: any;
    image: string;
    image_bg_color: string;
    banner_bg_color: string;
    show_cta: boolean;
    order: number;
    draft: boolean;
  };
  render: () => Promise<{ Content: any }>;
}

export interface TService {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    meta_title: string;
    nav_title: string;
    description: string;
    price: number;
    image: string;
    image_bg_color: string;
    banner_bg_color: string;
    order: number;
    buy_url: string;
  };
  render: () => Promise<{ Content: any }>;
}
