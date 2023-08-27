import Img from './ui/img';

export const Images = {
  header: (props: any) => (
    <Img {...props} src="/public/assets/images/header.png" />
  ),
  hr: (props: any) => (
    <Img {...props} className="h-20 " src="/public/assets/images/hr.svg" />
  ),
};
