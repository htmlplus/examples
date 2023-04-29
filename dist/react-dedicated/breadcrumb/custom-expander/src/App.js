import { Breadcrumb, Center, Icon } from '@htmlplus/react';
const BreadcrumbCustomExpander = () => {
  return (
    <Center>
      <Breadcrumb separator="-" max={2} expanderText="Show more">
        <Icon slot="expander" name="chevron-compact-right"></Icon>
        <a href="#">HTMLPLUS</a>
        <a href="#">Core</a>
        <a href="#">UI Components</a>
        <a href="#">Breadcrumb</a>
      </Breadcrumb>
    </Center>
  );
};
export default BreadcrumbCustomExpander;
