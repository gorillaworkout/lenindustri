type Specification = {
  label: string;
  value: string;
};

export type ProductProps = {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  videoUrl: string;
  features: string[];
  specifications:Specification[]
  storyline: {
    title: string;
    subtitle: string;
    chapters: {
      title: string;
      content: string;
    }[];
    conclusion: string;
  };
};
