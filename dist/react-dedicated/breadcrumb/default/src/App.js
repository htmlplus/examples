import { Breadcrumb, Center } from '@htmlplus/react';
const BreadcrumbDefault = () => {
  return (
    <Center>
      <Breadcrumb separator="/">
        <a href="#">HTMLPLUS</a>
        <a href="#">Core</a>
        <a href="#">UI Components</a>
        <span>Breadcrumb</span>
      </Breadcrumb>
    </Center>
  );
};
export default BreadcrumbDefault;
