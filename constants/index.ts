export const PATH = {
    IMG_VS_NEXT_IMAGE: '/tag',
    NEXT_IMAGE_PROPS: '/next-image-props',
  } as const;
  
  interface Page {
    href: string;
    title: string;
  }
  export const PAGES: Page[] = [
    {
      href: PATH.IMG_VS_NEXT_IMAGE,
      title: 'Tag',
    },
    {
      href: PATH.NEXT_IMAGE_PROPS,
      title: 'next/image props',
    },
  ];
  