export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  iconName: 'Shirt' | 'Wind' | 'Sparkles' | 'Clock';
  isExpress: boolean;
  deliveryTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  avatar: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  iconName: 'Phone' | 'Truck' | 'Droplet' | 'CheckCircle';
}

export interface ServiceArea {
  name: string;
  zip: string;
}