import Spacer from '@components/fundamentals/Spacer';
import { Text } from '@components/fundamentals/Text';
import Introduce from './Introduce';
import Opinion from './Opinion';
import AppLink from './AppLink';

function DeveloperTab() {
  return (
    <>
      <Spacer height="normal" />
      <Introduce />
      <Spacer height="large" />
      <Opinion />
      <Spacer height="large" />
      <AppLink />
      <Spacer height="normal" />
      <Text size="xSmall">
        외대종강시계 {process.env.VERSION} © Max Jonghyuk Kim. 2022
      </Text>
    </>
  );
}

export default DeveloperTab;
