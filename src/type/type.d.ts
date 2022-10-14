export interface Article {
  _id: string;
  _createTime: string;
  _updateTime: string;
  title: string;
  content: string;
  cover?: string;
  tags?: string[];
  categories?: string[];
  desc?: string;
  author?: string;
}