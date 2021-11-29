import { Text } from './Text';
import Button from './Button';

function Tab() {
  return (
    <>
      <Text color="black">ddd</Text>
      <Button
        type="button"
        onClick={() => {
          console.log('ondd');
        }}
      >
        dd
      </Button>
    </>
  );
}

export default Tab;
