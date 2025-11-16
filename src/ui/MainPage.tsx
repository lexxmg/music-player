import { Footer } from './Footer';
import { Header } from './Header';
import { PageTitle } from './PageTitle';
import { SidebarMenu } from './SidebarMenu';
import { TrackDetail } from './TrackDetail';
import { TrackList } from './TrackList';
import { useTrackSelection } from '../bll/useTrackSelection.tsx';

export function MainPage() {
  const { trackReset, trackId, onTrackSelected } = useTrackSelection();

  return (
    <div className="pt-5">
      <Header />
      <SidebarMenu />
      <PageTitle />
      <div className="fixd flex gap-5">
        <TrackList trackReset={trackReset} trackId={trackId} onTrackSelected={onTrackSelected} />
        <TrackDetail trackId={trackId} />
      </div>
      <Footer />
    </div>
  );
}
