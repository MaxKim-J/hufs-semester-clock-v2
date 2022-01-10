import DefaultBookmarkList from '@/BookMark/components/BookmarkSection/DefaultBookmarkList';
import CustomBookmarkList from '@/BookMark/components/BookmarkSection/CustomBookmarkList';
import Spacer from '@components/fundamentals/Spacer';

function BookMarkSection() {
  return (
    <section>
      <DefaultBookmarkList />
      <Spacer />
      <CustomBookmarkList />
    </section>
  );
}

export default BookMarkSection;
