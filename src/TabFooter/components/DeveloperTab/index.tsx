import Spacer from '@components/fundamentals/Spacer';
import { Text } from '@components/fundamentals/Text';
import Introduce from './Introduce';
import Opinion from './Opinion';
import AppLink from './AppLink';

function DeveloperTab() {
  return (
    <>
      <Spacer height="size16" />
      <Introduce />
      <Spacer height="size32" />
      <Opinion />
      <Spacer height="size32" />
      <AppLink />
      <Spacer height="size16" />
      <Text size="size12">
        외대종강시계 {process.env.VERSION} © Max Jonghyuk Kim. 2022
      </Text>
    </>
  );
}

export default DeveloperTab;
