type props = {
  id: string;
  title: string;
  url: string;
  isSelected: boolean;
  onTrackSelected: (id: string) => void;
};

export function TrakItem({ id, title, url, isSelected, onTrackSelected }: props) {
  const select = {
    selected: 'flex flex-col mb-2 py-2 px-4 bg-gray-200 rounded-2xl last:mb-0 shadow-[0px_0px_0px_2px_red]',
    notSelected: 'flex flex-col mb-2 py-2 px-4 bg-gray-200 rounded-2xl last:mb-0',
  };

  return (
    <li className={isSelected ? `${select.selected}` : `${select.notSelected}`} onClick={() => onTrackSelected?.(id)}>
      <p className="mb-2.5 font-semibold">{title}</p>

      <audio src={url} className="list-item__plaer" controls></audio>
    </li>
  );
}
