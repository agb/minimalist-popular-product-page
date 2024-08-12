export type productDto =  {
  id: number;
  title: string;
  description: string;
  isAdvertising: boolean;
  votes: number;
  sales: number;
  creator: string;
  creatorAvatarSourceUrl: string;
  productsImages: productImages[];
};

export type productImages = {
  hexColorCode: string;
  src: string;
};
