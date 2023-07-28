type Props = {
  size?: number;
};

export default function Spacer({ size = 1 }: Props) {
  const formattedSize = size * 20;
  return <div style={{ height: formattedSize, width: formattedSize }} />;
}
