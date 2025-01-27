export type templateType = {
  name: string;
  image: string;
  fileName: string;
  creator: {
    name: string;
    link: string;
  };
  code: string;
};

export type getTemplatesResType = {
  templates: templateType[];
  total: number;
  init: number;
  offset: number;
  filter: string;
};
