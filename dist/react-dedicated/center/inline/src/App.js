import { Center, Icon } from '@htmlplus/react';
const CenterInline = () => {
  return (
    <Center>
      <button>
        <Center inline>
          <Icon name="menu-2" size="2x"></Icon>
          &nbsp; Menu
        </Center>
      </button>
    </Center>
  );
};
export default CenterInline;
