import BoxLayout from '@components/fundamentals/BoxLayout';
import TodayMenuContent from '@/TodayMenu/components/TodayMenuArticle/TodayMenuContent';

function TodayMenuArticle() {
  return (
    <BoxLayout title="오늘 뭐먹지">
      <TodayMenuContent />
    </BoxLayout>
  );
}

export default TodayMenuArticle;
