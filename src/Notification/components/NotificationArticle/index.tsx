import BoxLayout from '@components/fundamentals/BoxLayout';
import AsyncBoundaryWithQuery from '@components/boundries/AsyncBoundaryWithQuery';
import NotificationList from '@/Notification/components/NotificationArticle/NotficationList';
import NotificationArticleSkeleton from '@/Notification/components/NotificationArticle/NotificationArticleSkeleton';

function NotificationArticle() {
  return (
    <BoxLayout title="학사공지" labelId="hufs-notifications">
      <AsyncBoundaryWithQuery pendingFallback={<NotificationArticleSkeleton />}>
        <NotificationList notificationsPerIndex={5} />
      </AsyncBoundaryWithQuery>
    </BoxLayout>
  );
}

export default NotificationArticle;
