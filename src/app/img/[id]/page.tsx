interface ImgModalProps {
  params: { id: string };
}

export default function ImgPage({ params: { id: imgId } }: ImgModalProps) {
  return <div>{imgId}</div>;
}
