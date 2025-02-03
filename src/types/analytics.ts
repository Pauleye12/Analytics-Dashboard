export interface PageView {
  path: string;
  views: number;
  uniqueVisitors: number;
}

export interface Referrer {
  source: string;
  visitors: number;
  percentage: number;
}

export interface LocationData {
  country: string;
  visitors: number;
  percentage: number;
}

export interface TechnologyData {
  name: string;
  count: number;
  percentage: number;
}

export interface AnalyticsData {
  totalVisitors: number;
  totalPageViews: number;
  topPages: PageView[];
  topReferrers: Referrer[];
  locations: LocationData[];
  browsers: TechnologyData[];
  operatingSystems: TechnologyData[];
  devices: TechnologyData[];
}