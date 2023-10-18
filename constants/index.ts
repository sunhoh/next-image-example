export const PATH = {
    IMG_VS_NEXT_IMAGE: '/img-vs-next-image',
    NEXT_IMAGE_PROPS: '/next-image-props',
    IMAGE_TYPES: '/image-types',
  } as const;
  
  interface Page {
    href: string;
    title: string;
  }
  export const PAGES: Page[] = [
    {
      href: PATH.IMG_VS_NEXT_IMAGE,
      title: 'img vs next/image',
    },
    {
      href: PATH.NEXT_IMAGE_PROPS,
      title: 'next image props',
    },
    {
      href: PATH.IMAGE_TYPES,
      title: 'image types',
    }    
  ];
  