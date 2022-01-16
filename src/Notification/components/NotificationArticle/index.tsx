import BoxLayout from '@components/fundamentals/BoxLayout';
import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import NotificationList from '@/Notification/components/NotificationArticle/NotficationList';
import NotificationArticleSkeleton from '@/Notification/components/NotificationArticle/NotificationArticleSkeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function NotificationArticle() {
  return (
    <BoxLayout title="학사공지">
      <AsyncBoundaryWithQuery pendingFallback={<NotificationArticleSkeleton />}>
        <NotificationList />
      </AsyncBoundaryWithQuery>
    </BoxLayout>
  );
}

export default NotificationArticle;
