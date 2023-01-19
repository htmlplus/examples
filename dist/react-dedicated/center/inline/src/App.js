import { Center, Icon } from '@htmlplus/react';
const CenterInline = () => {
  return (
    <Center>
      <button>
        <Center inline>
          <Icon size="2x">menu</Icon>
          &nbsp; Menu
        </Center>
      </button>
    </Center>
  );
};
export default CenterInline;
