import BoxLayout from '@components/fundamentals/BoxLayout';
import TimerContent from '@/Timer/components/TimerArticle/TimerContent';

function TimerArticle() {
  return (
    <BoxLayout title="타이머" labelId="timer">
      <TimerContent />
    </BoxLayout>
  );
}

export default TimerArticle;
