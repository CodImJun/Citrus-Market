export type ImagePreviewListProps = {
  images: { file: File; imageUrl: string }[];
  onRemoveImage: (index: number) => void;
};
